import '@/styles/globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModalBridge from '@/components/ModalBridge';
import ShayAssistant from '@/components/ShayAssistant';

export const metadata = {
  openGraph: {
    type: 'website',
    siteName: 'Resilient Commercial Solutions',
    title: 'Resilient Commercial Solutions',
    description: 'Integrated janitorial, restoration, and mobile mechanic services with rapid response and measurable quality.',
    url: '/',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'Resilient Commercial Solutions' }
    ]
  },

  icons: { icon: "/favicon.ico" },
  metadataBase: new URL('https://resilient23.netlify.app'),
  title: 'Resilient Commercial Solutions',
  description: 'Janitorial, restoration, and mobile mechanic services across Florida.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"LocalBusiness","name":"Resilient Commercial Solutions","address":{"@type":"PostalAddress","addressCountry":"US"}}`}} />

      <link rel="manifest" href="/manifest.json"/>

      </head>
      <body>
        <TopBar/>
        <Header/>
        {children}
        <Footer/>
        <ModalBridge/>
        <ShayAssistant/>
      </body>
    </html>
  );
}
