import ServiceCard from '../components/ServiceCard';

export default function Page() {
  return (
    <main className="px-4 md:px-6 pb-28">
      <section className="pt-6 md:pt-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          America’s Trusted Facility Partner for Cleaning, Restoration, and Maintenance Excellence.
        </h2>
        <p style={{color:'#cbd5e1'}} className="mt-3">
          We deliver <strong>Fortune-500-level service</strong> with small-business care. From janitorial and day porter staffing to mobile mechanic and restoration response, Resilient keeps your operations spotless, safe, and running strong.
        </p>
      </section>

      <section className="space-y-6 pt-8">
        <ServiceCard
          title="Facility Services"
          desc="Custodial programs, day porters, floor care, and post-construction cleanup."
        />
        <ServiceCard
          title="Mobile Mechanic"
          desc="On-site fleet & equipment repair, preventive maintenance, and rapid dispatch."
        />
        <ServiceCard
          title="Restoration"
          desc="Water, fire, mold, board-ups, and emergency response."
        />
      </section>
    </main>
  );
}