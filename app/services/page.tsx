import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Celebration Services',
  description: 'From intimate private moments to beautifully styled celebrations, we create experiences that reflect the occasion.',
}

const services = [
  {
    num: '01',
    id: 'private-parties',
    title: 'PRIVATE PARTIES',
    tagline: 'Beautiful Spaces for Meaningful Celebrations.',
    desc: "Whether it's an intimate dinner, proposal, family gathering or a special evening with friends, we create private party setups designed around your occasion.",
    creates: ['Décor styling', 'Table setups', 'Romantic arrangements', 'Themed concepts', 'Personalized details', 'Celebration setup'],
    img: '/moments/private.jpg',
    cta: 'PLAN A PRIVATE PARTY',
  },
  {
    num: '02',
    id: 'birthdays',
    title: 'BIRTHDAY CELEBRATIONS',
    tagline: 'Make Their Day Feel Truly Theirs.',
    desc: 'From elegant and minimal to fun and themed, birthday décor can be designed around the personality, age and style of the celebration.',
    creates: ['Birthday backdrops', 'Balloon styling', 'Table décor', 'Cake table setups', 'Personalized décor', 'Theme-based styling'],
    img: '/moments/birthday.jpg',
    cta: 'PLAN A BIRTHDAY',
  },
  {
    num: '03',
    id: 'valentines',
    title: "VALENTINE'S CELEBRATIONS",
    tagline: 'Create a Moment for Two.',
    desc: 'Romantic setups designed to make Valentine\'s Day feel intimate, thoughtful and memorable.',
    creates: ['Romantic table setups', 'Candlelight styling', 'Floral arrangements', 'Balloon décor', 'Personalized details', 'Surprise setups'],
    img: '/moments/anniversary.jpg',
    cta: "PLAN YOUR VALENTINE'S",
  },
  {
    num: '04',
    id: 'anniversaries',
    title: 'WEDDING ANNIVERSARIES',
    tagline: "Celebrate the Story You've Built Together.",
    desc: 'From intimate anniversary dinners to beautifully styled surprise setups, create a moment that celebrates your journey together.',
    creates: ['Romantic décor', 'Dinner setups', 'Floral styling', 'Personalized messages', 'Candlelight arrangements', 'Surprise décor'],
    img: '/moments/anniversary.jpg',
    cta: 'PLAN YOUR ANNIVERSARY',
  },
  {
    num: '05',
    id: 'corporate',
    title: 'CORPORATE EVENTS',
    tagline: 'Professional Spaces.\nMemorable Experiences.',
    desc: 'Create a welcoming and visually engaging environment for corporate celebrations, gatherings and special business occasions.',
    creates: ['Event styling', 'Branded décor', 'Celebration setups', 'Table styling', 'Corporate gathering décor'],
    img: '/moments/corporate.jpg',
    cta: 'DISCUSS YOUR EVENT',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFDFC]">

        {/* ── Hero ── */}
        <section className="bg-[#F7F4F2] pt-40 md:pt-52 pb-24 md:pb-32 px-[7vw]">
          <div className="max-w-4xl">
            <AnimatedSection>
              <p className="text-[9px] tracking-[0.38em] uppercase text-[#F16F63] mb-6 font-medium">WHAT WE CREATE</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(42px,6vw,84px)] leading-[0.92] tracking-[-0.02em] text-[#171717] mb-8">
                Celebrations<br />
                <em className="italic text-[#F16F63]">Designed Around You.</em>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-[#716A67] text-[15px] leading-[1.8] max-w-[500px]">
                From intimate private moments to beautifully styled celebrations, we create experiences that reflect the occasion, the people and the feeling you want to create.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Services List ── */}
        <section className="py-24 md:py-32">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center min-h-[650px] mb-24 md:mb-0">
              
              {/* Image side (alternating) */}
              <div className={`relative h-full aspect-square md:aspect-auto w-full ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text side */}
              <div className={`px-[8vw] py-10 md:py-20 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <AnimatedSection>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[#F16F63] text-[9px] tracking-[0.2em] font-medium">SERVICE {s.num}</span>
                    <div className="w-8 h-px bg-[#F16F63]/30" />
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#171717] font-semibold mb-4">
                    {s.title}
                  </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                  <h3 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(28px,3vw,42px)] leading-[1.1] text-[#171717] mb-6 whitespace-pre-line">
                    {s.tagline}
                  </h3>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <p className="text-[#716A67] text-[14px] leading-[1.85] mb-8 max-w-[460px]">
                    {s.desc}
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.25}>
                  <div className="bg-[#F7F4F2] p-8 md:p-10 mb-10 max-w-[460px]">
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#F16F63] font-medium mb-6">We can create:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {s.creates.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <div className="w-1 h-1 rounded-full bg-[#F16F63] mt-2 shrink-0" />
                          <span className="text-[#171717] text-[13px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <Link
                    href={`/contact?service=${s.id}`}
                    className="inline-flex items-center gap-2.5 bg-[#171717] hover:bg-[#F16F63] text-white text-[10px] tracking-[0.2em] uppercase px-7 py-4 transition-colors font-medium"
                  >
                    {s.cta}
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          ))}
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-[#171717] text-white text-center py-32 px-[7vw]">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(42px,6vw,72px)] leading-[0.95] tracking-[-0.02em] mb-8">
              Tell us what<br />
              you&apos;re celebrating.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-white/60 text-[15px] leading-[1.8] max-w-[420px] mx-auto mb-12">
              You don&apos;t need to have everything figured out. Share your idea with us and we&apos;ll help you shape the details.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#F16F63] hover:bg-[#d95e52] text-white text-[10px] tracking-[0.2em] uppercase px-8 py-4 transition-colors font-medium"
            >
              START A CONVERSATION
              <ArrowRight size={12} strokeWidth={2.5} />
            </Link>
          </AnimatedSection>
        </section>

      </main>
      <Footer />
    </>
  )
}
