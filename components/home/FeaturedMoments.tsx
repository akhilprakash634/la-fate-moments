'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { moments } from '@/lib/moments-data'
import type { EventCategory } from '@/lib/moments-data'
import AnimatedSection from '@/components/ui/AnimatedSection'

type Filter = 'ALL' | EventCategory

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'ALL' },
  { label: 'Birthdays', value: 'Birthday' },
  { label: 'Private Parties', value: 'Private Party' },
  { label: 'Weddings', value: 'Wedding' },
  { label: 'Anniversaries', value: 'Anniversary' },
  { label: 'Corporate', value: 'Corporate' },
  { label: 'Special Occasions', value: 'Special Occasion' },
]

// Editorial masonry pattern — alternating layout
const GRID = [
  { col: 'col-span-12 md:col-span-7', aspect: 'aspect-[4/3]' },
  { col: 'col-span-12 md:col-span-5', aspect: 'aspect-[3/4]' },
  { col: 'col-span-12 md:col-span-4', aspect: 'aspect-[3/4]' },
  { col: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
  { col: 'col-span-12 md:col-span-4', aspect: 'aspect-[3/4]' },
  { col: 'col-span-12 md:col-span-5', aspect: 'aspect-[4/3]' },
  { col: 'col-span-12 md:col-span-7', aspect: 'aspect-[16/9]' },
]

export default function FeaturedMoments() {
  const [filter, setFilter] = useState<Filter>('ALL')

  const filtered = filter === 'ALL' ? moments : moments.filter((m) => m.category === filter)

  return (
    <section className="bg-[#F7F4F2] px-[5vw] py-24 md:py-32" aria-labelledby="moments-heading">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <AnimatedSection>
            <p className="text-[9px] tracking-[0.38em] uppercase text-[#F16F63] mb-4 font-medium">
              A LOOK AT OUR CELEBRATIONS
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              id="moments-heading"
              className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(38px,5vw,68px)] leading-[0.92] tracking-[-0.02em] text-[#171717]"
            >
              Moments We&apos;ve<br />
              <em className="italic text-[#F16F63]">Created.</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.18}>
            <p className="text-[#716A67] text-sm leading-relaxed max-w-[460px] mt-5">
              Explore a selection of celebrations, décor concepts and beautifully styled spaces created by La Fête Moments.
            </p>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.15}>
          <Link
            href="/moments"
            className="inline-flex items-center gap-2 text-[#F16F63] text-[10px] tracking-[0.18em] uppercase border-b border-[#F16F63] pb-1 hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            View all moments
            <ArrowRight size={11} strokeWidth={2.5} />
          </Link>
        </AnimatedSection>
      </div>

      {/* Filters */}
      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
              className={`text-[9px] tracking-[0.16em] uppercase px-4 py-2 border transition-all duration-200 ${
                filter === f.value
                  ? 'bg-[#F16F63] border-[#F16F63] text-white'
                  : 'border-[#716A67]/30 text-[#716A67] hover:border-[#F16F63] hover:text-[#F16F63]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Masonry grid */}
      <div className="grid grid-cols-12 gap-3 md:gap-4">
        {filtered.map((moment, i) => {
          const { col, aspect } = GRID[i % GRID.length]
          return (
            <AnimatedSection key={moment.slug} delay={i * 0.07} className={`group ${col}`}>
              <Link
                href={`/moments/${moment.slug}`}
                aria-label={`View ${moment.title} — ${moment.category}`}
                className="block"
              >
                {/* Image */}
                <div className={`relative ${aspect} overflow-hidden bg-[#F7F4F2]`}>
                  <Image
                    src={moment.cover}
                    alt={moment.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                  {/* Coral hover overlay */}
                  <div className="absolute inset-0 bg-[#F16F63]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 text-white text-[10px] tracking-[0.22em] uppercase font-medium">
                      VIEW MOMENT
                      <ArrowRight size={12} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
                {/* Meta */}
                <div className="pt-4 pb-2">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#F16F63] mb-1.5">{moment.category}</p>
                  <h3 className="font-[family-name:var(--font-playfair)] font-medium text-xl text-[#171717] leading-tight mb-1">
                    {moment.title}
                  </h3>
                  <p className="text-[#716A67] text-[11px] tracking-wide">
                    {moment.location} · {moment.date} · {moment.images.length} Photos
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
}
