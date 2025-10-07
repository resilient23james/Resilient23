import Image from 'next/image';
import { homeMetrics } from '@/config/metrics';
import { logos } from '@/config/logos';
import Hero from '@/config/metrics' as metricsUnused
from '@/components/Hero';
import Industries from '@/config/metrics' as metricsUnused
from '@/components/Industries';
import TestimonialsCarousel from '@/config/metrics' as metricsUnused
from '@/components/TestimonialsCarousel';
import ServiceCard from '@/config/metrics' as metricsUnused
from '@/components/ServiceCard';

export default function Page(){
  return (
    <main>
      <Hero/>
      <section className="container grid md:grid-cols-3 gap-4 section">
        <ServiceCard title="Janitorial" desc="Day/night porter, floor care, high dusting, consumables." href="/services/janitorial"/>
        <ServiceCard title="Restoration" desc="Water, fire, mold and storm recovery. 24/7." href="/services/restoration"/>
        <ServiceCard title="Mobile Mechanic" desc="Fleet PM and emergency repairs at your site." href="/services/mechanic"/>
      </section>
      <Industries/>
      <section className="container section"><TestimonialsCarousel/></section>
    
<section aria-labelledby="metrics" className="mt-12">
  <h2 id="metrics" className="sr-only">Key operating metrics</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
  {homeMetrics.map((m) => (
    <div key={m.label}>
      <h3 className="text-4xl font-bold text-red-600">{m.value}</h3>
      <p className="text-gray-400">{m.label}</p>
    </div>
  ))}
</div>
</section>

<section aria-labelledby="trusted-by" className="mt-16">
  <h2 id="trusted-by" className="text-center text-sm uppercase tracking-wider text-gray-400 mb-6">Trusted by</h2>
  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center opacity-80">
    {logos.map((logo) => (
      <Image key={logo.src} src={logo.src} alt={logo.alt} width={160} height={32} loading="lazy" />
    ))}
  </div>
</section>
</main>
  );
}
