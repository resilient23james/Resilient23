'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopBar({ phone=process.env.SITE_PHONE || '+1-813-555-0199' }) {
  const pathname = usePathname();
  const isEs = pathname?.startsWith('/es');
  const toggleHref = isEs ? pathname.replace('/es', '') || '/' : '/es' + (pathname === '/' ? '' : pathname);
  return (
    <div className="topbar">
      <div className="container flex items-center justify-between py-2 text-sm">
        <a href={`tel:${phone}`} className="opacity-90 hover:opacity-100">📞 {phone}</a>
        <Link href={toggleHref} className="btn btn-outline px-3 py-1">{isEs ? 'EN' : 'ES'}</Link>
      </div>
    </div>
  );
}
