import ServiceCard from '@/components/ServiceCard';
import ShayButton from '@/components/ShayButton';
export default function Page(){
  return(<main className="px-4 md:px-6 pb-28">
    <section className="space-y-6 pt-6 md:pt-10">
      <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-tight">Solutions</h1>
      <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-300 max-w-3xl">One team. Three divisions. Total resilience.</p>
    </section>
    <section className="mt-10 grid gap-6">
      <ServiceCard title="Facility Services" desc="Custodial programs, day porters, floor care, and post-construction cleanup."/>
      <ServiceCard title="Mobile Mechanic" desc="On-site fleet & equipment repair, preventive maintenance, and rapid dispatch."/>
      <ServiceCard title="Restoration" desc="Water, fire, mold, board-ups, and emergency response."/>
    </section>
    <ShayButton/>
  </main>);
}