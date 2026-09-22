import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/contact/ContactForm'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Image from 'next/image'
import { MapPin, Phone, Instagram } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell us a little about your celebration. Whether you already have a complete idea or you\'re still figuring out the details, we\'d love to hear from you.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFDFC]">

        {/* ── Hero ── */}
        <section className="bg-[#F7F4F2] pt-40 md:pt-52 pb-24 md:pb-32 px-[7vw]">
          <div className="max-w-4xl">
            <AnimatedSection>
              <p className="text-[9px] tracking-[0.38em] uppercase text-[#F16F63] mb-6 font-medium">LET&apos;S TALK</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(42px,6vw,84px)] leading-[0.92] tracking-[-0.02em] text-[#171717] mb-8">
                Planning<br />
                <em className="italic text-[#F16F63]">Something Special?</em>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-[#716A67] text-[15px] leading-[1.8] max-w-[500px]">
                Tell us a little about your celebration. Whether you already have a complete idea or you&apos;re still figuring out the details, we&apos;d love to hear from you.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Contact Section ── */}
        <section className="py-24 md:py-32 px-[7vw] max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left: Details */}
            <div className="lg:w-1/3 shrink-0">
              <AnimatedSection delay={0.1}>
                
                {/* Logo & Info */}
                <div className="mb-14">
                  <Image
                    src="/logo.png"
                    alt="La Fête Moments"
                    width={180}
                    height={56}
                    className="h-10 w-auto object-contain mb-6"
                  />
                  <p className="text-[#171717] text-[10px] tracking-[0.25em] uppercase font-medium">Creations for Celebrations.</p>
                  <p className="text-[#716A67] text-[10px] tracking-[0.25em] uppercase mt-1">Abu Dhabi, UAE</p>
                </div>

                {/* Visit Us */}
                <div className="mb-10">
                  <h3 className="text-[#F16F63] text-[9px] tracking-[0.25em] uppercase font-medium mb-4">VISIT US</h3>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#171717] mt-0.5 shrink-0" strokeWidth={1.5} />
                    <p className="text-[#716A67] text-[14px] leading-[1.8]">
                      Showroom 4<br />
                      Al Tadharri St<br />
                      Al Zahiyah – E15<br />
                      Abu Dhabi, UAE
                    </p>
                  </div>
                </div>

                {/* Connect */}
                <div>
                  <h3 className="text-[#F16F63] text-[9px] tracking-[0.25em] uppercase font-medium mb-4">CALL / WHATSAPP</h3>
                  <div className="flex flex-col gap-4">
                    <a href="tel:+971501198447" className="flex items-center gap-3 text-[#716A67] hover:text-[#F16F63] transition-colors w-fit">
                      <Phone size={15} strokeWidth={1.5} className="text-[#171717]" />
                      <span className="text-[14px] tracking-wide">+971 50 119 8447</span>
                    </a>
                    <a href="https://instagram.com/lafetemoments" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#716A67] hover:text-[#F16F63] transition-colors w-fit">
                      <Instagram size={15} strokeWidth={1.5} className="text-[#171717]" />
                      <span className="text-[14px] tracking-wide">@lafetemoments</span>
                    </a>
                  </div>
                </div>

              </AnimatedSection>
            </div>

            {/* Right: Form */}
            <div className="flex-1 lg:pl-12 lg:border-l border-[#F7F4F2]">
              <AnimatedSection delay={0.2}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
