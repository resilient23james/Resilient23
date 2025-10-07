import LeadForm from '@/components/forms/LeadForm';
import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      \1
      <div className=\"mt-4\"><LeadForm service=\"Specialty Facility" /></div>
<p className="text-gray-300 mb-8">This page is scaffolded and ready for your copy. Replace bullets with your specifics.</p>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Disinfection & Sanitization</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Electrostatic application for high-touch areas</li>
  <li>CDC/EPA List N compliant chemistries</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Event & Turnover Cleaning</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Rapid turnaround teams for events and move-ins</li>
  <li>Waste, recycling, and post-event restoration</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Exterior & Glass</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Glass, pressure washing, and entryway detailing</li>
  <li>Safe access for mezzanines and atriums</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    </main>
  )
}