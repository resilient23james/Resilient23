import LeadForm from '@/components/forms/LeadForm';
import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      \1
      <div className=\"mt-4\"><LeadForm service=\"Fleet & Mobile Mechanic" /></div>
<p className="text-gray-300 mb-8">This page is scaffolded and ready for your copy. Replace bullets with your specifics.</p>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Preventive Maintenance</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Oil, filters, fluids, and safety checks</li>
  <li>DOT pre-trip, tires, brakes, and alignments</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Dispatch & Coverage</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Average dispatch ~60 minutes</li>
  <li>Roadside or on-site bays; statewide coverage</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Diagnostics & Repairs</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>OBD diagnostics, battery/alternator, cooling systems</li>
  <li>Transparent quotes and parts sourcing</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    </main>
  )
}