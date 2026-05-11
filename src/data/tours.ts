export type Tour = {
  slug: string
  title: string
  titleTh: string
  excerpt: string
  excerptTh: string
  description: string
  descriptionTh: string
  duration: string
  location: string
  groupSize: string
  price: string
  image: string
  highlights: string[]
  highlightsTh: string[]
  included: string[]
  includedTh: string[]
  seoTitle: string
  seoDescription: string
}

export const tours: Tour[] = [
  {
    slug: 'ayutthaya-day-tour-from-bangkok',
    title: 'From Bangkok: Ayutthaya Day Tour with Lunch',
    titleTh: 'ทัวร์อยุธยาแบบวันเดียวจากกรุงเทพฯ พร้อมอาหารกลางวัน',
    excerpt:
      'Explore Ayutthaya’s ancient temples, royal history, and famous Buddha sites on a guided day tour from Bangkok.',
    excerptTh:
      'เที่ยวอยุธยาแบบวันเดียวจากกรุงเทพฯ ชมวัดโบราณ พระราชวังเก่า และจุดสำคัญทางประวัติศาสตร์',
    description:
      'Join a guided day tour from Bangkok to Ayutthaya, the former capital of Siam. Visit important temple ruins, see the famous Buddha head in tree roots, and enjoy lunch at a local Thai restaurant.',
    descriptionTh:
      'เดินทางจากกรุงเทพฯ สู่อยุธยา เมืองหลวงเก่าของสยาม ชมวัดสำคัญ ซากโบราณสถาน เศียรพระในรากไม้ และรับประทานอาหารกลางวันที่ร้านอาหารท้องถิ่น',
    duration: 'Full day',
    location: 'Ayutthaya, Thailand',
    groupSize: 'Join-in group tour',
    price: 'Start from 1,500 THB / person',
    image: '/images/tours/ayutthaya-day-tour-from-bangkok.png',
    highlights: [
      'Visit Wat Chaiwatthanaram',
      'See the reclining Buddha at Wat Lokayasutha',
      'Explore Wat Phra Sri Sanphet',
      'See the famous Buddha head at Wat Mahathat',
      'Enjoy lunch at a local Thai restaurant',
    ],
    highlightsTh: [
      'เที่ยววัดไชยวัฒนาราม',
      'ชมพระนอนที่วัดโลกยสุธาราม',
      'เยี่ยมชมวัดพระศรีสรรเพชญ์',
      'ชมเศียรพระในรากไม้ที่วัดมหาธาตุ',
      'รับประทานอาหารกลางวันที่ร้านอาหารท้องถิ่น',
    ],
    included: [
      'Round-trip transport from Bangkok',
      'Professional guide',
      'Entrance fees',
      'Lunch at a local restaurant',
    ],
    includedTh: [
      'รถรับส่งไป-กลับจากกรุงเทพฯ',
      'ไกด์นำเที่ยว',
      'ค่าเข้าชมสถานที่',
      'อาหารกลางวันที่ร้านอาหารท้องถิ่น',
    ],
    seoTitle: 'Ayutthaya Day Tour from Bangkok with Lunch | Unix Peak Travel',
    seoDescription:
      'Book an Ayutthaya day tour from Bangkok with Unix Peak Travel. Visit ancient temples, Wat Mahathat, Wat Chaiwatthanaram, Wat Phra Sri Sanphet, and enjoy lunch.',
  },
  {
    slug: 'damnoen-saduak-floating-market-guided-tour',
    title: 'From Bangkok: Damnoen Saduak Floating Market Guided Tour',
    titleTh: 'ทัวร์ตลาดน้ำดำเนินสะดวกจากกรุงเทพฯ',
    excerpt:
      'Visit Thailand’s famous floating market, ride through local canals, and try classic Thai food by the water.',
    excerptTh:
      'เที่ยวตลาดน้ำดำเนินสะดวก ล่องเรือชมคลอง วิถีชีวิตริมน้ำ และชิมอาหารไทยท้องถิ่น',
    description:
      'Depart from Bangkok in the morning to visit Damnoen Saduak Floating Market in Ratchaburi. Stop at a traditional Thai house, learn about palm sugar making, ride a paddle boat through the canals, and explore the market at your own pace.',
    descriptionTh:
      'ออกเดินทางจากกรุงเทพฯ ไปยังตลาดน้ำดำเนินสะดวก จังหวัดราชบุรี แวะชมบ้านไทยและการทำน้ำตาลมะพร้าว ล่องเรือผ่านคลอง และเดินเที่ยวตลาดน้ำตามอัธยาศัย',
    duration: 'Half day',
    location: 'Ratchaburi, Thailand',
    groupSize: 'Join-in group tour',
    price: 'Start from 800 THB / person',
    image: '/images/tours/damnoen-saduak-floating-market-tour-from-bangkok.png',
    highlights: [
      'Visit Damnoen Saduak Floating Market',
      'Stop at a traditional Thai house',
      'See palm sugar making',
      'Ride a paddle boat through local canals',
      'Try Thai food such as Pad Thai, boat noodles, mango sticky rice, or coconut ice cream',
    ],
    highlightsTh: [
      'เที่ยวตลาดน้ำดำเนินสะดวก',
      'แวะชมบ้านไทยแบบดั้งเดิม',
      'ชมการทำน้ำตาลมะพร้าว',
      'ล่องเรือพายผ่านคลองท้องถิ่น',
      'ลองชิมอาหารไทย เช่น ผัดไทย ก๋วยเตี๋ยวเรือ ข้าวเหนียวมะม่วง หรือไอศกรีมกะทิ',
    ],
    included: [
      'Transport from Bangkok',
      'Professional guide',
      'Paddle boat ride',
      'Floating market visit',
    ],
    includedTh: [
      'รถเดินทางจากกรุงเทพฯ',
      'ไกด์นำเที่ยว',
      'ล่องเรือพาย',
      'เที่ยวชมตลาดน้ำ',
    ],
    seoTitle:
      'Damnoen Saduak Floating Market Tour from Bangkok | Unix Peak Travel',
    seoDescription:
      'Book a Damnoen Saduak Floating Market guided tour from Bangkok. Visit a Thai house, see palm sugar making, ride a paddle boat, and explore the famous floating market.',
  },
  {
    slug: 'grand-palace-wat-pho-private-tour',
    title: 'Bangkok: Grand Palace & Wat Pho Half-Day Private Tour',
    titleTh: 'ทัวร์ส่วนตัวครึ่งวัน พระบรมมหาราชวังและวัดโพธิ์',
    excerpt:
      'Discover Bangkok’s Grand Palace, the Emerald Buddha, and Wat Pho on a private half-day cultural tour.',
    excerptTh:
      'เที่ยวพระบรมมหาราชวัง วัดพระแก้ว และวัดโพธิ์แบบส่วนตัวในกรุงเทพฯ',
    description:
      'Explore two of Bangkok’s most important landmarks with a private guide. Visit the Grand Palace, home of the Emerald Buddha, then continue to Wat Pho to see the famous Reclining Buddha and learn about Thai history, religion, and traditional massage.',
    descriptionTh:
      'เที่ยวสองสถานที่สำคัญของกรุงเทพฯ พร้อมไกด์ส่วนตัว ชมพระบรมมหาราชวัง วัดพระแก้ว และวัดโพธิ์ ซึ่งเป็นที่ประดิษฐานพระนอนองค์ใหญ่และเป็นแหล่งสำคัญของการแพทย์แผนไทย',
    duration: 'Half day',
    location: 'Bangkok, Thailand',
    groupSize: 'Private tour',
    price: 'Start from 3,500 THB / person',
    image: '/images/tours/grand-palace-wat-pho-wat-pho-private-tour-bangkok.png',
    highlights: [
      'Visit the Grand Palace',
      'See the Emerald Buddha',
      'Explore Wat Pho',
      'See the famous Reclining Buddha',
      'Learn about Thai royal history and traditional massage',
    ],
    highlightsTh: [
      'ชมพระบรมมหาราชวัง',
      'สักการะพระแก้วมรกต',
      'เที่ยวชมวัดโพธิ์',
      'ชมพระนอนองค์ใหญ่',
      'เรียนรู้เรื่องประวัติศาสตร์ไทยและการแพทย์แผนไทย',
    ],
    included: [
      'Private guide',
      'Custom tour pace',
      'Grand Palace visit',
      'Wat Pho visit',
    ],
    includedTh: [
      'ไกด์ส่วนตัว',
      'เดินเที่ยวตามจังหวะของกลุ่ม',
      'เข้าชมพระบรมมหาราชวัง',
      'เข้าชมวัดโพธิ์',
    ],
    seoTitle:
      'Grand Palace and Wat Pho Private Tour Bangkok | Unix Peak Travel',
    seoDescription:
      'Book a private Bangkok half-day tour to the Grand Palace, Emerald Buddha, and Wat Pho with Unix Peak Travel. Explore Thai history, royal culture, and the Reclining Buddha.',
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug)
}
