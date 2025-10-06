'use client';
import { useEffect, useState } from 'react';
const ITEMS = [
  { quote:'They respond fast and execute flawlessly across multiple sites.', author:'Property Manager, Multi-Family' },
  { quote:'Reliable day porter program that keeps our campus inspection-ready.', author:'Facilities Director, Education' },
  { quote:'Post-construction cleanup was A+ — zero punch-list issues.', author:'GC Project Manager' },
];
export default function TestimonialsCarousel({ locale='en' }){
  const [i,setI]=useState(0);
  useEffect(()=>{ const id=setInterval(()=>setI(v=>(v+1)%ITEMS.length),4000); return ()=>clearInterval(id);},[]);
  const item=ITEMS[i];
  return (<section className="section"><div className="container text-center">
    <h2 className="h2 mb-6">{locale==='es'?'Testimonios':'Testimonials'}</h2>
    <div className="card mx-auto max-w-3xl"><p className="text-xl md:text-2xl mb-3">“{item.quote}”</p><p className="text-sm text-gray-400">— {item.author}</p></div>
  </div></section>);
}
