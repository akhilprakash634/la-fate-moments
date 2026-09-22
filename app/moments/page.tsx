import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { moments } from '@/lib/moments-data'

export const metadata: Metadata = {
  title: 'Moments',
  description: 'A collection of celebrations, beautiful details and memories created by La Fête Moments.',
}

export default function MomentsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="bg-[#FFFDFC] pt-40 md:pt-52 pb-16 px-[7vw]">
          <AnimatedSection>
            <p className="text-[9px] tracking-[0.38em] uppercase text-[#F16F63] mb-6 font-medium">OUR PORTFOLIO</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(46px,6vw,84px)] leading-[0.92] tracking-[-0.02em] text-[#171717] mb-8">
              Moments<br />
              <em className="italic text-[#F16F63]">We&apos;ve Created.</em>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-[#716A67] text-[15px] leading-[1.8] max-w-[480px]">
              A collection of celebrations, beautiful details and memories created by La Fête Moments.
            </p>
          </AnimatedSection>
        </section>

        {/* ── Portfolio Grid ── */}
        <section className="bg-[#FFFDFC] px-[5vw] pb-32">
          {/* We'll use a simple clean editorial grid here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 md:gap-x-12">
            {moments.map((moment, i) => (
              <AnimatedSection key={moment.slug} delay={0.1} className="group">
                <Link href={`/moments/${moment.slug}`} className="block">
                  <div className={`relative w-full ${i % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[4/5]'} overflow-hidden bg-[#F7F4F2]`}>
                    <Image
                      src={moment.cover}
                      alt={moment.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[#F16F63]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-white text-[10px] tracking-[0.22em] uppercase font-medium">
                        VIEW COLLECTION
                        <ArrowRight size={12} strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                  <div className="pt-6">
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#F16F63] mb-2 font-medium">{moment.category}</p>
                    <h2 className="font-[family-name:var(--font-playfair)] font-medium text-2xl text-[#171717] mb-1.5 group-hover:text-[#F16F63] transition-colors">
                      {moment.title}
                    </h2>
                    <p className="text-[#716A67] text-[11px] tracking-wide">
                      {moment.location} · {moment.images.length} Photos
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
