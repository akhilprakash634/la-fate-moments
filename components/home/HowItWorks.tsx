import AnimatedSection from '@/components/ui/AnimatedSection'

const steps = [
  {
    num: 'STEP 01',
    title: 'Tell Us About Your Event',
    body: 'Share your occasion, preferred date, location and the kind of celebration you&apos;re imagining. No idea is too small or too grand.',
  },
  {
    num: 'STEP 02',
    title: 'Choose Your Style',
    body: "Tell us what you love — from colours and themes to the atmosphere and details you'd like to include.",
  },
  {
    num: 'STEP 03',
    title: 'We Prepare the Details',
    body: 'Our team brings the concept together and takes care of the setup so everything is ready and beautiful for your celebration.',
  },
  {
    num: 'STEP 04',
    title: 'Arrive & Celebrate',
    body: 'Everything is prepared. You simply arrive, enjoy the moment and make memories that last.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#FFFDFC] px-[7vw] py-24 md:py-32" aria-labelledby="process-heading">
      <AnimatedSection>
        <p className="text-[9px] tracking-[0.38em] uppercase text-[#F16F63] mb-5 font-medium">HOW IT COMES TOGETHER</p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2
          id="process-heading"
          className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(38px,5vw,68px)] leading-[0.92] tracking-[-0.02em] text-[#171717] mb-16 max-w-[560px]"
        >
          Your Celebration<br />
          Starts With a<br />
          <em className="italic text-[#F16F63]">Conversation.</em>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border-t border-[#F7F4F2]">
        {steps.map((step, i) => (
          <AnimatedSection
            key={step.num}
            delay={i * 0.1}
            className={`pt-10 pb-8 ${i < 3 ? 'md:border-r border-[#F7F4F2]' : ''} ${i > 0 ? 'md:pl-8' : ''} ${i < steps.length - 1 ? 'border-b sm:border-b-0 border-[#F7F4F2]' : ''} pr-6`}
          >
            <p className="text-[#F16F63] text-[10px] tracking-[0.22em] uppercase font-medium mb-6">{step.num}</p>
            <div className="w-8 h-px bg-[#F16F63] mb-7" aria-hidden="true" />
            <h3 className="font-[family-name:var(--font-playfair)] font-medium text-[1.3rem] text-[#171717] mb-4 leading-snug">
              {step.title}
            </h3>
            <p className="text-[#716A67] text-sm leading-[1.8]" dangerouslySetInnerHTML={{ __html: step.body }} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
