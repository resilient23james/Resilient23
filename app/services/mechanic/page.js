export const metadata = {
  title: 'Mobile Mechanic | Resilient Commercial Solutions',
  description: 'On‑site fleet maintenance and emergency repairs for commercial vehicles and equipment.'
};
export default function Page(){return (<main className="container section">
  <h1 className="h1 mb-4">Mobile Mechanic — On‑Site Fleet & Equipment</h1>
  <p className="sub mb-8">Keep your fleet moving with PM routes and rapid breakdown response.</p>
  <div className="grid lg:grid-cols-2 gap-6 mb-12">
    <div className="card"><h2 className="h2 mb-2">Maintenance</h2><ul className="list-disc pl-6 space-y-2 text-gray-300">
      <li>PM A/B/C with digital logs</li><li>Oil, filters, belts, hoses, batteries</li><li>Brakes & tires</li><li>Cooling & HVAC diagnostics</li>
    </ul></div>
    <div className="card"><h2 className="h2 mb-2">Emergency & Jobsite</h2><ul className="list-disc pl-6 space-y-2 text-gray-300">
      <li>Jump‑starts, battery swaps, fuel delivery</li><li>Starter/alternator swaps</li><li>On‑site OBD‑II diagnostics</li>
    </ul></div>
  </div>
  <div className="flex gap-3"><a href="/quote" className="btn btn-primary">Schedule Fleet Service</a><a href="/vendor-signup" className="btn btn-outline">Become a Mechanic Partner</a></div>
</main>);}
