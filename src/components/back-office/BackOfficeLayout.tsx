import { ReactNode } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { adminApi } from '@/lib/adminApi';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Inbox, LogOut, ExternalLink, Linkedin } from 'lucide-react';

interface BackOfficeLayoutProps {
  title: string;
  children: ReactNode;
}

export default function BackOfficeLayout({ title, children }: BackOfficeLayoutProps) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await adminApi.logout().catch(() => undefined);
    navigate('/admin/login', { replace: true });
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive ? 'bg-nexia-secondary/15 text-nexia-primary' : 'text-gray-700 hover:bg-gray-100 hover:text-nexia-primary'
    }`;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="px-6 py-5 border-b border-gray-200">
          <Link to="/" className="block">
            <h1 className="text-lg font-bold text-nexia-primary leading-tight">Nexia Morocco</h1>
            <p className="text-xs text-gray-500">Back-office</p>
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <NavLink to="/admin" end className={navLinkClass}>
            <LayoutDashboard className="w-4 h-4" /> Tableau de bord
          </NavLink>
          <NavLink to="/admin/contacts" className={navLinkClass}>
            <Inbox className="w-4 h-4" /> Leads
          </NavLink>
          <NavLink to="/admin/linkedin" className={navLinkClass}>
            <Linkedin className="w-4 h-4" /> Posts LinkedIn
          </NavLink>
          <div className="pt-4">
            <a href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-100">
              <ExternalLink className="w-4 h-4" /> Voir le site public
            </a>
          </div>
        </nav>
        <div className="border-t border-gray-200 px-3 py-4">
          <Button variant="outline" size="sm" onClick={handleSignOut} className="w-full justify-start">
            <LogOut className="w-4 h-4 mr-2" /> Déconnexion
          </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
