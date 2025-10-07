import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      <Breadcrumbs />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Client Portal</h1>
<p className="text-gray-300 mb-8">This page is scaffolded and ready for your copy. Replace bullets with your specifics.</p>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Access & Security</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Role-based access controls</li>
  <li>Encrypted transport and at-rest storage</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Work Orders</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Submit requests, track SLAs, and chat with dispatch</li>
  <li>Upload photos and documents</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Reporting</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Live KPI widgets and exportable reports</li>
  <li>Monthly summaries and insights</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    </main>
  )
}