import Hero from '@/components/home/Hero'
import Introduction from '@/components/home/Introduction'
import FeaturedMoments from '@/components/home/FeaturedMoments'
import FeaturedEvent from '@/components/home/FeaturedEvent'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhatWeOffer from '@/components/home/WhatWeOffer'
import HowItWorks from '@/components/home/HowItWorks'
import BrandStatement from '@/components/home/BrandStatement'
import WhyLaFete from '@/components/home/WhyLaFete'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <FeaturedMoments />
        <FeaturedEvent />
        <ServicesPreview />
        <WhatWeOffer />
        <HowItWorks />
        <BrandStatement />
        <WhyLaFete />
      </main>
      <Footer />
    </>
  )
}