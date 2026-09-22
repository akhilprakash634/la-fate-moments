import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function Introduction() {
  return (
    <section className="bg-[#FFFDFC] py-24 md:py-32 overflow-hidden" aria-labelledby="intro-heading">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

        {/* ── Left: Image ── */}
        <AnimatedSection className="relative aspect-[4/5] md:aspect-auto md:min-h-[640px] overflow-hidden">
          <Image
            src="/moments/anniversary.jpg"
            alt="Beautifully styled celebration event by La Fête Moments"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Small floating label */}
          <div className="absolute bottom-8 right-0 bg-[#F16F63] text-white px-6 py-4 text-[9px] tracking-[0.25em] uppercase">
            Abu Dhabi · UAE
          </div>
        </AnimatedSection>

        {/* ── Right: Content ── */}
        <div className="flex flex-col justify-center px-[8vw] md:px-14 lg:px-20 py-16 md:py-20">
          <AnimatedSection>
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#F16F63] mb-6 font-medium">
              THE LA FÊTE MOMENTS
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <h2
              id="intro-heading"
              className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(38px,4.5vw,64px)] leading-[0.92] tracking-[-0.02em] text-[#171717] mb-8"
            >
              Your Occasion.<br />
              Your Style.<br />
              <em className="italic text-[#F16F63]">Your Moment.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.22}>
            <p className="text-[#716A67] text-[14px] leading-[1.85] mb-5">
              No two celebrations should feel the same. From an intimate dinner for two to a beautifully styled birthday, anniversary or wedding celebration, we create event setups around your occasion, your preferences and your vision.
            </p>
            <p className="text-[#716A67] text-[14px] leading-[1.85] mb-10">
              Every celebration has its own personality. That&apos;s why we pay attention to the details that make yours feel personal — from the overall styling to the smallest finishing touch.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.32}>
            <div className="border-l-2 border-[#F16F63] pl-5">
              <p className="font-[family-name:var(--font-playfair)] italic text-[#171717] text-lg leading-relaxed">
                &ldquo;You enjoy the moment.<br />
                We take care of the details.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
