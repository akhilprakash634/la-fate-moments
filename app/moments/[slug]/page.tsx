import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EventDetailClient from '@/components/moments/EventDetailClient'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { getMomentBySlug, moments } from '@/lib/moments-data'

export async function generateStaticParams() {
  return moments.map((m) => ({ slug: m.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Metadata can't easily await here in standard layout without async, but let's just make the type match the expected Next.js 15 route signature.
  // Actually, generateMetadata can be async in Next.js 15.
  return params.then((p) => {
    const m = getMomentBySlug(p.slug)
    if (!m) return { title: 'Not Found' }
    return {
      title: `${m.title} | ${m.category}`,
      description: m.description,
    }
  })
}

export default async function MomentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const m = getMomentBySlug(resolvedParams.slug)
  if (!m) notFound()

  return (
    <>
      <Navbar />
      <main className="bg-[#FFFDFC]">

        {/* ── Hero ── */}
        <section className="relative w-full h-[85vh] min-h-[600px]">
          <Image
            src={m.cover}
            alt={m.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex flex-col justify-end pb-24 px-[5vw] text-white">
            <AnimatedSection>
              <h1 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(42px,7vw,96px)] leading-[0.9] tracking-[-0.02em] mb-6 uppercase max-w-4xl">
                {m.title}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-white/70">
                <span>{m.category}</span>
                <span className="text-[#F16F63]">·</span>
                <span>{m.location}</span>
                <span className="text-[#F16F63]">·</span>
                <span>{m.date}</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="py-24 md:py-32 px-[5vw] max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[9px] tracking-[0.38em] uppercase text-[#F16F63] mb-6 font-medium">THE MOMENT</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="font-[family-name:var(--font-playfair)] text-[clamp(24px,3vw,36px)] leading-[1.6] text-[#171717] mb-8">
              {m.description}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-[#716A67] text-[15px] leading-[1.8] max-w-2xl mx-auto">
              {m.story}
            </p>
          </AnimatedSection>
        </section>

        {/* ── Gallery (Client Component for Lightbox) ── */}
        <section className="pb-32 px-[5vw]">
          <AnimatedSection>
            <p className="text-[9px] tracking-[0.38em] uppercase text-[#F16F63] mb-8 font-medium text-center">THE GALLERY</p>
          </AnimatedSection>
          <EventDetailClient images={m.images} title={m.title} />
        </section>
      </main>
      <Footer />
    </>
  )
}
