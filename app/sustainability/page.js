import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      <Breadcrumbs />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Sustainability & Safety</h1>
<p className="text-gray-300 mb-8">This page is scaffolded and ready for your copy. Replace bullets with your specifics.</p>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Green Practices</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Low-VOC products and dilution control</li>
  <li>Microfiber, HEPA filtration, and waste diversion</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Safety Program</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>OSHA/EPA-aligned SOPs and toolbox talks</li>
  <li>PPE, signage, and incident reporting</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Certifications</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Manufacturer safety data sheets (SDS) on file</li>
  <li>Vendor training and re-certification schedule</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    </main>
  )
}