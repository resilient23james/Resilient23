// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
        Resilient Commercial Solutions
      </h1>
      <p className="mt-4 text-xl text-gray-700">
        One team. Three divisions. Total resilience.
      </p>

      {/* Shay Avatar */}
      <div className="mt-10 flex items-center gap-4">
        <Image
          src="/shay-avatar.jpg"
          alt="Shay Assistant"
          width={96}
          height={96}
          className="rounded-full border-4 border-red-600 shadow-xl"
          priority
        />
        <div>
          <p className="font-semibold text-gray-900">Shay Assistant</p>
          <p className="text-sm text-gray-600">Ask in English or Spanish.</p>
        </div>
      </div>

      {/* Body content */}
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold">Our Divisions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Facilities:</strong> Janitorial, floor care, and day porter services for commercial clients.
          </li>
          <li>
            <strong>Restoration:</strong> Post-construction cleanup, disaster recovery, and specialty detailing.
          </li>
          <li>
            <strong>Staffing:</strong> Reliable workforce support for property managers and developers.
          </li>
        </ul>
      </section>
    </main>
  );
}
