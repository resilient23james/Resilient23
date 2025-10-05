'use client';
import Image from 'next/image';
import {useEffect,useState} from 'react';
import ShayModal from './ShayModal';
export default function ShayButton(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{ if(!open) return; const f=(e:KeyboardEvent)=>{ if(e.key==='Escape') setOpen(false); }; window.addEventListener('keydown',f); return()=>window.removeEventListener('keydown',f); },[open]);
  return(<>
    <button aria-label="Open Shay Assistant" onClick={()=>setOpen(true)} className="fixed bottom-6 right-6 z-40 rounded-full shadow-2xl ring-1 ring-black/5 overflow-hidden">
      <div className="relative h-20 w-20 md:h-24 md:w-24">
        <Image src="/shay-avatar.webp" alt="Shay Assistant" fill sizes="96px" priority className="object-cover"/>
        <span className="absolute inset-0 rounded-full animate-pulse ring-2 ring-rose-400/40 pointer-events-none"/>
      </div>
    </button>
    <ShayModal open={open} onClose={()=>setOpen(false)}/>
  </>);
}