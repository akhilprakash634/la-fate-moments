'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { href: '/moments', label: 'Moments' },
  { href: '/services', label: 'Services' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

const HERO_PAGES = ['/', '/moments', '/services', '/our-story', '/contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHeroPage = HERO_PAGES.includes(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Transparent on hero pages before scroll → frosted after scroll
  const transparent = isHeroPage && !scrolled
  const navBg = transparent
    ? 'bg-transparent'
    : 'bg-[#FFFDFC]/92 backdrop-blur-md border-b border-[#171717]/8 shadow-[0_1px_20px_rgba(0,0,0,0.04)]'

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navBg}`}>
        <div className="flex items-center justify-between px-[5vw] h-[72px] md:h-[80px]">

          {/* ── Logo ── */}
          <Link href="/" aria-label="La Fête Moments — Home" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="La Fête Moments"
              width={190}
              height={60}
              priority
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10.5px] tracking-[0.18em] uppercase font-medium transition-colors duration-200
                  ${transparent ? 'text-white/90 hover:text-white' : 'text-[#171717] hover:text-[#F16F63]'}
                  ${pathname === link.href ? 'text-[#F16F63]' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`inline-flex items-center gap-1.5 text-[10px] tracking-[0.16em] uppercase font-medium px-5 py-2.5 transition-all duration-200
                ${transparent
                  ? 'bg-white/20 border border-white/40 text-white hover:bg-white hover:text-[#F16F63]'
                  : 'bg-[#F16F63] text-white hover:bg-[#d95e52]'
                }`}
            >
              Plan a Moment
              <ArrowUpRight size={11} strokeWidth={2.5} />
            </Link>
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            id="mobile-menu-open"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            className={`md:hidden p-1 ${transparent ? 'text-white' : 'text-[#171717]'}`}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* ── Mobile fullscreen overlay ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`mobile-overlay fixed inset-0 z-[100] bg-[#F16F63] flex flex-col ${menuOpen ? 'open' : ''}`}
      >
        <div className="flex items-center justify-between px-[6vw] h-[72px]">
          <Image
            src="/logo.png"
            alt="La Fête Moments"
            width={170}
            height={54}
            className="h-10 w-auto object-contain brightness-0 invert"
          />
          <button
            id="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="text-white p-1"
          >
            <X size={26} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-[10vw] gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${i * 50}ms` }}
              className="font-[family-name:var(--font-playfair)] italic text-white text-[11vw] sm:text-6xl leading-tight py-2 hover:opacity-75 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex items-center gap-2 bg-white text-[#F16F63] text-[10px] tracking-widest uppercase px-6 py-4 w-fit font-medium hover:bg-[#FFFDFC] transition-colors"
          >
            Start a Conversation
            <ArrowUpRight size={12} strokeWidth={2.5} />
          </Link>
        </div>

        <p className="px-[10vw] py-8 text-white/40 text-[9px] tracking-[0.28em] uppercase">
          Abu Dhabi, UAE · Creations for Celebrations
        </p>
      </div>
    </>
  )
}