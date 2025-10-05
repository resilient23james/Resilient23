export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold leading-tight mb-6">
        Resilient Commercial Solutions
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        One team. Three divisions. Total resilience.
      </p>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-lg">Janitorial</h3>
          <p className="text-sm text-gray-600">
            Daily service, day porters, floor care, post-construction cleanup.
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-lg">Landscaping</h3>
          <p className="text-sm text-gray-600">
            Maintenance, enhancements, irrigation, seasonal color.
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-lg">Restoration</h3>
          <p className="text-sm text-gray-600">
            Water, fire, mold, board‑ups, and emergency response.
          </p>
        </div>
      </section>

      <div className="mt-12">
        <a href="/careers" className="inline-block rounded-lg bg-black text-white px-5 py-3">
          Careers
        </a>
      </div>
    </main>
  );
}
