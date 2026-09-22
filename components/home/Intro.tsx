import AnimatedSection from '@/components/ui/AnimatedSection'

export default function Intro() {
  return (
    <section className="bg-cream px-[7vw] py-28 md:py-36" aria-labelledby="intro-heading">
      <AnimatedSection delay={0.1}>
        <p className="text-[9px] tracking-[0.35em] uppercase text-coral mb-6 font-medium">
          The La Fête Moments
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.22}>
        <h2
          id="intro-heading"
          className="font-serif font-medium text-[clamp(46px,6vw,84px)] leading-[0.92] tracking-[-0.03em] text-ink max-w-[680px] mb-10"
        >
          Every celebration
          <br />
          has a <em className="italic text-coral">story.</em>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.34}>
        <p className="text-muted text-[15px] leading-[1.85] max-w-[520px]">
          From intimate gatherings to beautifully styled celebrations, we create moments designed
          around the people, details and memories that matter.
        </p>
      </AnimatedSection>
    </section>
  )
}
