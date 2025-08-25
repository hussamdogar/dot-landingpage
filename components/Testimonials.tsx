import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Thomas \"Tom\" Mitchell",
    company: "Mitchell Expedited Services",
    role: "President",
    content: "After a compliance audit nightmare at my previous company, I knew I needed professional help setting up my new venture. Tech Rig's expertise ensured every i was dotted and t was crossed from day one. The confidence of knowing we're fully compliant lets me focus on growing the business.",
    rating: 5,
  },
  {
    name: "Robert \"Bobby\" Wilson",
    company: "Wilson Brothers Trucking",
    role: "Co-Owner",
    content:
      "We tried handling our MC Authority application ourselves and got stuck in a maze of requirements. Tech Rig's consultants knew exactly what was needed and got us operational weeks faster than we could've managed alone. Their same-day support when questions came up was incredible.",
    rating: 5,
  },
  {
    name: "Derek Johnson",
    company: "Johnson Dedicated Transport",
    role: "Owner",
    content:
      "As a new owner-operator, I was quoted weeks of wait time trying to figure out compliance myself. Tech Rig had me road-legal in days, not weeks. Their consultants actually answered the phone when I called - that personal touch made all the difference during a stressful transition.",
    rating: 5,
  },
  {
    name: "Jake Martinez",
    company: "Martinez Freight Lines",
    role: "Owner-Operator",
    content:
      "After 15 years driving for others, starting my own authority felt overwhelming. Tech Rig's consultants walked me through every DOT requirement and handled the paperwork confusion. What would've taken me weeks of frustration was done right in days - worth every penny for the peace of mind.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See what industry leaders say about our compliance solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-card-foreground mb-4 text-base md:text-lg leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={`/randomuser${index + 1}.jpg`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
