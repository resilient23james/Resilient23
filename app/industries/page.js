import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      <Breadcrumbs />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Industries Served</h1>
<p className="text-gray-300 mb-8">This page is scaffolded and ready for your copy. Replace bullets with your specifics.</p>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Healthcare</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Infection control and sensitive waste handling</li>
  <li>Quiet hours and staff coordination</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Education & Municipal</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Safe access, background-checked teams</li>
  <li>Event and seasonal turnover support</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Logistics & Commercial</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>High-traffic maintenance and floor care</li>
  <li>Fleet service integration for uptime</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    </main>
  )
}