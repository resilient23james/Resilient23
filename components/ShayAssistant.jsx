'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function ShayAssistant(){
  const [visible,setVisible]=useState(false);
  const pathname = usePathname();
  const isEs = pathname?.startsWith('/es');
  const t = (en, es) => isEs ? es : en;

  useEffect(()=>{
    const onIdle=()=>setVisible(true);
    if ('requestIdleCallback' in window) requestIdleCallback(onIdle); else setTimeout(onIdle, 1200);
  },[]);

  if(!visible) return null;

  function go(mode){
    // Create an anchor to open the correct modal via a simple hash convention,
    // or navigate to pages with funnels as needed.
    const event = new CustomEvent('shay:open', { detail: { mode } });
    window.dispatchEvent(event);
  }

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-2">
      <button className="rounded-full border border-white/10 bg-rcsgray p-2" title={t('Open Shay','Abrir Shay')} onClick={()=>go('lead')}>
        <Image src="/shay.png" width={56} height={56} alt="Shay Assistant" />
      </button>
      <div className="card text-sm">
        <p className="mb-2">{t('How can I help?','¿Cómo puedo ayudarte?')}</p>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={()=>go('lead')} className="btn btn-outline">{t('Quote','Cotización')}</button>
          <button onClick={()=>go('vendor')} className="btn btn-outline">{t('Vendor','Proveedor')}</button>
          <button onClick={()=>go('restoration')} className="btn btn-outline">{t('Restoration','Restauración')}</button>
          <button onClick={()=>go('mechanic')} className="btn btn-outline">{t('Mechanic','Mecánica')}</button>
        </div>
      </div>
    </div>
  );
}
