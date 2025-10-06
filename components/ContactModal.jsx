'use client';
import { useEffect, useState } from 'react';

export default function ContactModal(){
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('lead');

  useEffect(()=>{
    const onOpen = (e)=>{ setMode(e.detail?.mode || 'lead'); setOpen(true); };
    window.addEventListener('shay:open', onOpen);
    return ()=>window.removeEventListener('shay:open', onOpen);
  },[]);

  if(!open) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1f1f22] border border-white/10 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">Contact — {mode}</h2>
        <form method="POST" action="/.netlify/functions/sendLead">
          <input type="hidden" name="type" value={mode}/>
          <input className="w-full mb-2 p-2 rounded bg-black/40 border border-white/10" name="name" placeholder="Name" required/>
          <input className="w-full mb-2 p-2 rounded bg-black/40 border border-white/10" name="email" placeholder="Email" required/>
          <textarea className="w-full mb-2 p-2 rounded bg-black/40 border border-white/10" name="message" placeholder="How can we help?" rows={4}/>
          <div className="flex gap-2 justify-end">
            <button type="button" onClick={()=>setOpen(false)} className="btn btn-outline">Cancel</button>
            <button className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
