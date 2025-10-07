import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      <Breadcrumbs />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Technology & Quality Control</h1>
<p className="text-gray-300 mb-8">This page is scaffolded and ready for your copy. Replace bullets with your specifics.</p>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Inspection System</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Photo proof, geo-timestamped checklists</li>
  <li>Scored audits and trend reporting</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Client Portal</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Work orders, SLAs, and status tracking</li>
  <li>Secure document repository</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Analytics & KPIs</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Custom KPI dashboards by facility</li>
  <li>Continuous improvement loops</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    </main>
  )
}