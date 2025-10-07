import site from '@/config/site';
import Script from 'next/script';
import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      <Breadcrumbs />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Vendor / Subcontractor Portal</h1>
<p className="text-gray-300 mb-8">This page is scaffolded and ready for your copy. Replace bullets with your specifics.</p>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Onboarding</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Insurance, W-9, and background checks</li>
  <li>Digital onboarding and safety orientation</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Compliance</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>SOW alignment and safety audits</li>
  <li>Invoice submission and payment status</li>
</ul>
<h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Benefits</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Steady work orders and growth opportunities</li>
  <li>Partner recognition program</li>
</ul>
<div className="mt-10">
  <a href="/contact" className="inline-block px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">Request a Quote</a>
</div>
    <Script id="ld-faq-vendor" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What documents are required for vendor onboarding?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "W-9, insurance COI naming our company as additional insured, and background checks where applicable."
              }
            },
            {
              "@type": "Question",
              "name": "Are safety and compliance trainings required?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes—OSHA/EPA-aligned toolbox talks, PPE compliance, and site-specific safety briefings are part of onboarding."
              }
            },
            {
              "@type": "Question",
              "name": "How do I access the vendor portal and submit invoices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Vendors receive credentials to our portal after onboarding. Invoices must reference PO/SOW, include date ranges, and be submitted in PDF."
              }
            },
            {
              "@type": "Question",
              "name": "What are payment terms and method?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard net terms apply; ACH is preferred. Contact AP for alternative arrangements."
              }
            },
            {
              "@type": "Question",
              "name": "Who do I contact for bidding opportunities?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Email ${site.contactEmail || 'our team'} with capabilities, coverage areas, and certifications.`
              }
            }
          ]
        })}
      </Script>
</main>
  )
}