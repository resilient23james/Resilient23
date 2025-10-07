'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/services/janitorial', label: 'Janitorial & Facility' },
  { href: '/services/specialty', label: 'Specialty Facility' },
  { href: '/services/restoration', label: 'Restoration & Rehab' },
  { href: '/services/mechanic', label: 'Fleet & Mobile Mechanic' },
  { href: '/government', label: 'Government' },
  { href: '/industries', label: 'Industries' },
  { href: '/technology', label: 'Technology' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/client-portal', label: 'Client Portal' },
  { href: '/vendor-portal', label: 'Vendor Portal' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  // Keep "Services" active for any nested services route
  if (href === '/services') return pathname === '/services' || pathname.startsWith('/services/');
  // Exact or prefix match for other sections
  return pathname === href || pathname.startsWith(href + '/');
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className="w-full sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="text-white font-semibold tracking-wide">
            RCS
          </Link>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded border border-white/20 text-gray-200 hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              {open ? (
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 11-1.414 1.414L12 12l-4.361 4.361a1 1 0 11-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z" clipRule="evenodd" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex flex-wrap gap-4 text-sm">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={active ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile menu (collapsible) */}
        <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={
                      'block w-full px-3 py-2 rounded ' +
                      (active ? 'bg-white/10 text-white font-semibold' : 'text-gray-300 hover:text-white')
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
