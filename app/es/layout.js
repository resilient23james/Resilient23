import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShayAssistant from '@/components/ShayAssistant';

export const metadata = {
  title: 'Resilient Commercial Solutions',
  description: 'El futuro de los servicios para instalaciones — Construido con excelencia, impulsado por la gente.'
};

export default function RootLayout({ children }) {
  const schema = {
    "@context":"https://schema.org",
    "@type":"LocalBusiness",
    "name":"Resilient Commercial Solutions",
    "address":{"@type":"PostalAddress","addressCountry":"US"},
    "telephone":"+1-813-486-8195"
  };
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <ShayAssistant />
      </body>
    </html>
  );
}
