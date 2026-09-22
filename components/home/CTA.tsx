import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function CTA() {
  return (
    <section
      className="bg-coral text-white relative overflow-hidden min-h-[580px] grid place-items-center py-20 px-[7vw]"
      aria-label="Call to action"
    >
      {/* Watermark */}
      <span
        className="absolute font-serif font-semibold text-[28vw] leading-none text-white/[0.05] whitespace-nowrap select-none pointer-events-none bottom-0 left-0 translate-y-[15%]"
        aria-hidden="true"
      >
        Moments
      </span>

      <div className="relative z-10 text-center max-w-[680px]">
        <AnimatedSection>
          <p className="text-[9px] tracking-[0.35em] uppercase text-white/60 mb-6">
            La Fête Moments
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.12}>
          <h2 className="font-serif font-medium text-[clamp(50px,7vw,96px)] leading-[0.88] tracking-[-0.03em] mb-7">
            Have a moment
            <br />
            worth <em className="italic">celebrating?</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.24}>
          <p className="text-white/75 text-[14px] leading-[1.8] max-w-[420px] mx-auto mb-10">
            Tell us what you&apos;re planning and let&apos;s create something memorable.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.34}>
          <Link
            href="/contact"
            id="cta-start-conversation"
            className="inline-flex items-center gap-3 bg-white text-coral hover:bg-cream text-[10px] tracking-[0.18em] uppercase px-7 py-4 transition-colors duration-200"
          >
            Start a Conversation
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
