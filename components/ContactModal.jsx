'use client';
import { useState, useEffect } from 'react';

export default function ContactModal(){
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('lead');

  useEffect(()=>{
    const onOpen = (e)=>{ setMode(e.detail?.mode || 'lead'); setOpen(true); };
    window.addEventListener('shay:open', onOpen);
    return ()=> window.removeEventListener('shay:open', onOpen);
  },[]);

  if(!open) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={()=>setOpen(false)}>
      <div className="bg-gray p-6 rounded-lg w-full max-w-lg" onClick={e=>e.stopPropagation()}>
        <h3 className="h2 mb-3">Contact — {mode === 'vendor' ? 'Vendor Signup' : mode === 'mechanic' ? 'Mobile Mechanic' : mode === 'restoration' ? 'Restoration' : 'Quote'}</h3>
        <form className="grid gap-3" method="POST" action="/.netlify/functions/sendLead">
          <input type="hidden" name="type" value={mode}/>
          <input name="name" required placeholder="Name" className="p-2 rounded bg-black/40 border border-white/10"/>
          <input name="email" required placeholder="Email" className="p-2 rounded bg-black/40 border border-white/10"/>
          <input name="phone" placeholder="Phone" className="p-2 rounded bg-black/40 border border-white/10"/>
          <textarea name="message" placeholder="How can we help?" className="p-2 rounded bg-black/40 border border-white/10" rows={4}/>
          <div className="flex gap-3 justify-end">
            <button type="button" onClick={()=>setOpen(false)} className="btn btn-outline">Close</button>
            <button className="btn btn-primary" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
