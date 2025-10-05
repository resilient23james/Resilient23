'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ShayButton(){
  const [open,setOpen] = useState(false);
  useEffect(()=>{
    if(!open) return;
    const onEsc = (e: KeyboardEvent)=>{ if(e.key==='Escape') setOpen(false); };
    window.addEventListener('keydown', onEsc);
    return ()=> window.removeEventListener('keydown', onEsc);
  },[open]);

  return (
    <>
      <button aria-label="Open Shay Assistant" onClick={()=>setOpen(true)} className="fixed bottom-6 right-6 z-50">
        <span className="relative block h-24 w-24 animate-float">
          <span className="absolute inset-0 rounded-full shadow-[0_0_30px_12px_rgba(220,38,38,0.45)]" />
          <Image src="/shay.webp" alt="Shay" width={96} height={96} priority className="rounded-full border border-white/20"/>
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/40" onClick={()=>setOpen(false)}>
          <div className="fixed bottom-24 right-6 w-[92vw] max-w-md rounded-2xl bg-[#0e1626] text-white p-5 shadow-xl"
               onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">Shay Assistant</h2>
              <button onClick={()=>setOpen(false)} className="text-white/80">Close</button>
            </div>
            <p className="text-white/80 text-sm mb-3">
              Ask in English or Spanish. Example: “Cotización de limpieza para oficina de 5,000 pies²”.
            </p>
            <form onSubmit={(e)=>e.preventDefault()}>
              <input className="w-full rounded-md bg-white/10 px-3 py-2 outline-none" placeholder="Type here..." />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
