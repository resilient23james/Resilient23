import Link from 'next/link';
export default function Hero({es=false}){
  const h = es ? 'El Futuro de los Servicios de Instalaciones — Construido con Excelencia, Impulsado por la Gente.' : 'The Future of Facility Services — Built on Excellence, Powered by People.';
  const q = es ? 'Obtener Cotización' : 'Get a Quote';
  const v = es ? 'Unirse a Red de Proveedores' : 'Join Vendor Network';
  return <section className="section container"><h1 className="h1">{h}</h1><p className="sub mt-4">Elite janitorial, restoration, and mobile mechanic services with Fortune-500 standards and small-business care.</p><div className="mt-6 flex gap-4"><Link href="/quote" className="btn btn-primary">{q}</Link><Link href="/vendor-signup" className="btn btn-outline">{v}</Link></div></section>;
}
