'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { moments } from '@/lib/moments-data'
import type { EventCategory } from '@/lib/moments-data'
import AnimatedSection from '@/components/ui/AnimatedSection'

type Filter = 'ALL' | EventCategory

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'ALL' },
  { label: 'Birthdays', value: 'Birthday' },
  { label: 'Private Events', value: 'Private Event' },
  { label: 'Weddings', value: 'Wedding' },
  { label: 'Corporate', value: 'Corporate' },
  { label: 'Anniversaries', value: 'Anniversary' },
  { label: 'Special Occasions', value: 'Special Occasion' },
]

// Masonry layout spans — repeating pattern
const GRID_PATTERNS = [
  { col: 'col-span-12 md:col-span-7', aspect: 'aspect-[16/10]' },
  { col: 'col-span-12 md:col-span-5', aspect: 'aspect-[3/4]' },
  { col: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/5]' },
  { col: 'col-span-12 md:col-span-8', aspect: 'aspect-[16/9]' },
  { col: 'col-span-12 md:col-span-6', aspect: 'aspect-[4/3]' },
  { col: 'col-span-12 md:col-span-6', aspect: 'aspect-[3/4]' },
]

export default function MomentsClient() {
  const [activeFilter, setActiveFilter] = useState<Filter>('ALL')

  const filtered =
    activeFilter === 'ALL' ? moments : moments.filter((m) => m.category === activeFilter)

  return (
    <>
      {/* ── Filters ── */}
      <div className="px-[5vw] pb-12">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter moments by category"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`text-[9px] tracking-[0.22em] uppercase px-5 py-2.5 border transition-all duration-200 ${
                activeFilter === f.value
                  ? 'bg-coral border-coral text-white'
                  : 'border-muted/30 text-muted hover:border-coral hover:text-coral'
              }`}
              aria-pressed={activeFilter === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="px-[5vw] pb-24 grid grid-cols-12 gap-5 md:gap-6">
        {filtered.map((moment, i) => {
          const pattern = GRID_PATTERNS[i % GRID_PATTERNS.length]

          return (
            <AnimatedSection
              key={moment.slug}
              delay={i * 0.07}
              className={`group ${pattern.col}`}
            >
              <Link
                href={`/moments/${moment.slug}`}
                className="block"
                aria-label={`View ${moment.title} — ${moment.category}`}
              >
                <div className={`relative ${pattern.aspect} overflow-hidden bg-neutral`}>
                  <Image
                    src={moment.cover}
                    alt={moment.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-coral/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2.5 text-white text-[10px] tracking-[0.22em] uppercase font-medium">
                      View Collection
                      <ArrowUpRight size={12} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] tracking-[0.2em] uppercase text-coral mb-1.5">
                        {moment.category}
                      </p>
                      <h2 className="font-serif font-medium text-xl md:text-2xl text-ink leading-tight">
                        {moment.title}
                      </h2>
                      <p className="text-muted text-[11px] tracking-wider mt-1">
                        {moment.location} · {moment.date}
                      </p>
                    </div>
                    <span className="text-muted/50 text-[10px] tracking-[0.15em] mt-1 shrink-0">
                      {moment.images.length} Photos
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          )
        })}
      </div>
    </>
  )
}
