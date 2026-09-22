'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden" aria-label="Hero">

      {/* Full-screen background image */}
      <Image
        src="/hero.jpg"
        alt="La Fête Moments — luxury celebration event in Abu Dhabi"
        fill
        priority
        quality={95}
        className="object-cover object-center"
        style={{ animation: 'heroZoom 12s ease-out forwards' }}
        sizes="100vw"
      />

      {/* Gradient: strong left → fading right (per brief) */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)',
        }}
      />
      {/* Mobile: stronger bottom gradient */}
      <div
        className="absolute inset-0 z-10 md:hidden"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-center pl-[8vw] pr-[6vw] md:pr-[50%] pb-16 md:pb-0 pt-24"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.p variants={fadeUp} className="text-[9px] tracking-[0.4em] uppercase text-white/65 mb-7">
          CREATIONS FOR CELEBRATIONS · ABU DHABI
        </motion.p>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="font-[family-name:var(--font-playfair)] font-medium text-white text-[clamp(52px,7.5vw,108px)] leading-[0.9] tracking-[-0.02em] mb-7"
        >
          Creating Moments<br />
          That Last<br />
          <em className="text-[#F16F63] italic">Forever.</em>
        </motion.h1>

        {/* Description */}
        <motion.p variants={fadeUp} className="text-white/75 text-[14px] md:text-[15px] leading-[1.8] max-w-[440px] mb-10">
          Beautifully styled celebrations, thoughtful details and unforgettable moments — created around you.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/moments"
            id="hero-explore-moments"
            className="inline-flex items-center gap-2.5 bg-[#F16F63] hover:bg-[#d95e52] text-white text-[10px] tracking-[0.2em] uppercase px-6 py-4 font-medium transition-colors"
          >
            EXPLORE OUR MOMENTS
            <ArrowRight size={13} strokeWidth={2.5} />
          </Link>
          <Link
            href="/contact"
            id="hero-plan-celebration"
            className="inline-flex items-center gap-2.5 border border-white/45 hover:border-white hover:bg-white/8 text-white text-[10px] tracking-[0.2em] uppercase px-6 py-4 transition-all"
          >
            PLAN YOUR CELEBRATION
            <ArrowRight size={13} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom label */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-hidden="true"
      >
        <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase">
          BIRTHDAYS · PRIVATE PARTIES · WEDDINGS · SPECIAL OCCASIONS
        </p>
      </motion.div>
    </section>
  )
}
