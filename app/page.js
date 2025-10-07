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
    
<section aria-labelledby="metrics" className="mt-12">
  <h2 id="metrics" className="sr-only">Key operating metrics</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    <div>
      <h3 className="text-4xl font-bold text-red-600">1M+</h3>
      <p className="text-gray-400">Sq. ft. serviced monthly</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold text-red-600">95%</h3>
      <p className="text-gray-400">Client retention rate</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold text-red-600">60 min</h3>
      <p className="text-gray-400">Average fleet dispatch time</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold text-red-600">24/7</h3>
      <p className="text-gray-400">Emergency restoration response</p>
    </div>
  </div>
</section>
</main>
  );
}
