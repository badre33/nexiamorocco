import { ReactNode } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Inbox,
  FolderOpen,
  Users,
  FileText,
  LogOut,
  ExternalLink,
  Linkedin,
} from 'lucide-react';

interface BackOfficeLayoutProps {
  title: string;
  children: ReactNode;
}

export default function BackOfficeLayout({ title, children }: BackOfficeLayoutProps) {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth/login', { replace: true });
  };

  const isStaff = profile?.role === 'admin' || profile?.role === 'collaborator';
  const isAdmin = profile?.role === 'admin';
  const isClient = profile?.role === 'client';

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-nexia-secondary/15 text-nexia-primary'
        : 'text-gray-700 hover:bg-gray-100 hover:text-nexia-primary'
    }`;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="px-6 py-5 border-b border-gray-200">
          <Link to="/" className="block">
            <h1 className="text-lg font-bold text-nexia-primary leading-tight">
              Nexia Fiducia
            </h1>
            <p className="text-xs text-gray-500">Espace privé</p>
          </Link>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {isStaff && (
            <>
              <div className="px-3 pt-2 pb-1 text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                Administration
              </div>
              <NavLink to="/admin" end className={navLinkClass}>
                <LayoutDashboard className="w-4 h-4" /> Tableau de bord
              </NavLink>
              <NavLink to="/admin/contacts" className={navLinkClass}>
                <Inbox className="w-4 h-4" /> Demandes de contact
              </NavLink>
              <NavLink to="/admin/linkedin" className={navLinkClass}>
                <Linkedin className="w-4 h-4" /> Posts LinkedIn
              </NavLink>
              <NavLink to="/collaborateurs" className={navLinkClass}>
                <FolderOpen className="w-4 h-4" /> Espace collaborateurs
              </NavLink>
              {isAdmin && (
                <NavLink to="/admin/users" className={navLinkClass}>
                  <Users className="w-4 h-4" /> Utilisateurs
                </NavLink>
              )}
            </>
          )}

          {isClient && (
            <>
              <div className="px-3 pt-2 pb-1 text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                Mon espace
              </div>
              <NavLink to="/portail-client" end className={navLinkClass}>
                <FileText className="w-4 h-4" /> Mes documents
              </NavLink>
            </>
          )}

          <div className="pt-4">
            <a
              href="/"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-100"
            >
              <ExternalLink className="w-4 h-4" /> Voir le site public
            </a>
          </div>
        </nav>

        <div className="border-t border-gray-200 px-3 py-4">
          {profile && (
            <div className="px-2 pb-3">
              <p className="text-sm font-medium text-gray-900 truncate">
                {profile.full_name ?? profile.email}
              </p>
              <p className="text-xs text-gray-500 truncate">{profile.email}</p>
              <span className="inline-block mt-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-nexia-secondary/15 text-nexia-primary font-semibold">
                {profile.role}
              </span>
            </div>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={handleSignOut}
            className="w-full justify-start"
          >
            <LogOut className="w-4 h-4 mr-2" /> Déconnexion
          </Button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-x-hidden">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
