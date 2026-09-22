import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const services = [
  {
    number: '01',
    title: 'Private Parties',
    description: 'Beautifully styled spaces for intimate celebrations, dinners, proposals, family gatherings and special occasions.',
  },
  {
    number: '02',
    title: 'Birthday Celebrations',
    description: 'Personalized birthday décor designed around the theme, personality and style of the celebration.',
  },
  {
    number: '03',
    title: "Valentine's Celebrations",
    description: 'Romantic décor concepts designed to create an intimate and memorable Valentine\'s experience.',
  },
  {
    number: '04',
    title: 'Wedding Anniversaries',
    description: 'Romantic and personalized setups for anniversaries, relationship milestones and special evenings together.',
  },
  {
    number: '05',
    title: 'Corporate Events',
    description: 'Thoughtfully styled spaces for corporate gatherings, celebrations and special business occasions.',
  },
]

export default function ServicesPreview() {
  return (
    <section className="bg-[#FFFDFC] px-[7vw] py-24 md:py-32" aria-labelledby="services-heading">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <AnimatedSection>
            <p className="text-[9px] tracking-[0.38em] uppercase text-[#F16F63] mb-4 font-medium">WHAT WE CREATE</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              id="services-heading"
              className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(38px,5vw,68px)] leading-[0.92] tracking-[-0.02em] text-[#171717]"
            >
              Celebrations,<br />
              <em className="italic text-[#F16F63]">Made Personal.</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.18}>
            <p className="text-[#716A67] text-sm leading-relaxed max-w-[460px] mt-5">
              Whether you&apos;re planning an intimate gathering or a larger celebration, we create beautiful setups designed around the occasion and the people you&apos;re celebrating with.
            </p>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.15}>
          <Link href="/services" className="inline-flex items-center gap-2 text-[#F16F63] text-[10px] tracking-[0.18em] uppercase border-b border-[#F16F63] pb-1 hover:opacity-70 transition-opacity whitespace-nowrap">
            All Services
            <ArrowRight size={11} strokeWidth={2.5} />
          </Link>
        </AnimatedSection>
      </div>

      <div className="border-t border-[#F7F4F2]">
        {services.map((svc, i) => (
          <AnimatedSection key={svc.number} delay={i * 0.08}>
            <div className="flex items-start gap-6 md:gap-10 py-7 border-b border-[#F7F4F2] group hover:bg-[#F7F4F2]/60 transition-colors duration-200 px-2 -mx-2 rounded-sm cursor-default">
              <span className="text-[#F16F63] text-[11px] tracking-[0.18em] w-8 shrink-0 pt-0.5">{svc.number}</span>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] font-medium text-xl text-[#171717] mb-1.5">
                    {svc.title}
                  </h3>
                  <p className="text-[#716A67] text-sm leading-relaxed max-w-[520px]">{svc.description}</p>
                </div>
                <ArrowRight size={15} className="text-[#F16F63] shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" aria-hidden="true" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
