import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      <Breadcrumbs />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">About Resilient Commercial Solutions</h1>
<p className="text-gray-300 mb-8">This page is scaffolded and ready for your copy. Replace bullets with your specifics.</p>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Who We Are</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Florida-based integrated facility, restoration, and fleet services provider</li>
  <li>Focused on uptime, compliance, and measurable quality</li>
  <li>Local teams + partner network for surge capacity</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Certifications & Compliance</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>OSHA/EPA-aligned SOPs; background-checked techs</li>
  <li>Vendor onboarding with insurance and W-9 on file</li>
  <li>Documented MSDS, Job Hazard Analyses (JHAs), and training logs</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Leadership & Culture</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Client-first mindset with 24/7 availability</li>
  <li>Data-driven continuous improvement</li>
  <li>Safety, accountability, and transparency</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    </main>
  );
}
