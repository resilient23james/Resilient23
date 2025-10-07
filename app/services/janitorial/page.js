import LeadForm from '@/components/forms/LeadForm';
import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      \1
      <div className=\"mt-4\"><LeadForm service=\"Janitorial & Facility" /></div>
<p className="text-gray-300 mb-8">This page is scaffolded and ready for your copy. Replace bullets with your specifics.</p>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Programs</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Day porter, nightly, and periodic deep cleans</li>
  <li>Specialty: floor care, carpet extraction, high dusting, windows</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Quality Control</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>12-point inspections with photo proof</li>
  <li>Client feedback loop and KPI dashboards</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Compliance & Sustainability</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Green cleaning options, low-VOC products</li>
  <li>OSHA/EPA-aligned procedures and signage</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    </main>
  )
}