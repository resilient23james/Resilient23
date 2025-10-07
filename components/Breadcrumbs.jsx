'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const titles = {
  'about': 'About',
  'services': 'Services',
  'janitorial': 'Janitorial & Facility',
  'specialty': 'Specialty Facility',
  'restoration': 'Restoration & Rehab',
  'mechanic': 'Fleet & Mobile Mechanic',
  'government': 'Government',
  'industries': 'Industries',
  'technology': 'Technology',
  'sustainability': 'Sustainability',
  'client-portal': 'Client Portal',
  'vendor-portal': 'Vendor Portal',
  'testimonials': 'Testimonials',
  'contact': 'Contact'
};

export default function Breadcrumbs() {
  const pathname = usePathname() || '/';
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return null;

  const crumbs = [];
  let href = '';
  crumbs.push({ name: 'Home', href: '/' });

  for (const p of parts) {
    href += '/' + p;
    crumbs.push({ name: titles[p] || p, href });
  }

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 mt-4 mb-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-gray-400">
        {crumbs.map((c, idx) => (
          <li key={c.href} className="flex items-center gap-2">
            {idx > 0 && <span className="opacity-50">/</span>}
            {idx === crumbs.length - 1 ? (
              <span className="text-gray-200">{c.name}</span>
            ) : (
              <Link className="hover:text-white" href={c.href}>{c.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
