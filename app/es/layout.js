import ShayButton from '@/components/ShayButton';
import ServiceCard from '@/components/ServiceCard';
export const metadata = {
  title: 'Resilient Commercial Solutions | Servicios de Instalaciones',
  description: 'Servicios de limpieza, restauración y mecánica móvil con estándares Fortune‑500 y atención de pequeña empresa.',
};
export default function RootLayout({ children }){
  const jsonLd={ '@context':'https://schema.org','@type':'LocalBusiness', name:'Resilient Commercial Solutions', url:'https://resilient23.netlify.app/es', telephone:'+1-813-555-0199', areaServed:'Estados Unidos' };
  return (<html lang="es"><head><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} /></head><body>{children}</body></html>);
}
