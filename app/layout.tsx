import './globals.css';
import type { Metadata } from 'next';
import ShayChat from '../components/ShayChat';

export const metadata: Metadata = {
  title: 'Resilient Commercial Solutions',
  description: 'Facility services, mobile mechanic, and restoration — one team, total resilience.',
  openGraph: {
    title: 'Resilient Commercial Solutions',
    description: 'Facility services, mobile mechanic, and restoration.',
    url: 'https://resilient23.netlify.app',
    type: 'website'
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="rcs-header">
          <div className="container">
            <h1 className="text-2xl md:text-3xl font-extrabold">Resilient Commercial Solutions</h1>
            <p className="text-sm" style={{color:'#cbd5e1'}}>One team. Three divisions. Total resilience. <a href="/es" style={{marginLeft:12, textDecoration:'underline'}}>ES</a></p>
          </div>
        </header>
        <div className="container">{children}</div>
        <ShayChat />
      </body>
    </html>
  );
}