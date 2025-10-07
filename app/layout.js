import site from '@/config/site';
import Nav from '@/components/Nav';
import '@/styles/globals.css';
import Script from 'next/script';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModalBridge from '@/components/ModalBridge';
import ShayAssistant from '@/components/ShayAssistant';

export const metadata = {
  twitter: {
    card: 'summary_large_image',
    title: 'Resilient Commercial Solutions',
    description: 'Integrated janitorial, restoration, and mobile mechanic services across Florida with rapid response, measurable quality, and Fortune‑500 discipline.',
    images: ['/og-image.png']
  },

  openGraph: {
    type: 'website',
    siteName: 'Resilient Commercial Solutions',
    title: 'Resilient Commercial Solutions',
    description: 'Integrated janitorial, restoration, and mobile mechanic services with rapid response and measurable quality.',
    url: '/',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'Resilient Commercial Solutions' }
    ]
  },

  themeColor: '#111111',
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL('https://resilient23.netlify.app'),
  title: 'Resilient Commercial Solutions',
  description: 'Janitorial, restoration, and mobile mechanic services across Florida.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"LocalBusiness","name":"Resilient Commercial Solutions","address":{"@type":"PostalAddress","addressCountry":"US"}}`}} />

      <link rel="manifest" href="/manifest.json"/>

      </head>
      \1
        <Nav />
        <TopBar/>
        <Header/>
        
      <Script id="ld-localbusiness" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": site.organizationName,
          "url": site.siteUrl,
          "image": site.logoUrl,
          "logo": site.logoUrl,
          "description": "Integrated janitorial, restoration & rehab, and fleet mechanic services across Florida.",
          "areaServed": ["Florida"],
          "telephone": site.telephone,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Florida",
            "addressRegion": "FL",
            "addressCountry": "US"
          },
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": site.telephone,
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": ["English", "Spanish"]
          }]
        })}
      </Script>
        
      <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What NAICS codes do you support for procurement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `We support the following NAICS codes: ${Array.isArray(site.naics) && site.naics.length ? site.naics.join(', ') : 'Please contact us for our current NAICS coverage.'}`
              }
            },
            {
              "@type": "Question",
              "name": "Are you registered in SAM.gov and what are your identifiers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Yes. CAGE: ${site.cage || 'available upon request'}, UEI: ${site.uei || 'available upon request'}${site.samUrl ? ', SAM profile: ' + site.samUrl : ''}${site.duns ? ', DUNS: ' + site.duns : ''}.`
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer 24/7 emergency restoration?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes—24/7 dispatch for water, fire, and mold events with certified technicians and insurance-ready documentation."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide specialty facility services beyond janitorial?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes—disinfection, event turnover, glass and exterior, carpet extraction, high dusting, and floor care programs are available as add-ons."
              }
            },
            {
              "@type": "Question",
              "name": "Can you work under government contracting requirements?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes—we follow OSHA/EPA-aligned SOPs, complete background checks, and maintain insurance documentation. Past performance references are available upon request."
              }
            },
            {
              "@type": "Question",
              "name": "How fast can a mobile mechanic be dispatched to our fleet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typical dispatch is within ~60 minutes depending on location and traffic. Preventive maintenance and DOT inspections can be scheduled in advance."
              }
            },
            {
              "@type": "Question",
              "name": "How do I request a quote or submit an RFP?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Use the contact form on our site or email ${site.contactEmail || 'our team'} with your scope and timeline. Phone support is available for urgent needs at ${site.telephone || 'our main line'}.`
              }
            }
          ]
        })}
      </Script>
        
      <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": site.organizationName,
          "url": site.siteUrl,
          "logo": site.logoUrl,
          "sameAs": [
            "https://www.linkedin.com/",
            "https://x.com/",
            "https://www.facebook.com/",
            "https://www.instagram.com/"
          ],
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": site.telephone,
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": ["English","Spanish"]
          }]
        })}
      </Script>
        
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": site.siteUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": site.siteUrl + "/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </Script>
        
      <Script id="ld-breadcrumbs" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://resilient23.netlify.app/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://resilient23.netlify.app/services"}, {"@type": "ListItem", "position": 3, "name": "Contact", "item": "https://resilient23.netlify.app/contact"}]})}
      </Script>
        {children}
        <Footer/>
        <ModalBridge/>
        <ShayAssistant/>
      </body>
    </html>
  );
}