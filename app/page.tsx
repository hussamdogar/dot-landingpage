import Hero from "@/components/Hero"
import InfoSections from "@/components/InfoSections"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import Disclaimer from "@/components/Disclaimer"
import StickyPhoneHeader from "@/components/StickyPhoneHeader"
import Image from "next/image"
import Script from "next/script"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://techrig.org/#business",
        "name": "Tech Rig Compliance",
        "description": "Professional DOT compliance consulting and business services for transportation companies",
        "url": "https://techrig.org",
        "telephone": "+1-917-909-2257",
        "email": "info@techrig.org",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 N Gould St, Ste R",
          "addressLocality": "Sheridan",
          "addressRegion": "WY",
          "postalCode": "82801",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 44.7966,
          "longitude": -106.9562
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        "priceRange": "$$",
        "image": "https://techrig.org/logo.png",
        "sameAs": []
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://techrig.org/#service",
        "name": "DOT Compliance Consulting",
        "provider": {
          "@id": "https://techrig.org/#business"
        },
        "serviceType": ["DOT Compliance Consulting", "MC Authority Guidance", "FMCSA Compliance", "Transportation Consulting"],
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://techrig.org",
          "servicePhone": "+1-917-909-2257",
          "serviceSmsNumber": "+1-917-909-2257"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://techrig.org/#website",
        "url": "https://techrig.org",
        "name": "Tech Rig Compliance",
        "description": "Professional DOT compliance consulting services",
        "publisher": {
          "@id": "https://techrig.org/#business"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://techrig.org/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://techrig.org/#webpage",
        "url": "https://techrig.org",
        "name": "Tech Rig - DOT Compliance Consulting & Business Services",
        "isPartOf": {
          "@id": "https://techrig.org/#website"
        },
        "about": {
          "@id": "https://techrig.org/#business"
        },
        "description": "Get your DOT number, MC authority, and FMCSA compliance assistance from expert consultants"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://techrig.org"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a USDOT Number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A USDOT Number is a unique identifier assigned by the Federal Motor Carrier Safety Administration (FMCSA) to track safety information for commercial vehicles operating in interstate commerce."
            }
          },
          {
            "@type": "Question",
            "name": "Who needs a USDOT Number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Commercial vehicles that transport passengers or haul cargo in interstate commerce, vehicles with a gross weight rating of 10,001+ pounds, and vehicles transporting hazardous materials require a USDOT Number."
            }
          },
          {
            "@type": "Question",
            "name": "What is MC Authority?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MC Authority (Motor Carrier Authority) is required for companies that operate as for-hire carriers transporting regulated commodities for the public in interstate commerce."
            }
          }
        ]
      }
    ]
  }

  return (
    <main className="min-h-screen">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StickyPhoneHeader />
      <Hero />
      <InfoSections />
      <Testimonials />
      <FAQ />

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          {/* Top Row - Company Info and Contact */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Company */}
            <div className="text-center md:text-left">
              <div className="mb-3">
                <a href="#top" aria-label="Back to top">
                  <Image
                    src="/logowhite.webp"
                    alt="Tech Rig Compliance"
                    width={150}
                    height={60}
                    className="mx-auto md:mx-0 cursor-pointer hover:opacity-80 transition-opacity"
                    priority
                  />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2">Tech Rig Compliance</h3>
              <p className="text-primary-foreground/70 text-sm">
                30 N Gould St, Ste R<br />
                Sheridan, WY 82801
              </p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <p className="text-primary-foreground/90 mb-1">
                <a href="tel:+19179092257" className="hover:text-accent transition-colors">
                  +1 (917) 909-2257
                </a>
              </p>
              <p className="text-primary-foreground/90">
                <a href="mailto:info@techrig.org" className="hover:text-accent transition-colors">
                  info@techrig.org
                </a>
              </p>
            </div>

            {/* Links */}
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end gap-3">
                <a href="https://techrig.org/privacy-policy/" target="_blank" rel="noopener noreferrer" 
                   className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Privacy
                </a>
                <a href="https://techrig.org/terms-of-service/" target="_blank" rel="noopener noreferrer"
                   className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Terms
                </a>
                <a href="https://techrig.org/refund-policy/" target="_blank" rel="noopener noreferrer"
                   className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Refunds
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-primary-foreground/20 pt-4">
            <p className="text-xs text-primary-foreground/70 text-center max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> Tech Rig Compliance is a private consulting service not affiliated with any government agency. 
              Official DOT registration is free at fmcsa.dot.gov. Our fees are for consulting services only.
            </p>
            <p className="text-xs text-primary-foreground/60 text-center mt-2">
              &copy; {new Date().getFullYear()} Tech Rig Compliance. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
