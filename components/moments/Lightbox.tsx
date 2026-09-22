'use client'

import { useEffect, useCallback, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Share2, MessageCircle, Copy, Check } from 'lucide-react'

interface LightboxProps {
  images: string[]
  initialIndex: number
  title: string
  onClose: () => void
}

export default function Lightbox({ images, initialIndex, title, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex)
  const [copied, setCopied] = useState(false)
  const [showShare, setShowShare] = useState(false)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  }, [images.length])

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handleKey)
    document.body.classList.add('lightbox-open')
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.classList.remove('lightbox-open')
    }
  }, [onClose, prev, next])

  // Touch/swipe support
  let touchStartX = 0
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX
    if (delta > 50) prev()
    else if (delta < -50) next()
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API not available
    }
  }

  const whatsappShare = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(`Check out ${title} by La Fête Moments`)
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="fixed inset-0 z-[200] bg-ink/97 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={`Lightbox — ${title}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Top Bar ── */}
      <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-white/10">
        <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase">
          {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </p>
        <p className="text-white/40 text-[10px] tracking-[0.16em] uppercase hidden sm:block">
          {title}
        </p>
        <div className="flex items-center gap-3">
          {/* Share */}
          <div className="relative">
            <button
              onClick={() => setShowShare((s) => !s)}
              className="text-white/50 hover:text-white transition-colors p-1"
              aria-label="Share"
              id="lightbox-share"
            >
              <Share2 size={16} strokeWidth={1.5} />
            </button>
            {showShare && (
              <div className="absolute right-0 top-8 bg-white text-ink rounded shadow-xl p-3 flex flex-col gap-2 min-w-[160px] z-10">
                <button
                  onClick={whatsappShare}
                  className="flex items-center gap-2.5 text-xs hover:text-coral transition-colors py-1"
                >
                  <MessageCircle size={13} />
                  WhatsApp
                </button>
                <button
                  onClick={copyLink}
                  className="flex items-center gap-2.5 text-xs hover:text-coral transition-colors py-1"
                >
                  {copied ? <Check size={13} className="text-coral" /> : <Copy size={13} />}
                  {copied ? 'Copied!' : 'Copy link'}
                </button>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors p-1"
            aria-label="Close lightbox"
            id="lightbox-close"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* ── Image ── */}
      <div className="flex-1 flex items-center justify-center relative px-4 py-4 min-h-0">
        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-3 md:left-6 z-10 p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Previous image"
          id="lightbox-prev"
        >
          <ChevronLeft size={28} strokeWidth={1.3} />
        </button>

        {/* Image */}
        <div className="relative max-w-[90vw] max-h-[80vh] w-full h-full flex items-center justify-center">
          <Image
            key={current}
            src={images[current]}
            alt={`${title} — photo ${current + 1}`}
            width={1400}
            height={900}
            className="object-contain max-h-[80vh] w-auto max-w-full rounded-sm"
            priority
          />
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-3 md:right-6 z-10 p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Next image"
          id="lightbox-next"
        >
          <ChevronRight size={28} strokeWidth={1.3} />
        </button>
      </div>

      {/* ── Thumbnail Strip ── */}
      <div className="flex gap-1.5 px-4 py-3 overflow-x-auto border-t border-white/10 scrollbar-thin">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`shrink-0 w-12 h-12 md:w-14 md:h-14 relative overflow-hidden rounded-sm transition-opacity duration-150 ${i === current ? 'opacity-100 ring-1 ring-coral' : 'opacity-40 hover:opacity-70'}`}
            aria-label={`Go to image ${i + 1}`}
            aria-pressed={i === current}
          >
            <Image src={img} alt="" fill className="object-cover" sizes="56px" />
          </button>
        ))}
      </div>
    </div>
  )
}
