import React from 'react';
import ServiceCard from '../components/ServiceCard';
import dynamic from 'next/dynamic';

const ShayAssistant = dynamic(() => import('../components/ShayAssistant').catch(() => ({ default: () => null })), { ssr: false });

export const metadata = { title: 'Resilient Commercial Solutions' };

export default function Page() {
  return (
    <main className="px-4 md:px-6 pb-28">
      <section className="space-y-3 pt-6 md:pt-10">
        <h1 className="sr-only">Resilient Commercial Solutions</h1>
        <p className="text-2xl md:text-[28px] leading-snug text-neutral-700 max-w-3xl">
          From Facility Services to Mobile Mechanic to Restoration — one team delivering <span className="font-semibold">total resilience</span>.
        </p>
      </section>

      <section className="mt-10 grid gap-6">
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

      <ShayAssistant />
    </main>
  );
}
