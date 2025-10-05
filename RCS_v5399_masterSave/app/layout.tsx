import './globals.css';
import Header from '@components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resilient Commercial Solutions LLC – Facility Services You Can Trust',
  description: 'Dependable, compliant, high‑quality cleaning and facility care.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body><Header />{children}<footer className="container">© {new Date().getFullYear()} Resilient Commercial Solutions LLC</footer></body></html>
  );
}
