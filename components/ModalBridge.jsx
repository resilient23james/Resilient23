'use client';
import { useEffect, useState } from 'react';
import ContactModal from './ContactModal';
export default function ModalBridge({ locale='en' }){
  const [open,setOpen]=useState(false);
  const [mode,setMode]=useState('lead');
  useEffect(()=>{
    function handler(e){ setMode(e.detail?.mode || 'lead'); setOpen(true); }
    window.addEventListener('shay:open', handler);
    return ()=>window.removeEventListener('shay:open', handler);
  },[]);
  return <ContactModal open={open} onClose={()=>setOpen(false)} mode={mode} locale={locale}
    presetService={mode==='restoration'?'restoration':(mode==='mechanic'?'mechanic':undefined)} />;
}
