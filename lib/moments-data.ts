// ─────────────────────────────────────────────────────────────
//  LA FÊTE MOMENTS — Event Data
//  All images are local → /public/moments/
//  Add a new event by appending to the `moments` array
// ─────────────────────────────────────────────────────────────

export type EventCategory =
  | 'Birthday'
  | 'Private Party'
  | 'Wedding'
  | 'Anniversary'
  | 'Corporate'
  | 'Special Occasion'
  | 'Valentine\'s'

export interface MomentEvent {
  slug: string
  title: string
  subtitle: string
  category: EventCategory
  location: string
  date: string
  description: string
  story: string
  cover: string       // path from /public
  images: string[]    // paths from /public
  featured: boolean
}

export const moments: MomentEvent[] = [
  {
    slug: 'ayans-birthday',
    title: "Ayan's Birthday",
    subtitle: 'A Golden Celebration',
    category: 'Birthday',
    location: 'Abu Dhabi',
    date: 'June 2026',
    description: 'A beautifully styled birthday celebration filled with warmth, elegance and thoughtful personal details.',
    story: "For Ayan's milestone birthday, we created a celebration that felt entirely personal. Soft gold tones, lush florals and beautifully arranged dessert tables came together to create an evening she and her guests will always remember. Every detail was chosen to reflect her warmth, her style, and the joy of the occasion.",
    cover: '/moments/birthday.jpg',
    images: [
      '/moments/birthday.jpg',
      '/moments/private.jpg',
      '/moments/anniversary.jpg',
      '/moments/special.jpg',
      '/moments/wedding.jpg',
      '/moments/corporate.jpg',
    ],
    featured: true,
  },
  {
    slug: 'a-night-to-remember',
    title: 'A Night to Remember',
    subtitle: 'Private Celebration',
    category: 'Private Party',
    location: 'Abu Dhabi',
    date: 'May 2026',
    description: 'An intimate candlelit evening designed around deep romance, luxury and beautiful personal moments.',
    story: "A private evening that began with a simple vision: candlelight, close company, and a space that felt like stepping into another world. We curated every element — from the hand-selected deep burgundy florals to the perfectly placed gold candleholders — to create an atmosphere of unhurried, genuine elegance. The evening unfolded slowly and beautifully, exactly as planned.",
    cover: '/moments/private.jpg',
    images: [
      '/moments/private.jpg',
      '/moments/anniversary.jpg',
      '/moments/birthday.jpg',
      '/moments/special.jpg',
      '/moments/wedding.jpg',
    ],
    featured: true,
  },
  {
    slug: 'beautiful-beginning',
    title: 'A Beautiful Beginning',
    subtitle: 'Wedding Celebration',
    category: 'Wedding',
    location: 'Abu Dhabi',
    date: 'April 2026',
    description: 'Timeless wedding décor in blush, ivory and champagne — a day filled with beautiful moments and genuine emotion.',
    story: "Every detail of this wedding celebration was designed to complement the love in the room, not overshadow it. Cascading floral arches in ivory and blush, soft draped silk and warm candlelight created an atmosphere that felt timeless and entirely personal. The couple arrived to a space that felt as though it had always been theirs.",
    cover: '/moments/wedding.jpg',
    images: [
      '/moments/wedding.jpg',
      '/moments/special.jpg',
      '/moments/private.jpg',
      '/moments/anniversary.jpg',
      '/moments/birthday.jpg',
    ],
    featured: false,
  },
  {
    slug: 'celebrating-together',
    title: 'Celebrating Together',
    subtitle: 'Anniversary Moment',
    category: 'Anniversary',
    location: 'Abu Dhabi',
    date: 'March 2026',
    description: 'A deeply romantic anniversary celebration styled with soft blush roses, warm candlelight and personal touches.',
    story: "To celebrate a meaningful anniversary, we created an outdoor garden setup that felt like a love letter in three dimensions. Soft blush roses, warm string lights and a hand-styled table created an atmosphere of deep warmth and romance. Every element was chosen to honour the time they had spent together and to create a new memory worth keeping.",
    cover: '/moments/anniversary.jpg',
    images: [
      '/moments/anniversary.jpg',
      '/moments/private.jpg',
      '/moments/special.jpg',
      '/moments/birthday.jpg',
      '/moments/wedding.jpg',
      '/moments/corporate.jpg',
    ],
    featured: true,
  },
  {
    slug: 'vision-launch',
    title: 'The Vision Launch',
    subtitle: 'Corporate Event',
    category: 'Corporate',
    location: 'Abu Dhabi',
    date: 'February 2026',
    description: 'A refined corporate celebration that balanced professional elegance with genuine warmth and beautiful brand storytelling.',
    story: "The Vision Launch was designed to feel as significant as the occasion it celebrated. Working closely with the team, we developed a space that communicated premium quality through restraint — clean lines, thoughtful lighting, and subtle moments of warmth woven throughout. Guests left not just informed, but genuinely inspired.",
    cover: '/moments/corporate.jpg',
    images: [
      '/moments/corporate.jpg',
      '/moments/private.jpg',
      '/moments/birthday.jpg',
      '/moments/anniversary.jpg',
      '/moments/special.jpg',
    ],
    featured: false,
  },
  {
    slug: 'a-moment-for-her',
    title: 'A Moment for Her',
    subtitle: 'Special Occasion',
    category: 'Special Occasion',
    location: 'Abu Dhabi',
    date: 'January 2026',
    description: 'A whimsical, romantic bridal shower filled with soft pastels, pampas grass and beautiful personal touches.',
    story: "This bridal shower was designed to feel like a celebration of everything she is — warm, detail-oriented, and beautifully generous. We filled the space with soft pampas, garden roses and hand-lettered signage. The afternoon moved from laughter to tears and back again, exactly as the best celebrations do.",
    cover: '/moments/special.jpg',
    images: [
      '/moments/special.jpg',
      '/moments/birthday.jpg',
      '/moments/anniversary.jpg',
      '/moments/private.jpg',
      '/moments/wedding.jpg',
      '/moments/corporate.jpg',
    ],
    featured: false,
  },
]

export function getMomentBySlug(slug: string): MomentEvent | undefined {
  return moments.find((m) => m.slug === slug)
}

export function getFeaturedMoments(): MomentEvent[] {
  return moments.filter((m) => m.featured)
}

export function getMomentsByCategory(category: EventCategory): MomentEvent[] {
  return moments.filter((m) => m.category === category)
}
