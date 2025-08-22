"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "Who needs a USDOT number?",
    answer:
      "You need a USDOT number if you're operating commercial vehicles in trucking, whether you stay within your state OR cross state lines. Here's the simple breakdown: If you're driving a truck that weighs over 10,000 pounds (that's most box trucks and up), you need a DOT number. This includes local delivery drivers hauling furniture in Houston, plumbers with heavy-duty work trucks in Phoenix, and long-haul truckers driving from Miami to Seattle. Even if you never leave Texas, California, or whatever state you're in - you still need that DOT number. Think of it as your trucking business ID that the government uses to track your safety record.",
  },
  {
    question: "Who needs MC Authority?",
    answer:
      "MC Authority (Motor Carrier number) is specifically for truckers who get paid to haul freight across state lines. Let me break it down with real examples: If you're taking a load of produce from California to Nevada for a customer who's paying you - you need MC Authority. If you're an owner-operator getting loads from brokers or load boards that cross state lines - you need it. But here's who doesn't need it: If you only haul within your state (like doing Amazon deliveries just in Atlanta), or if you're hauling your own company's products (like a furniture store delivering their own sofas), you don't need MC Authority. These businesses need a USDOT number, not MC Authority. It's specifically for 'for-hire' interstate carriers - meaning you're getting paid by others to move their stuff across state lines.",
  },
  {
    question: "What's the difference between DOT number and MC Authority in simple terms?",
    answer:
      "Think of it this way: Your DOT number is like your driver's license for trucking - everyone operating commercial vehicles needs one, whether you're driving locally or long-distance. Your MC Authority is like a special permit to run a taxi service across state lines - you only need it if you're getting paid by customers to haul their freight from one state to another. Here's a real example: Joe has a dump truck business in Dallas. He only works construction sites around town, so he needs a DOT number. But his buddy Mike runs a hotshot business taking oil field equipment from Texas to Oklahoma for different companies - Mike needs both a DOT number AND MC Authority. The DOT number tracks your safety, while MC Authority gives you permission to operate as a for-hire business across state lines.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Getting your DOT number is quick - it's issued instantly when you apply online. You can literally have it in minutes and start operating right away (as long as you have insurance). MC Authority takes longer because there's a mandatory 21-25 day protest period where other carriers can object to your application - though protests rarely happen. After those 21-25 days, we'll file your BOC-3 (process agent) and UCR registration for you - both are included in our service, so you don't need to worry about finding these separately. Once your insurance company files the required proof with FMCSA, your authority goes active. All told, if everything's ready, you're looking at about 3-4 weeks from application to having active MC Authority. We handle all the paperwork and filings for you, so you just provide the info once and we take care of the rest.",
  },
  {
    question: "What information do I need to get started?",
    answer:
      "Getting started is simpler than you might think! If you have a registered company, great - we can start right away. If you don't have one yet, no problem - we can even help you set that up. That's really all you need to begin. We handle all the complex paperwork and requirements for you. You don't need insurance right away - that's only required near the end of the 21-25 day waiting period after your MC Authority is filed, giving you time to shop for the best rates. Our team walks you through everything step by step. Just call us with whatever you have, even if it's just an idea to start trucking, and we'll guide you from there. It usually takes about 20 minutes on the phone to get everything rolling.",
  },
  {
    question: "Can I file for DOT and MC Authority directly with the FMCSA instead?",
    answer:
      "Yes, absolutely. You can complete all filings directly through the FMCSA website at fmcsa.dot.gov without any assistance. Many carriers choose our consulting service to save time, reduce errors, and get expert guidance, but it's entirely your choice whether to use our optional assistance or file on your own.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our compliance services and how we can help your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden">
              <button
                className="w-full text-left p-6 hover:bg-muted/50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-card-foreground pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-muted-foreground transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              {openIndex === index && (
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our compliance experts are ready to help you get your DOT number sorted out quickly and correctly.
            </p>
            <div className="flex justify-center">
              <a href="tel:+19179092257">
                <button className="bg-accent text-accent-foreground hover:bg-accent hover:brightness-125 px-8 py-3 font-semibold shadow-lg border border-accent/30 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: +1 (917) 909-2257
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
