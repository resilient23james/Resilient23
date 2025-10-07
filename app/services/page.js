import site from '@/config/site';
import Script from 'next/script';
import Breadcrumbs from '@/components/Breadcrumbs';
export default function Page() {
  return (
    <main>
      <Breadcrumbs />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Services Overview</h1>
      <p className="text-gray-300 mb-8">Explore our core services below. Deep dive pages provide detailed scopes and options.</p>
    <Script id="ld-services" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify({"@context": "https://schema.org", "@type": "ItemList", "itemListElement": [{"@type": "Service", "name": "Commercial Janitorial", "serviceType": "JanitorialServices"}, {"@type": "Service", "name": "Disaster Restoration & Rehab", "serviceType": "RestorationServices"}, {"@type": "Service", "name": "Fleet & Mobile Mechanic", "serviceType": "AutoRepair"}]})}
</Script>
<Script id="ld-reviews" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify({"@context": "https://schema.org", "@type": "Service", "serviceType": "Facility & Fleet Services", "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "124"}, "review": [{"@type": "Review", "author": {"@type": "Person", "name": "Facilities Manager"}, "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"}, "reviewBody": "Excellent cleaning quality and responsive restoration team."}, {"@type": "Review", "author": {"@type": "Person", "name": "Fleet Supervisor"}, "reviewRating": {"@type": "Rating", "ratingValue": "4", "bestRating": "5"}, "reviewBody": "Fast mobile mechanic service, saved our fleet downtime."}]})}
</Script>
<Script id="ld-offers" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify({"@context": "https://schema.org", "@type": "OfferCatalog", "name": "RCS Services", "itemListElement": [{"@type": "Offer", "name": "Commercial Janitorial", "priceCurrency": "USD", "url": site.siteUrl + "/services#janitorial", "itemOffered": {"@type": "Service", "serviceType": "JanitorialServices", "name": "Commercial Janitorial"}, "eligibleRegion": "US-FL", "availability": "https://schema.org/InStock"}, {"@type": "Offer", "name": "Disaster Restoration & Rehab", "priceCurrency": "USD", "url": site.siteUrl + "/services#restoration", "itemOffered": {"@type": "Service", "serviceType": "RestorationServices", "name": "Disaster Restoration & Rehab"}, "eligibleRegion": "US-FL", "availability": "https://schema.org/InStock"}, {"@type": "Offer", "name": "Fleet & Mobile Mechanic", "priceCurrency": "USD", "url": site.siteUrl + "/services#mechanic", "itemOffered": {"@type": "Service", "serviceType": "AutoRepair", "name": "Fleet & Mobile Mechanic"}, "eligibleRegion": "US-FL", "availability": "https://schema.org/InStock"}]})}
</Script>
</main>
  )
}