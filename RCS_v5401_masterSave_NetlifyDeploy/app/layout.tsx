
import './globals.css';
import ShayChat from '../components/ShayChat';

export const metadata = {
  title: 'Resilient Commercial Solutions',
  description: 'Nationwide janitorial, post-construction, day porter & more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="rcs-header">
          <div className="container">
            <h1>Resilient Commercial Solutions</h1>
            <p>Trusted partner for facility services nationwide.</p>
          </div>
        </header>
        <main className="container">{children}</main>
        <ShayChat />
      </body>
    </html>
  );
}
