import ContactForm from '@/components/forms/ContactForm';
import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      \1\2
      <ContactForm />
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">General Inquiries</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Email: info@example.com (replace with your address)</li>
  <li>Phone: (000) 000-0000 (replace with your number)</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Service Requests</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Janitorial & Facility: /services#janitorial</li>
  <li>Restoration & Rehab: /services#restoration</li>
  <li>Fleet & Mechanic: /services#mechanic</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Coverage</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Florida-wide with surge capacity</li>
  <li>Emergency response 24/7</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    </main>
  )
}