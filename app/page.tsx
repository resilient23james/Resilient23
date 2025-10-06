import ServiceCard from '../components/ServiceCard';

export default function Page() {
  return (
    <main className="px-4 md:px-6 pb-28">
      <section className="space-y-6 pt-6 md:pt-10">
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
