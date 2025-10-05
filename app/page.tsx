export default function Home() {
  const services = [
    {
      title: 'Facility Services',
      blurb:
        'Custodial programs, day porters, floor care, and post‑construction cleanup.',
    },
    {
      title: 'Mobile Mechanic',
      blurb:
        'On‑site fleet & equipment repair, preventive maintenance, and rapid dispatch.',
    },
    {
      title: 'Restoration',
      blurb:
        'Water, fire, mold, board‑ups, and emergency response.',
    },
  ];

  return (
    <main className="container mx-auto px-6 py-16">
      <section className="mb-12">
        <h1 className="text-6xl font-extrabold leading-tight tracking-tight">
          Resilient<br/>Commercial<br/>Solutions
        </h1>
        <p className="mt-6 text-2xl text-gray-600">
          One team. Three divisions. Total resilience.
        </p>
      </section>

      <section className="grid gap-6">
        {services.map((s) => (
          <article key={s.title} className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
            <h2 className="text-2xl font-bold mb-2">{s.title}</h2>
            <p className="text-gray-600">{s.blurb}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
