"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import LeadForm from "./LeadForm"

export default function Hero() {
  return (
    <section className="relative min-h-screen trust-gradient text-primary-foreground">
      {/* Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
      </div>

      {/* Header with Logo */}
      <header className="relative z-50 bg-primary/5 backdrop-blur-md border-b border-primary-foreground/10">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img 
              src="/logowhite.webp" 
              alt="Tech Rig Compliance" 
              className="h-8 md:h-10 lg:h-12 w-auto"
              onError={(e) => {
                e.currentTarget.src = '/logowhite.png';
              }}
            />
            
            {/* Phone CTA */}
            <a 
              href="tel:+19179092257"
              className="flex items-center gap-1 sm:gap-2 bg-accent hover:bg-accent/90 text-white px-3 py-2 rounded-full transition-colors text-sm font-semibold shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline font-semibold">+1 (917) 909-2257</span>
              <span className="sm:hidden font-semibold">Call</span>
            </a>
          </div>
        </div>
      </header>

      <div className="w-full px-4 py-8 md:py-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
                USDOT Compliance Assistance for New Trucking Companies
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/90 mb-6">
                We guide you through USDOT requirements and state registrations, making compliance simple and stress-free.
              </p>

              {/* Feature badges - Centered and compact on mobile */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                <div className="flex items-center gap-1 bg-card/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[11px] font-semibold">Compliance Experts</span>
                </div>
                <div className="flex items-center gap-1 bg-card/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[11px] font-semibold">15,000+ Helped</span>
                </div>
                <div className="flex items-center gap-1 bg-card/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[11px] font-semibold">Same Day Support</span>
                </div>
              </div>

              {/* CTA Button - Centered and compact on mobile */}
              <div className="flex justify-center lg:justify-start">
                <a href="tel:+19179092257">
                  <button className="bg-accent text-accent-foreground hover:bg-accent hover:brightness-125 px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 font-semibold shadow-lg border border-accent/30 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="whitespace-nowrap">Call Now - Free Compliance Consultation</span>
                  </button>
                </a>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}