'use client';
export default function Hero({ locale='en' }){
  const t = locale === 'es' ? {
    title: 'El futuro de los servicios de instalaciones — Construido sobre la excelencia, impulsado por la gente.',
    sub: 'Resilient Commercial Solutions ofrece servicios de limpieza, restauración y mecánica móvil con estándares Fortune-500 y atención de pequeña empresa.',
    quote: 'Obtener cotización',
    vendor: 'Únete a la red de proveedores'
  } : {
    title: 'The Future of Facility Services — Built on Excellence, Powered by People.',
    sub: 'Resilient Commercial Solutions delivers elite janitorial, restoration, and mobile mechanic services with Fortune-500 standards and small-business care.',
    quote: 'Get a Quote',
    vendor: 'Join Our Vendor Network'
  };
  function open(mode){ window.dispatchEvent(new CustomEvent('shay:open', { detail:{ mode } })); }
  return (
    <section className="section text-center py-20">
      <h1 className="text-3xl md:text-5xl font-extrabold">{t.title}</h1>
      <p className="max-w-3xl mx-auto mt-4 opacity-80">{t.sub}</p>
      <div className="flex gap-3 justify-center mt-8">
        <button onClick={()=>open('lead')} className="btn btn-primary">{t.quote}</button>
        <a onClick={()=>open('vendor')} className="btn btn-outline" href="#">{t.vendor}</a>
      </div>
    </section>
  );
}
