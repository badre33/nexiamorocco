-- =====================================================================
-- Nexia Fiducia Maroc — Back-office schema (initial migration)
-- =====================================================================
-- Run this once in Supabase SQL Editor, or via the Supabase CLI:
--   supabase db push
-- ---------------------------------------------------------------------

-- 1. ROLES ENUM ------------------------------------------------------
create type public.user_role as enum ('admin', 'collaborator', 'client');

-- 2. PROFILES TABLE (one row per auth.users) -------------------------
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  role public.user_role not null default 'client',
  company text,
  phone text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index profiles_role_idx on public.profiles(role);

-- 3. CONTACT REQUESTS (form submissions from public website) --------
create table public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  company text,
  country_code text,
  phone text,
  service text,
  message text not null,
  status text not null default 'new', -- new | in_review | replied | archived
  assigned_to uuid references public.profiles(id) on delete set null,
  notes text,
  created_at timestamptz not null default now()
);

create index contact_requests_status_idx on public.contact_requests(status);
create index contact_requests_created_at_idx on public.contact_requests(created_at desc);

-- 4. INTERNAL DOCUMENTS (collaborator space) ------------------------
create table public.internal_documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text, -- e.g. 'procedures', 'rh', 'modeles', 'annonces'
  file_path text, -- path in Supabase Storage bucket 'internal-documents'
  external_url text,
  uploaded_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index internal_documents_category_idx on public.internal_documents(category);

-- 5. CLIENT FILES (client portal — documents per client) ------------
create table public.client_files (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  description text,
  file_path text, -- path in Supabase Storage bucket 'client-files'
  file_type text, -- 'invoice', 'report', 'contract', 'other'
  uploaded_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create index client_files_client_id_idx on public.client_files(client_id);

-- =====================================================================
-- AUTO-PROFILE CREATION + DOMAIN-RESTRICTED ROLE ASSIGNMENT
-- =====================================================================
-- When a user signs up:
--   * If email ends with @nexiafiducia.ma → role 'collaborator'
--   * Otherwise → role 'client'
-- The 'admin' role is granted manually by a database admin.
-- ---------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  assigned_role public.user_role;
begin
  if new.email ilike '%@nexiafiducia.ma' then
    assigned_role := 'collaborator';
  else
    assigned_role := 'client';
  end if;

  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    assigned_role
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- =====================================================================
-- ROW-LEVEL SECURITY (RLS)
-- =====================================================================

alter table public.profiles enable row level security;
alter table public.contact_requests enable row level security;
alter table public.internal_documents enable row level security;
alter table public.client_files enable row level security;

-- Helper: get the role of the current user from JWT
create or replace function public.current_user_role()
returns public.user_role
language sql
stable
security definer
set search_path = public
as $$
  select role from public.profiles where id = auth.uid();
$$;

-- ---- PROFILES policies ----
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Admins can view all profiles"
  on public.profiles for select
  using (public.current_user_role() = 'admin');

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Admins can update any profile"
  on public.profiles for update
  using (public.current_user_role() = 'admin');

-- ---- CONTACT REQUESTS policies ----
-- Anyone (anon included) can INSERT a contact request from the public form
create policy "Anyone can submit a contact request"
  on public.contact_requests for insert
  with check (true);

-- Only collaborators + admins can read / update contact requests
create policy "Staff can view contact requests"
  on public.contact_requests for select
  using (public.current_user_role() in ('admin', 'collaborator'));

create policy "Staff can update contact requests"
  on public.contact_requests for update
  using (public.current_user_role() in ('admin', 'collaborator'));

create policy "Admins can delete contact requests"
  on public.contact_requests for delete
  using (public.current_user_role() = 'admin');

-- ---- INTERNAL DOCUMENTS policies (collaborators + admins) ----
create policy "Staff can view internal documents"
  on public.internal_documents for select
  using (public.current_user_role() in ('admin', 'collaborator'));

create policy "Staff can insert internal documents"
  on public.internal_documents for insert
  with check (public.current_user_role() in ('admin', 'collaborator'));

create policy "Staff can update internal documents"
  on public.internal_documents for update
  using (public.current_user_role() in ('admin', 'collaborator'));

create policy "Admins can delete internal documents"
  on public.internal_documents for delete
  using (public.current_user_role() = 'admin');

-- ---- CLIENT FILES policies ----
-- Client sees only their own files; staff sees everything
create policy "Clients see their own files"
  on public.client_files for select
  using (client_id = auth.uid() or public.current_user_role() in ('admin', 'collaborator'));

create policy "Staff can insert client files"
  on public.client_files for insert
  with check (public.current_user_role() in ('admin', 'collaborator'));

create policy "Staff can update client files"
  on public.client_files for update
  using (public.current_user_role() in ('admin', 'collaborator'));

create policy "Admins can delete client files"
  on public.client_files for delete
  using (public.current_user_role() = 'admin');

-- 6. LINKEDIN POSTS (curated public-feed posts shown on the website) -
create table public.linkedin_posts (
  id uuid primary key default gen_random_uuid(),
  post_id text not null,            -- e.g. '7394411157484097537'
  post_type text not null default 'activity',  -- activity | ugcPost | share
  height integer not null default 600,
  display_order integer not null default 0,
  is_visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index linkedin_posts_visible_order_idx
  on public.linkedin_posts(is_visible, display_order);

alter table public.linkedin_posts enable row level security;

-- Anyone (anon included) can read visible posts (public website displays them)
create policy "Anyone can read visible LinkedIn posts"
  on public.linkedin_posts for select
  using (is_visible = true);

create policy "Staff can read all LinkedIn posts"
  on public.linkedin_posts for select
  using (public.current_user_role() in ('admin', 'collaborator'));

create policy "Staff can manage LinkedIn posts"
  on public.linkedin_posts for all
  using (public.current_user_role() in ('admin', 'collaborator'));

-- =====================================================================
-- AUTO updated_at
-- =====================================================================
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger profiles_touch before update on public.profiles
  for each row execute function public.touch_updated_at();

create trigger internal_documents_touch before update on public.internal_documents
  for each row execute function public.touch_updated_at();

create trigger linkedin_posts_touch before update on public.linkedin_posts
  for each row execute function public.touch_updated_at();
