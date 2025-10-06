'use client';
import { useEffect, useState } from 'react';

export default function ContactModal({ open, onClose, mode='lead', locale='en', presetService }) {
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState(false);
  const t = (en, es) => locale==='es' ? es : en;
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => (document.body.style.overflow=''); }, [open]);
  if (!open) return null;

  async function submit(e) {
    e.preventDefault();
    setSubmitting(true);
    setOk(false);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    data.type = mode;
    if (presetService) data.service = presetService;
    try {
      const res = await fetch('/.netlify/functions/sendLead', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
      if (res.ok) setOk(true);
    } catch {}
    setSubmitting(false);
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4">
      <div className="w-full max-w-xl card relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-white/70 hover:text-white">✕</button>
        <h3 className="h2 mb-2">
          {mode==='vendor' ? t('Vendor Onboarding','Registro de Proveedor') :
           mode==='restoration' ? t('Emergency Help Now','Ayuda de Emergencia') :
           mode==='mechanic' ? t('Book Mechanic Service','Reservar Servicio de Mecánica') :
           t('Request a Quote','Solicitar Cotización')}
        </h3>
        {ok ? (
          <div className="p-4 rounded bg-green-600/20 border border-green-600/40">{t('Thanks! Your submission has been received.','¡Gracias! Hemos recibido tu solicitud.')}</div>
        ) : (
          <form onSubmit={submit} className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="card" name="name" placeholder={t('Full Name','Nombre Completo')} required />
              <input className="card" name="email" type="email" placeholder="Email" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="card" name="phone" placeholder={t('Phone','Teléfono')} required />
              <input className="card" name="company" placeholder={t('Company','Empresa')} />
            </div>
            <input className="card" name="location" placeholder={t('City/State','Ciudad/Estado')} />
            <select className="card" name="service" defaultValue={presetService || 'janitorial'}>
              <option value="janitorial">{t('Janitorial','Limpieza')}</option>
              <option value="restoration">{t('Rehab & Restoration','Rehabilitación y Restauración')}</option>
              <option value="mechanic">{t('Mobile Mechanic','Mecánica Móvil')}</option>
              <option value="other">{t('Other','Otro')}</option>
            </select>
            <textarea className="card" name="message" placeholder={t('Describe your needs...','Describe tus necesidades...')} rows={4} />
            <button className="btn btn-primary" disabled={submitting}>{submitting ? t('Submitting...','Enviando...') : t('Submit','Enviar')}</button>
          </form>
        )}
      </div>
    </div>
  );
}
