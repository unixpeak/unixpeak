export const packageCategories = [
  { id: 'from-bangkok', label: 'From Bangkok' },
  { id: 'chiang-mai-tour-packages', label: 'Chiang Mai Tour Packages' },
  { id: 'chiang-mai-budget-tours', label: 'Chiang Mai Budget Tours' },
  { id: 'chiang-mai-private-groups', label: 'Chiang Mai Private Groups' },
  { id: 'chiang-mai-trekking', label: 'Chiang Mai Trekking' },
  { id: 'chiang-rai-tour-packages', label: 'Chiang Rai Tour Packages' },
  { id: 'maehongson-tour-packages', label: 'Maehongson Tour Packages' },
  { id: 'mae-hong-son-trekking', label: 'Mae Hong Son Trekking' },
  { id: 'chiang-mai-elephant', label: 'Chiang Mai Elephant' },
  { id: 'chiang-mai-zipline', label: 'Chiang Mai Zipline' },
  { id: 'chiang-mai-restaurants', label: 'Chiang Mai Restaurants' },
  { id: 'chiang-mai-cookery', label: 'Chiang Mai Cookery' },
  { id: 'chiang-mai-golf', label: 'Chiang Mai Golf' },
  { id: 'chiang-mai-to-bangkok', label: 'Chiang Mai To Bangkok' },
  { id: 'youth-camp', label: 'Youth Camp' },
  { id: 'special-tours', label: 'Special Tours' },
  { id: 'other', label: 'Other' },
] as const

export type PackageCategoryId = (typeof packageCategories)[number]['id']

const fallbackPackageCategory = packageCategories.find(
  (category) => category.id === 'other',
)!

export function getPackageCategory(categoryId: PackageCategoryId) {
  return (
    packageCategories.find((category) => category.id === categoryId) ??
    fallbackPackageCategory
  )
}

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
  category: PackageCategoryId
  tags: string[]
  image: string
  highlights: string[]
  highlightsTh: string[]
  included: string[]
  includedTh: string[]
  seoTitle: string
  seoDescription: string
}

const northernThailandPackageImage = '/images/tours/thailand-trip.png'

const northernThailandPackageIncluded = [
  'Private transport arrangement',
  'Local guide coordination',
  'Route and activity planning',
  'Hotel, meal, and entrance fee planning on request',
]

const northernThailandPackageIncludedTh = [
  'ประสานงานรถรับส่งแบบส่วนตัว',
  'ประสานงานไกด์ท้องถิ่น',
  'วางแผนเส้นทางและกิจกรรม',
  'ประสานงานโรงแรม อาหาร และค่าเข้าชมตามรูปแบบแพ็กเกจ',
]

const chiangMaiBudgetTourImage = northernThailandPackageImage

const chiangMaiBudgetIncluded = [
  'Join-in group tour arrangement',
  'Licensed English-speaking guide coordination',
  'Local transport coordination',
  'Tickets, entrance fees, activity costs, and lunch when included in the source tour',
]

const chiangMaiBudgetIncludedTh = [
  'จัดทัวร์ร่วมกรุ๊ป',
  'ประสานงานไกด์ภาษาอังกฤษที่มีใบอนุญาต',
  'ประสานงานรถรับส่งท้องถิ่น',
  'ประสานงานบัตรเข้า ค่ากิจกรรม และอาหารกลางวันตามโปรแกรม',
]

const chiangMaiPrivateGroupTourImage = northernThailandPackageImage

const chiangMaiPrivateGroupIncluded = [
  'Private tour arrangement for your group',
  'Licensed English-speaking guide coordination',
  'Private transport coordination',
  'Flexible route planning around your pace and interests',
]

const chiangMaiPrivateGroupIncludedTh = [
  'จัดทัวร์ส่วนตัวสำหรับกลุ่มของคุณ',
  'ประสานงานไกด์ภาษาอังกฤษที่มีใบอนุญาต',
  'ประสานงานรถรับส่งส่วนตัว',
  'วางแผนเส้นทางให้ยืดหยุ่นตามจังหวะและความสนใจของกลุ่ม',
]

const chiangMaiTrekkingTourImage = northernThailandPackageImage

const chiangMaiTrekkingIncluded = [
  'Trekking route arrangement',
  'Local trekking guide coordination',
  'Transport coordination from Chiang Mai',
  'Activity and meal planning according to the source program',
]

const chiangMaiTrekkingIncludedTh = [
  'จัดเส้นทางเดินป่า',
  'ประสานงานไกด์เดินป่าท้องถิ่น',
  'ประสานงานรถรับส่งจากเชียงใหม่',
  'วางแผนกิจกรรมและอาหารตามโปรแกรม',
]

const chiangRaiPackageTourImage = northernThailandPackageImage

const chiangRaiPackageIncluded = [
  'Chiang Rai tour route arrangement',
  'Guide coordination',
  'Transport coordination from the listed start point',
  'Activity, meal, and entrance fee planning according to the source program',
]

