import './globals.css';

export const metadata = {
  title: 'Resilient Commercial Solutions | Facility Services',
  description: 'Elite janitorial, restoration, and mobile mechanic services with Fortune-500 standards and small-business care.',
};

export default function RootLayout({ children }){
  const jsonLd = {
    '@context':'https://schema.org','@type':'LocalBusiness',
    name:'Resilient Commercial Solutions', url:'https://resilient23.netlify.app',
    telephone:'+1-813-555-0199', areaServed:'United States',
    address:{'@type':'PostalAddress', addressLocality:'Tampa Bay Area', addressRegion:'FL', addressCountry:'US'}
  };
  return (<html lang="en"><head>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
  </head><body>{children}</body></html>);
}
