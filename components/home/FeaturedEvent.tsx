import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function FeaturedEvent() {
  return (
    <section className="bg-[#171717] text-white overflow-hidden" aria-label="Featured event">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Image — full height */}
        <AnimatedSection className="relative aspect-[4/3] md:aspect-auto md:min-h-[620px] overflow-hidden">
          <Image
            src="/moments/private.jpg"
            alt="A Night to Remember — private celebration by La Fête Moments"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/40 to-transparent" />
          {/* Category badge */}
          <div className="absolute top-8 left-8 bg-[#F16F63] text-white text-[9px] tracking-[0.22em] uppercase px-4 py-2">
            Featured Moment
          </div>
        </AnimatedSection>

        {/* Content */}
        <div className="flex flex-col justify-center px-[8vw] md:px-14 lg:px-20 py-20 md:py-28">
          <AnimatedSection>
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#F16F63] mb-6">
              A Night to Remember
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <h2 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(42px,4.5vw,68px)] leading-[0.9] tracking-[-0.02em] mb-6">
              Private Celebration<br />
              <em className="italic text-[#F16F63]">Like No Other.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 mb-8 text-[11px] tracking-[0.18em] uppercase text-white/45">
              <span>Private Party</span>
              <span className="text-[#F16F63]">·</span>
              <span>Abu Dhabi</span>
              <span className="text-[#F16F63]">·</span>
              <span>May 2026</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.28}>
            <p className="text-white/60 text-[14px] leading-[1.85] max-w-[400px] mb-8">
              A beautifully styled evening created around the people, details and atmosphere that made the occasion special. Deep burgundy florals, golden candlelight and an atmosphere of unhurried elegance.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.36}>
            <Link
              href="/moments/a-night-to-remember"
              className="inline-flex items-center gap-3 border border-white/25 hover:border-[#F16F63] hover:text-[#F16F63] text-white text-[10px] tracking-[0.18em] uppercase px-6 py-4 transition-all duration-300 w-fit"
            >
              EXPLORE THIS EVENT
              <ArrowRight size={12} strokeWidth={2.5} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
