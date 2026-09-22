import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'La Fête Moments | Creations for Celebrations in Abu Dhabi',
    template: '%s | La Fête Moments',
  },
  description:
    'La Fête Moments creates beautifully styled celebrations, event décor and memorable experiences in Abu Dhabi. Birthdays, weddings, private parties, anniversaries and corporate events.',
  keywords: [
    'La Fête Moments',
    'event styling Abu Dhabi',
    'celebration décor UAE',
    'birthday decoration Abu Dhabi',
    'wedding styling Abu Dhabi',
    'private party Abu Dhabi',
    'anniversary celebration UAE',
    'corporate events Abu Dhabi',
  ],
  authors: [{ name: 'La Fête Moments' }],
  metadataBase: new URL('https://lafetemoments.ae'),
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://lafetemoments.ae',
    siteName: 'La Fête Moments',
    title: 'La Fête Moments | Creations for Celebrations in Abu Dhabi',
    description: 'Beautifully styled celebrations, event décor and memorable experiences in Abu Dhabi.',
    images: [{ url: '/hero.jpg', width: 1200, height: 630, alt: 'La Fête Moments — Creations for Celebrations' }],
  },
  twitter: { card: 'summary_large_image', title: 'La Fête Moments', description: 'Creations for Celebrations — Abu Dhabi' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'La Fête Moments',
  description: 'Celebrations and event styling brand based in Abu Dhabi, UAE.',
  url: 'https://lafetemoments.ae',
  telephone: '+971501198447',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Showroom 4, Al Tadharri St, Al Zahiyah – E15',
    addressLocality: 'Abu Dhabi',
    addressCountry: 'AE',
  },
  sameAs: ['https://www.instagram.com/lafetemoments'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[family-name:var(--font-dm-sans)] antialiased bg-[#FFFDFC]">
        {children}
      </body>
    </html>
  )
}