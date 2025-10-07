import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      <Breadcrumbs />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Testimonials & Case Studies</h1>
<p className="text-gray-300 mb-8">This page is scaffolded and ready for your copy. Replace bullets with your specifics.</p>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Highlights</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>95% client retention; 1M+ sq. ft. serviced monthly</li>
  <li>24/7 restoration response and rapid fleet dispatch</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Case Studies</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Logistics center floor restoration: 48-hour turnaround</li>
  <li>Municipal building water loss: demo/rebuild on schedule</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">What Clients Say</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>“Responsive, thorough, and proactive. Exactly what we needed.”</li>
  <li>“Mobile mechanics saved our route downtime this quarter.”</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    </main>
  )
}