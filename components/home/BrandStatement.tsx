import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function BrandStatement() {
  return (
    <section className="relative w-full aspect-[16/9] min-h-[500px] overflow-hidden" aria-label="Brand statement">
      {/* Full image */}
      <Image
        src="/moments/wedding.jpg"
        alt="Creating beautiful celebration moments — La Fête Moments"
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center pl-[8vw] pr-[6vw] md:pr-[40%]">
        <AnimatedSection>
          <p className="text-[9px] tracking-[0.38em] uppercase text-[#F16F63] mb-6">La Fête Moments</p>
        </AnimatedSection>
        <AnimatedSection delay={0.12}>
          <h2 className="font-[family-name:var(--font-playfair)] font-medium text-white text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[-0.02em] mb-6">
            Creating Beautiful<br />
            Moments You&apos;ll<br />
            <em className="italic text-[#F16F63]">Remember Forever.</em>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.22}>
          <p className="text-white/65 text-[14px] leading-[1.8] max-w-[420px] mb-10">
            Elegant décor, memorable celebrations and thoughtful details — created to make your special moments even more meaningful.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <Link
            href="/moments"
            className="inline-flex items-center gap-2.5 bg-[#F16F63] hover:bg-[#d95e52] text-white text-[10px] tracking-[0.2em] uppercase px-6 py-4 transition-colors w-fit"
          >
            VIEW OUR MOMENTS
            <ArrowRight size={12} strokeWidth={2.5} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
