import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      <Breadcrumbs />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Government Contracting</h1>
<p className="text-gray-300 mb-8">This page is scaffolded and ready for your copy. Replace bullets with your specifics.</p>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Capabilities</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Janitorial, restoration, and fleet services</li>
  <li>Emergency response and continuity planning</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Compliance</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Background checks, insurance, and E-Verify</li>
  <li>Safety plans and labor compliance</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Past Performance</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Municipal facilities and public works</li>
  <li>References available upon request</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    </main>
  )
}