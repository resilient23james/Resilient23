import '../globals.css';
import Header from '@components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resilient Commercial Solutions',
  description: 'Facility services you can trust.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
