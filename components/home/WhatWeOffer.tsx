import AnimatedSection from '@/components/ui/AnimatedSection'

const highlights = [
  'THOUGHTFUL DÉCOR',
  'PERSONALIZED STYLING',
  'EVENT SETUP',
  'CELEBRATION DETAILS',
]

export default function WhatWeOffer() {
  return (
    <section className="bg-[#F7F4F2] px-[7vw] py-24 md:py-28" aria-labelledby="offer-heading">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

        {/* Left: Heading + highlights */}
        <div>
          <AnimatedSection>
            <h2
              id="offer-heading"
              className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(36px,4.5vw,60px)] leading-[0.95] tracking-[-0.02em] text-[#171717] mb-8"
            >
              Great Celebrations<br />
              Are Created Through<br />
              <em className="italic text-[#F16F63]">Details.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <p className="text-[#716A67] text-[14px] leading-[1.85] mb-10">
              From the first idea to the final setup, we focus on creating a space that looks beautiful, feels welcoming and reflects the occasion.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F16F63] shrink-0" aria-hidden="true" />
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[#171717] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Right: Statement */}
        <AnimatedSection delay={0.15}>
          <div className="bg-[#171717] text-white p-10 md:p-12 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#F16F63]/10 rounded-full -translate-y-8 translate-x-8" aria-hidden="true" />
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#F16F63] mb-6">Our Focus</p>
            <p className="font-[family-name:var(--font-playfair)] italic text-white text-2xl md:text-3xl leading-[1.3] mb-8">
              &ldquo;Whether you already have a clear vision or simply know that you want to create something special, we&apos;ll help shape the details into a celebration worth remembering.&rdquo;
            </p>
            <div className="h-px bg-white/15 mb-6" />
            <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase">La Fête Moments · Abu Dhabi</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
