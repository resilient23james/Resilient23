'use client';
import { useState, useEffect } from 'react';
const items = [
  {quote:'Outstanding response time and communication.', by:'Facilities Director, Healthcare'},
  {quote:'They treated our tenants with respect and kept the site clean.', by:'Property Manager, Multifamily'},
  {quote:'Professional, fast, and documented everything for insurance.', by:'Plant Manager, Industrial'}
];
export default function TestimonialsCarousel(){
  const [i,setI]=useState(0);
  useEffect(()=>{ const t=setInterval(()=>setI((i)=> (i+1)%items.length),4000); return ()=>clearInterval(t)},[]);
  const it = items[i];
  return <div className="card text-center"><p className="italic">“{it.quote}”</p><p className="mt-2 text-sm text-gray-300">— {it.by}</p></div>;
}
