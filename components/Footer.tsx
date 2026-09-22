'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, MessageCircle, MapPin, ArrowUpRight, Phone } from 'lucide-react'

const marqueeItems = Array(8).fill('MOMENTS · CELEBRATIONS · MEMORIES · LA FÊTE · ')

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <footer ref={ref} aria-label="Site footer">

      {/* ── Coral CTA Band ── */}
      <section
        className="bg-[#F16F63] relative overflow-hidden py-24 md:py-32 px-[7vw] text-center"
        aria-label="Call to action"
      >
        {/* Watermark */}
        <span
          aria-hidden="true"
          className="absolute font-[family-name:var(--font-playfair)] font-bold text-[22vw] leading-none text-white/[0.06] whitespace-nowrap select-none pointer-events-none left-1/2 -translate-x-1/2 bottom-0 translate-y-[20%]"
        >
          Moments
        </span>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[9px] tracking-[0.35em] uppercase text-white/60 mb-6">La Fête Moments</p>
          <h2 className="font-[family-name:var(--font-playfair)] font-medium text-white text-[clamp(42px,6.5vw,88px)] leading-[0.9] tracking-[-0.02em] mb-8">
            LET&apos;S CREATE<br />A MOMENT<br />
            <em className="italic">TO REMEMBER.</em>
          </h2>
          <p className="text-white/70 text-[14px] leading-relaxed max-w-[380px] mx-auto mb-10">
            Tell us what you&apos;re planning and let&apos;s create something beautifully yours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white text-[#F16F63] text-[10px] tracking-[0.18em] uppercase px-7 py-4 font-medium hover:bg-[#FFFDFC] transition-colors"
            >
              START A CONVERSATION
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </Link>
            <a
              href="https://wa.me/971501198447"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/40 text-white text-[10px] tracking-[0.18em] uppercase px-7 py-4 hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={12} strokeWidth={2} />
              WHATSAPP US
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Marquee ── */}
      <div className="bg-[#171717] border-b border-white/8 py-5 overflow-hidden select-none" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((text, i) => (
            <span key={i} className="font-[family-name:var(--font-playfair)] italic text-3xl md:text-4xl text-white/10 whitespace-nowrap pr-6">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Dark Footer ── */}
      <div className="bg-[#171717] text-white px-[5vw] pt-16 pb-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 pb-14 border-b border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1 flex flex-col gap-4">
            <Image
              src="/logo.png"
              alt="La Fête Moments"
              width={180}
              height={56}
              className="h-11 w-auto object-contain brightness-0 invert opacity-85"
            />
            <p className="text-white/35 text-[9px] tracking-[0.28em] uppercase">Creations for Celebrations</p>
            <div className="flex items-start gap-2 text-white/40 text-[12px] mt-1">
              <MapPin size={12} className="text-[#F16F63] shrink-0 mt-0.5" />
              <span>Showroom 4, Al Tadharri St<br />Al Zahiyah – E15<br />Abu Dhabi, UAE</span>
            </div>
          </div>

          {/* Pages */}
          <div className="flex flex-col gap-4">
            <p className="text-[9px] tracking-[0.28em] uppercase text-white/30">Pages</p>
            {[
              { href: '/moments', label: 'Moments' },
              { href: '/services', label: 'Services' },
              { href: '/our-story', label: 'Our Story' },
              { href: '/contact', label: 'Contact' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-white/55 text-sm hover:text-[#F16F63] transition-colors w-fit">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Celebrate */}
          <div className="flex flex-col gap-4">
            <p className="text-[9px] tracking-[0.28em] uppercase text-white/30">We Create</p>
            {['Birthday Celebrations', 'Private Parties', "Valentine's", 'Wedding Anniversaries', 'Corporate Events', 'Special Occasions'].map((s) => (
              <span key={s} className="text-white/40 text-sm">{s}</span>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <p className="text-[9px] tracking-[0.28em] uppercase text-white/30">Connect</p>
            <a href="https://wa.me/971501198447" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/55 hover:text-[#F16F63] text-sm transition-colors">
              <MessageCircle size={13} className="text-[#F16F63] shrink-0" />
              +971 50 119 8447
            </a>
            <a href="https://instagram.com/lafetemoments" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/55 hover:text-[#F16F63] text-sm transition-colors">
              <Instagram size={13} className="text-[#F16F63] shrink-0" />
              @lafetemoments
            </a>
            <a href="tel:+971501198447"
              className="flex items-center gap-2.5 text-white/55 hover:text-[#F16F63] text-sm transition-colors">
              <Phone size={13} className="text-[#F16F63] shrink-0" />
              Call Us
            </a>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-5">
          <p className="text-white/25 text-[9px] tracking-[0.2em] uppercase">
            © 2026 La Fête Moments. All rights reserved.
          </p>
          <p className="text-white/20 text-[9px] tracking-[0.2em] uppercase">Abu Dhabi · UAE</p>
        </div>
      </div>
    </footer>
  )
}