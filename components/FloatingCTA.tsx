"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Main Floating CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-auto">
        <div className="bg-accent text-accent-foreground rounded-lg shadow-lg p-4 md:p-6 max-w-sm mx-auto md:mx-0">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-semibold text-sm md:text-base mb-1">Ready to Get Started?</h4>
              <p className="text-xs md:text-sm opacity-90">Contact us for a free consultation</p>
            </div>
            <Button
              size="sm"
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 whitespace-nowrap"
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-4 z-40 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 md:bottom-4 md:right-20"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  )
}
