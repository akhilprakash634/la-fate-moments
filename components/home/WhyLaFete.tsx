import AnimatedSection from '@/components/ui/AnimatedSection'

const approaches = [
  {
    title: 'Personal',
    body: 'Every setup is shaped around your occasion, style and preferences. We build around what matters to you.',
  },
  {
    title: 'Thoughtful',
    body: 'We focus on the details that turn a beautiful setup into a memorable experience for you and your guests.',
  },
  {
    title: 'Seamless',
    body: 'From the initial planning to the final setup, we handle the details so you can simply enjoy your celebration.',
  },
]

export default function WhyLaFete() {
  return (
    <section className="bg-[#FFFDFC] px-[7vw] py-24 md:py-32" aria-labelledby="approach-heading">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <AnimatedSection>
          <p className="text-[9px] tracking-[0.38em] uppercase text-[#F16F63] mb-5 font-medium">THE LA FÊTE APPROACH</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2
            id="approach-heading"
            className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(36px,4.5vw,60px)] leading-[0.95] tracking-[-0.02em] text-[#171717]"
          >
            It&apos;s Your Celebration.<br />
            <em className="italic text-[#F16F63]">We Make It Feel Like Yours.</em>
          </h2>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
        {approaches.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.15} className="text-center px-4">
            <h3 className="font-[family-name:var(--font-playfair)] font-medium text-2xl text-[#171717] mb-5">
              {item.title}
            </h3>
            <p className="text-[#716A67] text-sm leading-[1.8] max-w-[280px] mx-auto">
              {item.body}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
