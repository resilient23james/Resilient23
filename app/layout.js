import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import ShayAssistant from '@/components/ShayAssistant';

export const metadata = {
  title: 'Resilient Commercial Solutions',
  description: 'Elite janitorial, restoration, and mobile mechanic services.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={__html: `{"@context":"https://schema.org","@type":"LocalBusiness","name":"Resilient Commercial Solutions","address":{"@type":"PostalAddress","addressCountry":"US"}}`} />
        <link rel="manifest" href="/manifest.json"/>
      </head>
      <body>
        <TopBar/>
        <Header/>
        <main className="min-h-[60vh]">{children}</main>
        <Footer/>
        <ContactModal/>
        <ShayAssistant/>
      </body>
    </html>
  );
}
