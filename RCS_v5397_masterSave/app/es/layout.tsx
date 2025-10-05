import '../globals.css';
import Header from '../../components/Header';
import ShayAssistant from '../../components/ShayAssistant';
import ShayButton from '../../components/ShayButton';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <div className="sr-only" aria-hidden="true"><ShayAssistant /></div>
        <ShayButton />
      </body>
    </html>
  );
}
