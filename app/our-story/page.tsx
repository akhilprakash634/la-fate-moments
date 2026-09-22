import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'They\'re about the people, the atmosphere, the details and the memories created when everything comes together.',
}

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFDFC]">

        {/* ── Hero ── */}
        <section className="bg-[#F7F4F2] pt-40 md:pt-52 pb-24 md:pb-32 px-[7vw]">
          <div className="max-w-4xl">
            <AnimatedSection>
              <p className="text-[9px] tracking-[0.38em] uppercase text-[#F16F63] mb-6 font-medium">ABOUT LA FÊTE MOMENTS</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(42px,6vw,84px)] leading-[0.92] tracking-[-0.02em] text-[#171717] mb-8">
                Celebrations<br />
                Are About More<br />
                <em className="italic text-[#F16F63]">Than Décor.</em>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-[#716A67] text-[15px] leading-[1.8] max-w-[500px]">
                They&apos;re about the people, the atmosphere, the details and the memories created when everything comes together.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Image Break ── */}
        <section className="w-full aspect-[21/9] min-h-[400px] relative">
          <Image
            src="/moments/anniversary.jpg"
            alt="La Fête Moments setup"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </section>

        {/* ── Our Story ── */}
        <section className="py-24 md:py-32 px-[7vw] max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(36px,5vw,56px)] leading-[0.95] tracking-[-0.02em] text-[#171717] mb-10">
              Creating Moments<br />
              <em className="italic text-[#F16F63]">With Intention.</em>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="text-[#716A67] text-[15px] leading-[2] space-y-6 max-w-2xl mx-auto">
              <p>At La Fête Moments, we believe every celebration deserves to feel personal.</p>
              <p>
                A birthday should feel like their birthday. An anniversary should feel like your story. A private gathering should feel like your kind of evening.
              </p>
              <p>That&apos;s why we don&apos;t believe in one-size-fits-all celebrations.</p>
              <p>
                We take the occasion, your preferences and your vision and turn them into a thoughtfully styled experience.
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* ── Our Approach ── */}
        <section className="bg-[#171717] text-white py-24 md:py-32 px-[7vw]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            <AnimatedSection delay={0.1} className="border-t border-white/20 pt-8">
              <h3 className="text-[#F16F63] text-[11px] tracking-[0.25em] uppercase font-semibold mb-5">YOUR OCCASION.</h3>
              <p className="text-white/60 text-sm leading-[1.8]">
                We start by understanding what you&apos;re celebrating and why it matters. The foundation of a great setup is the purpose behind it.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="border-t border-white/20 pt-8">
              <h3 className="text-[#F16F63] text-[11px] tracking-[0.25em] uppercase font-semibold mb-5">YOUR STYLE.</h3>
              <p className="text-white/60 text-sm leading-[1.8]">
                We build around your preferred colors, theme, atmosphere and personality. Every detail is chosen to reflect your taste.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="border-t border-white/20 pt-8">
              <h3 className="text-[#F16F63] text-[11px] tracking-[0.25em] uppercase font-semibold mb-5">YOUR MOMENT.</h3>
              <p className="text-white/60 text-sm leading-[1.8]">
                Then we bring the details together so you can simply arrive, be fully present, and enjoy the celebration with your guests.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Brand Statement Typography ── */}
        <section className="py-24 md:py-32 px-[5vw] overflow-hidden bg-[#F16F63] text-white text-center flex flex-col items-center justify-center">
           <AnimatedSection>
             <h2 className="font-[family-name:var(--font-playfair)] font-bold text-[clamp(48px,10vw,140px)] leading-[0.85] tracking-tight uppercase opacity-90">
                YOUR OCCASION.<br/>
                YOUR STYLE.<br/>
                YOUR MOMENT.
             </h2>
           </AnimatedSection>
        </section>

        {/* ── Our Promise ── */}
        <section className="py-24 md:py-32 px-[7vw] max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(32px,4vw,48px)] leading-[1.1] text-[#171717] mb-10">
              Thoughtful Details.<br />
              Beautiful Celebrations.<br />
              <em className="italic text-[#F16F63]">Memories That Stay.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-[#716A67] text-[15px] leading-[2] max-w-2xl mx-auto mb-16">
              From the first conversation to the final setup, our focus is on making the experience feel personal, beautiful and effortless. Because when the details are taken care of, you get to be fully present for the moment.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#171717] font-semibold mb-6">Let&apos;s create something memorable.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#F16F63] hover:bg-[#d95e52] text-white text-[10px] tracking-[0.2em] uppercase px-8 py-4 transition-colors font-medium"
            >
              PLAN YOUR CELEBRATION
              <ArrowRight size={12} strokeWidth={2.5} />
            </Link>
          </AnimatedSection>
        </section>

      </main>
      <Footer />
    </>
  )
}
