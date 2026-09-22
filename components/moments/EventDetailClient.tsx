'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Share2, Copy, Check } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface EventDetailClientProps {
  images: string[]
  title: string
}

export default function EventDetailClient({ images, title }: EventDetailClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i! + 1) % images.length)
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i! - 1 + images.length) % images.length)
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('lightbox-open')
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('lightbox-open')
    }
  }, [lightboxIndex, images.length])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareWhatsApp = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(`Take a look at this beautiful celebration: ${title}\n`)
    window.open(`https://api.whatsapp.com/send?text=${text}${url}`, '_blank')
  }

  return (
    <>
      {/* ── Masonry Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {images.map((src, i) => (
          <AnimatedSection key={i} delay={i * 0.05} className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
            <button
              onClick={() => setLightboxIndex(i)}
              className={`relative w-full block overflow-hidden bg-[#F7F4F2] group ${i === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-[4/5]'}`}
              aria-label={`View image ${i + 1} fullscreen`}
            >
              <Image
                src={src}
                alt={`${title} — Image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#F16F63]/0 group-hover:bg-[#F16F63]/10 transition-colors duration-300" />
            </button>
          </AnimatedSection>
        ))}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-[#171717]/95 backdrop-blur-xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Toolbar */}
            <div className="flex items-center justify-between p-4 md:p-6 text-white shrink-0">
              <span className="text-[10px] tracking-[0.2em] font-medium text-white/50">
                {String(lightboxIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close lightbox"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Main Image */}
            <div className="flex-1 relative flex items-center justify-center p-4 min-h-0">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={images[lightboxIndex]}
                  alt={`${title} — Fullscreen`}
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Prev / Next */}
              <button
                onClick={() => setLightboxIndex((i) => (i! - 1 + images.length) % images.length)}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-[#171717]/50 hover:bg-[#F16F63] text-white rounded-full backdrop-blur-md transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} strokeWidth={2} />
              </button>
              <button
                onClick={() => setLightboxIndex((i) => (i! + 1) % images.length)}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-[#171717]/50 hover:bg-[#F16F63] text-white rounded-full backdrop-blur-md transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} strokeWidth={2} />
              </button>
            </div>

            {/* Share / Footer */}
            <div className="p-6 shrink-0 flex flex-col items-center justify-center gap-4">
              <p className="text-white/40 text-[9px] tracking-[0.25em] uppercase">Share this moment</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={shareWhatsApp}
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white text-[10px] tracking-wider uppercase px-5 py-3 rounded-full transition-colors"
                >
                  <Share2 size={13} strokeWidth={2} />
                  WhatsApp
                </button>
                <button
                  onClick={copyLink}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[10px] tracking-wider uppercase px-5 py-3 rounded-full transition-colors"
                >
                  {copied ? <Check size={13} strokeWidth={2} className="text-[#F16F63]" /> : <Copy size={13} strokeWidth={2} />}
                  {copied ? 'Copied' : 'Copy Link'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