const chiangRaiPackageIncludedTh = [
  'จัดเส้นทางทัวร์เชียงราย',
  'ประสานงานไกด์นำเที่ยว',
  'ประสานงานรถรับส่งจากจุดเริ่มต้นตามโปรแกรม',
  'วางแผนกิจกรรม อาหาร และค่าเข้าชมตามโปรแกรม',
]

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
    category: 'from-bangkok',
    tags: [
      'Ayutthaya',
      'Bangkok',
      'Central Thailand',
      'Temple',
      'History',
      'Day trip',
      'Lunch',
    ],
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
    category: 'from-bangkok',
    tags: [
      'Bangkok',
      'Ratchaburi',
      'Damnoen Saduak',
      'Floating market',
      'Canal',
      'Half day',
      'Food',
    ],
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
    category: 'from-bangkok',
    tags: [
      'Bangkok',
      'Grand Palace',
      'Wat Pho',
      'Emerald Buddha',
      'Private tour',
      'Temple',
      'Culture',
    ],
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
  {
    slug: 'package01',
    title: 'Package01: Special Chiang Mai Package (All highlights)',
    titleTh: 'แพ็กเกจเชียงใหม่ไฮไลต์ครบในหนึ่งวัน',
    excerpt:
      'A one-day Chiang Mai package covering all major highlight attractions and activities, from elephants and orchids to Tiger Kingdom, local crafts, and Doi Suthep Temple.',
    excerptTh:
      'แพ็กเกจเชียงใหม่แบบเต็มวัน เหมาะสำหรับผู้ที่ต้องการเก็บไฮไลต์สำคัญหลายจุดในทริปเดียว',
    description:
      'This tour covers Chiang Mai highlight attractions and activities within one day. Visit a local elephant camp in the morning, have a buffet lunch at the Orchid Farm and butterfly farm, visit Tiger Kingdom, then travel to Sankampang-Borsang Home Industries and the important Doi Suthep Temple on Suthep-Pui mountain.',
    descriptionTh:
      'โปรแกรมเชียงใหม่หนึ่งวันสำหรับผู้ที่ต้องการเที่ยวหลายไฮไลต์ในเวลาจำกัด สามารถจัดเส้นทางรวมกิจกรรมช้าง สวนกล้วยไม้และผีเสื้อ Tiger Kingdom หมู่บ้านหัตถกรรมสันกำแพง-บ่อสร้าง และวัดพระธาตุดอยสุเทพ',
    duration: '8:00 - 19:00',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 2,100 - 3,500 THB / person',
    category: 'chiang-mai-tour-packages',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Sankampaeng',
      'Borsang',
      'Elephant',
      'Tiger Kingdom',
      'Orchid Farm',
      'Butterfly Farm',
      'Home Industries',
      'Full day',
    ],
    image: northernThailandPackageImage,
    highlights: [
      'Local Elephant Camp in the morning',
      'Buffet lunch at Orchid Farm and butterfly farm',
      'Tiger Kingdom',
      'Sankampang-Borsang Home Industries',
      'Doi Suthep Temple on Suthep-Pui mountain',
    ],
    highlightsTh: [
      'กิจกรรมช้างในเชียงใหม่',
      'สวนกล้วยไม้และผีเสื้อ',
      'Tiger Kingdom',
      'หมู่บ้านหัตถกรรมสันกำแพงและบ่อสร้าง',
      'วัดพระธาตุดอยสุเทพ',
    ],
    included: northernThailandPackageIncluded,
    includedTh: northernThailandPackageIncludedTh,
    seoTitle:
      'Package01 Special Chiang Mai Package | Unix Peak Travel',
    seoDescription:
      'Book Package01 Special Chiang Mai Package with elephant camp, Orchid Farm, butterfly farm, Tiger Kingdom, Sankampang-Borsang Home Industries, and Doi Suthep Temple.',
  },
  {
    slug: 'package02',
    title: 'Package02: One Day Chiang Mai Animals Planet Package',
    titleTh: 'แพ็กเกจเชียงใหม่สำหรับครอบครัวและคนรักสัตว์',
    excerpt:
      'A one-day Chiang Mai tour for travelers who love nature and animals, especially families and children.',
    excerptTh:
      'ทริปเชียงใหม่หนึ่งวันสำหรับครอบครัว เด็ก และผู้ที่ชอบธรรมชาติหรือกิจกรรมเกี่ยวกับสัตว์',
    description:
      'This one-day Chiang Mai program is suitable for travelers who love nature and animals, especially families and kids. Spend a day learning and having fun with animals, including an authentic Elephant Day Care experience, feeding and bathing elephants, the World of Insects museum, Tiger Kingdom, and Chiang Mai Zoo.',
    descriptionTh:
      'โปรแกรมนี้เหมาะกับครอบครัวและนักเดินทางที่สนใจธรรมชาติและสัตว์ สามารถจัดกิจกรรมดูแลช้าง ให้อาหาร อาบน้ำช้าง เยี่ยมชมพิพิธภัณฑ์แมลง Tiger Kingdom และสวนสัตว์เชียงใหม่',
    duration: '8:00 - 17:00',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 2,300 - 3,700 THB / person',
    category: 'chiang-mai-tour-packages',
    tags: [
      'Chiang Mai',
      'Elephant',
      'Family tour',
      'Tiger Kingdom',
      'Chiang Mai Zoo',
      'World of Insects',
      'Animal attractions',
      'Nature',
    ],
    image: northernThailandPackageImage,
    highlights: [
      'Authentic Elephant Day Care experience',
      'Feeding and bathing elephants',
      'World of Insects museum',
      'Tiger Kingdom',
      'Chiang Mai Zoo',
    ],
    highlightsTh: [
      'กิจกรรมดูแลช้าง',
      'ให้อาหารและอาบน้ำช้าง',
      'พิพิธภัณฑ์แมลง',
      'Tiger Kingdom',
      'สวนสัตว์เชียงใหม่',
    ],
    included: northernThailandPackageIncluded,
    includedTh: northernThailandPackageIncludedTh,
    seoTitle:
      'Package02 One Day Chiang Mai Animals Planet Package | Unix Peak Travel',
    seoDescription:
      'Book Package02 One Day Chiang Mai Animals Planet Package with Elephant Day Care, feeding and bathing elephants, World of Insects, Tiger Kingdom, and Chiang Mai Zoo.',
  },
  {
    slug: 'package03',
    title: 'Package03: Chiang Mai Wonder Package',
    titleTh: 'แพ็กเกจเชียงใหม่ 3 วัน เที่ยววัฒนธรรมและธรรมชาติ',
    excerpt:
      'A 3-day Chiang Mai sightseeing package with highlight attractions and cultural experiences around Chiang Mai.',
    excerptTh:
      'แพ็กเกจเชียงใหม่ 3 วัน รวมวัดสำคัญ หมู่บ้านหัตถกรรม กิจกรรมธรรมชาติ และดอยอินทนนท์',
    description:
      'This 3-day package sightseeing tour brings together highlight attractions and culture in Chiang Mai. Day 1 covers Doi Suthep Temple, city temples, and Sankampeang Handicraft Village. Day 2 covers Mae Tang Elephant Camp, Tiger Kingdom, Karen Long Neck and Hill Tribes Village, and Orchid Farm. Day 3 visits Doi Inthanon National Park.',
    descriptionTh:
      'แพ็กเกจ 3 วันนี้รวมเส้นทางวัฒนธรรมและธรรมชาติของเชียงใหม่ เช่น วัดพระธาตุดอยสุเทพ วัดในเมือง หมู่บ้านหัตถกรรมสันกำแพง กิจกรรมช้างแม่แตง Tiger Kingdom หมู่บ้านกะเหรี่ยงคอยาว สวนกล้วยไม้ และดอยอินทนนท์',
    duration: '3 days',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 4,900 - 6,300 THB / person',
    category: 'chiang-mai-tour-packages',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Doi Inthanon',
      'Mae Taeng',
      'Hill tribe',
      'Karen Long Neck',
      'Orchid Farm',
      'Sankampeang Handicraft Village',
      '3 days',
    ],
    image: northernThailandPackageImage,
    highlights: [
      'Day 1: Doi Suthep Temple, city temples, and Sankampeang Handicraft Village',
      'Day 2: Mae Tang Elephant Camp, Tiger Kingdom, Karen Long Neck and Hill Tribes Village, and Orchid Farm',
      'Day 3: Doi Inthanon National Park',
    ],
    highlightsTh: [
      'วัดพระธาตุดอยสุเทพและวัดในเมืองเชียงใหม่',
      'หมู่บ้านหัตถกรรมสันกำแพง',
      'กิจกรรมช้างแม่แตง',
      'หมู่บ้านกะเหรี่ยงคอยาวและชาวเขา',
      'อุทยานแห่งชาติดอยอินทนนท์',
    ],
    included: northernThailandPackageIncluded,
    includedTh: northernThailandPackageIncludedTh,
    seoTitle: 'Package03 Chiang Mai Wonder Package | Unix Peak Travel',
    seoDescription:
      'Book Package03 Chiang Mai Wonder Package with Doi Suthep Temple, city temples, Sankampeang Handicraft Village, Mae Tang Elephant Camp, Tiger Kingdom, Orchid Farm, and Doi Inthanon.',
  },
  {
    slug: 'package04',
    title: 'Package04: Exclusive Package Chiang Mai & Chiang Rai',
    titleTh: 'แพ็กเกจเชียงใหม่-เชียงราย 3 วัน',
    excerpt:
      'A 3-day package combining two days of Chiang Mai activities with one full sightseeing day in Chiang Rai.',
    excerptTh:
      'แพ็กเกจ 3 วัน รวมกิจกรรมเชียงใหม่และเส้นทางท่องเที่ยวเชียงรายแบบเต็มวัน',
    description:
      'This 3-day package combines activities in Chiang Mai with a Chiang Rai sightseeing day. Day 1 includes Elephant Safari Tour and Sankampeang Handicraft Village. Day 2 visits Doi Inthanon National Park. Day 3 travels to Chiang Rai for the hot spring, White Temple, Golden Triangle, Long Neck Village, and Mae Sai before returning to Chiang Mai.',
    descriptionTh:
      'โปรแกรมส่วนตัว 3 วัน ผสมผสานกิจกรรมในเชียงใหม่และเชียงราย เส้นทางแนะนำมีทั้งกิจกรรมช้าง หมู่บ้านหัตถกรรมสันกำแพง ดอยอินทนนท์ น้ำพุร้อน วัดร่องขุ่น สามเหลี่ยมทองคำ หมู่บ้านกะเหรี่ยงคอยาว และแม่สาย',
    duration: '3 days',
    location: 'Chiang Mai and Chiang Rai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 4,500 - 14,000 THB / person',
    category: 'chiang-mai-tour-packages',
    tags: [
      'Chiang Mai',
      'Chiang Rai',
      'Doi Inthanon',
      'White Temple',
      'Golden Triangle',
      'Mae Sai',
      'Long Neck Village',
      'Hot Spring',
      '3 days',
    ],
    image: northernThailandPackageImage,
    highlights: [
      'Day 1: Elephant Safari Tour and Sankampeang Handicraft Village',
      'Day 2: Doi Inthanon National Park',
      'Day 3: Chiang Rai Hot Spring, White Temple, Golden Triangle, Long Neck Village, and Mae Sai',
      'Return to Chiang Mai',
    ],
    highlightsTh: [
      'กิจกรรมช้างในเชียงใหม่',
      'หมู่บ้านหัตถกรรมสันกำแพง',
      'อุทยานแห่งชาติดอยอินทนนท์',
      'วัดร่องขุ่นและสามเหลี่ยมทองคำ',
      'หมู่บ้านกะเหรี่ยงคอยาวและแม่สาย',
    ],
    included: northernThailandPackageIncluded,
    includedTh: northernThailandPackageIncludedTh,
    seoTitle:
      'Package04 Exclusive Package Chiang Mai and Chiang Rai | Unix Peak Travel',
    seoDescription:
      'Book Package04 Exclusive Package Chiang Mai and Chiang Rai with Elephant Safari Tour, Sankampeang Handicraft Village, Doi Inthanon, White Temple, Golden Triangle, Long Neck Village, and Mae Sai.',
  },
  {
    slug: 'package05',
    title: 'Package05: Package Tours from Chiang Mai to Sukhothai',
    titleTh: 'แพ็กเกจเชียงใหม่-สุโขทัย 2 วัน',
    excerpt:
      'A 2-day historical route from Chiang Mai to Sukhothai with Lampang, Phitsanulok, and Lamphun heritage stops.',
    excerptTh:
      'แพ็กเกจมรดกประวัติศาสตร์ 2 วัน จากเชียงใหม่สู่สุโขทัย ลำปาง พิษณุโลก และลำพูน',
    description:
      'Travel to Sukhothai with a historical expert and discover massive ruins and hidden temples in the ancient capital of Thailand. Day 1 covers Lampang Luang Temple and Sukhothai Historical Park. Day 2 covers Phra Buddha Shinnarach in Phitsanulok and Phra That Haripoonchai Temple in Lamphun before returning to Chiang Mai.',
    descriptionTh:
      'แพ็กเกจ 2 วันนี้เหมาะสำหรับผู้สนใจประวัติศาสตร์ไทยและเมืองโบราณ เส้นทางแนะนำรวมวัดพระธาตุลำปางหลวง อุทยานประวัติศาสตร์สุโขทัย พระพุทธชินราช จังหวัดพิษณุโลก และวัดพระธาตุหริภุญชัย จังหวัดลำพูน',
    duration: '2 days',
    location: 'Sukhothai, Lampang, Phitsanulok and Lamphun',
    groupSize: 'Private package tour',
    price: 'Start from 2,500 - 10,000 THB / person',
    category: 'chiang-mai-tour-packages',
    tags: [
      'Chiang Mai',
      'Sukhothai',
      'Lampang',
      'Phitsanulok',
      'Lamphun',
      'Historical Park',
      'Ancient capital',
      'Heritage',
      '2 days',
    ],
    image: northernThailandPackageImage,
    highlights: [
      'Day 1: Lampang Luang Temple and Sukhothai Historical Park',
      'Day 2: Phra Buddha Shinnarach in Phitsanulok and Phra That Haripoonchai Temple in Lamphun',
      'Ancient capital ruins and hidden temples',
      'Return to Chiang Mai',
    ],
    highlightsTh: [
      'วัดพระธาตุลำปางหลวง',
      'อุทยานประวัติศาสตร์สุโขทัย',
      'เส้นทางเมืองหลวงเก่า',
      'พระพุทธชินราช จังหวัดพิษณุโลก',
      'วัดพระธาตุหริภุญชัย จังหวัดลำพูน',
    ],
    included: northernThailandPackageIncluded,
    includedTh: northernThailandPackageIncludedTh,
    seoTitle:
      'Package05 Chiang Mai to Sukhothai Package Tour | Unix Peak Travel',
    seoDescription:
      'Book Package05 tours from Chiang Mai to Sukhothai with Lampang Luang Temple, Sukhothai Historical Park, Phra Buddha Shinnarach, Phitsanulok, and Lamphun.',
  },
  {
    slug: 'package06',
    title: 'Package06: Chiang Mai Nature Package',
    titleTh: 'แพ็กเกจธรรมชาติเชียงใหม่ 2 วัน',
    excerpt:
      'A 2-day Chiang Mai nature package combining Elephant Safari Tour, Sankampeang Handicraft Village, and Doi Inthanon National Park.',
    excerptTh:
      'แพ็กเกจธรรมชาติเชียงใหม่ 2 วัน รวมกิจกรรมช้าง หมู่บ้านหัตถกรรม และดอยอินทนนท์',
    description:
      'This 2-day package tour is designed for travelers who want to touch the nature of Chiang Mai. Day 1 combines Elephant Safari Tour with Sankampeang Handicraft Village. Day 2 visits Doi Inthanon National Park.',
    descriptionTh:
      'แพ็กเกจ 2 วันนี้เน้นธรรมชาติและกิจกรรมเบาๆ ในเชียงใหม่ เส้นทางแนะนำรวมกิจกรรมช้าง หมู่บ้านหัตถกรรมสันกำแพง และเที่ยวอุทยานแห่งชาติดอยอินทนนท์แบบเต็มวัน',
    duration: '2 days',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 3,300 - 8,300 THB / person',
    category: 'chiang-mai-tour-packages',
    tags: [
      'Chiang Mai',
      'Doi Inthanon',
      'Elephant',
      'Sankampaeng',
      'Sankampeang Handicraft Village',
      'Nature',
      '2 days',
    ],
    image: northernThailandPackageImage,
    highlights: [
      'Day 1: Elephant Safari Tour and Sankampeang Handicraft Village',
      'Day 2: Doi Inthanon National Park',
      'Chiang Mai nature package route',
    ],
    highlightsTh: [
      'กิจกรรมช้าง',
      'หมู่บ้านหัตถกรรมสันกำแพง',
      'อุทยานแห่งชาติดอยอินทนนท์',
      'เส้นทางธรรมชาติภาคเหนือ',
      'ปรับจังหวะเที่ยวได้ตามกลุ่ม',
    ],
    included: northernThailandPackageIncluded,
    includedTh: northernThailandPackageIncludedTh,
    seoTitle: 'Package06 Chiang Mai Nature Package | Unix Peak Travel',
    seoDescription:
      'Book Package06 Chiang Mai Nature Package with Elephant Safari Tour, Sankampeang Handicraft Village, and Doi Inthanon National Park.',
  },
  {
    slug: 'package07',
    title: 'Package07: Package Discover Chiang Mai',
    titleTh: 'แพ็กเกจ Discover Chiang Mai 2 วัน',
    excerpt:
      'A 2-day Chiang Mai sightseeing route with Doi Suthep, Meung On Cave, Sankampaeng Hot Spring, handicrafts, elephants, orchids, Tiger Kingdom, and hill tribe culture.',
    excerptTh:
      'แพ็กเกจเชียงใหม่ 2 วัน รวมวัด ธรรมชาติ น้ำพุร้อน งานหัตถกรรม กิจกรรมช้าง และวัฒนธรรมชาวเขา',
    description:
      'This 2-day package sightseeing tour covers Chiang Mai highlight attractions. Day 1 visits Doi Suthep Temple, Meung On Cave, Sankampaeng Hot Spring, and Handicraft Village. Day 2 visits Mae Sa Elephant Camp, Orchid Farm, Tiger Kingdom, and Karen Long Neck and Hill Tribes Village.',
    descriptionTh:
      'แพ็กเกจ 2 วันนี้เหมาะสำหรับผู้มาเชียงใหม่ครั้งแรก เส้นทางแนะนำรวมวัดพระธาตุดอยสุเทพ ถ้ำเมืองออน น้ำพุร้อนสันกำแพง หมู่บ้านหัตถกรรม กิจกรรมช้างแม่สา สวนกล้วยไม้ Tiger Kingdom และหมู่บ้านกะเหรี่ยงคอยาว',
    duration: '2 days',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 2,500 - 7,000 THB / person',
    category: 'chiang-mai-tour-packages',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Meung On Cave',
      'Sankampaeng Hot Spring',
      'Mae Sa',
      'Tiger Kingdom',
      'Karen Long Neck',
      '2 days',
    ],
    image: northernThailandPackageImage,
    highlights: [
      'Day 1: Doi Suthep Temple, Meung On Cave, Sankampaeng Hot Spring, and Handicraft Village',
      'Day 2: Mae Sa Elephant Camp, Orchid Farm, Tiger Kingdom, Karen Long Neck and Hill Tribes Village',
    ],
    highlightsTh: [
      'วัดพระธาตุดอยสุเทพ',
      'ถ้ำเมืองออนและน้ำพุร้อนสันกำแพง',
      'หมู่บ้านหัตถกรรม',
      'กิจกรรมช้างแม่สาและสวนกล้วยไม้',
      'Tiger Kingdom และหมู่บ้านกะเหรี่ยงคอยาว',
    ],
    included: northernThailandPackageIncluded,
    includedTh: northernThailandPackageIncludedTh,
    seoTitle: 'Package07 Package Discover Chiang Mai | Unix Peak Travel',
    seoDescription:
      'Book Package07 Package Discover Chiang Mai with Doi Suthep Temple, Meung On Cave, Sankampaeng Hot Spring, Handicraft Village, Mae Sa Elephant Camp, Orchid Farm, Tiger Kingdom, and Karen Long Neck Village.',
  },
  {
    slug: 'package08',
    title: 'Package08: Package Chiang Mai Nature and Heritage City',
    titleTh: 'แพ็กเกจธรรมชาติและเมืองมรดกเชียงใหม่ 2 วัน',
    excerpt:
      'A 2-day package combining one day in Chiang Mai nature with one cultural day to Lamphun and Lampang.',
    excerptTh:
      'แพ็กเกจ 2 วัน รวมธรรมชาติดอยอินทนนท์และเส้นทางมรดกวัฒนธรรมลำปาง-ลำพูน',
    description:
      'This 2-day package combines one day with nature in Chiang Mai and one cultural tour to Lumphun and Lampang. Day 1 visits Doi Inthanon National Park. Day 2 visits Lampang for the Elephant Conservation Center and Wat Phra That Lampang Luang, then Lamphun for Wat Prathat Hariphunchai and Wat Charmmadevi before returning to Chiang Mai.',
    descriptionTh:
      'โปรแกรมนี้ผสมผสานธรรมชาติและวัฒนธรรม เส้นทางแนะนำรวมดอยอินทนนท์ พื้นที่ศูนย์อนุรักษ์ช้างไทย วัดพระธาตุลำปางหลวง วัดพระธาตุหริภุญชัย และวัดจามเทวี ก่อนกลับเชียงใหม่',
    duration: '2 days',
    location: 'Chiang Mai, Lampang and Lamphun',
    groupSize: 'Private package tour',
    price: 'Start from 2,500 - 8,200 THB / person',
    category: 'chiang-mai-tour-packages',
    tags: [
      'Chiang Mai',
      'Lampang',
      'Lamphun',
      'Doi Inthanon',
      'Wat Phra That Lampang Luang',
      'Wat Hariphunchai',
      'Elephant Conservation Center',
      'Wat Charmmadevi',
      'Heritage',
      '2 days',
    ],
    image: northernThailandPackageImage,
    highlights: [
      'Day 1: Doi Inthanon National Park',
      'Day 2: Lampang Elephant Conservation Center and Wat Phra That Lampang Luang',
      'Lamphun: Wat Prathat Hariphunchai and Wat Charmmadevi',
      'Return to Chiang Mai',
    ],
    highlightsTh: [
      'อุทยานแห่งชาติดอยอินทนนท์',
      'พื้นที่ศูนย์อนุรักษ์ช้างไทย',
      'วัดพระธาตุลำปางหลวง',
      'วัดพระธาตุหริภุญชัย',
      'วัดจามเทวี',
    ],
    included: northernThailandPackageIncluded,
    includedTh: northernThailandPackageIncludedTh,
    seoTitle:
      'Package08 Chiang Mai Nature and Heritage City | Unix Peak Travel',
    seoDescription:
      'Book Package08 Chiang Mai Nature and Heritage City with Doi Inthanon, Lampang Elephant Conservation Center, Wat Phra That Lampang Luang, Wat Prathat Hariphunchai, and Wat Charmmadevi.',
  },
  {
    slug: 'package09',
    title: 'Package09: Amazing Chiang Mai - Chiang Rai Tour Package',
    titleTh: 'แพ็กเกจ Amazing Chiang Mai - Chiang Rai 3 วัน',
    excerpt:
      'A 3-day package combining one Chiang Mai highlight day with two sightseeing days in Chiang Rai.',
    excerptTh:
      'แพ็กเกจ 3 วัน รวมเชียงใหม่และเชียงราย เหมาะสำหรับผู้ที่ต้องการเที่ยวไฮไลต์ภาคเหนือแบบครบขึ้น',
    description:
      'This 3-day package combines one highlight trip in Chiang Mai with two sightseeing days in Chiang Rai. Day 1 covers Doi Suthep Temple, Tiger Kingdom, Orchid Farm, Mae Sa Elephant Camp, and Kantoke Dinner. Day 2 travels to Chiang Rai for the hot spring, White Temple and city tour, Chiang Saen ancient city, and Mae Sai. Day 3 visits Doi Tung Palace, Mae Fah Luang Garden, and Long Neck Village before returning to Chiang Mai.',
    descriptionTh:
      'แพ็กเกจ 3 วันนี้รวมหนึ่งวันไฮไลต์เชียงใหม่และสองวันเชียงราย เส้นทางแนะนำมีวัดพระธาตุดอยสุเทพ Tiger Kingdom สวนกล้วยไม้ กิจกรรมช้างแม่สา ขันโตก น้ำพุร้อน วัดร่องขุ่น เมืองโบราณเชียงแสน แม่สาย พระตำหนักดอยตุง สวนแม่ฟ้าหลวง และหมู่บ้านกะเหรี่ยงคอยาว',
    duration: '3 days',
    location: 'Chiang Mai and Chiang Rai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 5,000 - 15,000 THB / person',
    category: 'chiang-mai-tour-packages',
    tags: [
      'Chiang Mai',
      'Chiang Rai',
      'Doi Suthep',
      'White Temple',
      'Chiang Saen',
      'Mae Sai',
      'Doi Tung',
      'Mae Fah Luang Garden',
      'Kantoke Dinner',
      '3 days',
    ],
    image: northernThailandPackageImage,
    highlights: [
      'Day 1: Doi Suthep Temple, Tiger Kingdom, Orchid Farm, Mae Sa Elephant Camp, and Kantoke Dinner',
      'Day 2: Chiang Rai Hot Spring, White Temple and city tour, Chiang Saen ancient city, and Mae Sai',
      'Day 3: Doi Tung Palace, Mae Fah Luang Garden, and Long Neck Village',
      'Return to Chiang Mai',
    ],
    highlightsTh: [
      'วัดพระธาตุดอยสุเทพและไฮไลต์เชียงใหม่',
      'กิจกรรมช้างแม่สาและสวนกล้วยไม้',
      'อาหารขันโตก',
      'วัดร่องขุ่นและเมืองโบราณเชียงแสน',
      'พระตำหนักดอยตุงและสวนแม่ฟ้าหลวง',
    ],
    included: northernThailandPackageIncluded,
    includedTh: northernThailandPackageIncludedTh,
    seoTitle:
      'Package09 Amazing Chiang Mai and Chiang Rai Tour Package | Unix Peak Travel',
    seoDescription:
      'Book Package09 Amazing Chiang Mai - Chiang Rai Tour Package with Doi Suthep, Tiger Kingdom, Mae Sa Elephant Camp, Kantoke Dinner, White Temple, Chiang Saen, Mae Sai, Doi Tung, and Long Neck Village.',
  },
  {
    slug: 'package10',
    title: 'Package10: 2 Days Tour Ban Mae Kampong',
    titleTh: 'แพ็กเกจบ้านแม่กำปอง 2 วัน',
    excerpt:
      'A 2-day Ban Mae Kampong countryside village tour for travelers who want to experience local life near Chiang Mai.',
    excerptTh:
      'แพ็กเกจบ้านแม่กำปอง 2 วัน สำหรับผู้ที่อยากสัมผัสวิถีหมู่บ้านและธรรมชาติใกล้เชียงใหม่',
    description:
      'This 2-day Ban Mae Kampong tour is designed for travelers who want to feel the taste of local countryside village life. Ban Mae Kampong is an ancient village in Mae On County, Chiang Mai Province, established about a hundred years ago. The program includes full-time fun, a night in the village, and a series of local activities arranged around the group style.',
    descriptionTh:
      'โปรแกรมบ้านแม่กำปอง 2 วันเหมาะสำหรับผู้ที่ต้องการพักผ่อนแบบชุมชนและสัมผัสบรรยากาศชนบทใกล้เชียงใหม่ สามารถจัดเส้นทางเดินชมหมู่บ้าน วิวภูเขา อาหารท้องถิ่น และที่พักค้างคืนตามสไตล์ของกลุ่ม',
    duration: '2 days',
    location: 'Ban Mae Kampong, Chiang Mai',
    groupSize: 'Private package tour',
    price: 'Start from 2,600 - 11,000 THB / person',
    category: 'chiang-mai-tour-packages',
    tags: [
      'Chiang Mai',
      'Ban Mae Kampong',
      'Mae On',
      'Village stay',
      'Local food',
      'Mountain',
      'Slow travel',
      'Countryside village',
      '2 days',
    ],
    image: northernThailandPackageImage,
    highlights: [
      'Ban Mae Kampong ancient village in Mae On County',
      'Countryside local life experience',
      'Overnight village stay',
      'Local activities arranged around the group style',
      '2-day slow village tour',
    ],
    highlightsTh: [
      'บรรยากาศหมู่บ้านแม่กำปอง',
      'วิวธรรมชาติและภูเขา',
      'ประสบการณ์อาหารท้องถิ่น',
      'จัดที่พักค้างคืนได้ตามแผนทริป',
      'เที่ยวแบบช้าๆ ปรับได้ตามกลุ่ม',
    ],
    included: northernThailandPackageIncluded,
    includedTh: northernThailandPackageIncludedTh,
    seoTitle: 'Package10 Ban Mae Kampong 2-Day Tour | Unix Peak Travel',
    seoDescription:
      'Book Package10 Ban Mae Kampong 2-day tour from Chiang Mai with countryside village life, Mae On, overnight stay, local activities, and private trip support.',
  },
  {
    slug: 'budget01',
    title: 'Budget01: Doi Suthep Tour',
    titleTh: 'Budget01: Doi Suthep Tour',
    excerpt:
      'A half-day join-in Doi Suthep tour with temple views, winter palace options, and Hmong village culture.',
    excerptTh:
      'A half-day join-in Doi Suthep tour with temple views, winter palace options, and Hmong village culture.',
    description:
      'Discover Doi Suthep Temple, a landmark of spiritual significance in Chiang Mai, perched on a mountain with sweeping city views. Depending on the route, this half-day budget tour can also include the Thai king winter palace or a scenic Hmong hillside village.',
    descriptionTh:
      'Discover Doi Suthep Temple, a landmark of spiritual significance in Chiang Mai, perched on a mountain with sweeping city views. Depending on the route, this half-day budget tour can also include the Thai king winter palace or a scenic Hmong hillside village.',
    duration: 'Half day',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Join-in group tour',
    price: '800 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Wat Phra That Doi Suthep',
      'Winter Palace',
      'Hmong Village',
      'Temple',
      'Half day',
      'Join-in group',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Doi Suthep Temple with city views',
      'Thai king winter palace in Chiang Mai',
      'Hmong hillside village and traditional dress',
      'Half-day budget join-in tour from Chiang Mai',
    ],
    highlightsTh: [
      'Doi Suthep Temple with city views',
      'Thai king winter palace in Chiang Mai',
      'Hmong hillside village and traditional dress',
      'Half-day budget join-in tour from Chiang Mai',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle: 'Budget01 Doi Suthep Tour | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget01 Doi Suthep Tour, a half-day Chiang Mai budget join-in tour visiting Doi Suthep Temple, winter palace options, and Hmong village culture.',
  },
  {
    slug: 'budget04',
    title: 'Budget04: Adventure Trekking Mae Wang Area',
    titleTh: 'Budget04: Adventure Trekking Mae Wang Area',
    excerpt:
      'A full-day Mae Wang adventure with trekking, elephant feeding and bathing, bamboo rafting, waterfall scenery, and hill tribe villages.',
    excerptTh:
      'A full-day Mae Wang adventure with trekking, elephant feeding and bathing, bamboo rafting, waterfall scenery, and hill tribe villages.',
    description:
      'Venture into Mae Wang Area south of Chiang Mai for a full-day adventure trek. The program combines elephant feeding and bathing, bamboo rafting, lunch, Mae Wang Waterfall, and Hmong and Karen hill tribe village visits.',
    descriptionTh:
      'Venture into Mae Wang Area south of Chiang Mai for a full-day adventure trek. The program combines elephant feeding and bathing, bamboo rafting, lunch, Mae Wang Waterfall, and Hmong and Karen hill tribe village visits.',
    duration: 'Full day',
    location: 'Mae Wang, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '1,900 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Mai',
      'Mae Wang',
      'Trekking',
      'Elephant feeding',
      'Elephant bathing',
      'Bamboo rafting',
      'Mae Wang Waterfall',
      'Hmong',
      'Karen',
      'Full day',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Mae Wang Area adventure trek south of Chiang Mai',
      'Feed and bathe elephants',
      'Bamboo rafting on the river',
      'Mae Wang waterfall',
      'Hmong and Karen hill tribe villages',
    ],
    highlightsTh: [
      'Mae Wang Area adventure trek south of Chiang Mai',
      'Feed and bathe elephants',
      'Bamboo rafting on the river',
      'Mae Wang waterfall',
      'Hmong and Karen hill tribe villages',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle:
      'Budget04 Adventure Trekking Mae Wang Area | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget04 Adventure Trekking Mae Wang Area with trekking, elephant feeding and bathing, bamboo rafting, Mae Wang Waterfall, and hill tribe villages.',
  },
  {
    slug: 'budget05',
    title: 'Budget05: Elephant Observation and Hiking Doi Inthanon',
    titleTh: 'Budget05: Elephant Observation and Hiking Doi Inthanon',
    excerpt:
      'A full-day Chiang Mai budget tour combining elephant observation, Doi Inthanon National Park, and the Pha Dok Siew nature trail.',
    excerptTh:
      'A full-day Chiang Mai budget tour combining elephant observation, Doi Inthanon National Park, and the Pha Dok Siew nature trail.',
    description:
      'Join a full day of adventure with elephant observation, hands-on elephant activities, Doi Inthanon National Park, and a hike along the Pha Dok Siew nature trail. This route focuses on Chiang Mai nature, culture, and outdoor scenery.',
    descriptionTh:
      'Join a full day of adventure with elephant observation, hands-on elephant activities, Doi Inthanon National Park, and a hike along the Pha Dok Siew nature trail. This route focuses on Chiang Mai nature, culture, and outdoor scenery.',
    duration: 'Full day',
    location: 'Doi Inthanon, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '2,400 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Mai',
      'Doi Inthanon',
      'Elephant Observation',
      'Pha Dok Siew',
      'Hiking',
      'National Park',
      'Full day',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Elephant observation and hands-on activities',
      'Doi Inthanon National Park',
      'Pha Dok Siew nature trail hike',
      'Natural beauty and local culture of Chiang Mai',
    ],
    highlightsTh: [
      'Elephant observation and hands-on activities',
      'Doi Inthanon National Park',
      'Pha Dok Siew nature trail hike',
      'Natural beauty and local culture of Chiang Mai',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle:
      'Budget05 Elephant Observation and Hiking Doi Inthanon | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget05 Elephant Observation and Hiking Doi Inthanon with elephant activities, Doi Inthanon National Park, and Pha Dok Siew nature trail.',
  },
  {
    slug: 'budget06',
    title: 'Budget06: Tour Doi Inthanon National Park and Hilltribe Village',
    titleTh:
      'Budget06: Tour Doi Inthanon National Park and Hilltribe Village',
    excerpt:
      'A full-day Doi Inthanon join-in tour to Thailand highest peak, twin pagodas, Hmong market, waterfalls, and mountain scenery.',
    excerptTh:
      'A full-day Doi Inthanon join-in tour to Thailand highest peak, twin pagodas, Hmong market, waterfalls, and mountain scenery.',
    description:
      'Visit Doi Inthanon National Park, Thailand highest point at 2,565 meters above sea level. The tour highlights evergreen forest, the Twin King and Queen pagodas, Hmong market, waterfalls, birdwatching scenery, and hilltribe village atmosphere.',
    descriptionTh:
      'Visit Doi Inthanon National Park, Thailand highest point at 2,565 meters above sea level. The tour highlights evergreen forest, the Twin King and Queen pagodas, Hmong market, waterfalls, birdwatching scenery, and hilltribe village atmosphere.',
    duration: 'Full day',
    location: 'Doi Inthanon, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '1,400 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Mai',
      'Doi Inthanon',
      'Highest peak',
      'Twin Pagodas',
      'Hmong Market',
      'Waterfalls',
      'Birdwatching',
      'Hilltribe Village',
      'Full day',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Doi Inthanon National Park, Thailand highest peak',
      'Twin King and Queen pagodas',
      'Hmong market and hilltribe village atmosphere',
      'Waterfalls, evergreen forest, and birdwatching scenery',
    ],
    highlightsTh: [
      'Doi Inthanon National Park, Thailand highest peak',
      'Twin King and Queen pagodas',
      'Hmong market and hilltribe village atmosphere',
      'Waterfalls, evergreen forest, and birdwatching scenery',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle:
      'Budget06 Doi Inthanon National Park and Hilltribe Village | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget06 Doi Inthanon National Park and Hilltribe Village with Thailand highest peak, twin pagodas, Hmong market, waterfalls, and forest scenery.',
  },
  {
    slug: 'budget07',
    title: 'Budget07: Tour Chiang Rai Golden Triangle and Long Neck',
    titleTh: 'Budget07: Tour Chiang Rai Golden Triangle and Long Neck',
    excerpt:
      'A full-day Chiang Rai join-in tour from Chiang Mai with White Temple, Black House, Blue Temple, Golden Triangle, and Long Neck Karen village.',
    excerptTh:
      'A full-day Chiang Rai join-in tour from Chiang Mai with White Temple, Black House, Blue Temple, Golden Triangle, and Long Neck Karen village.',
    description:
      'Experience Chiang Rai in one day from Chiang Mai. Visit the White Temple, Black House Museum, Blue Temple, the Golden Triangle with a scenic boat cruise, and the long-necked Karen tribe.',
    descriptionTh:
      'Experience Chiang Rai in one day from Chiang Mai. Visit the White Temple, Black House Museum, Blue Temple, the Golden Triangle with a scenic boat cruise, and the long-necked Karen tribe.',
    duration: 'Full day',
    location: 'Chiang Rai, Thailand',
    groupSize: 'Join-in group tour',
    price: '1,750 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Rai',
      'Chiang Mai',
      'White Temple',
      'Black House',
      'Blue Temple',
      'Golden Triangle',
      'Boat cruise',
      'Long Neck Karen',
      'Full day',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'White Temple in Chiang Rai',
      'Black House Museum and Blue Temple',
      'Golden Triangle scenic boat cruise',
      'Long-necked Karen tribe visit',
    ],
    highlightsTh: [
      'White Temple in Chiang Rai',
      'Black House Museum and Blue Temple',
      'Golden Triangle scenic boat cruise',
      'Long-necked Karen tribe visit',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle:
      'Budget07 Chiang Rai Golden Triangle and Long Neck | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget07 Chiang Rai Golden Triangle and Long Neck from Chiang Mai with White Temple, Black House, Blue Temple, Golden Triangle boat cruise, and Long Neck Karen village.',
  },
  {
    slug: 'budget09',
    title: 'Budget09: Chiang Mai Night Safari Tour',
    titleTh: 'Budget09: Chiang Mai Night Safari Tour',
    excerpt:
      'A simple evening Night Safari Chiang Mai tour with ticket, shared transfer, or private round-trip transfer options.',
    excerptTh:
      'A simple evening Night Safari Chiang Mai tour with ticket, shared transfer, or private round-trip transfer options.',
    description:
      'Enjoy an easy evening at Night Safari Chiang Mai. Choose a special-rate ticket, shared hotel transfers in Chiang Mai town with ticket included, or a private round-trip transfer for families and groups. Explore the walking zone and tram safari at your own pace.',
    descriptionTh:
      'Enjoy an easy evening at Night Safari Chiang Mai. Choose a special-rate ticket, shared hotel transfers in Chiang Mai town with ticket included, or a private round-trip transfer for families and groups. Explore the walking zone and tram safari at your own pace.',
    duration: '3 - 4 hours',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Join-in group tour',
    price: '1,100 - 1,400 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Mai',
      'Night Safari',
      'Evening tour',
      'Tram safari',
      'Walking zone',
      'Shared transfer',
      'Private transfer',
      '3-4 hours',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Night Safari Chiang Mai evening visit',
      'Special-rate ticket option',
      'Shared hotel transfer or private round-trip transfer options',
      'Walking zone and tram safari at your own pace',
    ],
    highlightsTh: [
      'Night Safari Chiang Mai evening visit',
      'Special-rate ticket option',
      'Shared hotel transfer or private round-trip transfer options',
      'Walking zone and tram safari at your own pace',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle: 'Budget09 Chiang Mai Night Safari Tour | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget09 Chiang Mai Night Safari Tour with special-rate ticket, shared hotel transfer, private round-trip transfer, walking zone, and tram safari.',
  },
  {
    slug: 'budget10',
    title:
      'Budget10: Chiang Rai Day Trips Visit White Temple, Blue Temple and Black House',
    titleTh:
      'Budget10: Chiang Rai Day Trips Visit White Temple, Blue Temple and Black House',
    excerpt:
      'A Chiang Rai day trip from Chiang Mai visiting White Temple, Blue Temple, Black House Museum, and Long Neck Karen culture.',
    excerptTh:
      'A Chiang Rai day trip from Chiang Mai visiting White Temple, Blue Temple, Black House Museum, and Long Neck Karen culture.',
    description:
      'Embark on a Chiang Rai day trip where beauty, history, and culture meet. Visit Rong Khun White Temple, Black House Museum, Rong Sue Ten Blue Temple, and a long-necked Karen tribe village.',
    descriptionTh:
      'Embark on a Chiang Rai day trip where beauty, history, and culture meet. Visit Rong Khun White Temple, Black House Museum, Rong Sue Ten Blue Temple, and a long-necked Karen tribe village.',
    duration: 'Full day',
    location: 'Chiang Rai, Thailand',
    groupSize: 'Join-in group tour',
    price: '1,500 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Rai',
      'Chiang Mai',
      'White Temple',
      'Rong Khun Temple',
      'Blue Temple',
      'Rong Sue Ten Temple',
      'Black House Museum',
      'Long Neck Karen',
      'Full day',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Rong Khun White Temple',
      'Black House Museum',
      'Rong Sue Ten Blue Temple',
      'Long-necked Karen tribe cultural visit',
    ],
    highlightsTh: [
      'Rong Khun White Temple',
      'Black House Museum',
      'Rong Sue Ten Blue Temple',
      'Long-necked Karen tribe cultural visit',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle:
      'Budget10 Chiang Rai White Temple Blue Temple and Black House | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget10 Chiang Rai day trip from Chiang Mai with White Temple, Blue Temple, Black House Museum, and Long Neck Karen tribe village.',
  },
  {
    slug: 'budget11',
    title: 'Budget11: Chiang Mai City Tour by Tuktuk',
    titleTh: 'Budget11: Chiang Mai City Tour by Tuktuk',
    excerpt:
      'A half-day Chiang Mai city tour by tuktuk visiting Tha Phae Gate, temples, monument, and Waroros Market.',
    excerptTh:
      'A half-day Chiang Mai city tour by tuktuk visiting Tha Phae Gate, temples, monument, and Waroros Market.',
    description:
      'Explore Chiang Mai old city highlights by tuktuk. Visit Tha Phae Gate, Wat Chedi Luang, the Three Kings Monument, Wat Sri Suphan, and Waroros Market.',
    descriptionTh:
      'Explore Chiang Mai old city highlights by tuktuk. Visit Tha Phae Gate, Wat Chedi Luang, the Three Kings Monument, Wat Sri Suphan, and Waroros Market.',
    duration: 'Half day',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Join-in group tour',
    price: '1,400 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Mai',
      'City tour',
      'Tuk tuk',
      'Tha Phae Gate',
      'Wat Chedi Luang',
      'Three Kings Monument',
      'Wat Sri Suphan',
      'Waroros Market',
      'Half day',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Tha Phae Gate',
      'Wat Chedi Luang',
      'Three Kings Monument',
      'Wat Sri Suphan',
      'Waroros Market',
    ],
    highlightsTh: [
      'Tha Phae Gate',
      'Wat Chedi Luang',
      'Three Kings Monument',
      'Wat Sri Suphan',
      'Waroros Market',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle:
      'Budget11 Chiang Mai City Tour by Tuktuk | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget11 Chiang Mai City Tour by Tuktuk with Tha Phae Gate, Wat Chedi Luang, Three Kings Monument, Wat Sri Suphan, and Waroros Market.',
  },
  {
    slug: 'budget12',
    title: 'Budget12: Offering to Monks',
    titleTh: 'Budget12: Offering to Monks',
    excerpt:
      'A half-day Chiang Mai cultural tour for morning monk offering, Kru Ba Sri Wi Chai, Doi Suthep, and a hidden temple.',
    excerptTh:
      'A half-day Chiang Mai cultural tour for morning monk offering, Kru Ba Sri Wi Chai, Doi Suthep, and a hidden temple.',
    description:
      'Begin with a peaceful cultural experience offering respects to monks at Kru Ba Sri Wi Chai. Continue to Wat Phra That Doi Suthep and a hidden gem temple in Chiang Mai for a reflective half-day route.',
    descriptionTh:
      'Begin with a peaceful cultural experience offering respects to monks at Kru Ba Sri Wi Chai. Continue to Wat Phra That Doi Suthep and a hidden gem temple in Chiang Mai for a reflective half-day route.',
    duration: 'Half day',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Join-in group tour',
    price: '1,300 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Mai',
      'Offering to monks',
      'Kru Ba Sri Wi Chai',
      'Doi Suthep',
      'Temple',
      'Buddhist culture',
      'Half day',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Morning offering and respects to monks at Kru Ba Sri Wi Chai',
      'Wat Phra That Doi Suthep',
      'Hidden gem temple in Chiang Mai',
      'Cultural immersion and peaceful reflection',
    ],
    highlightsTh: [
      'Morning offering and respects to monks at Kru Ba Sri Wi Chai',
      'Wat Phra That Doi Suthep',
      'Hidden gem temple in Chiang Mai',
      'Cultural immersion and peaceful reflection',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle: 'Budget12 Offering to Monks | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget12 Offering to Monks in Chiang Mai with Kru Ba Sri Wi Chai, Wat Phra That Doi Suthep, and a hidden temple cultural route.',
  },
  {
    slug: 'budget13',
    title: 'Budget13: Chiang Mai Evening Tour',
    titleTh: 'Budget13: Chiang Mai Evening Tour',
    excerpt:
      'An evening Chiang Mai join-in tour with Wat Umong religious service and night views from Wat Phra That Doi Suthep.',
    excerptTh:
      'An evening Chiang Mai join-in tour with Wat Umong religious service and night views from Wat Phra That Doi Suthep.',
    description:
      'Join an evening route focused on spiritual atmosphere and scenic beauty. Watch monks perform their evening religious service at Wat Umong, then enjoy night-time views from Wat Phra That Doi Suthep.',
    descriptionTh:
      'Join an evening route focused on spiritual atmosphere and scenic beauty. Watch monks perform their evening religious service at Wat Umong, then enjoy night-time views from Wat Phra That Doi Suthep.',
    duration: 'Evening',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Join-in group tour',
    price: '700 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Mai',
      'Evening tour',
      'Wat Umong',
      'Doi Suthep',
      'Monk service',
      'Temple',
      'Night view',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Evening religious service at Wat Umong',
      'Night-time views from Wat Phra That Doi Suthep',
      'Thai culture and religion experience',
      'Evening budget join-in tour',
    ],
    highlightsTh: [
      'Evening religious service at Wat Umong',
      'Night-time views from Wat Phra That Doi Suthep',
      'Thai culture and religion experience',
      'Evening budget join-in tour',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle: 'Budget13 Chiang Mai Evening Tour | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget13 Chiang Mai Evening Tour with Wat Umong evening religious service and night views from Wat Phra That Doi Suthep.',
  },
  {
    slug: 'budget14',
    title: 'Budget14: Amazing Lampang Day Tour',
    titleTh: 'Budget14: Amazing Lampang Day Tour',
    excerpt:
      'A full-day Lampang group tour from Chiang Mai with mountain pagodas, valley views, Chaeson National Park, and hot springs.',
    excerptTh:
      'A full-day Lampang group tour from Chiang Mai with mountain pagodas, valley views, Chaeson National Park, and hot springs.',
    description:
      'Travel to Lampang for Wat Phrabat Pu Phadaeng, where white pagodas rise above mountain tops with valley views. Continue to Chaeson National Park for hot springs and nature trails.',
    descriptionTh:
      'Travel to Lampang for Wat Phrabat Pu Phadaeng, where white pagodas rise above mountain tops with valley views. Continue to Chaeson National Park for hot springs and nature trails.',
    duration: 'Full day',
    location: 'Lampang, Thailand',
    groupSize: 'Join-in group tour',
    price: '3,750 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Lampang',
      'Chiang Mai',
      'Wat Phrabat Pu Phadaeng',
      'Chaeson National Park',
      'Hot springs',
      'Mountain pagodas',
      'Full day',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Wat Phrabat Pu Phadaeng mountain pagodas',
      'Views over Lampang valleys',
      'Chaeson National Park hot springs',
      'Nature trails and hidden gems',
    ],
    highlightsTh: [
      'Wat Phrabat Pu Phadaeng mountain pagodas',
      'Views over Lampang valleys',
      'Chaeson National Park hot springs',
      'Nature trails and hidden gems',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle: 'Budget14 Amazing Lampang Day Tour | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget14 Amazing Lampang Day Tour from Chiang Mai with Wat Phrabat Pu Phadaeng mountain pagodas, Chaeson National Park, hot springs, and nature trails.',
  },
  {
    slug: 'budget15',
    title: 'Budget15: Chiang Mai Coffee Farm Tour',
    titleTh: 'Budget15: Chiang Mai Coffee Farm Tour',
    excerpt:
      'A full-day Chiang Mai coffee farm tour with Pang Hai coffee, hands-on activities, mountain views, and local culture.',
    excerptTh:
      'A full-day Chiang Mai coffee farm tour with Pang Hai coffee, hands-on activities, mountain views, and local culture.',
    description:
      'Experience the Chiang Mai Coffee Farm Tour with Pang Hai coffee, hands-on activities, mountain views, and a relaxed local cultural journey. This budget tour focuses on the aroma, scenery, and community feel of Chiang Mai coffee country.',
    descriptionTh:
      'Experience the Chiang Mai Coffee Farm Tour with Pang Hai coffee, hands-on activities, mountain views, and a relaxed local cultural journey. This budget tour focuses on the aroma, scenery, and community feel of Chiang Mai coffee country.',
    duration: 'Full day',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Join-in group tour',
    price: '1,800 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Mai',
      'Coffee farm',
      'Pang Hai',
      'Coffee tour',
      'Hands-on activities',
      'Mountain views',
      'Full day',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Chiang Mai Coffee Farm Tour',
      'Pang Hai coffee experience',
      'Hands-on coffee activities',
      'Mountain views and local culture',
    ],
    highlightsTh: [
      'Chiang Mai Coffee Farm Tour',
      'Pang Hai coffee experience',
      'Hands-on coffee activities',
      'Mountain views and local culture',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle: 'Budget15 Chiang Mai Coffee Farm Tour | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget15 Chiang Mai Coffee Farm Tour with Pang Hai coffee, hands-on activities, mountain views, and local cultural experiences.',
  },
  {
    slug: 'budget16',
    title: 'Budget16: Sunrise at Doi Suthep Temple and Elephant Observation',
    titleTh:
      'Budget16: Sunrise at Doi Suthep Temple and Elephant Observation',
    excerpt:
      'A full-day Chiang Mai tour with sunrise at Doi Suthep Temple, breakfast, historic temples, and Joy Elephant Sanctuary.',
    excerptTh:
      'A full-day Chiang Mai tour with sunrise at Doi Suthep Temple, breakfast, historic temples, and Joy Elephant Sanctuary.',
    description:
      'Enjoy sunrise at Doi Suthep Temple followed by a cultural and elephant experience at Joy Elephant Sanctuary. The route includes breakfast, historic temple visits, and an interactive elephant observation session.',
    descriptionTh:
      'Enjoy sunrise at Doi Suthep Temple followed by a cultural and elephant experience at Joy Elephant Sanctuary. The route includes breakfast, historic temple visits, and an interactive elephant observation session.',
    duration: 'Full day',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Join-in group tour',
    price: '2,600 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-mai-budget-tours',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Sunrise',
      'Joy Elephant Sanctuary',
      'Elephant Observation',
      'Breakfast',
      'Historic temples',
      'Full day',
    ],
    image: chiangMaiBudgetTourImage,
    highlights: [
      'Sunrise at Doi Suthep Temple',
      'Breakfast and historic temple visits',
      'Joy Elephant Sanctuary',
      'Interactive elephant observation session',
      'Nature and culture in Chiang Mai',
    ],
    highlightsTh: [
      'Sunrise at Doi Suthep Temple',
      'Breakfast and historic temple visits',
      'Joy Elephant Sanctuary',
      'Interactive elephant observation session',
      'Nature and culture in Chiang Mai',
    ],
    included: chiangMaiBudgetIncluded,
    includedTh: chiangMaiBudgetIncludedTh,
    seoTitle:
      'Budget16 Sunrise at Doi Suthep and Elephant Observation | Chiang Mai Budget Tours',
    seoDescription:
      'Book Budget16 Sunrise at Doi Suthep Temple and Elephant Observation with Joy Elephant Sanctuary, breakfast, historic temples, and Chiang Mai nature and culture.',
  },
  {
    slug: 'chiang-mai-tour01',
    title: 'Chiang Mai Tour01: One Day Special Chiang Mai Package All Highlights',
    titleTh: 'Chiang Mai Tour01: One Day Special Chiang Mai Package All Highlights',
    excerpt:
      'A private full-day Chiang Mai highlights tour with elephant care, Orchid Farm, Doi Suthep Temple, and Hmong Village.',
    excerptTh:
      'A private full-day Chiang Mai highlights tour with elephant care, Orchid Farm, Doi Suthep Temple, and Hmong Village.',
    description:
      'Visit the highlight places of Chiang Mai in one private day tour, including elephant care, Orchid Farm, Doi Suthep Temple, and Hmong Village.',
    descriptionTh:
      'Visit the highlight places of Chiang Mai in one private day tour, including elephant care, Orchid Farm, Doi Suthep Temple, and Hmong Village.',
    duration: 'Full day',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private group tour',
    price: 'Start from 2,100 - 3,500 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Hmong Village',
      'Elephant Care',
      'Orchid Farm',
      'Private group',
      'Full day',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Elephant care experience',
      'Orchid Farm',
      'Doi Suthep Temple',
      'Hmong Village',
      'Private full-day Chiang Mai highlights route',
    ],
    highlightsTh: [
      'Elephant care experience',
      'Orchid Farm',
      'Doi Suthep Temple',
      'Hmong Village',
      'Private full-day Chiang Mai highlights route',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour01 Private Chiang Mai Highlights | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour01 private full-day highlights tour with elephant care, Orchid Farm, Doi Suthep Temple, and Hmong Village.',
  },
  {
    slug: 'chiang-mai-tour02',
    title:
      'Chiang Mai Tour02: One Day Doi Inthanon National Park and Hilltribe Village',
    titleTh:
      'Chiang Mai Tour02: One Day Doi Inthanon National Park and Hilltribe Village',
    excerpt:
      'A private Doi Inthanon sightseeing tour to Thailand highest peak, evergreen forest, waterfalls, and the King and Queen pagodas.',
    excerptTh:
      'A private Doi Inthanon sightseeing tour to Thailand highest peak, evergreen forest, waterfalls, and the King and Queen pagodas.',
    description:
      'Visit Doi Inthanon National Park, the highest peak of Thailand at 2,565 meters above sea level. This private sightseeing tour includes evergreen forests, waterfalls, flora and fauna, natural scenery, and the King and Queen pagodas.',
    descriptionTh:
      'Visit Doi Inthanon National Park, the highest peak of Thailand at 2,565 meters above sea level. This private sightseeing tour includes evergreen forests, waterfalls, flora and fauna, natural scenery, and the King and Queen pagodas.',
    duration: 'Full day',
    location: 'Doi Inthanon, Chiang Mai',
    groupSize: 'Private group tour',
    price: 'Start from 1,800 - 3,500 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Doi Inthanon',
      'Hilltribe Village',
      'King and Queen Pagodas',
      'Waterfalls',
      'Birdwatching',
      'National Park',
      'Private group',
      'Full day',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Doi Inthanon National Park',
      'Thailand highest peak at 2,565 meters',
      'King and Queen pagodas',
      'Evergreen forest, waterfalls, flora, and fauna',
    ],
    highlightsTh: [
      'Doi Inthanon National Park',
      'Thailand highest peak at 2,565 meters',
      'King and Queen pagodas',
      'Evergreen forest, waterfalls, flora, and fauna',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour02 Private Doi Inthanon National Park | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour02 private Doi Inthanon National Park and Hilltribe Village sightseeing tour with King and Queen pagodas, waterfalls, and Thailand highest peak.',
  },
  {
    slug: 'chiang-mai-tour03',
    title:
      'Chiang Mai Tour03: Doi Inthanon National Park and Trekking at Mae Klang Luang Village',
    titleTh:
      'Chiang Mai Tour03: Doi Inthanon National Park and Trekking at Mae Klang Luang Village',
    excerpt:
      'A private Doi Inthanon trekking tour with Wachirathan Waterfall, Mae Klang Luang Karen village, rice fields, Pha Dok Siew Waterfall, and pagodas.',
    excerptTh:
      'A private Doi Inthanon trekking tour with Wachirathan Waterfall, Mae Klang Luang Karen village, rice fields, Pha Dok Siew Waterfall, and pagodas.',
    description:
      'Visit Wachirathan Waterfall and enjoy eco trekking in Doi Inthanon National Park around Baan Mae Klang Luang Karen hilltribe village. The route includes stepped rice fields, Pha Dok Siew Waterfall, the highest spot of Thailand, and the King and Queen pagodas.',
    descriptionTh:
      'Visit Wachirathan Waterfall and enjoy eco trekking in Doi Inthanon National Park around Baan Mae Klang Luang Karen hilltribe village. The route includes stepped rice fields, Pha Dok Siew Waterfall, the highest spot of Thailand, and the King and Queen pagodas.',
    duration: 'Full day',
    location: 'Doi Inthanon, Chiang Mai',
    groupSize: 'Private group tour',
    price: 'Start from 2,100 - 3,900 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Doi Inthanon',
      'Mae Klang Luang',
      'Karen Village',
      'Pha Dok Siew Waterfall',
      'Wachirathan Waterfall',
      'Rice fields',
      'Trekking',
      'Private group',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Wachirathan Waterfall',
      'Eco trekking at Baan Mae Klang Luang Karen village',
      'Stepped rice fields and Pha Dok Siew Waterfall',
      'Highest spot of Thailand',
      'King and Queen pagodas',
    ],
    highlightsTh: [
      'Wachirathan Waterfall',
      'Eco trekking at Baan Mae Klang Luang Karen village',
      'Stepped rice fields and Pha Dok Siew Waterfall',
      'Highest spot of Thailand',
      'King and Queen pagodas',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour03 Doi Inthanon Mae Klang Luang Trekking | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour03 private Doi Inthanon trekking at Mae Klang Luang with Wachirathan Waterfall, rice fields, Pha Dok Siew Waterfall, and pagodas.',
  },
  {
    slug: 'chiang-mai-tour04',
    title:
      'Chiang Mai Tour04: Doi Inthanon National Park and Kew Mae Pan Nature Trail',
    titleTh:
      'Chiang Mai Tour04: Doi Inthanon National Park and Kew Mae Pan Nature Trail',
    excerpt:
      'A private Doi Inthanon trekking route with Kew Mae Pan Nature Trail, Wachirathan Waterfall, Thailand highest spot, and King and Queen pagodas.',
    excerptTh:
      'A private Doi Inthanon trekking route with Kew Mae Pan Nature Trail, Wachirathan Waterfall, Thailand highest spot, and King and Queen pagodas.',
    description:
      'Explore Doi Inthanon National Park with Wachirathan Waterfall and the 2.78-kilometer Kew Mae Pan Nature Trail, known for unseen mountain views. The tour also visits the highest spot of Thailand and the King and Queen pagodas.',
    descriptionTh:
      'Explore Doi Inthanon National Park with Wachirathan Waterfall and the 2.78-kilometer Kew Mae Pan Nature Trail, known for unseen mountain views. The tour also visits the highest spot of Thailand and the King and Queen pagodas.',
    duration: 'Full day',
    location: 'Doi Inthanon, Chiang Mai',
    groupSize: 'Private group tour',
    price: 'Start from 2,100 - 3,900 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Doi Inthanon',
      'Kew Mae Pan',
      'Nature Trail',
      'Wachirathan Waterfall',
      'King and Queen Pagodas',
      'Trekking',
      'Private group',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Wachirathan Waterfall',
      'Kew Mae Pan Nature Trail, 2.78 kilometers',
      'Unseen mountain views',
      'Highest spot of Thailand',
      'King and Queen pagodas',
    ],
    highlightsTh: [
      'Wachirathan Waterfall',
      'Kew Mae Pan Nature Trail, 2.78 kilometers',
      'Unseen mountain views',
      'Highest spot of Thailand',
      'King and Queen pagodas',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour04 Doi Inthanon Kew Mae Pan Trekking | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour04 private Doi Inthanon and Kew Mae Pan Nature Trail tour with Wachirathan Waterfall, Thailand highest spot, and King and Queen pagodas.',
  },
  {
    slug: 'chiang-mai-tour05',
    title: 'Chiang Mai Tour05: One Day Chiang Rai City Tour',
    titleTh: 'Chiang Mai Tour05: One Day Chiang Rai City Tour',
    excerpt:
      'A private one-day Chiang Rai city tour from Chiang Mai for culture, arts, sightseeing, and top city highlights.',
    excerptTh:
      'A private one-day Chiang Rai city tour from Chiang Mai for culture, arts, sightseeing, and top city highlights.',
    description:
      'A special private day tour from Chiang Mai to Chiang Rai City for families and groups who love culture, arts, and sightseeing. Explore the top attractions and highlights of Chiang Rai City.',
    descriptionTh:
      'A special private day tour from Chiang Mai to Chiang Rai City for families and groups who love culture, arts, and sightseeing. Explore the top attractions and highlights of Chiang Rai City.',
    duration: 'Full day',
    location: 'Chiang Rai, Thailand',
    groupSize: 'Private group tour',
    price: 'Start from 1,500 - 3,600 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Rai',
      'Chiang Mai',
      'Chiang Rai City',
      'Culture',
      'Arts',
      'Sightseeing',
      'Private group',
      'Full day',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Private Chiang Rai City tour from Chiang Mai',
      'Culture, arts, and sightseeing route',
      'Top attractions and city highlights',
      'Flexible private family or group pace',
    ],
    highlightsTh: [
      'Private Chiang Rai City tour from Chiang Mai',
      'Culture, arts, and sightseeing route',
      'Top attractions and city highlights',
      'Flexible private family or group pace',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour05 Private Chiang Rai City Tour | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour05 private one-day Chiang Rai City tour from Chiang Mai for culture, arts, sightseeing, and city highlights.',
  },
  {
    slug: 'chiang-mai-tour06',
    title: 'Chiang Mai Tour06: One Day Tour Chiang Rai and Golden Triangle',
    titleTh: 'Chiang Mai Tour06: One Day Tour Chiang Rai and Golden Triangle',
    excerpt:
      'A private Chiang Rai and Golden Triangle day tour from Chiang Mai with hot spring, White Temple, Chui Fong Tea Plantation, and the three-country border.',
    excerptTh:
      'A private Chiang Rai and Golden Triangle day tour from Chiang Mai with hot spring, White Temple, Chui Fong Tea Plantation, and the three-country border.',
    description:
      'Travel privately from Chiang Mai to Chiang Rai for a sightseeing route covering hot spring, White Temple, Chui Fong Tea Plantation, and the Golden Triangle where Thailand, Myanmar, and Laos meet.',
    descriptionTh:
      'Travel privately from Chiang Mai to Chiang Rai for a sightseeing route covering hot spring, White Temple, Chui Fong Tea Plantation, and the Golden Triangle where Thailand, Myanmar, and Laos meet.',
    duration: 'Full day',
    location: 'Chiang Rai, Thailand',
    groupSize: 'Private group tour',
    price: 'Start from 1,600 - 3,800 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Rai',
      'Chiang Mai',
      'Golden Triangle',
      'White Temple',
      'Hot Spring',
      'Chui Fong Tea Plantation',
      'Myanmar',
      'Laos',
      'Private group',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Hot spring stop',
      'White Temple',
      'Chui Fong Tea Plantation',
      'Golden Triangle border of Thailand, Myanmar, and Laos',
    ],
    highlightsTh: [
      'Hot spring stop',
      'White Temple',
      'Chui Fong Tea Plantation',
      'Golden Triangle border of Thailand, Myanmar, and Laos',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour06 Private Chiang Rai Golden Triangle | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour06 private Chiang Rai and Golden Triangle day tour with hot spring, White Temple, Chui Fong Tea Plantation, and three-country border views.',
  },
  {
    slug: 'chiang-mai-tour07',
    title:
      'Chiang Mai Tour07: Unseen Lampang Day Tour to Wat Chaloem Phra Kiat and Chae Son',
    titleTh:
      'Chiang Mai Tour07: Unseen Lampang Day Tour to Wat Chaloem Phra Kiat and Chae Son',
    excerpt:
      'A private Lampang day tour from Chiang Mai to Wat Chaloem Phra Kiat, mountain views, waterfall, hot spring, and Chae Son National Park.',
    excerptTh:
      'A private Lampang day tour from Chiang Mai to Wat Chaloem Phra Kiat, mountain views, waterfall, hot spring, and Chae Son National Park.',
    description:
      'Travel to unseen Lampang for Wat Chaloem Phra Kiat on the mountain top with panoramic views. Continue to waterfalls and hot springs in the natural setting of Chae Son National Park.',
    descriptionTh:
      'Travel to unseen Lampang for Wat Chaloem Phra Kiat on the mountain top with panoramic views. Continue to waterfalls and hot springs in the natural setting of Chae Son National Park.',
    duration: 'Full day',
    location: 'Lampang, Thailand',
    groupSize: 'Private group tour',
    price: 'Start from 1,900 - 4,100 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Lampang',
      'Chiang Mai',
      'Wat Chaloem Phra Kiat',
      'Chae Son National Park',
      'Hot spring',
      'Waterfall',
      'Mountain temple',
      'Private group',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Wat Chaloem Phra Kiat mountain-top temple',
      'Panoramic Lampang views',
      'Waterfall visit',
      'Hot spring in Chae Son National Park',
    ],
    highlightsTh: [
      'Wat Chaloem Phra Kiat mountain-top temple',
      'Panoramic Lampang views',
      'Waterfall visit',
      'Hot spring in Chae Son National Park',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour07 Private Unseen Lampang Day Tour | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour07 private Lampang day tour to Wat Chaloem Phra Kiat, Chae Son National Park, waterfall, hot spring, and mountain views.',
  },
  {
    slug: 'chiang-mai-tour08',
    title:
      'Chiang Mai Tour08: Trekking in Doi Suthep with Wat Phrathat Doi Suthep and Hmong Village',
    titleTh:
      'Chiang Mai Tour08: Trekking in Doi Suthep with Wat Phrathat Doi Suthep and Hmong Village',
    excerpt:
      'A private Doi Suthep tour with Wat Phrathat Doi Suthep, Hmong Doi Pui Village, Monthathan Waterfall, and a 3-kilometer waterfall trail trek.',
    excerptTh:
      'A private Doi Suthep tour with Wat Phrathat Doi Suthep, Hmong Doi Pui Village, Monthathan Waterfall, and a 3-kilometer waterfall trail trek.',
    description:
      'Visit Wat Phrathat Doi Suthep, the key landmark temple of Chiang Mai, then learn about hill tribe culture at Hmong Doi Pui Village. Continue to Monthathan Waterfall and trek on the waterfall trail for about 3 kilometers.',
    descriptionTh:
      'Visit Wat Phrathat Doi Suthep, the key landmark temple of Chiang Mai, then learn about hill tribe culture at Hmong Doi Pui Village. Continue to Monthathan Waterfall and trek on the waterfall trail for about 3 kilometers.',
    duration: 'Full day',
    location: 'Doi Suthep, Chiang Mai',
    groupSize: 'Private group tour',
    price: 'Start from 1,500 - 3,000 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Wat Phrathat Doi Suthep',
      'Hmong Doi Pui Village',
      'Monthathan Waterfall',
      'Trekking',
      'Private group',
      'Full day',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Wat Phrathat Doi Suthep',
      'Hmong Doi Pui Village',
      'Monthathan Waterfall',
      'Waterfall trail trek around 3 kilometers',
    ],
    highlightsTh: [
      'Wat Phrathat Doi Suthep',
      'Hmong Doi Pui Village',
      'Monthathan Waterfall',
      'Waterfall trail trek around 3 kilometers',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour08 Private Doi Suthep Trekking | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour08 private trekking in Doi Suthep with Wat Phrathat Doi Suthep, Hmong Doi Pui Village, Monthathan Waterfall, and waterfall trail.',
  },
  {
    slug: 'chiang-mai-tour09',
    title: 'Chiang Mai Tour09: Chiang Mai Elephant Care and Bua Tong Sticky Waterfall',
    titleTh:
      'Chiang Mai Tour09: Chiang Mai Elephant Care and Bua Tong Sticky Waterfall',
    excerpt:
      'A private Chiang Mai tour combining elephant care with refreshing fun at Bua Tong Sticky Waterfall.',
    excerptTh:
      'A private Chiang Mai tour combining elephant care with refreshing fun at Bua Tong Sticky Waterfall.',
    description:
      'Enjoy a private day tour with an unforgettable elephant care experience and time to relax and refresh at the beautiful Bua Tong Sticky Waterfall.',
    descriptionTh:
      'Enjoy a private day tour with an unforgettable elephant care experience and time to relax and refresh at the beautiful Bua Tong Sticky Waterfall.',
    duration: 'Full day',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private group tour',
    price: 'Start from 2,200 - 3,600 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Elephant Care',
      'Bua Tong Sticky Waterfall',
      'Waterfall',
      'Mae Rim',
      'Private group',
      'Full day',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Elephant care experience',
      'Friendly elephant activities',
      'Bua Tong Sticky Waterfall',
      'Private full-day nature and activity route',
    ],
    highlightsTh: [
      'Elephant care experience',
      'Friendly elephant activities',
      'Bua Tong Sticky Waterfall',
      'Private full-day nature and activity route',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour09 Elephant Care and Bua Tong Sticky Waterfall | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour09 private Chiang Mai elephant care and Bua Tong Sticky Waterfall tour for a full day of nature and elephant activities.',
  },
  {
    slug: 'chiang-mai-tour10',
    title: 'Chiang Mai Tour10: One Day Elephant Care and Bamboo Rafting Adventure',
    titleTh:
      'Chiang Mai Tour10: One Day Elephant Care and Bamboo Rafting Adventure',
    excerpt:
      'A private full-day Chiang Mai tour with elephant care and bamboo rafting along Mae Wang stream.',
    excerptTh:
      'A private full-day Chiang Mai tour with elephant care and bamboo rafting along Mae Wang stream.',
    description:
      'Spend a private day with elephant care activities and a bamboo rafting adventure along Mae Wang stream, combining nature, river scenery, and hands-on Chiang Mai experiences.',
    descriptionTh:
      'Spend a private day with elephant care activities and a bamboo rafting adventure along Mae Wang stream, combining nature, river scenery, and hands-on Chiang Mai experiences.',
    duration: 'Full day',
    location: 'Mae Wang, Chiang Mai',
    groupSize: 'Private group tour',
    price: 'Start from 2,000 - 3,400 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Mae Wang',
      'Elephant Care',
      'Bamboo Rafting',
      'Mae Wang Stream',
      'Adventure',
      'Private group',
      'Full day',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Elephant care experience',
      'Bamboo rafting adventure',
      'Mae Wang stream',
      'Private full-day activity tour',
    ],
    highlightsTh: [
      'Elephant care experience',
      'Bamboo rafting adventure',
      'Mae Wang stream',
      'Private full-day activity tour',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour10 Elephant Care and Bamboo Rafting | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour10 private elephant care and bamboo rafting adventure along Mae Wang stream from Chiang Mai.',
  },
  {
    slug: 'chiang-mai-tour11',
    title: 'Chiang Mai Tour11: Temple Tranquility and Bamboo Rafting',
    titleTh: 'Chiang Mai Tour11: Temple Tranquility and Bamboo Rafting',
    excerpt:
      'A private Chiang Mai tour to Wat Luang Khun Win with Lanna architecture, local Thai cuisine, and bamboo rafting on the Mae Wang River.',
    excerptTh:
      'A private Chiang Mai tour to Wat Luang Khun Win with Lanna architecture, local Thai cuisine, and bamboo rafting on the Mae Wang River.',
    description:
      'Embark on a private tour to Wat Luang Khun Win, featuring Lanna-style architecture and a large wooden Buddha. After authentic Thai cuisine at a local restaurant, enjoy bamboo rafting on the Mae Wang River.',
    descriptionTh:
      'Embark on a private tour to Wat Luang Khun Win, featuring Lanna-style architecture and a large wooden Buddha. After authentic Thai cuisine at a local restaurant, enjoy bamboo rafting on the Mae Wang River.',
    duration: 'Full day',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private group tour',
    price: 'Start from 1,500 - 2,900 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Wat Luang Khun Win',
      'Lanna architecture',
      'Wooden Buddha',
      'Bamboo Rafting',
      'Mae Wang River',
      'Thai cuisine',
      'Private group',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Wat Luang Khun Win',
      'Lanna-style architecture and wooden Buddha',
      'Local Thai cuisine',
      'Bamboo rafting on the Mae Wang River',
    ],
    highlightsTh: [
      'Wat Luang Khun Win',
      'Lanna-style architecture and wooden Buddha',
      'Local Thai cuisine',
      'Bamboo rafting on the Mae Wang River',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour11 Temple Tranquility and Bamboo Rafting | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour11 private Wat Luang Khun Win temple tour with local Thai cuisine and bamboo rafting on Mae Wang River.',
  },
  {
    slug: 'chiang-mai-tour12',
    title: 'Chiang Mai Tour12: Mae Kampong and ATV Adventure',
    titleTh: 'Chiang Mai Tour12: Mae Kampong and ATV Adventure',
    excerpt:
      'A private Chiang Mai tour combining Mae Kampong Village, temple and village views, forest scenery, and ATV riding.',
    excerptTh:
      'A private Chiang Mai tour combining Mae Kampong Village, temple and village views, forest scenery, and ATV riding.',
    description:
      'Enjoy a day combining the tranquility of Mae Kampong Village with the thrill of ATV riding. Explore a serene temple and village views before heading into the forest for an ATV adventure.',
    descriptionTh:
      'Enjoy a day combining the tranquility of Mae Kampong Village with the thrill of ATV riding. Explore a serene temple and village views before heading into the forest for an ATV adventure.',
    duration: 'Full day',
    location: 'Mae Kampong, Chiang Mai',
    groupSize: 'Private group tour',
    price: 'Start from 3,400 - 5,200 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Mae Kampong',
      'ATV',
      'Adventure',
      'Village',
      'Forest',
      'Temple',
      'Private group',
      'Full day',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Mae Kampong Village',
      'Temple and village views',
      'Forest ATV adventure',
      'Private full-day scenic and adventure route',
    ],
    highlightsTh: [
      'Mae Kampong Village',
      'Temple and village views',
      'Forest ATV adventure',
      'Private full-day scenic and adventure route',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Chiang Mai Tour12 Mae Kampong and ATV Adventure | Chiang Mai Private Groups',
    seoDescription:
      'Book Chiang Mai Tour12 private Mae Kampong and ATV Adventure with village views, temple visit, forest route, and ATV riding from Chiang Mai.',
  },
  {
    slug: 'half-day-tour01',
    title: 'Half Day Tour01: Half Day Chiang Mai City Tour',
    titleTh: 'Half Day Tour01: Half Day Chiang Mai City Tour',
    excerpt:
      'A private half-day Chiang Mai old city tour visiting Wat Phra Singh, Wat Chedi Luang, Wat Chiang Mun, and Warorot Market.',
    excerptTh:
      'A private half-day Chiang Mai old city tour visiting Wat Phra Singh, Wat Chedi Luang, Wat Chiang Mun, and Warorot Market.',
    description:
      'Visit the most important temples in Chiang Mai old city, including Wat Phra Singh, Wat Chedi Luang, Wat Chiang Mun, and Warorot Market with the daily life of Northern people.',
    descriptionTh:
      'Visit the most important temples in Chiang Mai old city, including Wat Phra Singh, Wat Chedi Luang, Wat Chiang Mun, and Warorot Market with the daily life of Northern people.',
    duration: 'Half day',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private group tour',
    price: 'Start from 900 - 2,100 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'City tour',
      'Wat Phra Singh',
      'Wat Chedi Luang',
      'Wat Chiang Mun',
      'Warorot Market',
      'Old City',
      'Private group',
      'Half day',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Wat Phra Singh',
      'Wat Chedi Luang',
      'Wat Chiang Mun',
      'Warorot Market',
      'Daily life of Northern people',
    ],
    highlightsTh: [
      'Wat Phra Singh',
      'Wat Chedi Luang',
      'Wat Chiang Mun',
      'Warorot Market',
      'Daily life of Northern people',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Half Day Tour01 Private Chiang Mai City Tour | Chiang Mai Private Groups',
    seoDescription:
      'Book Half Day Tour01 private Chiang Mai City Tour with Wat Phra Singh, Wat Chedi Luang, Wat Chiang Mun, and Warorot Market.',
  },
  {
    slug: 'half-day-tour02',
    title: 'Half Day Tour02: Half Day Doi Suthep Temple and Hmong Village',
    titleTh: 'Half Day Tour02: Half Day Doi Suthep Temple and Hmong Village',
    excerpt:
      'A private half-day Doi Suthep tour visiting Chiang Mai landmark temple and Hmong Hilltribe Village.',
    excerptTh:
      'A private half-day Doi Suthep tour visiting Chiang Mai landmark temple and Hmong Hilltribe Village.',
    description:
      'Visit the most famous temple and landmark of Chiang Mai, Doi Suthep Temple, together with Hmong Hilltribe Village on a flexible private half-day route.',
    descriptionTh:
      'Visit the most famous temple and landmark of Chiang Mai, Doi Suthep Temple, together with Hmong Hilltribe Village on a flexible private half-day route.',
    duration: 'Half day',
    location: 'Doi Suthep, Chiang Mai',
    groupSize: 'Private group tour',
    price: 'Start from 1,000 - 2,400 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Doi Suthep Temple',
      'Hmong Hilltribe Village',
      'Temple',
      'Private group',
      'Half day',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Doi Suthep Temple',
      'Hmong Hilltribe Village',
      'Chiang Mai landmark temple',
      'Private half-day mountain route',
    ],
    highlightsTh: [
      'Doi Suthep Temple',
      'Hmong Hilltribe Village',
      'Chiang Mai landmark temple',
      'Private half-day mountain route',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Half Day Tour02 Doi Suthep Temple and Hmong Village | Chiang Mai Private Groups',
    seoDescription:
      'Book Half Day Tour02 private Doi Suthep Temple and Hmong Village tour from Chiang Mai.',
  },
  {
    slug: 'half-day-tour03',
    title: 'Half Day Tour03: Half Day Doi Suthep Temple and Monk Trail Trekking',
    titleTh:
      'Half Day Tour03: Half Day Doi Suthep Temple and Monk Trail Trekking',
    excerpt:
      'A private half-day Chiang Mai tour with Doi Suthep Temple and short Monk Trail trekking from Wat Pha Lad.',
    excerptTh:
      'A private half-day Chiang Mai tour with Doi Suthep Temple and short Monk Trail trekking from Wat Pha Lad.',
    description:
      'Visit Doi Suthep Temple, Chiang Mai famous landmark, then enjoy a short adventure trek on the Monk Trail from Wat Pha Lad, the hidden temple down the hill.',
    descriptionTh:
      'Visit Doi Suthep Temple, Chiang Mai famous landmark, then enjoy a short adventure trek on the Monk Trail from Wat Pha Lad, the hidden temple down the hill.',
    duration: 'Half day',
    location: 'Doi Suthep, Chiang Mai',
    groupSize: 'Private group tour',
    price: 'Start from 1,000 - 2,500 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Doi Suthep Temple',
      'Monk Trail',
      'Wat Pha Lad',
      'Trekking',
      'Private group',
      'Half day',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Doi Suthep Temple',
      'Short Monk Trail trekking',
      'Wat Pha Lad hidden temple',
      'Private half-day temple and nature route',
    ],
    highlightsTh: [
      'Doi Suthep Temple',
      'Short Monk Trail trekking',
      'Wat Pha Lad hidden temple',
      'Private half-day temple and nature route',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Half Day Tour03 Doi Suthep and Monk Trail Trekking | Chiang Mai Private Groups',
    seoDescription:
      'Book Half Day Tour03 private Doi Suthep Temple and Monk Trail trekking from Wat Pha Lad in Chiang Mai.',
  },
  {
    slug: 'half-day-tour04',
    title: 'Half Day Tour04: Half Day Elephant Care and Orchid Farm',
    titleTh: 'Half Day Tour04: Half Day Elephant Care and Orchid Farm',
    excerpt:
      'A private half-day Chiang Mai tour with elephant care and a visit to the orchid and butterfly farm.',
    excerptTh:
      'A private half-day Chiang Mai tour with elephant care and a visit to the orchid and butterfly farm.',
    description:
      'Enjoy a private half-day tour with an unforgettable elephant care experience and a visit to the beautiful orchid and butterfly farm.',
    descriptionTh:
      'Enjoy a private half-day tour with an unforgettable elephant care experience and a visit to the beautiful orchid and butterfly farm.',
    duration: 'Half day',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private group tour',
    price: 'Start from 2,000 - 3,400 THB / person',
    category: 'chiang-mai-private-groups',
    tags: [
      'Chiang Mai',
      'Elephant Care',
      'Orchid Farm',
      'Butterfly Farm',
      'Mae Rim',
      'Private group',
      'Half day',
    ],
    image: chiangMaiPrivateGroupTourImage,
    highlights: [
      'Elephant care experience',
      'Orchid Farm',
      'Butterfly Farm',
      'Private half-day Chiang Mai activity tour',
    ],
    highlightsTh: [
      'Elephant care experience',
      'Orchid Farm',
      'Butterfly Farm',
      'Private half-day Chiang Mai activity tour',
    ],
    included: chiangMaiPrivateGroupIncluded,
    includedTh: chiangMaiPrivateGroupIncludedTh,
    seoTitle:
      'Half Day Tour04 Elephant Care and Orchid Farm | Chiang Mai Private Groups',
    seoDescription:
      'Book Half Day Tour04 private elephant care and Orchid Farm tour in Chiang Mai with butterfly farm visit.',
  },
  {
    slug: 'trekking-at-mae-tang-area',
    title: 'Chiang Mai Trek01: 1 Day Trekking Mae Tang Area',
    titleTh: 'Chiang Mai Trek01: 1 Day Trekking Mae Tang Area',
    excerpt:
      'A 1-day join-in Mae Taeng trek with elephants, hidden waterfall trekking, and white water rafting.',
    excerptTh:
      'A 1-day join-in Mae Taeng trek with elephants, hidden waterfall trekking, and white water rafting.',
    description:
      'Adventure trek in the Mae Taeng area with elephant interaction, trekking to a hidden waterfall, and white water rafting. This join-in trekking program starts and finishes in Chiang Mai.',
    descriptionTh:
      'Adventure trek in the Mae Taeng area with elephant interaction, trekking to a hidden waterfall, and white water rafting. This join-in trekking program starts and finishes in Chiang Mai.',
    duration: '8:00 - 18:00',
    location: 'Mae Taeng, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '1,600 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Mae Taeng',
      'Trekking',
      'Elephants',
      'Hidden Waterfall',
      'White water rafting',
      'Join-in group',
      'Full day',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Adventure trek in Mae Taeng area',
      'Feed, interact, and play with elephants',
      'Trekking to a hidden waterfall',
      'White water rafting',
    ],
    highlightsTh: [
      'Adventure trek in Mae Taeng area',
      'Feed, interact, and play with elephants',
      'Trekking to a hidden waterfall',
      'White water rafting',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle: 'Chiang Mai Trek01 1 Day Trekking Mae Taeng | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek01, a 1-day join-in Mae Taeng trekking tour with elephants, hidden waterfall trekking, and white water rafting.',
  },
  {
    slug: 'trek02',
    title: 'Chiang Mai Trek02: 2 Days 1 Night Trekking Mae Tang Area',
    titleTh: 'Chiang Mai Trek02: 2 Days 1 Night Trekking Mae Tang Area',
    excerpt:
      'A 2-day 1-night join-in Mae Taeng trek with elephants, waterfall, hilltribe village, bamboo rafting, Karen Long Neck, and overnight village stay.',
    excerptTh:
      'A 2-day 1-night join-in Mae Taeng trek with elephants, waterfall, hilltribe village, bamboo rafting, Karen Long Neck, and overnight village stay.',
    description:
      'Adventure trek in Mae Taeng with elephant feeding and bathing, waterfall, hilltribe village, bamboo rafting, Karen Long Neck visit, and overnight stay at a Karen tribe village.',
    descriptionTh:
      'Adventure trek in Mae Taeng with elephant feeding and bathing, waterfall, hilltribe village, bamboo rafting, Karen Long Neck visit, and overnight stay at a Karen tribe village.',
    duration: '2 days',
    location: 'Mae Taeng, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '4,300 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Mae Taeng',
      'Trekking',
      'Elephant feeding',
      'Elephant bathing',
      'Waterfall',
      'Hilltribe Village',
      'Bamboo rafting',
      'Karen Long Neck',
      'Overnight',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Mae Taeng adventure trek',
      'Elephant feeding and bathing',
      'Waterfall and hilltribe village',
      'Bamboo rafting',
      'Karen Long Neck and overnight Karen village stay',
    ],
    highlightsTh: [
      'Mae Taeng adventure trek',
      'Elephant feeding and bathing',
      'Waterfall and hilltribe village',
      'Bamboo rafting',
      'Karen Long Neck and overnight Karen village stay',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek02 2 Days 1 Night Mae Taeng Trekking | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek02, a 2-day 1-night Mae Taeng join-in trekking tour with elephants, hilltribe village, waterfall, bamboo rafting, and Karen village stay.',
  },
  {
    slug: 'trek19',
    title: 'Chiang Mai Trek19: 1 Day Mini Trekking Mae Wang Area',
    titleTh: 'Chiang Mai Trek19: 1 Day Mini Trekking Mae Wang Area',
    excerpt:
      'A 1-day join-in Mae Wang mini trek with elephant care, Karen and Shan culture, weaving, Mae Wang waterfalls, and bamboo rafting.',
    excerptTh:
      'A 1-day join-in Mae Wang mini trek with elephant care, Karen and Shan culture, weaving, Mae Wang waterfalls, and bamboo rafting.',
    description:
      'Join a 1-day group trek in Mae Wang. Care for elephants, visit Karen and Shan village culture, see traditional weaving, relax at Mae Wang waterfalls, and enjoy bamboo rafting before returning to Chiang Mai.',
    descriptionTh:
      'Join a 1-day group trek in Mae Wang. Care for elephants, visit Karen and Shan village culture, see traditional weaving, relax at Mae Wang waterfalls, and enjoy bamboo rafting before returning to Chiang Mai.',
    duration: '8:00 - 17:00',
    location: 'Mae Wang, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '1,900 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Mae Wang',
      'Trekking',
      'Elephant care',
      'Karen Village',
      'Shan Village',
      'Weaving',
      'Mae Wang Waterfall',
      'Bamboo rafting',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Elephant care',
      'Karen and Shan village cultures',
      'Traditional weaving',
      'Mae Wang waterfalls',
      'Bamboo rafting',
    ],
    highlightsTh: [
      'Elephant care',
      'Karen and Shan village cultures',
      'Traditional weaving',
      'Mae Wang waterfalls',
      'Bamboo rafting',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle: 'Chiang Mai Trek19 1 Day Mini Trekking Mae Wang | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek19, a 1-day join-in Mae Wang mini trek with elephants, Karen and Shan villages, weaving, waterfall, and bamboo rafting.',
  },
  {
    slug: 'trek20',
    title: 'Chiang Mai Trek20: 2 Days 1 Night Trekking Mae Wang Area',
    titleTh: 'Chiang Mai Trek20: 2 Days 1 Night Trekking Mae Wang Area',
    excerpt:
      'A 2-day Mae Wang adventure trek combining national park scenery, elephants, meals in nature, and bamboo rafting.',
    excerptTh:
      'A 2-day Mae Wang adventure trek combining national park scenery, elephants, meals in nature, and bamboo rafting.',
    description:
      'Explore Mae Wang National Park on a 2-day Chiang Mai adventure trek. Learn about Asian elephants in their natural habitat, enjoy meals in scenic locations, and unwind with bamboo rafting.',
    descriptionTh:
      'Explore Mae Wang National Park on a 2-day Chiang Mai adventure trek. Learn about Asian elephants in their natural habitat, enjoy meals in scenic locations, and unwind with bamboo rafting.',
    duration: '2 days',
    location: 'Mae Wang, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '2,300 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Mae Wang',
      'Mae Wang National Park',
      'Trekking',
      'Elephants',
      'Bamboo rafting',
      'Nature',
      'Join-in group',
      '2 days',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Mae Wang National Park',
      'Asian elephants in natural habitat',
      'Meals in scenic locations',
      'Bamboo rafting',
      '2-day adventure trek',
    ],
    highlightsTh: [
      'Mae Wang National Park',
      'Asian elephants in natural habitat',
      'Meals in scenic locations',
      'Bamboo rafting',
      '2-day adventure trek',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek20 2 Days 1 Night Mae Wang Trekking | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek20, a 2-day 1-night Mae Wang trekking tour with elephants, Mae Wang National Park, nature meals, and bamboo rafting.',
  },
  {
    slug: 'trek21',
    title: 'Chiang Mai Trek21: 3 Days 2 Nights Trekking Mae Wang Area',
    titleTh: 'Chiang Mai Trek21: 3 Days 2 Nights Trekking Mae Wang Area',
    excerpt:
      'A 3-day Mae Wang trek through markets, jungles, hilltribe culture, and elephant experiences.',
    excerptTh:
      'A 3-day Mae Wang trek through markets, jungles, hilltribe culture, and elephant experiences.',
    description:
      'Unleash your sense of adventure on a 3-day Chiang Mai trek. Experience local culture at markets, trek through jungles, and bond with elephants for a memorable Mae Wang journey.',
    descriptionTh:
      'Unleash your sense of adventure on a 3-day Chiang Mai trek. Experience local culture at markets, trek through jungles, and bond with elephants for a memorable Mae Wang journey.',
    duration: '3 days',
    location: 'Mae Wang, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '2,800 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Mae Wang',
      'Trekking',
      'Jungle trek',
      'Local market',
      'Elephants',
      'Hilltribe culture',
      'Join-in group',
      '3 days',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Local markets',
      'Jungle trekking',
      'Hilltribe culture',
      'Elephant bonding experience',
      '3-day Chiang Mai trek',
    ],
    highlightsTh: [
      'Local markets',
      'Jungle trekking',
      'Hilltribe culture',
      'Elephant bonding experience',
      '3-day Chiang Mai trek',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek21 3 Days 2 Nights Mae Wang Trekking | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek21, a 3-day 2-night Mae Wang trekking adventure with markets, jungle trekking, hilltribe culture, and elephants.',
  },
  {
    slug: 'trek25',
    title: 'Chiang Mai Trek25: 1 Day Chiang Mai Mae Win Trekking and Thai Farmer Experience',
    titleTh:
      'Chiang Mai Trek25: 1 Day Chiang Mai Mae Win Trekking and Thai Farmer Experience',
    excerpt:
      'A 1-day Mae Win trekking and Thai farmer experience with Thai buffalos, traditional farming, and quiet nature.',
    excerptTh:
      'A 1-day Mae Win trekking and Thai farmer experience with Thai buffalos, traditional farming, and quiet nature.',
    description:
      'Immerse yourself in Chiang Mai Mae Win Trekking and Thai Farmer Experience. Bond with Thai buffalos, learn traditional farming practices, and enjoy the tranquility of nature.',
    descriptionTh:
      'Immerse yourself in Chiang Mai Mae Win Trekking and Thai Farmer Experience. Bond with Thai buffalos, learn traditional farming practices, and enjoy the tranquility of nature.',
    duration: '1 day',
    location: 'Mae Win, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '2,000 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Mae Win',
      'Trekking',
      'Thai farmer experience',
      'Thai buffalos',
      'Traditional farming',
      'Nature',
      'Join-in group',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Mae Win trekking',
      'Thai farmer experience',
      'Thai buffalos',
      'Traditional farming practices',
      'Quiet nature setting',
    ],
    highlightsTh: [
      'Mae Win trekking',
      'Thai farmer experience',
      'Thai buffalos',
      'Traditional farming practices',
      'Quiet nature setting',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek25 Mae Win Trekking and Thai Farmer Experience | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek25, a 1-day Mae Win trekking and Thai farmer experience with Thai buffalos, traditional farming, and nature.',
  },
  {
    slug: 'trek23',
    title: 'Chiang Mai Trek23: 2 Days 1 Night Trekking Mae Win Area',
    titleTh: 'Chiang Mai Trek23: 2 Days 1 Night Trekking Mae Win Area',
    excerpt:
      'A 2-day Mae Win trekking adventure with untouched nature, elephants, hilltribe villages, waterfalls, rice terraces, meals, and bamboo rafting.',
    excerptTh:
      'A 2-day Mae Win trekking adventure with untouched nature, elephants, hilltribe villages, waterfalls, rice terraces, meals, and bamboo rafting.',
    description:
      'Discover Chiang Mai south region on a 2-day trekking adventure in Mae Wang and Mae Win. Experience untouched nature, elephants, hilltribe villages, waterfalls, rice terraces, meals, and bamboo rafting.',
    descriptionTh:
      'Discover Chiang Mai south region on a 2-day trekking adventure in Mae Wang and Mae Win. Experience untouched nature, elephants, hilltribe villages, waterfalls, rice terraces, meals, and bamboo rafting.',
    duration: '2 days',
    location: 'Mae Win and Mae Wang, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '2,500 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Mae Win',
      'Mae Wang',
      'Trekking',
      'Elephants',
      'Hilltribe villages',
      'Waterfalls',
      'Rice terraces',
      'Bamboo rafting',
      '2 days',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Untouched nature in Chiang Mai south region',
      'Elephants and hilltribe villages',
      'Waterfalls and rice terraces',
      'Bamboo rafting',
      '2-day Mae Win trekking route',
    ],
    highlightsTh: [
      'Untouched nature in Chiang Mai south region',
      'Elephants and hilltribe villages',
      'Waterfalls and rice terraces',
      'Bamboo rafting',
      '2-day Mae Win trekking route',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek23 2 Days 1 Night Mae Win Trekking | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek23, a 2-day 1-night Mae Win trekking adventure with elephants, hilltribe villages, waterfalls, rice terraces, and bamboo rafting.',
  },
  {
    slug: 'trek24',
    title: 'Chiang Mai Trek24: 3 Days 2 Nights Trekking Mae Win Area',
    titleTh: 'Chiang Mai Trek24: 3 Days 2 Nights Trekking Mae Win Area',
    excerpt:
      'A 3-day Mae Win trek through culture, untouched nature, elephant interactions, forests, hill tribe life, and bamboo rafting.',
    excerptTh:
      'A 3-day Mae Win trek through culture, untouched nature, elephant interactions, forests, hill tribe life, and bamboo rafting.',
    description:
      'Embark on a 3-day Chiang Mai Trek in the Mae Win area through rich culture and untouched nature. Experience elephants, serene forest trails, hill tribe life, and bamboo rafting.',
    descriptionTh:
      'Embark on a 3-day Chiang Mai Trek in the Mae Win area through rich culture and untouched nature. Experience elephants, serene forest trails, hill tribe life, and bamboo rafting.',
    duration: '3 days',
    location: 'Mae Win, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '3,500 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Mae Win',
      'Trekking',
      'Elephants',
      'Forest trails',
      'Hill tribe life',
      'Bamboo rafting',
      'Culture',
      '3 days',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Mae Win area trek',
      'Elephant interactions',
      'Serene forest trails',
      'Local hill tribe life',
      'Bamboo rafting',
    ],
    highlightsTh: [
      'Mae Win area trek',
      'Elephant interactions',
      'Serene forest trails',
      'Local hill tribe life',
      'Bamboo rafting',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek24 3 Days 2 Nights Mae Win Trekking | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek24, a 3-day 2-night Mae Win trekking route with elephants, forest trails, hill tribe life, and bamboo rafting.',
  },
  {
    slug: 'trek14',
    title: 'Chiang Mai Trek14: 1 - 3 Days Trekking Doi Inthanon National Park',
    titleTh: 'Chiang Mai Trek14: 1 - 3 Days Trekking Doi Inthanon National Park',
    excerpt:
      'A private 1-3 day Doi Inthanon trekking experience through waterfalls, Meo and Karen villages, and Doi Pha Ngam scenery.',
    excerptTh:
      'A private 1-3 day Doi Inthanon trekking experience through waterfalls, Meo and Karen villages, and Doi Pha Ngam scenery.',
    description:
      'Trek through the lush landscapes of Doi Inthanon National Park at around 2,300 meters elevation. Explore waterfalls, Meo and Karen hill tribe villages, and the scenery around Doi Pha Ngam.',
    descriptionTh:
      'Trek through the lush landscapes of Doi Inthanon National Park at around 2,300 meters elevation. Explore waterfalls, Meo and Karen hill tribe villages, and the scenery around Doi Pha Ngam.',
    duration: '1 - 3 days',
    location: 'Doi Inthanon, Chiang Mai',
    groupSize: 'Private trekking tour',
    price: 'Start from 2,500 - 4,500 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Doi Inthanon',
      'Doi Pha Ngam',
      'Meo Village',
      'Karen Village',
      'Waterfalls',
      'Private trekking',
      'Nature',
      '1-3 days',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Doi Inthanon National Park trekking',
      'Elevation around 2,300 meters',
      'Waterfalls and lush landscapes',
      'Meo and Karen hill tribe villages',
      'Doi Pha Ngam scenery',
    ],
    highlightsTh: [
      'Doi Inthanon National Park trekking',
      'Elevation around 2,300 meters',
      'Waterfalls and lush landscapes',
      'Meo and Karen hill tribe villages',
      'Doi Pha Ngam scenery',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek14 Doi Inthanon 1 to 3 Days Trekking | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek14 private 1-3 day Doi Inthanon trekking with waterfalls, Meo and Karen villages, and Doi Pha Ngam scenery.',
  },
  {
    slug: 'trek15',
    title: 'Chiang Mai Trek15: 2 Days 1 Night Trekking Doi Inthanon National Park',
    titleTh:
      'Chiang Mai Trek15: 2 Days 1 Night Trekking Doi Inthanon National Park',
    excerpt:
      'A private 2-day Doi Inthanon trek with Wachirathan Waterfall, Twin Royal Pagodas, highest peak, Meo village, Karen overnight stay, bamboo rafting, and elephants.',
    excerptTh:
      'A private 2-day Doi Inthanon trek with Wachirathan Waterfall, Twin Royal Pagodas, highest peak, Meo village, Karen overnight stay, bamboo rafting, and elephants.',
    description:
      'Day 1 visits Wachirathan Waterfall, Twin Royal Pagodas, the highest peak of Doi Inthanon, then starts trekking from a Meo village through evergreen jungle to a Karen village overnight. Day 2 treks to a jungle waterfall, lunch at Mae Mud village, bamboo rafting, and elephant time before returning to Chiang Mai.',
    descriptionTh:
      'Day 1 visits Wachirathan Waterfall, Twin Royal Pagodas, the highest peak of Doi Inthanon, then starts trekking from a Meo village through evergreen jungle to a Karen village overnight. Day 2 treks to a jungle waterfall, lunch at Mae Mud village, bamboo rafting, and elephant time before returning to Chiang Mai.',
    duration: '2 days',
    location: 'Doi Inthanon, Chiang Mai',
    groupSize: 'Private trekking tour',
    price: '5,900 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Doi Inthanon',
      'Wachirathan Waterfall',
      'Twin Royal Pagodas',
      'Meo Village',
      'Karen Village',
      'Mae Mud Village',
      'Bamboo rafting',
      'Elephants',
      'Private trekking',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Wachirathan Waterfall',
      'Twin Royal Pagodas and highest peak',
      'Meo village trek start',
      'Overnight at Karen hilltribe village',
      'Jungle waterfall, Mae Mud village, bamboo rafting, and elephants',
    ],
    highlightsTh: [
      'Wachirathan Waterfall',
      'Twin Royal Pagodas and highest peak',
      'Meo village trek start',
      'Overnight at Karen hilltribe village',
      'Jungle waterfall, Mae Mud village, bamboo rafting, and elephants',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek15 2 Days Doi Inthanon Trekking | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek15 private 2-day Doi Inthanon trek with Wachirathan Waterfall, Twin Royal Pagodas, Karen village overnight, bamboo rafting, and elephants.',
  },
  {
    slug: 'trek16',
    title: 'Chiang Mai Trek16: 3 Days 2 Nights Trekking Doi Inthanon National Park',
    titleTh:
      'Chiang Mai Trek16: 3 Days 2 Nights Trekking Doi Inthanon National Park',
    excerpt:
      'A private 3-day Doi Inthanon trek with Wachirathan Waterfall, Twin Royal Pagodas, evergreen jungle, Karen villages, Mae Mud, bamboo rafting, and elephant sanctuary.',
    excerptTh:
      'A private 3-day Doi Inthanon trek with Wachirathan Waterfall, Twin Royal Pagodas, evergreen jungle, Karen villages, Mae Mud, bamboo rafting, and elephant sanctuary.',
    description:
      'Three-day trek in Doi Inthanon National Park. Day 1 includes Wachirathan Waterfall, Twin Royal Pagodas, and a 2-hour trek through evergreen jungle to a Karen hilltribe village. Day 2 treks to a jungle waterfall and another Karen village. Day 3 visits Mae Mud village for lunch, bamboo rafting on Mae Wang Stream, and an elephant sanctuary.',
    descriptionTh:
      'Three-day trek in Doi Inthanon National Park. Day 1 includes Wachirathan Waterfall, Twin Royal Pagodas, and a 2-hour trek through evergreen jungle to a Karen hilltribe village. Day 2 treks to a jungle waterfall and another Karen village. Day 3 visits Mae Mud village for lunch, bamboo rafting on Mae Wang Stream, and an elephant sanctuary.',
    duration: '3 days',
    location: 'Doi Inthanon and Mae Wang, Chiang Mai',
    groupSize: 'Private trekking tour',
    price: '6,900 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Doi Inthanon',
      'Wachirathan Waterfall',
      'Twin Royal Pagodas',
      'Karen Village',
      'Mae Mud Village',
      'Mae Wang Stream',
      'Bamboo rafting',
      'Elephant sanctuary',
      'Private trekking',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Wachirathan Waterfall and Twin Royal Pagodas',
      'Evergreen jungle trekking',
      'Karen hilltribe village overnights',
      'Jungle waterfall',
      'Mae Mud village, bamboo rafting, and elephant sanctuary',
    ],
    highlightsTh: [
      'Wachirathan Waterfall and Twin Royal Pagodas',
      'Evergreen jungle trekking',
      'Karen hilltribe village overnights',
      'Jungle waterfall',
      'Mae Mud village, bamboo rafting, and elephant sanctuary',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek16 3 Days Doi Inthanon Trekking | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek16 private 3-day Doi Inthanon trek with Karen villages, jungle waterfall, Mae Mud village, bamboo rafting, and elephant sanctuary.',
  },
  {
    slug: 'trek-doi-inthanon-mae-klang-luang',
    title:
      'Chiang Mai Tour03: 1 Day Chiang Mai Trek Doi Inthanon at Mae Klang Luang Village',
    titleTh:
      'Chiang Mai Tour03: 1 Day Chiang Mai Trek Doi Inthanon at Mae Klang Luang Village',
    excerpt:
      'A 1-day Doi Inthanon trek on Pha Dok Siew Nature Trail with waterfall, Mae Klang Luang White Karen village, and local coffee.',
    excerptTh:
      'A 1-day Doi Inthanon trek on Pha Dok Siew Nature Trail with waterfall, Mae Klang Luang White Karen village, and local coffee.',
    description:
      'Discover Doi Inthanon National Park through the Pha Dok Siew Nature Trail, a well-known Northern Thailand trekking route. Reach Pha Dok Siew Waterfall, visit Mae Klang Luang Village of the White Karen people, and enjoy locally roasted coffee.',
    descriptionTh:
      'Discover Doi Inthanon National Park through the Pha Dok Siew Nature Trail, a well-known Northern Thailand trekking route. Reach Pha Dok Siew Waterfall, visit Mae Klang Luang Village of the White Karen people, and enjoy locally roasted coffee.',
    duration: '1 day',
    location: 'Doi Inthanon, Chiang Mai',
    groupSize: 'Private or join-in group tour',
    price: '1,400 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Doi Inthanon',
      'Pha Dok Siew Nature Trail',
      'Pha Dok Siew Waterfall',
      'Mae Klang Luang',
      'White Karen',
      'Coffee',
      'Trekking',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Pha Dok Siew Nature Trail',
      'Pha Dok Siew Waterfall',
      'Mae Klang Luang White Karen village',
      'Locally roasted coffee',
    ],
    highlightsTh: [
      'Pha Dok Siew Nature Trail',
      'Pha Dok Siew Waterfall',
      'Mae Klang Luang White Karen village',
      'Locally roasted coffee',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek Doi Inthanon Mae Klang Luang | Chiang Mai Trekking',
    seoDescription:
      'Book a 1-day Doi Inthanon trek at Mae Klang Luang with Pha Dok Siew Nature Trail, waterfall, White Karen village, and local coffee.',
  },
  {
    slug: 'trek-kew-mae-pan-nature-trail',
    title:
      'Chiang Mai Tour04: 1 Day Chiang Mai Trek Doi Inthanon at Kew Mae Pan Nature Trail',
    titleTh:
      'Chiang Mai Tour04: 1 Day Chiang Mai Trek Doi Inthanon at Kew Mae Pan Nature Trail',
    excerpt:
      'A 1-day Doi Inthanon eco trek on Kew Mae Pan Nature Trail with unseen views, King and Queen Pagodas, and Wachirathan Waterfall.',
    excerptTh:
      'A 1-day Doi Inthanon eco trek on Kew Mae Pan Nature Trail with unseen views, King and Queen Pagodas, and Wachirathan Waterfall.',
    description:
      'Discover Thailand highest peak on an eco-friendly trek along Kew Mae Pan Nature Trail. The 2.78-kilometer route offers breathtaking views and includes King and Queen Pagodas and Wachirathan Waterfall. Open yearly from 1 November to 31 May.',
    descriptionTh:
      'Discover Thailand highest peak on an eco-friendly trek along Kew Mae Pan Nature Trail. The 2.78-kilometer route offers breathtaking views and includes King and Queen Pagodas and Wachirathan Waterfall. Open yearly from 1 November to 31 May.',
    duration: '1 day',
    location: 'Doi Inthanon, Chiang Mai',
    groupSize: 'Private or join-in group tour',
    price: '1,400 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Doi Inthanon',
      'Kew Mae Pan',
      'Nature Trail',
      'King and Queen Pagodas',
      'Wachirathan Waterfall',
      'Open November to May',
      'Trekking',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Kew Mae Pan Nature Trail, 2.78 kilometers',
      'Unseen mountain views',
      'King and Queen Pagodas',
      'Wachirathan Waterfall',
      'Open 1 November - 31 May',
    ],
    highlightsTh: [
      'Kew Mae Pan Nature Trail, 2.78 kilometers',
      'Unseen mountain views',
      'King and Queen Pagodas',
      'Wachirathan Waterfall',
      'Open 1 November - 31 May',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek Kew Mae Pan Nature Trail | Chiang Mai Trekking',
    seoDescription:
      'Book a 1-day Doi Inthanon trek at Kew Mae Pan Nature Trail with unseen views, King and Queen Pagodas, Wachirathan Waterfall, and seasonal route from November to May.',
  },
  {
    slug: 'trek-doi-suthep-wat-pha-lat',
    title: 'Chiang Mai Tour08: Doi Suthep Trek Wat Phrathat Doi Suthep to Wat Pha Lat',
    titleTh:
      'Chiang Mai Tour08: Doi Suthep Trek Wat Phrathat Doi Suthep to Wat Pha Lat',
    excerpt:
      'A half-day Doi Suthep-Pui trek with Doi Suthep Temple, Wat Pha Lat hidden temple, and Mon Tha Than waterfall.',
    excerptTh:
      'A half-day Doi Suthep-Pui trek with Doi Suthep Temple, Wat Pha Lat hidden temple, and Mon Tha Than waterfall.',
    description:
      'Discover Doi Suthep Trek with Doi Suthep Temple, city views, lush jungle, hidden Wat Pha Lat, and Mon Tha Than waterfall inside Doi Suthep-Pui National Park.',
    descriptionTh:
      'Discover Doi Suthep Trek with Doi Suthep Temple, city views, lush jungle, hidden Wat Pha Lat, and Mon Tha Than waterfall inside Doi Suthep-Pui National Park.',
    duration: 'Half day',
    location: 'Doi Suthep-Pui National Park, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '1,500 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Doi Suthep-Pui National Park',
      'Wat Pha Lat',
      'Doi Suthep Temple',
      'Mon Tha Than Waterfall',
      'Trekking',
      'Half day',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Doi Suthep Temple',
      'Wat Pha Lat hidden temple',
      'Mon Tha Than waterfall',
      'Doi Suthep-Pui National Park',
      'Licensed English-speaking trekking guide',
    ],
    highlightsTh: [
      'Doi Suthep Temple',
      'Wat Pha Lat hidden temple',
      'Mon Tha Than waterfall',
      'Doi Suthep-Pui National Park',
      'Licensed English-speaking trekking guide',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle: 'Chiang Mai Doi Suthep Trek to Wat Pha Lat | Chiang Mai Trekking',
    seoDescription:
      'Book a half-day Doi Suthep trek with Doi Suthep Temple, Wat Pha Lat hidden temple, Mon Tha Than waterfall, and Doi Suthep-Pui National Park.',
  },
  {
    slug: 'trek26',
    title: 'Chiang Mai Trek26: Trekking in Doi Suthep - Monk Trail Trekking',
    titleTh: 'Chiang Mai Trek26: Trekking in Doi Suthep - Monk Trail Trekking',
    excerpt:
      'A half-day join-in Monk Trail trek from Wat Pha Lat to Doi Suthep Temple, with waterfalls, swimming, and forest scenery.',
    excerptTh:
      'A half-day join-in Monk Trail trek from Wat Pha Lat to Doi Suthep Temple, with waterfalls, swimming, and forest scenery.',
    description:
      'Start on the Monk Trail, visit serene Wat Pha Lat, continue trekking up to Doi Suthep Temple, then visit four waterfalls on the way down with swimming and relaxation.',
    descriptionTh:
      'Start on the Monk Trail, visit serene Wat Pha Lat, continue trekking up to Doi Suthep Temple, then visit four waterfalls on the way down with swimming and relaxation.',
    duration: 'Half day',
    location: 'Doi Suthep, Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '1,700 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Monk Trail',
      'Wat Pha Lat',
      'Doi Suthep Temple',
      'Waterfalls',
      'Swimming',
      'Join-in group',
      'Half day',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Monk Trail trekking',
      'Wat Pha Lat hidden temple',
      'Doi Suthep Temple',
      'Four waterfalls',
      'Swimming and relaxation',
    ],
    highlightsTh: [
      'Monk Trail trekking',
      'Wat Pha Lat hidden temple',
      'Doi Suthep Temple',
      'Four waterfalls',
      'Swimming and relaxation',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle: 'Chiang Mai Trek26 Doi Suthep Monk Trail Trekking | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek26, a half-day join-in Doi Suthep Monk Trail trek with Wat Pha Lat, Doi Suthep Temple, waterfalls, and swimming.',
  },
  {
    slug: 'trek22',
    title: 'Chiang Mai Trek22: 1 Day Trekking in Chiang Dao Wildlife Sanctuary',
    titleTh: 'Chiang Mai Trek22: 1 Day Trekking in Chiang Dao Wildlife Sanctuary',
    excerpt:
      'A private Chiang Dao wildlife sanctuary trek through forest, plants, birds, insects, and the Doi Chiang Dao biosphere reserve area.',
    excerptTh:
      'A private Chiang Dao wildlife sanctuary trek through forest, plants, birds, insects, and the Doi Chiang Dao biosphere reserve area.',
    description:
      'The Chiang Dao forest is full of life and plants. Spend time in real nature, listen to creatures, birds, and insects, and experience Doi Chiang Dao, approved by UNESCO as a biosphere reserve on 15 September 2021.',
    descriptionTh:
      'The Chiang Dao forest is full of life and plants. Spend time in real nature, listen to creatures, birds, and insects, and experience Doi Chiang Dao, approved by UNESCO as a biosphere reserve on 15 September 2021.',
    duration: 'Half day',
    location: 'Chiang Dao, Chiang Mai',
    groupSize: 'Private trekking tour',
    price: 'Start from 2,100 - 4,200 THB / person',
    category: 'chiang-mai-trekking',
    tags: [
      'Chiang Mai',
      'Chiang Dao',
      'Doi Chiang Dao',
      'Wildlife Sanctuary',
      'UNESCO Biosphere Reserve',
      'Forest',
      'Birds',
      'Private trekking',
      'Half day',
    ],
    image: chiangMaiTrekkingTourImage,
    highlights: [
      'Chiang Dao wildlife sanctuary',
      'Doi Chiang Dao biosphere reserve',
      'Forest plants and wildlife sounds',
      'Birds and insects',
      'Private nature trek',
    ],
    highlightsTh: [
      'Chiang Dao wildlife sanctuary',
      'Doi Chiang Dao biosphere reserve',
      'Forest plants and wildlife sounds',
      'Birds and insects',
      'Private nature trek',
    ],
    included: chiangMaiTrekkingIncluded,
    includedTh: chiangMaiTrekkingIncludedTh,
    seoTitle:
      'Chiang Mai Trek22 Chiang Dao Wildlife Sanctuary | Chiang Mai Trekking',
    seoDescription:
      'Book Chiang Mai Trek22 private Chiang Dao wildlife sanctuary trek with Doi Chiang Dao biosphere reserve forest, plants, birds, insects, and nature.',
  },
  {
    slug: 'chiang-rai-budget07',
    title: 'Budget07: Chiang Rai and Golden Triangle and Long Neck',
    titleTh: 'Budget07: Chiang Rai and Golden Triangle and Long Neck',
    excerpt:
      'A join-in full-day Chiang Rai tour from Chiang Mai with White Temple, Black House Museum, Blue Temple, Golden Triangle, boat ride, and Long Neck Karen village.',
    excerptTh:
      'A join-in full-day Chiang Rai tour from Chiang Mai with White Temple, Black House Museum, Blue Temple, Golden Triangle, boat ride, and Long Neck Karen village.',
    description:
      'Uncover the hidden gems of Chiang Rai where art, culture, and nature come together. Visit the White Temple, Black House Museum, Blue Temple, Golden Triangle with a scenic boat ride, and the Long Neck Karen tribe before returning to Chiang Mai.',
    descriptionTh:
      'Uncover the hidden gems of Chiang Rai where art, culture, and nature come together. Visit the White Temple, Black House Museum, Blue Temple, Golden Triangle with a scenic boat ride, and the Long Neck Karen tribe before returning to Chiang Mai.',
    duration: 'Full day',
    location: 'Chiang Rai, starting from Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '1,750 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Rai',
      'Chiang Mai',
      'White Temple',
      'Black House Museum',
      'Blue Temple',
      'Golden Triangle',
      'Boat ride',
      'Long Neck Karen',
      'Join-in group',
      'Full day',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'White Temple',
      'Black House Museum',
      'Blue Temple',
      'Golden Triangle boat ride',
      'Long Neck Karen village',
    ],
    highlightsTh: [
      'White Temple',
      'Black House Museum',
      'Blue Temple',
      'Golden Triangle boat ride',
      'Long Neck Karen village',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle:
      'Budget07 Chiang Rai Golden Triangle and Long Neck | Chiang Rai Tour Packages',
    seoDescription:
      'Book Budget07 Chiang Rai join-in day tour from Chiang Mai with White Temple, Black House Museum, Blue Temple, Golden Triangle, boat ride, and Long Neck Karen village.',
  },
  {
    slug: 'chiang-rai-budget10',
    title: 'Budget10: Chiang Rai Visit White Temple and Black House',
    titleTh: 'Budget10: Chiang Rai Visit White Temple and Black House',
    excerpt:
      'A join-in Chiang Rai day trip from Chiang Mai featuring White Temple, Black House Museum, Blue Temple, and Long Neck Karen village.',
    excerptTh:
      'A join-in Chiang Rai day trip from Chiang Mai featuring White Temple, Black House Museum, Blue Temple, and Long Neck Karen village.',
    description:
      'Explore the beauty of Chiang Rai with architectural highlights, cultural stops, and northern scenery. Admire the White Temple, visit the Black House Museum and Blue Temple, then meet the Long Neck Karen tribe before returning to Chiang Mai.',
    descriptionTh:
      'Explore the beauty of Chiang Rai with architectural highlights, cultural stops, and northern scenery. Admire the White Temple, visit the Black House Museum and Blue Temple, then meet the Long Neck Karen tribe before returning to Chiang Mai.',
    duration: 'Full day',
    location: 'Chiang Rai, starting from Chiang Mai',
    groupSize: 'Join-in group tour',
    price: '1,500 THB / person (+50 THB temporary surcharge)',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Rai',
      'Chiang Mai',
      'White Temple',
      'Wat Rong Khun',
      'Black House Museum',
      'Blue Temple',
      'Long Neck Karen',
      'Join-in group',
      'Full day',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'White Temple',
      'Black House Museum',
      'Blue Temple',
      'Long Neck Karen village',
      'Full-day Chiang Rai trip',
    ],
    highlightsTh: [
      'White Temple',
      'Black House Museum',
      'Blue Temple',
      'Long Neck Karen village',
      'Full-day Chiang Rai trip',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle:
      'Budget10 Chiang Rai White Temple and Black House | Chiang Rai Tour Packages',
    seoDescription:
      'Book Budget10 Chiang Rai join-in day trip from Chiang Mai with White Temple, Black House Museum, Blue Temple, and Long Neck Karen village.',
  },
  {
    slug: 'tour16',
    title: 'Private Tour16: Chiang Rai Tour - Explore Chiang Rai City',
    titleTh: 'Private Tour16: Chiang Rai Tour - Explore Chiang Rai City',
    excerpt:
      'A private full-day Chiang Rai city tour from Chiang Mai with Wat Rong Khun, Wat Phra Kaew, Wat Phra Singha, and Black House Museum.',
    excerptTh:
      'A private full-day Chiang Rai city tour from Chiang Mai with Wat Rong Khun, Wat Phra Kaew, Wat Phra Singha, and Black House Museum.',
    description:
      'Visit Chiang Rai city highlights including the White Temple or Wat Rong Khun, Wat Phra Kaew where the Emerald Buddha image was once enshrined, Wat Phra Singha, and the mysterious Black House Museum.',
    descriptionTh:
      'Visit Chiang Rai city highlights including the White Temple or Wat Rong Khun, Wat Phra Kaew where the Emerald Buddha image was once enshrined, Wat Phra Singha, and the mysterious Black House Museum.',
    duration: 'Full day',
    location: 'Chiang Rai, starting from Chiang Mai',
    groupSize: 'Private tour',
    price: 'Car/Van: 4,200 / 4,800 THB (+50 THB temporary surcharge may apply)',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Rai',
      'Chiang Mai',
      'White Temple',
      'Wat Rong Khun',
      'Wat Phra Kaew',
      'Emerald Buddha',
      'Wat Phra Singha',
      'Black House Museum',
      'Private tour',
      'Full day',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'Wat Rong Khun White Temple',
      'Wat Phra Kaew',
      'Wat Phra Singha',
      'Black House Museum',
      'Private Chiang Rai city route',
    ],
    highlightsTh: [
      'Wat Rong Khun White Temple',
      'Wat Phra Kaew',
      'Wat Phra Singha',
      'Black House Museum',
      'Private Chiang Rai city route',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle:
      'Private Tour16 Chiang Rai City Tour | Chiang Rai Tour Packages',
    seoDescription:
      'Book Private Tour16 Chiang Rai city tour from Chiang Mai with Wat Rong Khun, Wat Phra Kaew, Wat Phra Singha, and Black House Museum.',
  },
  {
    slug: 'tour17',
    title:
      'Private Tour17: Chiang Rai White Temple, Mae Sai, Golden Triangle and Hilltribe',
    titleTh:
      'Private Tour17: Chiang Rai White Temple, Mae Sai, Golden Triangle and Hilltribe',
    excerpt:
      'A private full-day Chiang Rai route from Chiang Mai with hot spring, White Temple, Mae Sai, Golden Triangle, Chiang Saen, and hilltribe visits.',
    excerptTh:
      'A private full-day Chiang Rai route from Chiang Mai with hot spring, White Temple, Mae Sai, Golden Triangle, Chiang Saen, and hilltribe visits.',
    description:
      'Travel through Chiang Rai, Thailand northern border province, on a scenic private route. Visit Mae Ka Chan hot spring, the White Temple, Mae Sai, Chiang Saen ancient city, the Golden Triangle, and hilltribe communities.',
    descriptionTh:
      'Travel through Chiang Rai, Thailand northern border province, on a scenic private route. Visit Mae Ka Chan hot spring, the White Temple, Mae Sai, Chiang Saen ancient city, the Golden Triangle, and hilltribe communities.',
    duration: 'Full day',
    location: 'Chiang Rai, starting from Chiang Mai',
    groupSize: 'Private tour',
    price: 'Car/Van: 5,000 / 5,700 THB',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Rai',
      'Chiang Mai',
      'White Temple',
      'Mae Sai',
      'Golden Triangle',
      'Chiang Saen',
      'Mae Ka Chan Hot Spring',
      'Hilltribe',
      'Private tour',
      'Full day',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'Mae Ka Chan hot spring',
      'White Temple',
      'Mae Sai border area',
      'Chiang Saen ancient city',
      'Golden Triangle',
    ],
    highlightsTh: [
      'Mae Ka Chan hot spring',
      'White Temple',
      'Mae Sai border area',
      'Chiang Saen ancient city',
      'Golden Triangle',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle:
      'Private Tour17 Chiang Rai Mae Sai and Golden Triangle | Chiang Rai Tour Packages',
    seoDescription:
      'Book Private Tour17 Chiang Rai from Chiang Mai with White Temple, Mae Sai, Golden Triangle, Chiang Saen ancient city, hot spring, and hilltribe visit.',
  },
  {
    slug: 'chiang-rai-package04',
    title: 'Package04: Exclusive Package Chiang Mai and Chiang Rai',
    titleTh: 'Package04: Exclusive Package Chiang Mai and Chiang Rai',
    excerpt:
      'A 3-day Chiang Mai and Chiang Rai package with elephant safari, Sankampeang handicrafts, Doi Inthanon, White Temple, Golden Triangle, Long Neck Village, and Mae Sai.',
    excerptTh:
      'A 3-day Chiang Mai and Chiang Rai package with elephant safari, Sankampeang handicrafts, Doi Inthanon, White Temple, Golden Triangle, Long Neck Village, and Mae Sai.',
    description:
      'Combine two days in Chiang Mai with one day in Chiang Rai. Day 1 visits Elephant Safari Tour and Sankampeang Handicraft Village. Day 2 explores Doi Inthanon National Park. Day 3 travels to Chiang Rai for hot spring, White Temple, Golden Triangle, Long Neck Village, and Mae Sai before returning to Chiang Mai.',
    descriptionTh:
      'Combine two days in Chiang Mai with one day in Chiang Rai. Day 1 visits Elephant Safari Tour and Sankampeang Handicraft Village. Day 2 explores Doi Inthanon National Park. Day 3 travels to Chiang Rai for hot spring, White Temple, Golden Triangle, Long Neck Village, and Mae Sai before returning to Chiang Mai.',
    duration: '3 days',
    location: 'Chiang Mai and Chiang Rai',
    groupSize: 'Private package tour',
    price: 'Start from 4,000 - 13,600 THB / person',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Mai',
      'Chiang Rai',
      'Elephant Safari',
      'Sankampeang Handicraft Village',
      'Doi Inthanon',
      'White Temple',
      'Golden Triangle',
      'Long Neck Village',
      'Mae Sai',
      '3 days',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'Elephant Safari Tour',
      'Sankampeang Handicraft Village',
      'Doi Inthanon National Park',
      'White Temple and Golden Triangle',
      'Long Neck Village and Mae Sai',
    ],
    highlightsTh: [
      'Elephant Safari Tour',
      'Sankampeang Handicraft Village',
      'Doi Inthanon National Park',
      'White Temple and Golden Triangle',
      'Long Neck Village and Mae Sai',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle:
      'Package04 Chiang Mai and Chiang Rai 3 Days | Chiang Rai Tour Packages',
    seoDescription:
      'Book Package04, a 3-day Chiang Mai and Chiang Rai tour with elephant safari, handicrafts, Doi Inthanon, White Temple, Golden Triangle, Long Neck Village, and Mae Sai.',
  },
  {
    slug: 'chiang-rai-package09',
    title: 'Package09: Amazing Chiang Mai - Chiang Rai Tour Package',
    titleTh: 'Package09: Amazing Chiang Mai - Chiang Rai Tour Package',
    excerpt:
      'A 3-day Chiang Mai and Chiang Rai tour package with Doi Suthep, Tiger Kingdom, Orchid Farm, Mae Sa Elephant Camp, Chiang Rai city, Mae Sai, Doi Tung, and Long Neck Village.',
    excerptTh:
      'A 3-day Chiang Mai and Chiang Rai tour package with Doi Suthep, Tiger Kingdom, Orchid Farm, Mae Sa Elephant Camp, Chiang Rai city, Mae Sai, Doi Tung, and Long Neck Village.',
    description:
      'Enjoy one day of Chiang Mai highlights and two days of Chiang Rai sightseeing. Day 1 covers Doi Suthep Temple, Tiger Kingdom, Orchid Farm, Mae Sa Elephant Camp, and Kantoke Dinner. Day 2 visits Chiang Rai hot spring, White Temple and city tour, Chiang Saen ancient city, and Mae Sai. Day 3 explores Doi Tung Palace, Mae Fah Luang Garden, and Long Neck Village before returning to Chiang Mai.',
    descriptionTh:
      'Enjoy one day of Chiang Mai highlights and two days of Chiang Rai sightseeing. Day 1 covers Doi Suthep Temple, Tiger Kingdom, Orchid Farm, Mae Sa Elephant Camp, and Kantoke Dinner. Day 2 visits Chiang Rai hot spring, White Temple and city tour, Chiang Saen ancient city, and Mae Sai. Day 3 explores Doi Tung Palace, Mae Fah Luang Garden, and Long Neck Village before returning to Chiang Mai.',
    duration: '3 days',
    location: 'Chiang Mai and Chiang Rai',
    groupSize: 'Private package tour',
    price: 'Start from 4,300 - 14,700 THB / person',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Mai',
      'Chiang Rai',
      'Doi Suthep',
      'Tiger Kingdom',
      'Orchid Farm',
      'Mae Sa Elephant Camp',
      'Chiang Saen',
      'Mae Sai',
      'Doi Tung',
      '3 days',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'Doi Suthep Temple',
      'Tiger Kingdom and Orchid Farm',
      'Mae Sa Elephant Camp',
      'Chiang Rai city and Chiang Saen',
      'Doi Tung and Long Neck Village',
    ],
    highlightsTh: [
      'Doi Suthep Temple',
      'Tiger Kingdom and Orchid Farm',
      'Mae Sa Elephant Camp',
      'Chiang Rai city and Chiang Saen',
      'Doi Tung and Long Neck Village',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle:
      'Package09 Amazing Chiang Mai Chiang Rai 3 Days | Chiang Rai Tour Packages',
    seoDescription:
      'Book Package09, a 3-day Chiang Mai and Chiang Rai package with Doi Suthep, Tiger Kingdom, Orchid Farm, Mae Sa Elephant Camp, Chiang Rai city, Mae Sai, Doi Tung, and Long Neck Village.',
  },
  {
    slug: 'chiangrai_tour_package01',
    title: 'Chiang Rai Package01: 2 Days 1 Night Chiang Rai Tour Package',
    titleTh: 'Chiang Rai Package01: 2 Days 1 Night Chiang Rai Tour Package',
    excerpt:
      'A 2-day Chiang Rai sightseeing package from Chiang Mai with hot spring, White Temple, Chiang Saen, Golden Triangle, Mae Sai, Doi Tung, Black House, and Long Neck Village.',
    excerptTh:
      'A 2-day Chiang Rai sightseeing package from Chiang Mai with hot spring, White Temple, Chiang Saen, Golden Triangle, Mae Sai, Doi Tung, Black House, and Long Neck Village.',
    description:
      'Spend two days discovering Chiang Rai highlights and culture. Day 1 visits hot spring, White Temple, Chiang Saen ancient city, Golden Triangle, Mae Sai, and Chiang Rai Night Bazaar. Day 2 continues to Doi Tung Palace, Mae Fah Luang Garden, Black House, and Long Neck Village before returning to Chiang Mai.',
    descriptionTh:
      'Spend two days discovering Chiang Rai highlights and culture. Day 1 visits hot spring, White Temple, Chiang Saen ancient city, Golden Triangle, Mae Sai, and Chiang Rai Night Bazaar. Day 2 continues to Doi Tung Palace, Mae Fah Luang Garden, Black House, and Long Neck Village before returning to Chiang Mai.',
    duration: '2 days',
    location: 'Chiang Rai, starting from Chiang Mai',
    groupSize: 'Private package tour',
    price: 'Start from 3,500 - 12,500 THB / person',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Rai',
      'Chiang Mai',
      'White Temple',
      'Chiang Saen',
      'Golden Triangle',
      'Mae Sai',
      'Doi Tung',
      'Black House',
      'Long Neck Village',
      '2 days',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'Hot spring and White Temple',
      'Chiang Saen ancient city',
      'Golden Triangle and Mae Sai',
      'Doi Tung Palace and Mae Fah Luang Garden',
      'Black House and Long Neck Village',
    ],
    highlightsTh: [
      'Hot spring and White Temple',
      'Chiang Saen ancient city',
      'Golden Triangle and Mae Sai',
      'Doi Tung Palace and Mae Fah Luang Garden',
      'Black House and Long Neck Village',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle:
      'Chiang Rai Package01 2 Days 1 Night | Chiang Rai Tour Packages',
    seoDescription:
      'Book Chiang Rai Package01, a 2-day Chiang Rai tour from Chiang Mai with White Temple, Chiang Saen, Golden Triangle, Mae Sai, Doi Tung, Black House, and Long Neck Village.',
  },
  {
    slug: 'chiangrai_tour_package02',
    title: 'Chiang Rai Package02: All Chiang Rai Tour Package',
    titleTh: 'Chiang Rai Package02: All Chiang Rai Tour Package',
    excerpt:
      'A 3-day all-Chiang-Rai sightseeing package with White Temple, city temples, Chiang Saen, Opium Museum, Golden Triangle, Doi Tung, Long Neck Village, and Mae Sai.',
    excerptTh:
      'A 3-day all-Chiang-Rai sightseeing package with White Temple, city temples, Chiang Saen, Opium Museum, Golden Triangle, Doi Tung, Long Neck Village, and Mae Sai.',
    description:
      'Explore Chiang Rai over three days. Day 1 visits hot spring, White Temple, city temples, and Chiang Rai Night Bazaar. Day 2 covers Chiang Saen ancient city, Opium Museum, and Golden Triangle. Day 3 visits Doi Tung Palace, Mae Fah Luang Garden, Long Neck Village, and Mae Sai before returning to Chiang Mai.',
    descriptionTh:
      'Explore Chiang Rai over three days. Day 1 visits hot spring, White Temple, city temples, and Chiang Rai Night Bazaar. Day 2 covers Chiang Saen ancient city, Opium Museum, and Golden Triangle. Day 3 visits Doi Tung Palace, Mae Fah Luang Garden, Long Neck Village, and Mae Sai before returning to Chiang Mai.',
    duration: '3 days',
    location: 'Chiang Rai, starting from Chiang Mai',
    groupSize: 'Private package tour',
    price: 'Start from 5,000 - 15,500 THB / person',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Rai',
      'Chiang Mai',
      'White Temple',
      'City Temples',
      'Chiang Saen',
      'Opium Museum',
      'Golden Triangle',
      'Doi Tung',
      'Mae Sai',
      '3 days',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'White Temple and city temples',
      'Chiang Rai Night Bazaar',
      'Chiang Saen ancient city',
      'Opium Museum and Golden Triangle',
      'Doi Tung, Long Neck Village, and Mae Sai',
    ],
    highlightsTh: [
      'White Temple and city temples',
      'Chiang Rai Night Bazaar',
      'Chiang Saen ancient city',
      'Opium Museum and Golden Triangle',
      'Doi Tung, Long Neck Village, and Mae Sai',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle:
      'Chiang Rai Package02 All Chiang Rai 3 Days | Chiang Rai Tour Packages',
    seoDescription:
      'Book Chiang Rai Package02, a 3-day Chiang Rai tour with White Temple, city temples, Chiang Saen, Opium Museum, Golden Triangle, Doi Tung, Long Neck Village, and Mae Sai.',
  },
  {
    slug: 'chiangrai_tour_package03',
    title:
      'Chiang Rai Package03: 3 Days Chiang Rai - Tha Ton - Phu Chi Fah Tour Package',
    titleTh:
      'Chiang Rai Package03: 3 Days Chiang Rai - Tha Ton - Phu Chi Fah Tour Package',
    excerpt:
      'A 3-day Chiang Rai, Tha Ton, and Phu Chi Fah package with sailing trip, Karen village, Golden Triangle, Fish Cave, Doi Tung, Wat Rong Khun, and Singha Park.',
    excerptTh:
      'A 3-day Chiang Rai, Tha Ton, and Phu Chi Fah package with sailing trip, Karen village, Golden Triangle, Fish Cave, Doi Tung, Wat Rong Khun, and Singha Park.',
    description:
      'Combine a sailing trip from Tha Ton with Chiang Rai sightseeing and Phu Chi Fah. Day 1 visits Tat Ton Temple, takes the Tha Ton sailing trip to a Karen village, and ends at Chiang Rai Night Bazaar. Day 2 explores the Golden Triangle, Fish Cave, and Doi Tung Palace. Day 3 visits Phu Chi Fah, Wat Rong Khun, and Singha Park.',
    descriptionTh:
      'Combine a sailing trip from Tha Ton with Chiang Rai sightseeing and Phu Chi Fah. Day 1 visits Tat Ton Temple, takes the Tha Ton sailing trip to a Karen village, and ends at Chiang Rai Night Bazaar. Day 2 explores the Golden Triangle, Fish Cave, and Doi Tung Palace. Day 3 visits Phu Chi Fah, Wat Rong Khun, and Singha Park.',
    duration: '3 days',
    location: 'Chiang Rai, Tha Ton, and Phu Chi Fah',
    groupSize: 'Private package tour',
    price: 'Start from 7,600 - 22,000 THB / person',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Rai',
      'Tha Ton',
      'Phu Chi Fah',
      'Sailing trip',
      'Karen Village',
      'Golden Triangle',
      'Fish Cave',
      'Doi Tung',
      'Wat Rong Khun',
      '3 days',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'Tat Ton Temple',
      'Tha Ton sailing trip to Karen village',
      'Golden Triangle and Fish Cave',
      'Doi Tung Palace',
      'Phu Chi Fah, Wat Rong Khun, and Singha Park',
    ],
    highlightsTh: [
      'Tat Ton Temple',
      'Tha Ton sailing trip to Karen village',
      'Golden Triangle and Fish Cave',
      'Doi Tung Palace',
      'Phu Chi Fah, Wat Rong Khun, and Singha Park',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle:
      'Chiang Rai Package03 Tha Ton Phu Chi Fah 3 Days | Chiang Rai Tour Packages',
    seoDescription:
      'Book Chiang Rai Package03, a 3-day Chiang Rai, Tha Ton, and Phu Chi Fah tour with sailing trip, Karen village, Golden Triangle, Doi Tung, Wat Rong Khun, and Singha Park.',
  },
  {
    slug: 'chiangrai_tour_package04',
    title:
      'Chiang Rai Package04: 4 Days Lampang - Chiang Rai - Phu Chi Fah Tour Package',
    titleTh:
      'Chiang Rai Package04: 4 Days Lampang - Chiang Rai - Phu Chi Fah Tour Package',
    excerpt:
      'A 4-day Lampang, Chiang Rai, and Phu Chi Fah package with Wat Chaloem Phra Kiat, Wat Rong Khun, Doi Tung, Doi Mae Salong, Choui Fong Tea Plantation, and Black House Museum.',
    excerptTh:
      'A 4-day Lampang, Chiang Rai, and Phu Chi Fah package with Wat Chaloem Phra Kiat, Wat Rong Khun, Doi Tung, Doi Mae Salong, Choui Fong Tea Plantation, and Black House Museum.',
    description:
      'Travel from Chiang Mai to Lampang, Chiang Rai, and Phu Chi Fah over four days. Day 1 visits Wat Chaloem Phra Kiat Phrachomklao Rachanusorn in Lampang, Wat Rong Khun, and Chiang Rai Night Bazaar. Day 2 covers Doi Tung Palace, Doi Mae Salong, and Choui Fong Tea Plantation. Day 3 visits Black House Museum and Doi Tha Tang. Day 4 explores Phu Chi Fah.',
    descriptionTh:
      'Travel from Chiang Mai to Lampang, Chiang Rai, and Phu Chi Fah over four days. Day 1 visits Wat Chaloem Phra Kiat Phrachomklao Rachanusorn in Lampang, Wat Rong Khun, and Chiang Rai Night Bazaar. Day 2 covers Doi Tung Palace, Doi Mae Salong, and Choui Fong Tea Plantation. Day 3 visits Black House Museum and Doi Tha Tang. Day 4 explores Phu Chi Fah.',
    duration: '4 days',
    location: 'Lampang, Chiang Rai, and Phu Chi Fah',
    groupSize: 'Private package tour',
    price: 'Start from 9,000 - 28,600 THB / person',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Lampang',
      'Chiang Rai',
      'Phu Chi Fah',
      'Wat Chaloem Phra Kiat',
      'Wat Rong Khun',
      'Doi Tung',
      'Doi Mae Salong',
      'Choui Fong Tea Plantation',
      'Black House Museum',
      '4 days',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'Wat Chaloem Phra Kiat in Lampang',
      'Wat Rong Khun and Chiang Rai Night Bazaar',
      'Doi Tung Palace',
      'Doi Mae Salong and Choui Fong Tea Plantation',
      'Black House Museum, Doi Tha Tang, and Phu Chi Fah',
    ],
    highlightsTh: [
      'Wat Chaloem Phra Kiat in Lampang',
      'Wat Rong Khun and Chiang Rai Night Bazaar',
      'Doi Tung Palace',
      'Doi Mae Salong and Choui Fong Tea Plantation',
      'Black House Museum, Doi Tha Tang, and Phu Chi Fah',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle:
      'Chiang Rai Package04 Lampang Chiang Rai Phu Chi Fah 4 Days | Chiang Rai Tour Packages',
    seoDescription:
      'Book Chiang Rai Package04, a 4-day Lampang, Chiang Rai, and Phu Chi Fah tour with Wat Chaloem Phra Kiat, Wat Rong Khun, Doi Tung, Doi Mae Salong, Choui Fong Tea Plantation, and Black House Museum.',
  },
  {
    slug: 'chiang-rai-tour01',
    title: 'Chiang Rai Tour01: Chiang Rai Day Tour',
    titleTh: 'Chiang Rai Tour01: Chiang Rai Day Tour',
    excerpt:
      'A full-day Chiang Rai tour starting and finishing in Chiang Rai with temples, ethnic village life, tea landscapes, and the Golden Triangle.',
    excerptTh:
      'A full-day Chiang Rai tour starting and finishing in Chiang Rai with temples, ethnic village life, tea landscapes, and the Golden Triangle.',
    description:
      'If you have only one day in Chiang Rai, this day tour gives you a broad view of the province: sparkling temples, artistic expression, ethnic village life, lush tea landscapes, and the mystique of the Golden Triangle with pickup, guide, meals, and transport arranged.',
    descriptionTh:
      'If you have only one day in Chiang Rai, this day tour gives you a broad view of the province: sparkling temples, artistic expression, ethnic village life, lush tea landscapes, and the mystique of the Golden Triangle with pickup, guide, meals, and transport arranged.',
    duration: 'Full day',
    location: 'Chiang Rai',
    groupSize: 'Join-in group tour',
    price: '1,600 THB / person',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Rai',
      'Chiang Rai Day Tour',
      'Temples',
      'Ethnic village',
      'Choui Fong Tea Plantation',
      'Golden Triangle',
      'Tea plantation',
      'Join-in group',
      'Full day',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'Chiang Rai temples',
      'Art and culture stops',
      'Ethnic village life',
      'Tea landscapes',
      'Golden Triangle',
    ],
    highlightsTh: [
      'Chiang Rai temples',
      'Art and culture stops',
      'Ethnic village life',
      'Tea landscapes',
      'Golden Triangle',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle: 'Chiang Rai Tour01 Day Tour | Chiang Rai Tour Packages',
    seoDescription:
      'Book Chiang Rai Tour01, a full-day Chiang Rai tour with temples, art, ethnic village life, tea landscapes, Golden Triangle, guide, meal, and transport.',
  },
  {
    slug: 'chiang-rai-tour02',
    title: 'Chiang Rai Tour02: Chiang Rai Day Trek',
    titleTh: 'Chiang Rai Tour02: Chiang Rai Day Trek',
    excerpt:
      'A full-day Chiang Rai trek with scenic trails, hill tribe villages, bamboo-cooked lunch, hidden waterfall swimming, and hot spring relaxation.',
    excerptTh:
      'A full-day Chiang Rai trek with scenic trails, hill tribe villages, bamboo-cooked lunch, hidden waterfall swimming, and hot spring relaxation.',
    description:
      'Experience Chiang Rai nature and culture in one active day. Hike scenic trails, visit hill tribe villages, enjoy a local bamboo-cooked lunch, swim beneath a hidden waterfall, and relax in a hot spring with expert guidance throughout the route.',
    descriptionTh:
      'Experience Chiang Rai nature and culture in one active day. Hike scenic trails, visit hill tribe villages, enjoy a local bamboo-cooked lunch, swim beneath a hidden waterfall, and relax in a hot spring with expert guidance throughout the route.',
    duration: 'Full day',
    location: 'Chiang Rai',
    groupSize: 'Join-in group trekking tour',
    price: '1,500 THB / person',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Rai',
      'Trekking',
      'Hill tribe villages',
      'Bamboo-cooked lunch',
      'Hidden waterfall',
      'Hot spring',
      'Hiking',
      'Full day',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'Scenic trekking trails',
      'Hill tribe villages',
      'Bamboo-cooked lunch',
      'Hidden waterfall swimming',
      'Hot spring relaxation',
    ],
    highlightsTh: [
      'Scenic trekking trails',
      'Hill tribe villages',
      'Bamboo-cooked lunch',
      'Hidden waterfall swimming',
      'Hot spring relaxation',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle: 'Chiang Rai Tour02 Day Trek | Chiang Rai Tour Packages',
    seoDescription:
      'Book Chiang Rai Tour02 day trek with scenic trails, hill tribe villages, bamboo-cooked lunch, hidden waterfall swimming, and hot spring relaxation.',
  },
  {
    slug: 'chiang-rai-tour03',
    title: 'Chiang Rai Tour03: Chiang Rai 2 Days Trek',
    titleTh: 'Chiang Rai Tour03: Chiang Rai 2 Days Trek',
    excerpt:
      'A 2-day Chiang Rai trekking journey with elephants, overnight Lisu village stay, tea plantations, remote waterfalls, and Akha and Lahu tribe visits.',
    excerptTh:
      'A 2-day Chiang Rai trekking journey with elephants, overnight Lisu village stay, tea plantations, remote waterfalls, and Akha and Lahu tribe visits.',
    description:
      'Take an immersive two-day trek into Chiang Rai nature and culture. Meet elephants, stay overnight in a Lisu village, visit tea plantations and remote waterfalls, and connect with Akha and Lahu communities on a guided adventure.',
    descriptionTh:
      'Take an immersive two-day trek into Chiang Rai nature and culture. Meet elephants, stay overnight in a Lisu village, visit tea plantations and remote waterfalls, and connect with Akha and Lahu communities on a guided adventure.',
    duration: '2 days',
    location: 'Chiang Rai',
    groupSize: 'Join-in group trekking tour',
    price: '3,000 THB / person',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Rai',
      'Trekking',
      'Elephants',
      'Lisu Village',
      'Tea plantations',
      'Waterfalls',
      'Akha',
      'Lahu',
      '2 days',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'Elephant experience',
      'Overnight Lisu village stay',
      'Tea plantations',
      'Remote waterfalls',
      'Akha and Lahu tribe visits',
    ],
    highlightsTh: [
      'Elephant experience',
      'Overnight Lisu village stay',
      'Tea plantations',
      'Remote waterfalls',
      'Akha and Lahu tribe visits',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle: 'Chiang Rai Tour03 2 Days Trek | Chiang Rai Tour Packages',
    seoDescription:
      'Book Chiang Rai Tour03, a 2-day Chiang Rai trek with elephants, Lisu village overnight stay, tea plantations, waterfalls, Akha, and Lahu visits.',
  },
  {
    slug: 'chiang-rai-tour04',
    title: 'Chiang Rai Tour04: Half Day Elephant Chiang Rai',
    titleTh: 'Chiang Rai Tour04: Half Day Elephant Chiang Rai',
    excerpt:
      'A half-day ethical elephant experience in Chiang Rai with hands-on feeding, education, family-friendly activities, and no riding.',
    excerptTh:
      'A half-day ethical elephant experience in Chiang Rai with hands-on feeding, education, family-friendly activities, and no riding.',
    description:
      'This half-day Chiang Rai elephant tour combines ethical interaction, education, and hands-on fun without riding. It is family-friendly and designed for travelers who want to connect with elephants and local culture in a responsible way.',
    descriptionTh:
      'This half-day Chiang Rai elephant tour combines ethical interaction, education, and hands-on fun without riding. It is family-friendly and designed for travelers who want to connect with elephants and local culture in a responsible way.',
    duration: 'Half day',
    location: 'Chiang Rai',
    groupSize: 'Join-in group tour',
    price: '1,800 THB / person',
    category: 'chiang-rai-tour-packages',
    tags: [
      'Chiang Rai',
      'Elephant',
      'Elephant sanctuary',
      'Ethical elephant tour',
      'No riding',
      'Family-friendly',
      'Half day',
    ],
    image: chiangRaiPackageTourImage,
    highlights: [
      'Ethical elephant interaction',
      'Hands-on feeding and care',
      'No riding',
      'Family-friendly experience',
      'Local culture connection',
    ],
    highlightsTh: [
      'Ethical elephant interaction',
      'Hands-on feeding and care',
      'No riding',
      'Family-friendly experience',
      'Local culture connection',
    ],
    included: chiangRaiPackageIncluded,
    includedTh: chiangRaiPackageIncludedTh,
    seoTitle:
      'Chiang Rai Tour04 Half Day Elephant Chiang Rai | Chiang Rai Tour Packages',
    seoDescription:
      'Book Chiang Rai Tour04, a half-day ethical elephant tour in Chiang Rai with hands-on feeding, education, family-friendly activities, and no riding.',
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug)
}
