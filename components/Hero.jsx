'use client';
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function Hero({ locale='en' }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('lead');
  const t = (en, es) => locale==='es' ? es : en;

  return (
    <section className="section bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rcsgray to-rcsblack">
      <div className="container text-center">
        <h1 className="h1 mb-4">{t('The Future of Facility Services — Built on Excellence, Powered by People.','El futuro de los servicios de instalaciones — Construido con excelencia, impulsado por personas.')}</h1>
        <p className="sub max-w-3xl mx-auto mb-8">
          {t('Resilient Commercial Solutions delivers elite janitorial, restoration, and mobile mechanic services across multiple states — with Fortune-500 standards and small-business care.',
             'Resilient Commercial Solutions ofrece servicios de limpieza, restauración y mecánica móvil en múltiples estados, con estándares Fortune‑500 y la atención de una empresa local.')}
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="btn btn-primary" onClick={() => { setMode('lead'); setOpen(true); }}>{t('Get a Quote','Obtener Cotización')}</button>
          <button className="btn btn-outline" onClick={() => { setMode('vendor'); setOpen(true); }}>{t('Join Our Vendor Network','Únete a Nuestra Red de Proveedores')}</button>
        </div>
      </div>
      <ContactModal open={open} onClose={() => setOpen(false)} mode={mode} locale={locale} />
    </section>
  );
}
