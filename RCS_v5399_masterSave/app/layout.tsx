import '../globals.css';
// RCS_v5399_masterSave/app/layout.tsx
import '../globals.css'; // or './globals.css' if you moved the file per Option A
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
