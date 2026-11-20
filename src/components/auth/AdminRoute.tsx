import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { adminApi } from '@/lib/adminApi';

export default function AdminRoute({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [state, setState] = useState<'loading' | 'ok' | 'denied'>('loading');

  useEffect(() => {
    adminApi.me().then(() => setState('ok')).catch(() => setState('denied'));
  }, []);

  if (state === 'loading') {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Chargement…</div>;
  }
  if (state === 'denied') return <Navigate to="/admin/login" state={{ from: location }} replace />;
  return <>{children}</>;
}
