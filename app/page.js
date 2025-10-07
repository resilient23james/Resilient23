'use client';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { useEffect, useState } from 'react';

export default function Page(){
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start=0; const end=500000; const step=end/100;
    const id=setInterval(()=>{ start+=step; setCount(Math.min(end,Math.floor(start))); if(start>=end) clearInterval(id);},20);
    return ()=>clearInterval(id);
  },[]);
  return (<>
    <Hero />
    <section className="section container">
      <h2 className="h2 mb-4">Our Impact</h2>
      <p className="counter">{count.toLocaleString()}+ Sq. Ft. Cleaned Monthly</p>
    </section>
    <Industries />
    <div className="container"><TestimonialsCarousel /></div>
  </>);
}
