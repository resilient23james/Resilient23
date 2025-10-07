import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ServiceCard from '@/components/ServiceCard';

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
    </main>
  );
}
