"use client"

import { Card } from "@/components/ui/card"

export default function Requirements() {
  const requirements = [
    {
      title: "Basic Information",
      items: [
        "Legal business name",
        "Doing Business As (DBA) name",
        "Business address",
        "EIN or SSN",
      ],
    },
    {
      title: "Vehicle Details",
      items: [
        "Number of vehicles",
        "Vehicle types and sizes",
        "Gross vehicle weight",
        "VIN numbers",
      ],
    },
    {
      title: "Operations Info",
      items: [
        "Type of cargo hauled",
        "Interstate or intrastate",
        "For-hire or private",
        "Hazmat certification (if applicable)",
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What You&apos;ll Need to Get Started
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have these documents and information ready for a smooth application process. 
              Don&apos;t worry if you&apos;re missing something — we&apos;ll help you gather what&apos;s needed.
            </p>
          </div>

          {/* Requirements Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {requirements.map((category, index) => (
              <Card key={index} className="p-6 bg-card/70 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Help Box */}
          <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6 md:p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Missing Something? No Problem!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our compliance experts will guide you through gathering any missing information 
              and help you understand exactly what&apos;s needed for your specific situation.
            </p>
            <a href="tel:+19179092257">
              <button className="bg-accent text-accent-foreground hover:bg-accent hover:brightness-125 px-8 py-3 font-semibold shadow-lg border border-accent/30 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Get Help Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}