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
  { id: 'chiang-mai-adventure', label: 'Chiang Mai Adventure' },
  { id: 'chiang-mai-restaurants', label: 'Chiang Mai Restaurants' },
  { id: 'chiang-mai-cookery', label: 'Chiang Mai Cookery' },
  { id: 'chiang-mai-golf', label: 'Chiang Mai Golf' },
  { id: 'chiang-mai-to-bangkok', label: 'Chiang Mai To Bangkok' },
  { id: 'youth-camp', label: 'Youth Camp' },
  { id: 'special-tours', label: 'Special Tours' },
  { id: 'muay-thai', label: 'Muay Thai' },
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

const maeHongSonPackageTourImage = northernThailandPackageImage

const maeHongSonPackageIncluded = [
  'Mae Hong Son route arrangement',
  'Licensed English-speaking guide coordination',
  'Private or local transport coordination from the listed start point',
  'Accommodation, activity, meal, and entrance fee planning according to the source program',
]

const maeHongSonPackageIncludedTh = [
  'Mae Hong Son route arrangement',
  'Licensed English-speaking guide coordination',
  'Private or local transport coordination from the listed start point',
  'Accommodation, activity, meal, and entrance fee planning according to the source program',
]

const maeHongSonTrekkingTourImage = northernThailandPackageImage

const maeHongSonTrekkingIncluded = [
  'Mae Hong Son trekking route arrangement',
  'Local trekking guide coordination',
  'Pickup and drop-off coordination from the listed start point',
  'Activity, meal, homestay, and cultural experience planning according to the source program',
]

const maeHongSonTrekkingIncludedTh = [
  'Mae Hong Son trekking route arrangement',
  'Local trekking guide coordination',
  'Pickup and drop-off coordination from the listed start point',
  'Activity, meal, homestay, and cultural experience planning according to the source program',
]

const chiangMaiElephantTourImage = northernThailandPackageImage

const chiangMaiElephantIncluded = [
  'Chiang Mai elephant care program arrangement',
  'Guide and sanctuary coordination',
  'Pickup and drop-off coordination from Chiang Mai',
  'Activity, meal, and entrance fee planning according to the source program',
]

const chiangMaiElephantIncludedTh = [
  'Chiang Mai elephant care program arrangement',
  'Guide and sanctuary coordination',
  'Pickup and drop-off coordination from Chiang Mai',
  'Activity, meal, and entrance fee planning according to the source program',
]

const chiangMaiZiplineTourImage = northernThailandPackageImage

const chiangMaiZiplineIncluded = [
  'Chiang Mai zipline activity arrangement',
  'Guide and safety briefing coordination',
  'Pickup and drop-off coordination from Chiang Mai',
  'Activity, meal, and equipment planning according to the source program',
]

const chiangMaiZiplineIncludedTh = [
  'Chiang Mai zipline activity arrangement',
  'Guide and safety briefing coordination',
  'Pickup and drop-off coordination from Chiang Mai',
  'Activity, meal, and equipment planning according to the source program',
]

const chiangMaiAdventureTourImage = northernThailandPackageImage

const chiangMaiAdventureIncluded = [
  'Chiang Mai adventure activity arrangement',
  'Guide, trainer, or activity operator coordination',
  'Pickup and drop-off coordination from Chiang Mai',
  'Equipment, route, and activity planning according to the source program',
]

const chiangMaiAdventureIncludedTh = [
  'Chiang Mai adventure activity arrangement',
  'Guide, trainer, or activity operator coordination',
  'Pickup and drop-off coordination from Chiang Mai',
  'Equipment, route, and activity planning according to the source program',
]

const chiangMaiRestaurantTourImage = northernThailandPackageImage

const chiangMaiRestaurantIncluded = [
  'Chiang Mai dining experience arrangement',
  'Restaurant or cruise operator coordination',
  'Pickup and drop-off coordination from Chiang Mai when included',
  'Meal, show, cruise, and activity planning according to the source program',
]

const chiangMaiRestaurantIncludedTh = [
  'Chiang Mai dining experience arrangement',
  'Restaurant or cruise operator coordination',
  'Pickup and drop-off coordination from Chiang Mai when included',
  'Meal, show, cruise, and activity planning according to the source program',
]

const chiangMaiCookeryTourImage = northernThailandPackageImage

const chiangMaiCookeryIncluded = [
  'Chiang Mai cooking class arrangement',
  'Cooking school and instructor coordination',
  'Pickup and drop-off coordination from Chiang Mai when included',
  'Market tour, recipe book, ingredients, and meal planning according to the source program',
]

const chiangMaiCookeryIncludedTh = [
  'Chiang Mai cooking class arrangement',
  'Cooking school and instructor coordination',
  'Pickup and drop-off coordination from Chiang Mai when included',
  'Market tour, recipe book, ingredients, and meal planning according to the source program',
]

const chiangMaiGolfTourImage = northernThailandPackageImage

const chiangMaiGolfIncluded = [
  'Chiang Mai golf course arrangement',
  'Tee time and golf course coordination',
  'Private transfer coordination from Chiang Mai',
  'Caddie, cart, equipment, and seasonal rate planning according to the source program',
]

const chiangMaiGolfIncludedTh = [
  'Chiang Mai golf course arrangement',
  'Tee time and golf course coordination',
  'Private transfer coordination from Chiang Mai',
  'Caddie, cart, equipment, and seasonal rate planning according to the source program',
]

const chiangMaiToBangkokTourImage = northernThailandPackageImage

const chiangMaiToBangkokIncluded = [
  'Private Chiang Mai to Bangkok route arrangement',
  'Licensed guide and driver coordination',
  'Private transport coordination from Chiang Mai to Bangkok',
  'Accommodation, activity, meal, and entrance fee planning according to the source program',
]

const chiangMaiToBangkokIncludedTh = [
  'Private Chiang Mai to Bangkok route arrangement',
  'Licensed guide and driver coordination',
  'Private transport coordination from Chiang Mai to Bangkok',
  'Accommodation, activity, meal, and entrance fee planning according to the source program',
]

const youthCampTourImage = northernThailandPackageImage

const youthCampIncluded = [
  'Custom Chiang Mai youth camp planning',
  'Activity and workshop coordination',
  'Private group transport planning when requested',
  'Age, group size, entrance fee, and workshop fee planning according to the source program',
]

const youthCampIncludedTh = [
  'Custom Chiang Mai youth camp planning',
  'Activity and workshop coordination',
  'Private group transport planning when requested',
  'Age, group size, entrance fee, and workshop fee planning according to the source program',
]

const specialToursImage = northernThailandPackageImage

const specialToursIncluded = [
  'Seasonal Chiang Mai special tour arrangement',
  'Festival or nature program coordination',
  'Local transport coordination from Chiang Mai',
  'Ticket, entrance fee, and seasonal availability planning according to the source program',
]

const specialToursIncludedTh = [
  'Seasonal Chiang Mai special tour arrangement',
  'Festival or nature program coordination',
  'Local transport coordination from Chiang Mai',
  'Ticket, entrance fee, and seasonal availability planning according to the source program',
]

const muayThaiTourImage = northernThailandPackageImage

const muayThaiIncluded = [
  'Thai kick boxing ticket arrangement',
  'Grandstand, ringside, or VIP seat planning',
  'Evening pickup coordination when requested',
  'Fight schedule and ticket availability planning according to the source program',
]

const muayThaiIncludedTh = [
  'Thai kick boxing ticket arrangement',
  'Grandstand, ringside, or VIP seat planning',
  'Evening pickup coordination when requested',
  'Fight schedule and ticket availability planning according to the source program',
]

const carRentalTourImage = northernThailandPackageImage

const carRentalIncluded = [
  'Comfortable air-conditioned sedan car or van',
  'English-speaking local driver',
  'Insurance coverage',
  'Child safety seat with advance reservation',
]

const carRentalIncludedTh = [
  'Comfortable air-conditioned sedan car or van',
  'English-speaking local driver',
  'Insurance coverage',
  'Child safety seat with advance reservation',
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
  {
    slug: 'maehongson_tour01',
    title: 'Maehongson Tour 01: 2 Days 1 Night Pai - Soppong',
    titleTh: 'Maehongson Tour 01: 2 Days 1 Night Pai - Soppong',
    excerpt:
      'A 2-day Mae Hong Son private tour from Chiang Mai to Pai and Soppong with waterfalls, viewpoints, village visits, hot springs, bamboo rafting, and cave exploration.',
    excerptTh:
      'A 2-day Mae Hong Son private tour from Chiang Mai to Pai and Soppong with waterfalls, viewpoints, village visits, hot springs, bamboo rafting, and cave exploration.',
    description:
      'This well-rounded itinerary combines adventure, relaxation, and cultural immersion. Start from Chiang Mai, visit Mok Fa Waterfall and Huay Nam Dang, explore Pai villages and thermal springs, then continue to Pang Mapha for bamboo rafting and cave exploration.',
    descriptionTh:
      'This well-rounded itinerary combines adventure, relaxation, and cultural immersion. Start from Chiang Mai, visit Mok Fa Waterfall and Huay Nam Dang, explore Pai villages and thermal springs, then continue to Pang Mapha for bamboo rafting and cave exploration.',
    duration: '2 days',
    location: 'Pai and Soppong, starting from Chiang Mai',
    groupSize: 'Private package tour',
    price: 'Start from 4,500 - 15,500 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Mae Hong Son',
      'Pai',
      'Soppong',
      'Mok Fa Waterfall',
      'Huay Nam Dang',
      'Hot spring',
      'Bamboo rafting',
      'Cave exploration',
      '2 days',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'Mok Fa Waterfall',
      'Huay Nam Dang',
      'Pai village visits',
      'Thermal springs',
      'Bamboo rafting and Pang Mapha cave exploration',
    ],
    highlightsTh: [
      'Mok Fa Waterfall',
      'Huay Nam Dang',
      'Pai village visits',
      'Thermal springs',
      'Bamboo rafting and Pang Mapha cave exploration',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle: 'Maehongson Tour 01 Pai Soppong 2 Days | Maehongson Tour Packages',
    seoDescription:
      'Book Maehongson Tour 01, a 2-day Pai and Soppong package from Chiang Mai with Mok Fa Waterfall, Huay Nam Dang, hot springs, bamboo rafting, and cave exploration.',
  },
  {
    slug: 'maehongson_tour02',
    title: 'Maehongson Tour 02: 2 Days 1 Night Doi Inthanon - Salawin River',
    titleTh:
      'Maehongson Tour 02: 2 Days 1 Night Doi Inthanon - Salawin River',
    excerpt:
      'A tranquil 2-day Mae Hong Son route from Chiang Mai with Doi Inthanon, misty mountain scenery, and the gentle Salawin River.',
    excerptTh:
      'A tranquil 2-day Mae Hong Son route from Chiang Mai with Doi Inthanon, misty mountain scenery, and the gentle Salawin River.',
    description:
      'This 2-day experience is designed for travelers seeking tranquility, scenic beauty, and authenticity. Travel from the misty summit of Doi Inthanon toward the gentle current of the Salawin River and discover lesser-known northern Thailand scenery.',
    descriptionTh:
      'This 2-day experience is designed for travelers seeking tranquility, scenic beauty, and authenticity. Travel from the misty summit of Doi Inthanon toward the gentle current of the Salawin River and discover lesser-known northern Thailand scenery.',
    duration: '2 days',
    location: 'Doi Inthanon and Salawin River, starting from Chiang Mai',
    groupSize: 'Private package tour',
    price: 'Start from 4,000 - 15,400 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Mae Hong Son',
      'Doi Inthanon',
      'Salawin River',
      'Nature',
      'Scenic route',
      'Private tour',
      '2 days',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'Doi Inthanon summit area',
      'Misty mountain scenery',
      'Salawin River',
      'Quiet local route',
      'Nature and culture',
    ],
    highlightsTh: [
      'Doi Inthanon summit area',
      'Misty mountain scenery',
      'Salawin River',
      'Quiet local route',
      'Nature and culture',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle:
      'Maehongson Tour 02 Doi Inthanon Salawin River | Maehongson Tour Packages',
    seoDescription:
      'Book Maehongson Tour 02, a 2-day private route from Chiang Mai with Doi Inthanon, mountain scenery, and the Salawin River.',
  },
  {
    slug: 'maehongson_tour03',
    title: 'Maehongson Tour 03: 2 Days 1 Night Bamboo Explore Pai - Soppong',
    titleTh:
      'Maehongson Tour 03: 2 Days 1 Night Bamboo Explore Pai - Soppong',
    excerpt:
      'A 2-day Chiang Mai to Pai adventure with bamboo rafting, rural village life, Lod Cave trekking, and Yunnan cuisine.',
    excerptTh:
      'A 2-day Chiang Mai to Pai adventure with bamboo rafting, rural village life, Lod Cave trekking, and Yunnan cuisine.',
    description:
      'For travelers seeking nature, adventure, and culture, this 2-day Chiang Mai to Pai adventure covers bamboo rafting, rural village life, a trek into Lod Cave, and Yunnan cuisine in a short northern Thailand getaway.',
    descriptionTh:
      'For travelers seeking nature, adventure, and culture, this 2-day Chiang Mai to Pai adventure covers bamboo rafting, rural village life, a trek into Lod Cave, and Yunnan cuisine in a short northern Thailand getaway.',
    duration: '2 days',
    location: 'Pai and Soppong, starting from Chiang Mai',
    groupSize: 'Private package tour',
    price: 'Start from 5,500 - 17,500 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Mae Hong Son',
      'Pai',
      'Soppong',
      'Bamboo rafting',
      'Lod Cave',
      'Yunnan cuisine',
      'Village life',
      '2 days',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'Bamboo rafting',
      'Rural village life',
      'Lod Cave trek',
      'Pai highlights',
      'Yunnan cuisine',
    ],
    highlightsTh: [
      'Bamboo rafting',
      'Rural village life',
      'Lod Cave trek',
      'Pai highlights',
      'Yunnan cuisine',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle:
      'Maehongson Tour 03 Bamboo Explore Pai Soppong | Maehongson Tour Packages',
    seoDescription:
      'Book Maehongson Tour 03, a 2-day Pai and Soppong adventure with bamboo rafting, village life, Lod Cave, and Yunnan cuisine.',
  },
  {
    slug: 'maehongson_tour04',
    title: 'Maehongson Tour 04: 3 Days 2 Nights Doi Inthanon - Maehongson - Pai',
    titleTh:
      'Maehongson Tour 04: 3 Days 2 Nights Doi Inthanon - Maehongson - Pai',
    excerpt:
      'A 3-day Mae Hong Son private package with Doi Inthanon, Tham Lod Cave, Long Neck Karen village, Ban Jabo, Santichon Village, and Pai Canyon.',
    excerptTh:
      'A 3-day Mae Hong Son private package with Doi Inthanon, Tham Lod Cave, Long Neck Karen village, Ban Jabo, Santichon Village, and Pai Canyon.',
    description:
      'This 3-day adventure blends northern Thailand nature, culture, and attractions. Visit Doi Inthanon, explore Tham Lod Cave, meet Long Neck Karen people, dine with valley views at Ban Jabo, enjoy Yunnan cuisine at Santichon Village, and walk Pai Canyon.',
    descriptionTh:
      'This 3-day adventure blends northern Thailand nature, culture, and attractions. Visit Doi Inthanon, explore Tham Lod Cave, meet Long Neck Karen people, dine with valley views at Ban Jabo, enjoy Yunnan cuisine at Santichon Village, and walk Pai Canyon.',
    duration: '3 days',
    location: 'Doi Inthanon, Mae Hong Son, and Pai',
    groupSize: 'Private package tour',
    price: 'Start from 6,600 - 22,000 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Mae Hong Son',
      'Doi Inthanon',
      'Pai',
      'Tham Lod Cave',
      'Long Neck Karen',
      'Ban Jabo',
      'Santichon Village',
      'Pai Canyon',
      '3 days',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'Doi Inthanon',
      'Tham Lod Cave',
      'Long Neck Karen village',
      'Ban Jabo valley views',
      'Santichon Village and Pai Canyon',
    ],
    highlightsTh: [
      'Doi Inthanon',
      'Tham Lod Cave',
      'Long Neck Karen village',
      'Ban Jabo valley views',
      'Santichon Village and Pai Canyon',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle:
      'Maehongson Tour 04 Doi Inthanon Mae Hong Son Pai | Maehongson Tour Packages',
    seoDescription:
      'Book Maehongson Tour 04, a 3-day Doi Inthanon, Mae Hong Son, and Pai package with Tham Lod Cave, Long Neck Karen, Ban Jabo, Santichon Village, and Pai Canyon.',
  },
  {
    slug: 'maehongson_tour05',
    title:
      'Maehongson Tour 05: 4 Days 3 Nights Doi Inthanon and Every District of Mae Hong Son',
    titleTh:
      'Maehongson Tour 05: 4 Days 3 Nights Doi Inthanon and Every District of Mae Hong Son',
    excerpt:
      'A 4-day Mae Hong Son Loop tour from Chiang Mai with mountain passes, hidden caves, hill tribe villages, scenic temples, and Doi Inthanon.',
    excerptTh:
      'A 4-day Mae Hong Son Loop tour from Chiang Mai with mountain passes, hidden caves, hill tribe villages, scenic temples, and Doi Inthanon.',
    description:
      'This Mae Hong Son Loop tour balances nature, adventure, and cultural immersion across four days. Starting and ending in Chiang Mai, traverse mountain passes, explore hidden caves, visit hill tribe villages, and enjoy sunset views from scenic temples.',
    descriptionTh:
      'This Mae Hong Son Loop tour balances nature, adventure, and cultural immersion across four days. Starting and ending in Chiang Mai, traverse mountain passes, explore hidden caves, visit hill tribe villages, and enjoy sunset views from scenic temples.',
    duration: '4 days',
    location: 'Mae Hong Son Loop, starting from Chiang Mai',
    groupSize: 'Private package tour',
    price: 'Start from 9,200 - 28,000 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Mae Hong Son',
      'Mae Hong Son Loop',
      'Doi Inthanon',
      'Mountain passes',
      'Caves',
      'Hill tribe villages',
      'Scenic temples',
      '4 days',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'Mae Hong Son Loop',
      'Mountain passes',
      'Hidden caves',
      'Hill tribe villages',
      'Sunset temple views',
    ],
    highlightsTh: [
      'Mae Hong Son Loop',
      'Mountain passes',
      'Hidden caves',
      'Hill tribe villages',
      'Sunset temple views',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle:
      'Maehongson Tour 05 Mae Hong Son Loop 4 Days | Maehongson Tour Packages',
    seoDescription:
      'Book Maehongson Tour 05, a 4-day Mae Hong Son Loop package from Chiang Mai with Doi Inthanon, mountain passes, caves, hill tribe villages, and scenic temples.',
  },
  {
    slug: 'maehongson_tour06',
    title: 'Maehongson Tour 06: 4 Days 3 Nights Package Tour Pai - Mae Hong Son Loop',
    titleTh:
      'Maehongson Tour 06: 4 Days 3 Nights Package Tour Pai - Mae Hong Son Loop',
    excerpt:
      'A 4-day Pai and Mae Hong Son Loop package with misty viewpoints, hot springs, caves, hill tribes, lakeside villages, and scenic drives.',
    excerptTh:
      'A 4-day Pai and Mae Hong Son Loop package with misty viewpoints, hot springs, caves, hill tribes, lakeside villages, and scenic drives.',
    description:
      'Embark on a 4-day Pai and Mae Hong Son Loop package from Chiang Mai. Discover misty mountain viewpoints, bathe in natural hot springs, explore mysterious caves, meet local hill tribes, and unwind in charming lakeside villages.',
    descriptionTh:
      'Embark on a 4-day Pai and Mae Hong Son Loop package from Chiang Mai. Discover misty mountain viewpoints, bathe in natural hot springs, explore mysterious caves, meet local hill tribes, and unwind in charming lakeside villages.',
    duration: '4 days',
    location: 'Pai and Mae Hong Son Loop',
    groupSize: 'Private package tour',
    price: 'Start from 12,000 - 33,000 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Mae Hong Son',
      'Pai',
      'Mae Hong Son Loop',
      'Viewpoints',
      'Hot springs',
      'Caves',
      'Hill tribes',
      'Ban Rak Thai',
      '4 days',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'Misty mountain viewpoints',
      'Natural hot springs',
      'Cave exploration',
      'Local hill tribes',
      'Lakeside villages',
    ],
    highlightsTh: [
      'Misty mountain viewpoints',
      'Natural hot springs',
      'Cave exploration',
      'Local hill tribes',
      'Lakeside villages',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle:
      'Maehongson Tour 06 Pai Mae Hong Son Loop 4 Days | Maehongson Tour Packages',
    seoDescription:
      'Book Maehongson Tour 06, a 4-day Pai and Mae Hong Son Loop package with viewpoints, hot springs, caves, hill tribes, and lakeside villages.',
  },
  {
    slug: 'maehongson_tour07',
    title:
      'Maehongson Tour 07: 4 Days 3 Nights Package Tour Mae Chaem - Mae Hong Son - Pai',
    titleTh:
      'Maehongson Tour 07: 4 Days 3 Nights Package Tour Mae Chaem - Mae Hong Son - Pai',
    excerpt:
      'A 4-day Mae Chaem, Mae Hong Son, and Pai package with misty mountains, golden rice terraces, ethnic hill tribes, Pai walking streets, and local food.',
    excerptTh:
      'A 4-day Mae Chaem, Mae Hong Son, and Pai package with misty mountains, golden rice terraces, ethnic hill tribes, Pai walking streets, and local food.',
    description:
      'This 4-day Mae Chaem, Mae Hong Son, and Pai route blends nature, culture, and village life. Travel from misty mountain peaks to golden rice terraces, meet ethnic hill tribes, explore Pai walking streets, and enjoy local food with comfortable accommodation.',
    descriptionTh:
      'This 4-day Mae Chaem, Mae Hong Son, and Pai route blends nature, culture, and village life. Travel from misty mountain peaks to golden rice terraces, meet ethnic hill tribes, explore Pai walking streets, and enjoy local food with comfortable accommodation.',
    duration: '4 days',
    location: 'Mae Chaem, Mae Hong Son, and Pai',
    groupSize: 'Private package tour',
    price: 'Start from 10,000 - 34,000 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Mae Hong Son',
      'Mae Chaem',
      'Pai',
      'Rice terraces',
      'Hill tribes',
      'Walking street',
      'Village life',
      '4 days',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'Mae Chaem route',
      'Misty mountain peaks',
      'Golden rice terraces',
      'Ethnic hill tribes',
      'Pai walking streets',
    ],
    highlightsTh: [
      'Mae Chaem route',
      'Misty mountain peaks',
      'Golden rice terraces',
      'Ethnic hill tribes',
      'Pai walking streets',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle:
      'Maehongson Tour 07 Mae Chaem Mae Hong Son Pai | Maehongson Tour Packages',
    seoDescription:
      'Book Maehongson Tour 07, a 4-day Mae Chaem, Mae Hong Son, and Pai package with rice terraces, hill tribes, walking streets, and local food.',
  },
  {
    slug: 'pai_day_tour01',
    title: 'Pai Day Tour 01: Pai Green Season Tour',
    titleTh: 'Pai Day Tour 01: Pai Green Season Tour',
    excerpt:
      'A full-day Pai green season tour from Pai with Muang Pang Hot Spring, Land Split, Pem Bok Waterfall, Bamboo Bridge Kho Ko So, and sunset at Pai Canyon.',
    excerptTh:
      'A full-day Pai green season tour from Pai with Muang Pang Hot Spring, Land Split, Pem Bok Waterfall, Bamboo Bridge Kho Ko So, and sunset at Pai Canyon.',
    description:
      'Explore Pai in the green season with Muang Pang Hot Spring, Land Split, Pem Bok Waterfall, Bamboo Bridge Kho Ko So, and Pai Canyon at sunset. Minimum 2 persons.',
    descriptionTh:
      'Explore Pai in the green season with Muang Pang Hot Spring, Land Split, Pem Bok Waterfall, Bamboo Bridge Kho Ko So, and Pai Canyon at sunset. Minimum 2 persons.',
    duration: 'Full day',
    location: 'Pai',
    groupSize: 'Minimum 2 persons',
    price: 'Start from 1,000 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Pai',
      'Green season',
      'Muang Pang Hot Spring',
      'Land Split',
      'Pem Bok Waterfall',
      'Bamboo Bridge',
      'Pai Canyon',
      'Full day',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'Muang Pang Hot Spring',
      'Land Split',
      'Pem Bok Waterfall',
      'Bamboo Bridge Kho Ko So',
      'Pai Canyon sunset',
    ],
    highlightsTh: [
      'Muang Pang Hot Spring',
      'Land Split',
      'Pem Bok Waterfall',
      'Bamboo Bridge Kho Ko So',
      'Pai Canyon sunset',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle: 'Pai Day Tour 01 Green Season | Maehongson Tour Packages',
    seoDescription:
      'Book Pai Day Tour 01 with Muang Pang Hot Spring, Land Split, Pem Bok Waterfall, Bamboo Bridge Kho Ko So, and Pai Canyon sunset.',
  },
  {
    slug: 'pai_day_tour02',
    title: 'Pai Day Tour 02: Pai Half Day Tour',
    titleTh: 'Pai Day Tour 02: Pai Half Day Tour',
    excerpt:
      'An afternoon half-day Pai tour with Pai Hot Spring and Spa, Land Split, Pem Bok Waterfall, and Pai Canyon sunset.',
    excerptTh:
      'An afternoon half-day Pai tour with Pai Hot Spring and Spa, Land Split, Pem Bok Waterfall, and Pai Canyon sunset.',
    description:
      'Spend an afternoon around Pai visiting Pai Hot Spring and Spa, Land Split, Pem Bok Waterfall, and Pai Canyon at sunset. Minimum 2 persons.',
    descriptionTh:
      'Spend an afternoon around Pai visiting Pai Hot Spring and Spa, Land Split, Pem Bok Waterfall, and Pai Canyon at sunset. Minimum 2 persons.',
    duration: 'Half day afternoon',
    location: 'Pai',
    groupSize: 'Minimum 2 persons',
    price: 'Start from 800 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Pai',
      'Half day',
      'Pai Hot Spring',
      'Land Split',
      'Pem Bok Waterfall',
      'Pai Canyon',
      'Sunset',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'Pai Hot Spring and Spa',
      'Land Split',
      'Pem Bok Waterfall',
      'Pai Canyon sunset',
    ],
    highlightsTh: [
      'Pai Hot Spring and Spa',
      'Land Split',
      'Pem Bok Waterfall',
      'Pai Canyon sunset',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle: 'Pai Day Tour 02 Half Day Pai Tour | Maehongson Tour Packages',
    seoDescription:
      'Book Pai Day Tour 02, an afternoon half-day Pai tour with Pai Hot Spring and Spa, Land Split, Pem Bok Waterfall, and Pai Canyon sunset.',
  },
  {
    slug: 'pai_day_tour03',
    title: 'Pai Day Tour 03: Pai Nature Tour',
    titleTh: 'Pai Day Tour 03: Pai Nature Tour',
    excerpt:
      'A full-day Pai nature tour with Karen Long Neck village, Wat Sri Donchai, Sai Ngam Hot Spring, Bamboo Bridge, Land Split, Pem Bok Waterfall, and Pai Canyon.',
    excerptTh:
      'A full-day Pai nature tour with Karen Long Neck village, Wat Sri Donchai, Sai Ngam Hot Spring, Bamboo Bridge, Land Split, Pem Bok Waterfall, and Pai Canyon.',
    description:
      'Discover Pai nature and culture with Karen Long Neck village, Wat Sri Donchai, Sai Ngam Hot Spring, Bamboo Bridge Kho Ko So, Land Split, Pem Bok Waterfall, and Pai Canyon sunset. Minimum 2 persons.',
    descriptionTh:
      'Discover Pai nature and culture with Karen Long Neck village, Wat Sri Donchai, Sai Ngam Hot Spring, Bamboo Bridge Kho Ko So, Land Split, Pem Bok Waterfall, and Pai Canyon sunset. Minimum 2 persons.',
    duration: 'Full day',
    location: 'Pai',
    groupSize: 'Minimum 2 persons',
    price: 'Start from 950 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Pai',
      'Nature tour',
      'Karen Long Neck',
      'Wat Sri Donchai',
      'Sai Ngam Hot Spring',
      'Bamboo Bridge',
      'Pai Canyon',
      'Full day',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'Karen Long Neck village',
      'Wat Sri Donchai',
      'Sai Ngam Hot Spring',
      'Bamboo Bridge Kho Ko So',
      'Pai Canyon sunset',
    ],
    highlightsTh: [
      'Karen Long Neck village',
      'Wat Sri Donchai',
      'Sai Ngam Hot Spring',
      'Bamboo Bridge Kho Ko So',
      'Pai Canyon sunset',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle: 'Pai Day Tour 03 Pai Nature Tour | Maehongson Tour Packages',
    seoDescription:
      'Book Pai Day Tour 03 with Karen Long Neck village, Wat Sri Donchai, Sai Ngam Hot Spring, Bamboo Bridge, Land Split, Pem Bok Waterfall, and Pai Canyon.',
  },
  {
    slug: 'pai_day_tour04',
    title: 'Pai Day Tour 04: Half Day Tour in Pai',
    titleTh: 'Pai Day Tour 04: Half Day Tour in Pai',
    excerpt:
      'A morning half-day Pai tour with Sai Ngam Hot Spring, Yun Lai Viewpoint, Chinese Village, and Karen Long Neck village.',
    excerptTh:
      'A morning half-day Pai tour with Sai Ngam Hot Spring, Yun Lai Viewpoint, Chinese Village, and Karen Long Neck village.',
    description:
      'Start the morning with Sai Ngam Hot Spring, Yun Lai Viewpoint, Chinese Village, and Karen Long Neck village around Pai. Minimum 3 persons.',
    descriptionTh:
      'Start the morning with Sai Ngam Hot Spring, Yun Lai Viewpoint, Chinese Village, and Karen Long Neck village around Pai. Minimum 3 persons.',
    duration: 'Half day morning',
    location: 'Pai',
    groupSize: 'Minimum 3 persons',
    price: 'Start from 1,100 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Pai',
      'Half day',
      'Sai Ngam Hot Spring',
      'Yun Lai Viewpoint',
      'Chinese Village',
      'Karen Long Neck',
      'Morning tour',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'Sai Ngam Hot Spring',
      'Yun Lai Viewpoint',
      'Chinese Village',
      'Karen Long Neck village',
    ],
    highlightsTh: [
      'Sai Ngam Hot Spring',
      'Yun Lai Viewpoint',
      'Chinese Village',
      'Karen Long Neck village',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle:
      'Pai Day Tour 04 Half Day Pai Morning Tour | Maehongson Tour Packages',
    seoDescription:
      'Book Pai Day Tour 04, a morning half-day Pai tour with Sai Ngam Hot Spring, Yun Lai Viewpoint, Chinese Village, and Karen Long Neck village.',
  },
  {
    slug: 'pai_day_tour05',
    title: 'Pai Day Tour 05: Full Day in Pai and Lod Cave',
    titleTh: 'Pai Day Tour 05: Full Day in Pai and Lod Cave',
    excerpt:
      'A full-day Pai and Lod Cave trip with White Buddha, Kiulom Viewpoint, Lod Cave, Secret Crystal Hot Spring, Pam Bok Waterfall, and Pai Canyon.',
    excerptTh:
      'A full-day Pai and Lod Cave trip with White Buddha, Kiulom Viewpoint, Lod Cave, Secret Crystal Hot Spring, Pam Bok Waterfall, and Pai Canyon.',
    description:
      'Explore Pai and Lod Cave in one full day with White Buddha on the hill, Kiulom Viewpoint, Lod Cave, Secret Crystal Hot Spring, Pam Bok Waterfall, and Pai Canyon. Minimum 2 persons.',
    descriptionTh:
      'Explore Pai and Lod Cave in one full day with White Buddha on the hill, Kiulom Viewpoint, Lod Cave, Secret Crystal Hot Spring, Pam Bok Waterfall, and Pai Canyon. Minimum 2 persons.',
    duration: 'Full day',
    location: 'Pai and Lod Cave',
    groupSize: 'Minimum 2 persons',
    price: 'Start from 1,100 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Pai',
      'Lod Cave',
      'White Buddha',
      'Kiulom Viewpoint',
      'Secret Crystal Hot Spring',
      'Pam Bok Waterfall',
      'Pai Canyon',
      'Full day',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'White Buddha on the hill',
      'Kiulom Viewpoint',
      'Lod Cave',
      'Secret Crystal Hot Spring',
      'Pam Bok Waterfall and Pai Canyon',
    ],
    highlightsTh: [
      'White Buddha on the hill',
      'Kiulom Viewpoint',
      'Lod Cave',
      'Secret Crystal Hot Spring',
      'Pam Bok Waterfall and Pai Canyon',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle: 'Pai Day Tour 05 Pai and Lod Cave | Maehongson Tour Packages',
    seoDescription:
      'Book Pai Day Tour 05 with White Buddha, Kiulom Viewpoint, Lod Cave, Secret Crystal Hot Spring, Pam Bok Waterfall, and Pai Canyon.',
  },
  {
    slug: 'pai_day_tour06',
    title: 'Pai Day Tour 06: Half Day Pai All Highlights',
    titleTh: 'Pai Day Tour 06: Half Day Pai All Highlights',
    excerpt:
      'A half-day Pai highlights tour with White Buddha, Yun Lai Viewpoint, Chinese Village, I Love You Pai, Land Split, Pem Bok Waterfall, Bamboo Bridge, and Pai Canyon.',
    excerptTh:
      'A half-day Pai highlights tour with White Buddha, Yun Lai Viewpoint, Chinese Village, I Love You Pai, Land Split, Pem Bok Waterfall, Bamboo Bridge, and Pai Canyon.',
    description:
      'See Pai highlights in a half day: White Buddha on the hill, Yun Lai Viewpoint, Chinese Village, I Love You Pai, Land Split, Pem Bok Waterfall, Bamboo Bridge Kho Ko So, and Pai Canyon. Minimum 2 persons.',
    descriptionTh:
      'See Pai highlights in a half day: White Buddha on the hill, Yun Lai Viewpoint, Chinese Village, I Love You Pai, Land Split, Pem Bok Waterfall, Bamboo Bridge Kho Ko So, and Pai Canyon. Minimum 2 persons.',
    duration: 'Half day',
    location: 'Pai',
    groupSize: 'Minimum 2 persons',
    price: 'Start from 800 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Pai',
      'Half day',
      'White Buddha',
      'Yun Lai Viewpoint',
      'Chinese Village',
      'Land Split',
      'Bamboo Bridge',
      'Pai Canyon',
    ],
    image: maeHongSonPackageTourImage,
    highlights: [
      'White Buddha on the hill',
      'Yun Lai Viewpoint and Chinese Village',
      'Land Split and Pem Bok Waterfall',
      'Bamboo Bridge Kho Ko So',
      'Pai Canyon',
    ],
    highlightsTh: [
      'White Buddha on the hill',
      'Yun Lai Viewpoint and Chinese Village',
      'Land Split and Pem Bok Waterfall',
      'Bamboo Bridge Kho Ko So',
      'Pai Canyon',
    ],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle:
      'Pai Day Tour 06 Half Day Pai All Highlights | Maehongson Tour Packages',
    seoDescription:
      'Book Pai Day Tour 06 half-day Pai highlights tour with White Buddha, Yun Lai Viewpoint, Chinese Village, Land Split, Pem Bok Waterfall, Bamboo Bridge, and Pai Canyon.',
  },
  {
    slug: 'pai_day_tour07',
    title: 'Pai Day Tour 07: Pai Yoga Trip',
    titleTh: 'Pai Day Tour 07: Pai Yoga Trip',
    excerpt:
      'A half-day Pai wellness trip with Pai yoga class and Pai cool and hot spring spa.',
    excerptTh:
      'A half-day Pai wellness trip with Pai yoga class and Pai cool and hot spring spa.',
    description:
      'Relax into Pai with a half-day yoga and spa trip including Pai yoga class and Pai cool and hot spring spa. Minimum 2 persons.',
    descriptionTh:
      'Relax into Pai with a half-day yoga and spa trip including Pai yoga class and Pai cool and hot spring spa. Minimum 2 persons.',
    duration: 'Half day',
    location: 'Pai',
    groupSize: 'Minimum 2 persons',
    price: 'Start from 900 THB / person',
    category: 'maehongson-tour-packages',
    tags: [
      'Pai',
      'Yoga',
      'Spa',
      'Hot spring',
      'Wellness',
      'Half day',
    ],
    image: maeHongSonPackageTourImage,
    highlights: ['Pai yoga class', 'Pai cool and hot spring spa'],
    highlightsTh: ['Pai yoga class', 'Pai cool and hot spring spa'],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle: 'Pai Day Tour 07 Pai Yoga Trip | Maehongson Tour Packages',
    seoDescription:
      'Book Pai Day Tour 07, a half-day Pai yoga and spa trip with yoga class and Pai cool and hot spring spa.',
  },
  {
    slug: 'pai_day_tour08',
    title: 'Pai Day Tour 08: Pai Tubing',
    titleTh: 'Pai Day Tour 08: Pai Tubing',
    excerpt: 'A short Pai tubing activity along the Pai River, starting and finishing in Pai.',
    excerptTh:
      'A short Pai tubing activity along the Pai River, starting and finishing in Pai.',
    description:
      'Enjoy a 2-hour tubing activity along the Pai River. This light adventure starts and finishes in Pai and is available for a minimum of 2 persons.',
    descriptionTh:
      'Enjoy a 2-hour tubing activity along the Pai River. This light adventure starts and finishes in Pai and is available for a minimum of 2 persons.',
    duration: '2 hours',
    location: 'Pai River',
    groupSize: 'Minimum 2 persons',
    price: 'Start from 350 THB / person',
    category: 'maehongson-tour-packages',
    tags: ['Pai', 'Tubing', 'Pai River', 'Water activity', '2 hours'],
    image: maeHongSonPackageTourImage,
    highlights: ['Tubing along Pai River'],
    highlightsTh: ['Tubing along Pai River'],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle: 'Pai Day Tour 08 Pai Tubing | Maehongson Tour Packages',
    seoDescription:
      'Book Pai Day Tour 08, a 2-hour Pai tubing activity along the Pai River for a minimum of 2 persons.',
  },
  {
    slug: 'pai_day_tour09',
    title: 'Pai Day Tour 09: Pai Bamboo Rafting',
    titleTh: 'Pai Day Tour 09: Pai Bamboo Rafting',
    excerpt:
      'A short Pai bamboo rafting activity along the Pai River, starting and finishing in Pai.',
    excerptTh:
      'A short Pai bamboo rafting activity along the Pai River, starting and finishing in Pai.',
    description:
      'Enjoy a 1-hour bamboo rafting activity along the Pai River. This Pai activity starts and finishes in Pai and is available for a minimum of 2 persons.',
    descriptionTh:
      'Enjoy a 1-hour bamboo rafting activity along the Pai River. This Pai activity starts and finishes in Pai and is available for a minimum of 2 persons.',
    duration: '1 hour',
    location: 'Pai River',
    groupSize: 'Minimum 2 persons',
    price: 'Start from 1,200 THB / 3 pax',
    category: 'maehongson-tour-packages',
    tags: ['Pai', 'Bamboo rafting', 'Pai River', 'Water activity', '1 hour'],
    image: maeHongSonPackageTourImage,
    highlights: ['Bamboo rafting along Pai River'],
    highlightsTh: ['Bamboo rafting along Pai River'],
    included: maeHongSonPackageIncluded,
    includedTh: maeHongSonPackageIncludedTh,
    seoTitle: 'Pai Day Tour 09 Pai Bamboo Rafting | Maehongson Tour Packages',
    seoDescription:
      'Book Pai Day Tour 09, a 1-hour Pai bamboo rafting activity along the Pai River for a minimum of 2 persons.',
  },
  {
    slug: 'mae-hong-son-trek01',
    title: 'Mae Hong Son Trek01: A Day Hike to Doi Pui Luang',
    titleTh: 'Mae Hong Son Trek01: A Day Hike to Doi Pui Luang',
    excerpt:
      'A private day hike to Doi Pui Luang from Mae Hong Son Town with Ban Huay Hee Karen culture, wild orchids, mountain ecosystems, and weaving traditions.',
    excerptTh:
      'A private day hike to Doi Pui Luang from Mae Hong Son Town with Ban Huay Hee Karen culture, wild orchids, mountain ecosystems, and weaving traditions.',
    description:
      'A day hike to Doi Pui Luang blends adventure and cultural immersion. Trek through diverse ecosystems, admire wild orchids, and connect with the Karen people of Ban Huay Hee while learning about traditional weaving techniques in Mae Hong Son Province.',
    descriptionTh:
      'A day hike to Doi Pui Luang blends adventure and cultural immersion. Trek through diverse ecosystems, admire wild orchids, and connect with the Karen people of Ban Huay Hee while learning about traditional weaving techniques in Mae Hong Son Province.',
    duration: '8:00 - 17:00',
    location: 'Doi Pui Luang and Ban Huay Hee, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 2,000 - 6,200 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Doi Pui Luang',
      'Ban Huay Hee',
      'Karen village',
      'Wild orchids',
      'Weaving',
      'Day hike',
      'Private trekking',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Doi Pui Luang day hike',
      'Ban Huay Hee Karen village',
      'Wild orchids',
      'Diverse mountain ecosystems',
      'Traditional weaving techniques',
    ],
    highlightsTh: [
      'Doi Pui Luang day hike',
      'Ban Huay Hee Karen village',
      'Wild orchids',
      'Diverse mountain ecosystems',
      'Traditional weaving techniques',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek01 Doi Pui Luang Day Hike | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek01, a private Doi Pui Luang day hike with Ban Huay Hee Karen culture, wild orchids, mountain ecosystems, and weaving traditions.',
  },
  {
    slug: 'mae-hong-son-trek02',
    title: 'Mae Hong Son Trek02: A Day Hike at Ban Huay Kaew Bon',
    titleTh: 'Mae Hong Son Trek02: A Day Hike at Ban Huay Kaew Bon',
    excerpt:
      'A private Ban Huay Kaew Bon day hike through untouched jungle with Karen cooking, crafts, 4WD access, and remote village culture.',
    excerptTh:
      'A private Ban Huay Kaew Bon day hike through untouched jungle with Karen cooking, crafts, 4WD access, and remote village culture.',
    description:
      'This Ban Huay Kaew Bon hiking program invites you into a world where nature is both trail and teacher. Walk untouched jungle, learn Karen cooking and crafts, and visit a remote southern Mae Hong Son village reached by 4WD.',
    descriptionTh:
      'This Ban Huay Kaew Bon hiking program invites you into a world where nature is both trail and teacher. Walk untouched jungle, learn Karen cooking and crafts, and visit a remote southern Mae Hong Son village reached by 4WD.',
    duration: '8:00 - 17:00',
    location: 'Ban Huay Kaew Bon, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 2,000 - 6,200 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Ban Huay Kaew Bon',
      'Karen village',
      'Jungle',
      'Cooking',
      'Crafts',
      '4WD',
      'Day hike',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Huay Kaew Bon village',
      'Untouched jungle trails',
      'Karen cooking',
      'Local crafts',
      'Remote 4WD route',
    ],
    highlightsTh: [
      'Ban Huay Kaew Bon village',
      'Untouched jungle trails',
      'Karen cooking',
      'Local crafts',
      'Remote 4WD route',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek02 Ban Huay Kaew Bon Day Hike | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek02, a private Ban Huay Kaew Bon day hike with jungle trails, Karen cooking, crafts, and remote village culture.',
  },
  {
    slug: 'mae-hong-son-trek03',
    title: 'Mae Hong Son Trek03: A Day Ban Huai Kung Trekking',
    titleTh: 'Mae Hong Son Trek03: A Day Ban Huai Kung Trekking',
    excerpt:
      'A private Ban Huai Kung day trek with local Karen guides, lush forest, waterfalls, village life, and riverside lunch.',
    excerptTh:
      'A private Ban Huai Kung day trek with local Karen guides, lush forest, waterfalls, village life, and riverside lunch.',
    description:
      'Ban Huai Kung trekking is a guided cultural exchange through lush forest, cascading waterfalls, vibrant village life, and a peaceful riverside lunch. Local Karen guides bring nature and community together in one meaningful day.',
    descriptionTh:
      'Ban Huai Kung trekking is a guided cultural exchange through lush forest, cascading waterfalls, vibrant village life, and a peaceful riverside lunch. Local Karen guides bring nature and community together in one meaningful day.',
    duration: '8:00 - 17:00',
    location: 'Ban Huai Kung, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 2,000 - 6,200 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Ban Huai Kung',
      'Karen guides',
      'Waterfalls',
      'Village life',
      'Riverside lunch',
      'Day trek',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Huai Kung trek',
      'Local Karen guides',
      'Cascading waterfalls',
      'Village life',
      'Riverside lunch',
    ],
    highlightsTh: [
      'Ban Huai Kung trek',
      'Local Karen guides',
      'Cascading waterfalls',
      'Village life',
      'Riverside lunch',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek03 Ban Huai Kung Day Trek | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek03, a private Ban Huai Kung day trek with Karen guides, forest, waterfalls, village life, and riverside lunch.',
  },
  {
    slug: 'mae-hong-son-trek04',
    title: 'Mae Hong Son Trek04: Trekking at Ban Mae Lana',
    titleTh: 'Mae Hong Son Trek04: Trekking at Ban Mae Lana',
    excerpt:
      'A private Ban Mae Lana full-day trek from Mae Hong Son Town or Pai with forests, caves, Shan village life, and local guides.',
    excerptTh:
      'A private Ban Mae Lana full-day trek from Mae Hong Son Town or Pai with forests, caves, Shan village life, and local guides.',
    description:
      'Spend a day discovering northern Thailand nature and cultural warmth. Trek at Ban Mae Lana through forests, into caves, and back to a living Shan village with local guides who know the land deeply.',
    descriptionTh:
      'Spend a day discovering northern Thailand nature and cultural warmth. Trek at Ban Mae Lana through forests, into caves, and back to a living Shan village with local guides who know the land deeply.',
    duration: '8:00 - 17:00',
    location: 'Ban Mae Lana, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 2,100 - 6,900 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Pai',
      'Ban Mae Lana',
      'Shan village',
      'Forests',
      'Caves',
      'Local guides',
      'Day trek',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Mae Lana trek',
      'Forest trails',
      'Cave exploration',
      'Shan village life',
      'Pickup from Mae Hong Son Town or Pai',
    ],
    highlightsTh: [
      'Ban Mae Lana trek',
      'Forest trails',
      'Cave exploration',
      'Shan village life',
      'Pickup from Mae Hong Son Town or Pai',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek04 Ban Mae Lana Trekking | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek04, a private Ban Mae Lana full-day trek with forests, caves, Shan village culture, and pickup from Mae Hong Son Town or Pai.',
  },
  {
    slug: 'mae-hong-son-trek05',
    title: 'Mae Hong Son Trek05: Trekking at Ban Jabo',
    titleTh: 'Mae Hong Son Trek05: Trekking at Ban Jabo',
    excerpt:
      'A private full-day Ban Jabo trek with mixed-deciduous forest, terraced rice paddies, bamboo weaving, and cultural activities.',
    excerptTh:
      'A private full-day Ban Jabo trek with mixed-deciduous forest, terraced rice paddies, bamboo weaving, and cultural activities.',
    description:
      'Trekking at Ban Jabo combines nature, culture, and tradition in Mae Hong Son. Hike through mixed-deciduous forests, explore terraced rice paddies, and take part in hands-on cultural activities such as bamboo weaving.',
    descriptionTh:
      'Trekking at Ban Jabo combines nature, culture, and tradition in Mae Hong Son. Hike through mixed-deciduous forests, explore terraced rice paddies, and take part in hands-on cultural activities such as bamboo weaving.',
    duration: '8:00 - 17:00',
    location: 'Ban Jabo, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 2,100 - 6,900 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Pai',
      'Ban Jabo',
      'Rice paddies',
      'Bamboo weaving',
      'Forest',
      'Culture',
      'Day trek',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Jabo trekking',
      'Mixed-deciduous forest',
      'Terraced rice paddies',
      'Bamboo weaving',
      'Cultural activities',
    ],
    highlightsTh: [
      'Ban Jabo trekking',
      'Mixed-deciduous forest',
      'Terraced rice paddies',
      'Bamboo weaving',
      'Cultural activities',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle: 'Mae Hong Son Trek05 Ban Jabo Trekking | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek05, a private Ban Jabo full-day trek with forest, terraced rice paddies, bamboo weaving, and cultural activities.',
  },
  {
    slug: 'mae-hong-son-trek06',
    title: 'Mae Hong Son Trek06: Trekking at Ban Pha Mon',
    titleTh: 'Mae Hong Son Trek06: Trekking at Ban Pha Mon',
    excerpt:
      'A private full-day Ban Pha Mon trek through forest, rice paddies, and mountain ridges with Red Lahu village culture and weaving traditions.',
    excerptTh:
      'A private full-day Ban Pha Mon trek through forest, rice paddies, and mountain ridges with Red Lahu village culture and weaving traditions.',
    description:
      'Spend a full day trekking at Ban Pha Mon, a hidden gem in Mae Hong Son jungle trek country. Walk real trails through untouched forest, rice paddies, and mountain ridges, then meet the Red Lahu and their weaving traditions.',
    descriptionTh:
      'Spend a full day trekking at Ban Pha Mon, a hidden gem in Mae Hong Son jungle trek country. Walk real trails through untouched forest, rice paddies, and mountain ridges, then meet the Red Lahu and their weaving traditions.',
    duration: '8:00 - 18:00',
    location: 'Ban Pha Mon, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 2,100 - 6,900 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Pai',
      'Ban Pha Mon',
      'Red Lahu',
      'Forest',
      'Rice paddies',
      'Mountain ridges',
      'Weaving',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Pha Mon trek',
      'Untouched forest',
      'Rice paddies and mountain ridges',
      'Red Lahu village',
      'Weaving traditions',
    ],
    highlightsTh: [
      'Ban Pha Mon trek',
      'Untouched forest',
      'Rice paddies and mountain ridges',
      'Red Lahu village',
      'Weaving traditions',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek06 Ban Pha Mon Trekking | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek06, a private Ban Pha Mon full-day trek with forest, rice paddies, mountain ridges, Red Lahu culture, and weaving traditions.',
  },
  {
    slug: 'mae-hong-son-trek07',
    title: 'Mae Hong Son Trek07: Trekking at Ban Muang Pam',
    titleTh: 'Mae Hong Son Trek07: Trekking at Ban Muang Pam',
    excerpt:
      'A private full-day Ban Muang Pam soft-adventure tour with Lod Cave, natural corridor trekking, Karen village, weaving, and herbal healing.',
    excerptTh:
      'A private full-day Ban Muang Pam soft-adventure tour with Lod Cave, natural corridor trekking, Karen village, weaving, and herbal healing.',
    description:
      'This full-day Ban Muang Pam trek is ideal for cultural travelers and soft-adventure seekers. Visit Lod Cave, trek through a natural corridor, and reach an authentic Karen village for weaving, herbal healing, and local culture.',
    descriptionTh:
      'This full-day Ban Muang Pam trek is ideal for cultural travelers and soft-adventure seekers. Visit Lod Cave, trek through a natural corridor, and reach an authentic Karen village for weaving, herbal healing, and local culture.',
    duration: '8:00 - 17:00',
    location: 'Ban Muang Pam and Lod Cave, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 2,100 - 6,900 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Pai',
      'Ban Muang Pam',
      'Lod Cave',
      'Karen village',
      'Weaving',
      'Herbal healing',
      'Day trek',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Lod Cave',
      'Natural corridor trekking',
      'Ban Muang Pam Karen village',
      'Weaving experience',
      'Herbal healing traditions',
    ],
    highlightsTh: [
      'Lod Cave',
      'Natural corridor trekking',
      'Ban Muang Pam Karen village',
      'Weaving experience',
      'Herbal healing traditions',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek07 Ban Muang Pam Trekking | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek07, a private Ban Muang Pam day trek with Lod Cave, Karen village culture, weaving, herbal healing, and scenic trails.',
  },
  {
    slug: 'mae-hong-son-trek08',
    title: 'Mae Hong Son Trek08: Ban Muang Pon Cultural Day',
    titleTh: 'Mae Hong Son Trek08: Ban Muang Pon Cultural Day',
    excerpt:
      'A private Ban Muang Pon cultural day from Mae Hong Son Town with Tai Yai village life, bamboo crafts, traditional cooking, and Khun Yuam culture.',
    excerptTh:
      'A private Ban Muang Pon cultural day from Mae Hong Son Town with Tai Yai village life, bamboo crafts, traditional cooking, and Khun Yuam culture.',
    description:
      'Ban Muang Pon Cultural Day offers an authentic window into Tai Yai village life. Try hands-on bamboo crafts, cook in a local home, and connect with the people and traditions of Khun Yuam District in Mae Hong Son.',
    descriptionTh:
      'Ban Muang Pon Cultural Day offers an authentic window into Tai Yai village life. Try hands-on bamboo crafts, cook in a local home, and connect with the people and traditions of Khun Yuam District in Mae Hong Son.',
    duration: '8:00 - 17:00',
    location: 'Ban Muang Pon, Khun Yuam District',
    groupSize: 'Private cultural trekking tour',
    price: 'Start from 2,100 - 6,900 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Ban Muang Pon',
      'Tai Yai',
      'Khun Yuam',
      'Bamboo crafts',
      'Traditional cooking',
      'Village life',
      'Cultural day',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Muang Pon cultural day',
      'Tai Yai village life',
      'Bamboo crafts',
      'Traditional cooking',
      'Khun Yuam local traditions',
    ],
    highlightsTh: [
      'Ban Muang Pon cultural day',
      'Tai Yai village life',
      'Bamboo crafts',
      'Traditional cooking',
      'Khun Yuam local traditions',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek08 Ban Muang Pon Cultural Day | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek08, a Ban Muang Pon cultural day with Tai Yai village life, bamboo crafts, traditional cooking, and Khun Yuam traditions.',
  },
  {
    slug: 'mae-hong-son-trek09',
    title: 'Mae Hong Son Trek09: 2 Days Trek to Doi Pui and Ban Huay Hee',
    titleTh:
      'Mae Hong Son Trek09: 2 Days Trek to Doi Pui and Ban Huay Hee',
    excerpt:
      'A private 2-day Doi Pui and Ban Huay Hee trek with White Karen homestay, mountain meals, and peak ascent to 1,722 meters.',
    excerptTh:
      'A private 2-day Doi Pui and Ban Huay Hee trek with White Karen homestay, mountain meals, and peak ascent to 1,722 meters.',
    description:
      'This 2 Days Trek to Doi Pui and Ban Huay Hee offers a rare look into northern Thailand ecology and culture. Stay in a White Karen homestay, enjoy mountain meals, and ascend to a 1,722-meter peak on an eco trekking route.',
    descriptionTh:
      'This 2 Days Trek to Doi Pui and Ban Huay Hee offers a rare look into northern Thailand ecology and culture. Stay in a White Karen homestay, enjoy mountain meals, and ascend to a 1,722-meter peak on an eco trekking route.',
    duration: '2 days',
    location: 'Doi Pui and Ban Huay Hee, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 4,600 - 12,600 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Doi Pui',
      'Ban Huay Hee',
      'White Karen',
      'Homestay',
      'Mountain meals',
      'Eco trekking',
      '2 days',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Doi Pui and Ban Huay Hee trek',
      'White Karen homestay',
      'Authentic mountain meals',
      'Peak ascent to 1,722 meters',
      'Eco trekking Mae Hong Son',
    ],
    highlightsTh: [
      'Doi Pui and Ban Huay Hee trek',
      'White Karen homestay',
      'Authentic mountain meals',
      'Peak ascent to 1,722 meters',
      'Eco trekking Mae Hong Son',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek09 Doi Pui Ban Huay Hee 2 Days | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek09, a 2-day Doi Pui and Ban Huay Hee trek with White Karen homestay, mountain meals, and 1,722-meter peak ascent.',
  },
  {
    slug: 'mae-hong-son-trek10',
    title: 'Mae Hong Son Trek10: 2-Day Trek at Ban Huay Kaew',
    titleTh: 'Mae Hong Son Trek10: 2-Day Trek at Ban Huay Kaew',
    excerpt:
      'A private 2-day Ban Huay Kaew trek through rice fields, forest paths, creek crossings, jungle lunches, and Karen village culture.',
    excerptTh:
      'A private 2-day Ban Huay Kaew trek through rice fields, forest paths, creek crossings, jungle lunches, and Karen village culture.',
    description:
      'This 2-day Ban Huay Kaew journey connects nature and culture. Walk rice fields, forest paths, and creek crossings, enjoy jungle lunches, and experience the warm embrace of a Karen village with traditions rooted in northern Thailand.',
    descriptionTh:
      'This 2-day Ban Huay Kaew journey connects nature and culture. Walk rice fields, forest paths, and creek crossings, enjoy jungle lunches, and experience the warm embrace of a Karen village with traditions rooted in northern Thailand.',
    duration: '2 days',
    location: 'Ban Huay Kaew, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 4,600 - 12,600 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Ban Huay Kaew',
      'Rice fields',
      'Forest paths',
      'Creek crossings',
      'Jungle lunch',
      'Karen village',
      '2 days',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Huay Kaew two-day trek',
      'Rice fields and forest paths',
      'Creek crossings',
      'Jungle lunches',
      'Karen village culture',
    ],
    highlightsTh: [
      'Ban Huay Kaew two-day trek',
      'Rice fields and forest paths',
      'Creek crossings',
      'Jungle lunches',
      'Karen village culture',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek10 Ban Huay Kaew 2-Day Trek | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek10, a 2-day Ban Huay Kaew trek with rice fields, forest paths, creek crossings, jungle lunches, and Karen village culture.',
  },
  {
    slug: 'mae-hong-son-trek11',
    title: 'Mae Hong Son Trek11: 2-Day Trekking Ban Huay Kung',
    titleTh: 'Mae Hong Son Trek11: 2-Day Trekking Ban Huay Kung',
    excerpt:
      'A private 2-day Ban Huay Kung trek with jungle hikes, waterfall, Karen cooking, rice terraces, river trails, local food, and village life.',
    excerptTh:
      'A private 2-day Ban Huay Kung trek with jungle hikes, waterfall, Karen cooking, rice terraces, river trails, local food, and village life.',
    description:
      'Embark on a 2-day trek to Ban Huay Kung, a serene village in Mae Hong Son. Day one includes a scenic drive, trek to the village, waterfall hike, and Karen cooking. Day two follows seasonal rice terraces or river trails with local food and village life.',
    descriptionTh:
      'Embark on a 2-day trek to Ban Huay Kung, a serene village in Mae Hong Son. Day one includes a scenic drive, trek to the village, waterfall hike, and Karen cooking. Day two follows seasonal rice terraces or river trails with local food and village life.',
    duration: '2 days',
    location: 'Ban Huay Kung, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 4,600 - 12,600 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Ban Huay Kung',
      'Waterfall',
      'Karen cooking',
      'Rice terraces',
      'River trails',
      'Village life',
      '2 days',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Huay Kung village',
      'Waterfall hike',
      'Traditional Karen cooking',
      'Rice terraces or river trail',
      'Authentic local life',
    ],
    highlightsTh: [
      'Ban Huay Kung village',
      'Waterfall hike',
      'Traditional Karen cooking',
      'Rice terraces or river trail',
      'Authentic local life',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek11 Ban Huay Kung 2-Day Trek | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek11, a 2-day Ban Huay Kung trek with waterfall hike, Karen cooking, rice terraces, river trails, and village life.',
  },
  {
    slug: 'mae-hong-son-trek12',
    title: 'Mae Hong Son Trek12: 2-Day Trek at Ban Mae Lana',
    titleTh: 'Mae Hong Son Trek12: 2-Day Trek at Ban Mae Lana',
    excerpt:
      'A private 2-day Ban Mae Lana trek with Lod Cave bamboo raft, forest and farmland hike, Tai Yai village, temple offerings, crafts, and cooking.',
    excerptTh:
      'A private 2-day Ban Mae Lana trek with Lod Cave bamboo raft, forest and farmland hike, Tai Yai village, temple offerings, crafts, and cooking.',
    description:
      'This 2-day Ban Mae Lana trek explores Lod Cave by bamboo raft, then follows a 3-4 hour route through forests and farmland to a traditional Tai Yai village. Day two includes temple offerings, village walks, crafts, and Tai Yai cooking.',
    descriptionTh:
      'This 2-day Ban Mae Lana trek explores Lod Cave by bamboo raft, then follows a 3-4 hour route through forests and farmland to a traditional Tai Yai village. Day two includes temple offerings, village walks, crafts, and Tai Yai cooking.',
    duration: '2 days',
    location: 'Ban Mae Lana and Lod Cave, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 4,700 - 14,600 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Pai',
      'Ban Mae Lana',
      'Lod Cave',
      'Bamboo raft',
      'Tai Yai',
      'Crafts',
      '2 days',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Lod Cave by bamboo raft',
      'Forest and farmland trek',
      'Ban Mae Lana Tai Yai village',
      'Temple offerings',
      'Traditional crafts and cooking',
    ],
    highlightsTh: [
      'Lod Cave by bamboo raft',
      'Forest and farmland trek',
      'Ban Mae Lana Tai Yai village',
      'Temple offerings',
      'Traditional crafts and cooking',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek12 Ban Mae Lana 2-Day Trek | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek12, a 2-day Ban Mae Lana trek with Lod Cave bamboo raft, Tai Yai village, temple offerings, crafts, and cooking.',
  },
  {
    slug: 'mae-hong-son-trek13',
    title: 'Mae Hong Son Trek13: 2-Day Trek to Ban Pha Mon',
    titleTh: 'Mae Hong Son Trek13: 2-Day Trek to Ban Pha Mon',
    excerpt:
      'A private 2-day Ban Pha Mon trek with Red Lahu traditions, untouched forests, rice fields, rural farms, village homestay, weaving, and cooking.',
    excerptTh:
      'A private 2-day Ban Pha Mon trek with Red Lahu traditions, untouched forests, rice fields, rural farms, village homestay, weaving, and cooking.',
    description:
      'Uncover Red Lahu traditions in the green hills of Pang Mapha District. Trek through untouched forests, rice fields, and rural farms before reaching a warm Ban Pha Mon homestay with weaving, cooking, meals, and local hospitality.',
    descriptionTh:
      'Uncover Red Lahu traditions in the green hills of Pang Mapha District. Trek through untouched forests, rice fields, and rural farms before reaching a warm Ban Pha Mon homestay with weaving, cooking, meals, and local hospitality.',
    duration: '2 days',
    location: 'Ban Pha Mon, Pang Mapha District',
    groupSize: 'Private trekking tour',
    price: 'Start from 4,700 - 14,600 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Pai',
      'Ban Pha Mon',
      'Red Lahu',
      'Homestay',
      'Rice fields',
      'Weaving',
      '2 days',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Pha Mon trek',
      'Red Lahu traditions',
      'Untouched forests and rice fields',
      'Village homestay',
      'Weaving and cooking',
    ],
    highlightsTh: [
      'Ban Pha Mon trek',
      'Red Lahu traditions',
      'Untouched forests and rice fields',
      'Village homestay',
      'Weaving and cooking',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek13 Ban Pha Mon 2-Day Trek | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek13, a 2-day Ban Pha Mon trek with Red Lahu culture, forest, rice fields, village homestay, weaving, and cooking.',
  },
  {
    slug: 'mae-hong-son-trek14',
    title: 'Mae Hong Son Trek14: 2 Days Trekking to Ban Muang Pam',
    titleTh: 'Mae Hong Son Trek14: 2 Days Trekking to Ban Muang Pam',
    excerpt:
      'A private 2-day Ban Muang Pam trek with highland trails, Karen homestay, traditional customs, scenic mountaintops, and weaving culture.',
    excerptTh:
      'A private 2-day Ban Muang Pam trek with highland trails, Karen homestay, traditional customs, scenic mountaintops, and weaving culture.',
    description:
      'This 2-day Ban Muang Pam trek blends rugged adventure and authentic cultural discovery. Hike beautiful highland trails, stay in a traditional Karen homestay, and learn centuries-old customs from scenic mountaintops to woven cloth.',
    descriptionTh:
      'This 2-day Ban Muang Pam trek blends rugged adventure and authentic cultural discovery. Hike beautiful highland trails, stay in a traditional Karen homestay, and learn centuries-old customs from scenic mountaintops to woven cloth.',
    duration: '2 days',
    location: 'Ban Muang Pam, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 4,700 - 14,600 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Pai',
      'Ban Muang Pam',
      'Karen homestay',
      'Highland trails',
      'Weaving',
      'Eco trekking',
      '2 days',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Muang Pam highland trails',
      'Traditional Karen homestay',
      'Centuries-old customs',
      'Scenic mountaintops',
      'Weaving culture',
    ],
    highlightsTh: [
      'Ban Muang Pam highland trails',
      'Traditional Karen homestay',
      'Centuries-old customs',
      'Scenic mountaintops',
      'Weaving culture',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek14 Ban Muang Pam 2-Day Trek | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek14, a 2-day Ban Muang Pam trek with highland trails, Karen homestay, traditional customs, mountaintops, and weaving culture.',
  },
  {
    slug: 'mae-hong-son-trek15',
    title: 'Mae Hong Son Trek15: 2-Day Trek to Ban Jabo',
    titleTh: 'Mae Hong Son Trek15: 2-Day Trek to Ban Jabo',
    excerpt:
      'A private 2-day Ban Jabo trek with forest trails, rice terraces, village life, Lahu homestay, music, food, and heritage immersion.',
    excerptTh:
      'A private 2-day Ban Jabo trek with forest trails, rice terraces, village life, Lahu homestay, music, food, and heritage immersion.',
    description:
      'This immersive Ban Jabo trekking adventure blends physical challenge with cultural engagement. Hike forested trails, pass rice terraces and village life, rest in a traditional Lahu homestay, and experience music, food, and heritage on day two.',
    descriptionTh:
      'This immersive Ban Jabo trekking adventure blends physical challenge with cultural engagement. Hike forested trails, pass rice terraces and village life, rest in a traditional Lahu homestay, and experience music, food, and heritage on day two.',
    duration: '2 days',
    location: 'Ban Jabo, Mae Hong Son',
    groupSize: 'Private trekking tour',
    price: 'Start from 4,700 - 14,600 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Pai',
      'Ban Jabo',
      'Lahu homestay',
      'Rice terraces',
      'Forest trails',
      'Heritage',
      '2 days',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Jabo forest trails',
      'Rice terraces and village life',
      'Traditional Lahu homestay',
      'Music, food, and heritage',
      'Pickup from Mae Hong Son Town or Pai',
    ],
    highlightsTh: [
      'Ban Jabo forest trails',
      'Rice terraces and village life',
      'Traditional Lahu homestay',
      'Music, food, and heritage',
      'Pickup from Mae Hong Son Town or Pai',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek15 Ban Jabo 2-Day Trek | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek15, a 2-day Ban Jabo trek with forest trails, rice terraces, Lahu homestay, music, food, and heritage immersion.',
  },
  {
    slug: 'mae-hong-son-trek16',
    title: 'Mae Hong Son Trek16: 2-Day Tai-Yai Living Culture Tour',
    titleTh: 'Mae Hong Son Trek16: 2-Day Tai-Yai Living Culture Tour',
    excerpt:
      'A private 2-day Ban Muang Pon Tai-Yai living culture tour with crafts, local food, village heritage, tranquil Khun Yuam, and Mae Hong Son trekking spirit.',
    excerptTh:
      'A private 2-day Ban Muang Pon Tai-Yai living culture tour with crafts, local food, village heritage, tranquil Khun Yuam, and Mae Hong Son trekking spirit.',
    description:
      'The 2-Day Tai-Yai Living Culture Tour invites you to participate in the living heritage of Ban Muang Pon. Through crafts, local food, and village life in tranquil Khun Yuam, this journey adds cultural soul to a Mae Hong Son trekking itinerary.',
    descriptionTh:
      'The 2-Day Tai-Yai Living Culture Tour invites you to participate in the living heritage of Ban Muang Pon. Through crafts, local food, and village life in tranquil Khun Yuam, this journey adds cultural soul to a Mae Hong Son trekking itinerary.',
    duration: '2 days',
    location: 'Ban Muang Pon, Khun Yuam District',
    groupSize: 'Private cultural trekking tour',
    price: 'Start from 4,700 - 14,600 THB / person',
    category: 'mae-hong-son-trekking',
    tags: [
      'Mae Hong Son',
      'Ban Muang Pon',
      'Tai Yai',
      'Khun Yuam',
      'Crafts',
      'Local food',
      'Village heritage',
      '2 days',
    ],
    image: maeHongSonTrekkingTourImage,
    highlights: [
      'Ban Muang Pon village',
      'Tai Yai living culture',
      'Traditional crafts',
      'Local food',
      'Tranquil Khun Yuam setting',
    ],
    highlightsTh: [
      'Ban Muang Pon village',
      'Tai Yai living culture',
      'Traditional crafts',
      'Local food',
      'Tranquil Khun Yuam setting',
    ],
    included: maeHongSonTrekkingIncluded,
    includedTh: maeHongSonTrekkingIncludedTh,
    seoTitle:
      'Mae Hong Son Trek16 Tai-Yai Living Culture Tour | Mae Hong Son Trekking',
    seoDescription:
      'Book Mae Hong Son Trek16, a 2-day Tai-Yai living culture tour at Ban Muang Pon with crafts, local food, village heritage, and Khun Yuam culture.',
  },
  {
    slug: 'elephant-half-day-tour04',
    title: 'Half Day Tour04: Half Day Elephant Care and Orchid Farm',
    titleTh: 'Half Day Tour04: Half Day Elephant Care and Orchid Farm',
    excerpt:
      'A private half-day Chiang Mai elephant care tour at Mae Rim Elephant Home, paired with a visit to an orchid and butterfly farm.',
    excerptTh:
      'A private half-day Chiang Mai elephant care tour at Mae Rim Elephant Home, paired with a visit to an orchid and butterfly farm.',
    description:
      'This private half-day tour combines an unforgettable elephant care experience at Mae Rim Elephant Home with a gentle visit to an orchid and butterfly farm. The program follows a no-chain, no-hook, no-riding approach for a respectful Chiang Mai elephant encounter.',
    descriptionTh:
      'This private half-day tour combines an unforgettable elephant care experience at Mae Rim Elephant Home with a gentle visit to an orchid and butterfly farm. The program follows a no-chain, no-hook, no-riding approach for a respectful Chiang Mai elephant encounter.',
    duration: 'Half day',
    location: 'Mae Rim Elephant Home and Orchid Farm',
    groupSize: 'Private tour',
    price: 'Start from 2,000 - 3,400 THB / person',
    category: 'chiang-mai-elephant',
    tags: [
      'Chiang Mai',
      'Elephant care',
      'Mae Rim Elephant Home',
      'Orchid Farm',
      'Butterfly Farm',
      'No riding',
      'Private tour',
      'Half day',
    ],
    image: chiangMaiElephantTourImage,
    highlights: [
      'Mae Rim Elephant Home care experience',
      'Orchid and butterfly farm visit',
      'No chain, no hook, no riding program',
      'Private half-day itinerary',
      'Pickup and return in Chiang Mai',
    ],
    highlightsTh: [
      'Mae Rim Elephant Home care experience',
      'Orchid and butterfly farm visit',
      'No chain, no hook, no riding program',
      'Private half-day itinerary',
      'Pickup and return in Chiang Mai',
    ],
    included: chiangMaiElephantIncluded,
    includedTh: chiangMaiElephantIncludedTh,
    seoTitle:
      'Half Day Elephant Care and Orchid Farm | Chiang Mai Elephant Tour',
    seoDescription:
      'Book a private half-day Chiang Mai elephant care tour at Mae Rim Elephant Home with an orchid and butterfly farm visit. No chain, no hook, no riding.',
  },
  {
    slug: 'elephant-chiang-mai-tour09',
    title:
      'Chiang Mai Tour09: Chiang Mai Elephant Care and Bua Tong Sticky Waterfall',
    titleTh:
      'Chiang Mai Tour09: Chiang Mai Elephant Care and Bua Tong Sticky Waterfall',
    excerpt:
      'A private full-day Chiang Mai elephant care tour at Mae Rim Elephant Home with a refreshing visit to Bua Tong Sticky Waterfall.',
    excerptTh:
      'A private full-day Chiang Mai elephant care tour at Mae Rim Elephant Home with a refreshing visit to Bua Tong Sticky Waterfall.',
    description:
      'Spend a full day enjoying elephant care at Mae Rim Elephant Home before continuing to the beautiful Bua Tong Sticky Waterfall. This private Chiang Mai program combines ethical elephant interaction, mountain scenery, and a playful natural waterfall experience.',
    descriptionTh:
      'Spend a full day enjoying elephant care at Mae Rim Elephant Home before continuing to the beautiful Bua Tong Sticky Waterfall. This private Chiang Mai program combines ethical elephant interaction, mountain scenery, and a playful natural waterfall experience.',
    duration: 'Full day',
    location: 'Mae Rim Elephant Home and Bua Tong Sticky Waterfall',
    groupSize: 'Private tour',
    price: 'Start from 2,200 - 3,600 THB / person',
    category: 'chiang-mai-elephant',
    tags: [
      'Chiang Mai',
      'Elephant care',
      'Mae Rim Elephant Home',
      'Bua Tong Sticky Waterfall',
      'Sticky Waterfall',
      'No riding',
      'Private tour',
      'Full day',
    ],
    image: chiangMaiElephantTourImage,
    highlights: [
      'Mae Rim Elephant Home experience',
      'Bua Tong Sticky Waterfall',
      'No chain, no hook, no riding program',
      'Private full-day itinerary',
      'Pickup and return in Chiang Mai',
    ],
    highlightsTh: [
      'Mae Rim Elephant Home experience',
      'Bua Tong Sticky Waterfall',
      'No chain, no hook, no riding program',
      'Private full-day itinerary',
      'Pickup and return in Chiang Mai',
    ],
    included: chiangMaiElephantIncluded,
    includedTh: chiangMaiElephantIncludedTh,
    seoTitle:
      'Chiang Mai Elephant Care and Bua Tong Sticky Waterfall Tour',
    seoDescription:
      'Book a private Chiang Mai elephant care tour at Mae Rim Elephant Home with Bua Tong Sticky Waterfall. Full-day ethical elephant and nature program.',
  },
  {
    slug: 'elephant-chiang-mai-tour10',
    title:
      'Chiang Mai Tour10: One Day Elephant Care and Bamboo Rafting Adventure',
    titleTh:
      'Chiang Mai Tour10: One Day Elephant Care and Bamboo Rafting Adventure',
    excerpt:
      'A private full-day Chiang Mai elephant care tour with bamboo rafting along the Mae Wang Stream.',
    excerptTh:
      'A private full-day Chiang Mai elephant care tour with bamboo rafting along the Mae Wang Stream.',
    description:
      'Enjoy a full-day private Chiang Mai adventure combining elephant care with bamboo rafting along Mae Wang Stream. This program is ideal for travelers who want a hands-on elephant experience and a relaxed river journey in one day.',
    descriptionTh:
      'Enjoy a full-day private Chiang Mai adventure combining elephant care with bamboo rafting along Mae Wang Stream. This program is ideal for travelers who want a hands-on elephant experience and a relaxed river journey in one day.',
    duration: 'Full day',
    location: 'Mae Wang Stream',
    groupSize: 'Private tour',
    price: 'Start from 2,000 - 3,400 THB / person',
    category: 'chiang-mai-elephant',
    tags: [
      'Chiang Mai',
      'Elephant care',
      'Bamboo rafting',
      'Mae Wang Stream',
      'No riding',
      'Private tour',
      'Full day',
    ],
    image: chiangMaiElephantTourImage,
    highlights: [
      'Chiang Mai elephant care experience',
      'Bamboo rafting on Mae Wang Stream',
      'No hook, no riding program',
      'Private full-day itinerary',
      'Pickup and return in Chiang Mai',
    ],
    highlightsTh: [
      'Chiang Mai elephant care experience',
      'Bamboo rafting on Mae Wang Stream',
      'No hook, no riding program',
      'Private full-day itinerary',
      'Pickup and return in Chiang Mai',
    ],
    included: chiangMaiElephantIncluded,
    includedTh: chiangMaiElephantIncludedTh,
    seoTitle:
      'One Day Elephant Care and Bamboo Rafting Adventure | Chiang Mai',
    seoDescription:
      'Book a private Chiang Mai elephant care and bamboo rafting tour along Mae Wang Stream. Full-day ethical elephant and soft adventure program.',
  },
  {
    slug: 'half-day-kanta-elephant-sanctuary',
    title:
      'Elephant Tour03: Half Day Elephant Care at Kanta Elephant Sanctuary',
    titleTh:
      'Elephant Tour03: Half Day Elephant Care at Kanta Elephant Sanctuary',
    excerpt:
      'A join-in half-day Chiang Mai elephant care program at Kanta Elephant Sanctuary with open-space elephant interaction.',
    excerptTh:
      'A join-in half-day Chiang Mai elephant care program at Kanta Elephant Sanctuary with open-space elephant interaction.',
    description:
      'Discover Kanta Elephant Sanctuary on a half-day join-in program designed for travelers who want to meet elephants in a natural open space. See, feel, and touch these gentle animals while supporting a no-chain, no-hook, no-riding approach.',
    descriptionTh:
      'Discover Kanta Elephant Sanctuary on a half-day join-in program designed for travelers who want to meet elephants in a natural open space. See, feel, and touch these gentle animals while supporting a no-chain, no-hook, no-riding approach.',
    duration: 'Half day',
    location: 'Kanta Elephant Sanctuary',
    groupSize: 'Join-in group tour',
    price: '1,400 THB / person',
    category: 'chiang-mai-elephant',
    tags: [
      'Chiang Mai',
      'Kanta Elephant Sanctuary',
      'Elephant care',
      'Join-in group',
      'Half day',
      'No riding',
    ],
    image: chiangMaiElephantTourImage,
    highlights: [
      'Kanta Elephant Sanctuary',
      'Half-day elephant care program',
      'Open-space elephant interaction',
      'No chain, no hook, no riding program',
      'Join-in group tour from Chiang Mai',
    ],
    highlightsTh: [
      'Kanta Elephant Sanctuary',
      'Half-day elephant care program',
      'Open-space elephant interaction',
      'No chain, no hook, no riding program',
      'Join-in group tour from Chiang Mai',
    ],
    included: chiangMaiElephantIncluded,
    includedTh: chiangMaiElephantIncludedTh,
    seoTitle:
      'Half Day Kanta Elephant Sanctuary Tour | Chiang Mai Elephant Care',
    seoDescription:
      'Book a half-day join-in elephant care program at Kanta Elephant Sanctuary in Chiang Mai. No chain, no hook, no riding.',
  },
  {
    slug: 'full-day-kanta-elephant-sanctuary',
    title:
      'Elephant Tour04: Full Day Elephant Care at Kanta Elephant Sanctuary',
    titleTh:
      'Elephant Tour04: Full Day Elephant Care at Kanta Elephant Sanctuary',
    excerpt:
      'A full-day join-in Kanta Elephant Sanctuary program with feeding, walking, observing, meal preparation, and bathing in freshwater lagoons.',
    excerptTh:
      'A full-day join-in Kanta Elephant Sanctuary program with feeding, walking, observing, meal preparation, and bathing in freshwater lagoons.',
    description:
      'Spend a full day at Kanta Elephant Sanctuary feeding, walking with, and observing elephants as they roam freely. Help prepare their meals and join them for a refreshing bath in freshwater lagoons while supporting ethical elephant conservation.',
    descriptionTh:
      'Spend a full day at Kanta Elephant Sanctuary feeding, walking with, and observing elephants as they roam freely. Help prepare their meals and join them for a refreshing bath in freshwater lagoons while supporting ethical elephant conservation.',
    duration: 'Full day',
    location: 'Kanta Elephant Sanctuary',
    groupSize: 'Join-in group tour',
    price: '2,400 THB / person',
    category: 'chiang-mai-elephant',
    tags: [
      'Chiang Mai',
      'Kanta Elephant Sanctuary',
      'Elephant care',
      'Freshwater lagoons',
      'Join-in group',
      'Full day',
      'No riding',
    ],
    image: chiangMaiElephantTourImage,
    highlights: [
      'Full-day Kanta Elephant Sanctuary program',
      'Feed, walk with, and observe elephants',
      'Help prepare elephant meals',
      'Freshwater lagoon bathing activity',
      'No chain, no hook, no riding program',
    ],
    highlightsTh: [
      'Full-day Kanta Elephant Sanctuary program',
      'Feed, walk with, and observe elephants',
      'Help prepare elephant meals',
      'Freshwater lagoon bathing activity',
      'No chain, no hook, no riding program',
    ],
    included: chiangMaiElephantIncluded,
    includedTh: chiangMaiElephantIncludedTh,
    seoTitle:
      'Full Day Kanta Elephant Sanctuary Tour | Chiang Mai Elephant Care',
    seoDescription:
      'Book a full-day Kanta Elephant Sanctuary tour in Chiang Mai with feeding, walking, meal preparation, and freshwater lagoon bathing.',
  },
  {
    slug: 'half-day-elephant-jungle-sanctuary',
    title:
      'Elephant Tour05: Half Day Elephant Care at Elephant Jungle Sanctuary',
    titleTh:
      'Elephant Tour05: Half Day Elephant Care at Elephant Jungle Sanctuary',
    excerpt:
      'A half-day join-in Elephant Jungle Sanctuary program near a Karen village with elephant education, feeding, playtime, and photos.',
    excerptTh:
      'A half-day join-in Elephant Jungle Sanctuary program near a Karen village with elephant education, feeding, playtime, and photos.',
    description:
      'Join a half-day Elephant Jungle Sanctuary program near a Karen village in the mountains of Northern Thailand. Wear traditional Karen clothing, learn about elephant anatomy, history, and behavior, then feed, play with, and photograph the elephants.',
    descriptionTh:
      'Join a half-day Elephant Jungle Sanctuary program near a Karen village in the mountains of Northern Thailand. Wear traditional Karen clothing, learn about elephant anatomy, history, and behavior, then feed, play with, and photograph the elephants.',
    duration: 'Half day',
    location: 'Elephant Jungle Sanctuary',
    groupSize: 'Join-in group tour',
    price: '1,800 THB / person',
    category: 'chiang-mai-elephant',
    tags: [
      'Chiang Mai',
      'Elephant Jungle Sanctuary',
      'Elephant care',
      'Karen village',
      'Join-in group',
      'Half day',
      'No riding',
    ],
    image: chiangMaiElephantTourImage,
    highlights: [
      'Elephant Jungle Sanctuary',
      'Traditional Karen clothing',
      'Elephant anatomy, history, and behavior lesson',
      'Feed and play with elephants',
      'No chain, no hook, no riding program',
    ],
    highlightsTh: [
      'Elephant Jungle Sanctuary',
      'Traditional Karen clothing',
      'Elephant anatomy, history, and behavior lesson',
      'Feed and play with elephants',
      'No chain, no hook, no riding program',
    ],
    included: chiangMaiElephantIncluded,
    includedTh: chiangMaiElephantIncludedTh,
    seoTitle:
      'Half Day Elephant Jungle Sanctuary Tour | Chiang Mai Elephant Care',
    seoDescription:
      'Book a half-day Elephant Jungle Sanctuary tour in Chiang Mai with Karen clothing, elephant education, feeding, playtime, and photos.',
  },
  {
    slug: 'full-day-elephant-jungle-sanctuary',
    title:
      'Elephant Tour06: Full Day Elephant Care at Elephant Jungle Sanctuary',
    titleTh:
      'Elephant Tour06: Full Day Elephant Care at Elephant Jungle Sanctuary',
    excerpt:
      'A full-day Elephant Jungle Sanctuary experience with elephant education, Thai lunch, river bathing, brushing, and a mud spa.',
    excerptTh:
      'A full-day Elephant Jungle Sanctuary experience with elephant education, Thai lunch, river bathing, brushing, and a mud spa.',
    description:
      'Spend a full day at Elephant Jungle Sanctuary learning about elephant behavior, history, and conservation. Interact with the elephants in their natural environment, enjoy a traditional Thai lunch, bathe and brush them at a nearby river, and participate in a therapeutic mud spa.',
    descriptionTh:
      'Spend a full day at Elephant Jungle Sanctuary learning about elephant behavior, history, and conservation. Interact with the elephants in their natural environment, enjoy a traditional Thai lunch, bathe and brush them at a nearby river, and participate in a therapeutic mud spa.',
    duration: 'Full day',
    location: 'Elephant Jungle Sanctuary',
    groupSize: 'Join-in group tour',
    price: '2,700 THB / person',
    category: 'chiang-mai-elephant',
    tags: [
      'Chiang Mai',
      'Elephant Jungle Sanctuary',
      'Elephant care',
      'River bathing',
      'Mud spa',
      'Join-in group',
      'Full day',
      'No riding',
    ],
    image: chiangMaiElephantTourImage,
    highlights: [
      'Full-day Elephant Jungle Sanctuary program',
      'Elephant behavior, history, and conservation lesson',
      'Traditional Thai lunch',
      'River bathing and brushing activity',
      'Therapeutic mud spa',
    ],
    highlightsTh: [
      'Full-day Elephant Jungle Sanctuary program',
      'Elephant behavior, history, and conservation lesson',
      'Traditional Thai lunch',
      'River bathing and brushing activity',
      'Therapeutic mud spa',
    ],
    included: chiangMaiElephantIncluded,
    includedTh: chiangMaiElephantIncludedTh,
    seoTitle:
      'Full Day Elephant Jungle Sanctuary Tour | Chiang Mai Elephant Care',
    seoDescription:
      'Book a full-day Elephant Jungle Sanctuary tour in Chiang Mai with elephant education, Thai lunch, river bathing, brushing, and mud spa.',
  },
  {
    slug: 'elephant-budget05',
    title: 'Budget05: Elephant Observation and Hiking Doi Inthanon',
    titleTh: 'Budget05: Elephant Observation and Hiking Doi Inthanon',
    excerpt:
      'A full-day join-in Chiang Mai tour combining elephant observation, Doi Inthanon National Park, and the Pha Dok Siew nature trail.',
    excerptTh:
      'A full-day join-in Chiang Mai tour combining elephant observation, Doi Inthanon National Park, and the Pha Dok Siew nature trail.',
    description:
      'Join a full-day Chiang Mai adventure with elephant observation, Doi Inthanon National Park, and a hike along the Pha Dok Siew nature trail. This program blends wildlife, highland scenery, and cultural richness in one accessible day.',
    descriptionTh:
      'Join a full-day Chiang Mai adventure with elephant observation, Doi Inthanon National Park, and a hike along the Pha Dok Siew nature trail. This program blends wildlife, highland scenery, and cultural richness in one accessible day.',
    duration: 'Full day',
    location: 'Doi Inthanon National Park',
    groupSize: 'Join-in group tour',
    price: '2,400 THB / person',
    category: 'chiang-mai-elephant',
    tags: [
      'Chiang Mai',
      'Elephant observation',
      'Doi Inthanon',
      'Pha Dok Siew',
      'Nature trail',
      'Join-in group',
      'Full day',
      'No riding',
    ],
    image: chiangMaiElephantTourImage,
    highlights: [
      'Elephant observation activities',
      'Doi Inthanon National Park',
      'Pha Dok Siew nature trail hike',
      'Natural beauty and local culture',
      'No chain, no hook, no riding program',
    ],
    highlightsTh: [
      'Elephant observation activities',
      'Doi Inthanon National Park',
      'Pha Dok Siew nature trail hike',
      'Natural beauty and local culture',
      'No chain, no hook, no riding program',
    ],
    included: chiangMaiElephantIncluded,
    includedTh: chiangMaiElephantIncludedTh,
    seoTitle:
      'Elephant Observation and Hiking Doi Inthanon | Chiang Mai Tour',
    seoDescription:
      'Book a Chiang Mai join-in tour with elephant observation, Doi Inthanon National Park, and Pha Dok Siew nature trail hiking.',
  },
  {
    slug: 'elephant-budget16',
    title:
      'Budget16: Sunrise at Doi Suthep Temple and Elephant Observation',
    titleTh:
      'Budget16: Sunrise at Doi Suthep Temple and Elephant Observation',
    excerpt:
      'A full-day join-in Chiang Mai tour with sunrise at Doi Suthep Temple, Wat Doi Supphanyu, and elephant observation at Joy Elephant Sanctuary.',
    excerptTh:
      'A full-day join-in Chiang Mai tour with sunrise at Doi Suthep Temple, Wat Doi Supphanyu, and elephant observation at Joy Elephant Sanctuary.',
    description:
      'Witness sunrise at Doi Suthep Temple, explore Wat Doi Supphanyu, and enjoy feeding and observing elephants at Joy Elephant Sanctuary. This join-in Chiang Mai tour combines spiritual atmosphere, cultural discovery, and a respectful wildlife experience.',
    descriptionTh:
      'Witness sunrise at Doi Suthep Temple, explore Wat Doi Supphanyu, and enjoy feeding and observing elephants at Joy Elephant Sanctuary. This join-in Chiang Mai tour combines spiritual atmosphere, cultural discovery, and a respectful wildlife experience.',
    duration: 'Full day',
    location: 'Doi Suthep Temple and Joy Elephant Sanctuary',
    groupSize: 'Join-in group tour',
    price: '2,600 THB / person',
    category: 'chiang-mai-elephant',
    tags: [
      'Chiang Mai',
      'Doi Suthep',
      'Sunrise',
      'Wat Doi Supphanyu',
      'Joy Elephant Sanctuary',
      'Elephant observation',
      'Join-in group',
      'Full day',
      'No riding',
    ],
    image: chiangMaiElephantTourImage,
    highlights: [
      'Sunrise at Doi Suthep Temple',
      'Wat Doi Supphanyu visit',
      'Joy Elephant Sanctuary',
      'Feed and observe elephants',
      'No chain, no hook, no riding program',
    ],
    highlightsTh: [
      'Sunrise at Doi Suthep Temple',
      'Wat Doi Supphanyu visit',
      'Joy Elephant Sanctuary',
      'Feed and observe elephants',
      'No chain, no hook, no riding program',
    ],
    included: chiangMaiElephantIncluded,
    includedTh: chiangMaiElephantIncludedTh,
    seoTitle:
      'Sunrise at Doi Suthep and Elephant Observation | Chiang Mai Tour',
    seoDescription:
      'Book a Chiang Mai join-in tour with sunrise at Doi Suthep Temple, Wat Doi Supphanyu, and elephant observation at Joy Elephant Sanctuary.',
  },
  {
    slug: 'zipline01',
    title: 'Zipline01: Zipline Flight of the Gibbon',
    titleTh: 'Zipline01: Zipline Flight of the Gibbon',
    excerpt:
      'A full-day Chiang Mai canopy adventure with Flight of the Gibbon, 33 stations, long rainforest zip lines, and Mae Kampong waterfall trekking.',
    excerptTh:
      'A full-day Chiang Mai canopy adventure with Flight of the Gibbon, 33 stations, long rainforest zip lines, and Mae Kampong waterfall trekking.',
    description:
      'Flight of the Gibbon was the first zipline in Chiang Mai and across Asia. This full-day rainforest adventure includes 33 stations, 6 different platforms, an 800-meter longest zipline, 5 kilometers of zip lines deep in the forest, and trekking at Mae Kampong Falls. This source program is marked unavailable.',
    descriptionTh:
      'Flight of the Gibbon was the first zipline in Chiang Mai and across Asia. This full-day rainforest adventure includes 33 stations, 6 different platforms, an 800-meter longest zipline, 5 kilometers of zip lines deep in the forest, and trekking at Mae Kampong Falls. This source program is marked unavailable.',
    duration: 'Full day',
    location: 'Mae Kampong rainforest',
    groupSize: 'Zipline adventure tour',
    price: '3,999 THB / person',
    category: 'chiang-mai-zipline',
    tags: [
      'Chiang Mai',
      'Zipline',
      'Flight of the Gibbon',
      'Mae Kampong',
      'Rainforest',
      'Canopy',
      'Unavailable',
    ],
    image: chiangMaiZiplineTourImage,
    highlights: [
      '33 stations',
      '6 different platforms',
      'Longest zipline: 800 meters',
      '5 kilometers of rainforest zip lines',
      'Mae Kampong waterfall trekking',
      'Unavailable in source listing',
    ],
    highlightsTh: [
      '33 stations',
      '6 different platforms',
      'Longest zipline: 800 meters',
      '5 kilometers of rainforest zip lines',
      'Mae Kampong waterfall trekking',
      'Unavailable in source listing',
    ],
    included: chiangMaiZiplineIncluded,
    includedTh: chiangMaiZiplineIncludedTh,
    seoTitle: 'Flight of the Gibbon Zipline Chiang Mai | Canopy Adventure',
    seoDescription:
      'Explore Flight of the Gibbon Chiang Mai zipline details with 33 stations, 800-meter longest zipline, rainforest canopy routes, and Mae Kampong Falls.',
  },
  {
    slug: 'zipline02',
    title: 'Zipline02: Zipline Jungle Flight',
    titleTh: 'Zipline02: Zipline Jungle Flight',
    excerpt:
      'A full-day Jungle Flight zipline adventure with 31 stations, a 1,000-meter longest zipline, panoramic rainforest views, and a roller coaster route.',
    excerptTh:
      'A full-day Jungle Flight zipline adventure with 31 stations, a 1,000-meter longest zipline, panoramic rainforest views, and a roller coaster route.',
    description:
      'Jungle Flight takes you into the canopy, the roof of the rainforest formed by trees reaching 80 to 150 feet tall. This full-day Chiang Mai zipline program features 31 stations, 6 different platforms, a 1,000-meter longest zipline, panoramic views of ancient rainforest, and a 1,100-meter roller coaster.',
    descriptionTh:
      'Jungle Flight takes you into the canopy, the roof of the rainforest formed by trees reaching 80 to 150 feet tall. This full-day Chiang Mai zipline program features 31 stations, 6 different platforms, a 1,000-meter longest zipline, panoramic views of ancient rainforest, and a 1,100-meter roller coaster.',
    duration: 'Full day',
    location: 'Chiang Mai rainforest canopy',
    groupSize: 'Zipline adventure tour',
    price: 'Start from 2,350 - 2,750 THB / person',
    category: 'chiang-mai-zipline',
    tags: [
      'Chiang Mai',
      'Zipline',
      'Jungle Flight',
      'Rainforest',
      'Canopy',
      'Roller coaster',
      'Full day',
    ],
    image: chiangMaiZiplineTourImage,
    highlights: [
      '31 stations',
      '6 different platforms',
      'Longest zipline: 1,000 meters',
      'Panoramic rainforest views',
      'Roller coaster: 1,100 meters',
    ],
    highlightsTh: [
      '31 stations',
      '6 different platforms',
      'Longest zipline: 1,000 meters',
      'Panoramic rainforest views',
      'Roller coaster: 1,100 meters',
    ],
    included: chiangMaiZiplineIncluded,
    includedTh: chiangMaiZiplineIncludedTh,
    seoTitle: 'Jungle Flight Zipline Chiang Mai | Canopy Adventure',
    seoDescription:
      'Book Jungle Flight zipline in Chiang Mai with 31 stations, 1,000-meter longest zipline, rainforest canopy views, and roller coaster adventure.',
  },
  {
    slug: 'zipline03',
    title: 'Zipline03: Kingkong Smile Zipline',
    titleTh: 'Zipline03: Kingkong Smile Zipline',
    excerpt:
      'A half-day or full-day Kingkong Smile Zipline adventure with 36 stations and one of Asia’s highest and longest jungle zipline experiences.',
    excerptTh:
      'A half-day or full-day Kingkong Smile Zipline adventure with 36 stations and one of Asia’s highest and longest jungle zipline experiences.',
    description:
      'Kingkong Smile Zipline offers a treetop canopy experience through mountains, jungle, and valley scenery. Choose a half-day or full-day package with 36 stations, 7 different platforms, and a 1,200-meter longest zipline promoted as one of the highest and longest jungle ziplines in Asia.',
    descriptionTh:
      'Kingkong Smile Zipline offers a treetop canopy experience through mountains, jungle, and valley scenery. Choose a half-day or full-day package with 36 stations, 7 different platforms, and a 1,200-meter longest zipline promoted as one of the highest and longest jungle ziplines in Asia.',
    duration: 'Half day or full day',
    location: 'Chiang Mai mountain jungle',
    groupSize: 'Zipline adventure tour',
    price: 'Start from 1,900 - 2,500 THB / person',
    category: 'chiang-mai-zipline',
    tags: [
      'Chiang Mai',
      'Zipline',
      'Kingkong Smile Zipline',
      'Jungle',
      'Canopy',
      'Half day',
      'Full day',
    ],
    image: chiangMaiZiplineTourImage,
    highlights: [
      '36 stations',
      '7 different platforms',
      'Longest zipline: 1,200 meters',
      'Mountain and valley scenery',
      'Half-day and full-day package options',
    ],
    highlightsTh: [
      '36 stations',
      '7 different platforms',
      'Longest zipline: 1,200 meters',
      'Mountain and valley scenery',
      'Half-day and full-day package options',
    ],
    included: chiangMaiZiplineIncluded,
    includedTh: chiangMaiZiplineIncludedTh,
    seoTitle: 'Kingkong Smile Zipline Chiang Mai | Long Jungle Zipline',
    seoDescription:
      'Book Kingkong Smile Zipline in Chiang Mai with 36 stations, 7 platforms, a 1,200-meter longest zipline, and half-day or full-day options.',
  },
  {
    slug: 'zipline04',
    title: 'Zipline04: Flying Squirrels Zipline',
    titleTh: 'Zipline04: Flying Squirrels Zipline',
    excerpt:
      'A full-day Flying Squirrels Zipline adventure with 32 stations, 8 platforms, signature bicycle and slider activities, and a 600-meter zipline.',
    excerptTh:
      'A full-day Flying Squirrels Zipline adventure with 32 stations, 8 platforms, signature bicycle and slider activities, and a 600-meter zipline.',
    description:
      'Flying Squirrels Zipline brings a playful twist to Chiang Mai canopy adventure with 32 stations, 8 different platforms, a 600-meter longest zipline, and signature activities including a bicycle and a 5-meter-high slider. This source program is marked unavailable.',
    descriptionTh:
      'Flying Squirrels Zipline brings a playful twist to Chiang Mai canopy adventure with 32 stations, 8 different platforms, a 600-meter longest zipline, and signature activities including a bicycle and a 5-meter-high slider. This source program is marked unavailable.',
    duration: 'Full day',
    location: 'Chiang Mai rainforest canopy',
    groupSize: 'Zipline adventure tour',
    price: '1,900 THB / person',
    category: 'chiang-mai-zipline',
    tags: [
      'Chiang Mai',
      'Zipline',
      'Flying Squirrels',
      'Canopy',
      'Bicycle',
      'Slider',
      'Unavailable',
    ],
    image: chiangMaiZiplineTourImage,
    highlights: [
      '32 stations',
      '8 different platforms',
      'Longest zipline: 600 meters',
      'Signature bicycle activity',
      '5-meter-high slider',
      'Unavailable in source listing',
    ],
    highlightsTh: [
      '32 stations',
      '8 different platforms',
      'Longest zipline: 600 meters',
      'Signature bicycle activity',
      '5-meter-high slider',
      'Unavailable in source listing',
    ],
    included: chiangMaiZiplineIncluded,
    includedTh: chiangMaiZiplineIncludedTh,
    seoTitle: 'Flying Squirrels Zipline Chiang Mai | Canopy Adventure',
    seoDescription:
      'Explore Flying Squirrels Zipline Chiang Mai details with 32 stations, 8 platforms, 600-meter longest zipline, bicycle, and slider activities.',
  },
  {
    slug: 'zipline05',
    title: 'Zipline05: Skyline Jungle Luge',
    titleTh: 'Zipline05: Skyline Jungle Luge',
    excerpt:
      'A full-day Skyline Jungle Luge adventure with 38 stations, a 900-meter zipline, panoramic views, jungle luge cart, and giant swing.',
    excerptTh:
      'A full-day Skyline Jungle Luge adventure with 38 stations, a 900-meter zipline, panoramic views, jungle luge cart, and giant swing.',
    description:
      'Skyline Jungle Luge is a high-energy Chiang Mai zipline adventure in the rainforest. The program features 38 stations, 6 different platforms, a 900-meter longest zipline, brilliant panoramic views, a 2,100-meter jungle luge cart, and a big giant swing.',
    descriptionTh:
      'Skyline Jungle Luge is a high-energy Chiang Mai zipline adventure in the rainforest. The program features 38 stations, 6 different platforms, a 900-meter longest zipline, brilliant panoramic views, a 2,100-meter jungle luge cart, and a big giant swing.',
    duration: 'Full day',
    location: 'Chiang Mai rainforest',
    groupSize: 'Zipline adventure tour',
    price: '2,450 THB / person',
    category: 'chiang-mai-zipline',
    tags: [
      'Chiang Mai',
      'Zipline',
      'Skyline Jungle Luge',
      'Jungle luge',
      'Giant Swing',
      'Rainforest',
      'Full day',
    ],
    image: chiangMaiZiplineTourImage,
    highlights: [
      '38 stations',
      '6 different platforms',
      'Longest zipline: 900 meters',
      'Jungle luge cart: 2,100 meters',
      'Big Giant Swing',
    ],
    highlightsTh: [
      '38 stations',
      '6 different platforms',
      'Longest zipline: 900 meters',
      'Jungle luge cart: 2,100 meters',
      'Big Giant Swing',
    ],
    included: chiangMaiZiplineIncluded,
    includedTh: chiangMaiZiplineIncludedTh,
    seoTitle: 'Skyline Jungle Luge Chiang Mai | Zipline and Luge Adventure',
    seoDescription:
      'Book Skyline Jungle Luge Chiang Mai with 38 stations, 900-meter longest zipline, panoramic rainforest views, jungle luge cart, and giant swing.',
  },
  {
    slug: 'zipline06',
    title: 'Zipline06: Pongyang Zipline and Jungle Coaster',
    titleTh: 'Zipline06: Pongyang Zipline and Jungle Coaster',
    excerpt:
      'A full-day Pongyang Zipline adventure with 34 stations, jungle coaster, quick jump, giant swing, jungle bike, slider, airbag, VR 5D, and fly line.',
    excerptTh:
      'A full-day Pongyang Zipline adventure with 34 stations, jungle coaster, quick jump, giant swing, jungle bike, slider, airbag, VR 5D, and fly line.',
    description:
      'Pongyang Zipline and Jungle Coaster combines zipline stages over green wilderness with a wide range of adventure activities. Highlights include 34 stations, jungle coaster, quick jump, giant swing, jungle bike, slider and airbag, butterfly, VR 5D, and fly line.',
    descriptionTh:
      'Pongyang Zipline and Jungle Coaster combines zipline stages over green wilderness with a wide range of adventure activities. Highlights include 34 stations, jungle coaster, quick jump, giant swing, jungle bike, slider and airbag, butterfly, VR 5D, and fly line.',
    duration: 'Full day',
    location: 'Pongyang, Chiang Mai',
    groupSize: 'Zipline adventure tour',
    price: '2,750 THB / person',
    category: 'chiang-mai-zipline',
    tags: [
      'Chiang Mai',
      'Zipline',
      'Pongyang',
      'Jungle Coaster',
      'Quick Jump',
      'Giant Swing',
      'Jungle Bike',
      'Full day',
    ],
    image: chiangMaiZiplineTourImage,
    highlights: [
      '34 stations',
      'Jungle Coaster',
      'Quick Jump and Giant Swing',
      'Jungle Bike and Fly Line',
      'Slider, Airbag, Butterfly, and VR 5D',
    ],
    highlightsTh: [
      '34 stations',
      'Jungle Coaster',
      'Quick Jump and Giant Swing',
      'Jungle Bike and Fly Line',
      'Slider, Airbag, Butterfly, and VR 5D',
    ],
    included: chiangMaiZiplineIncluded,
    includedTh: chiangMaiZiplineIncludedTh,
    seoTitle:
      'Pongyang Zipline and Jungle Coaster Chiang Mai | Adventure Park',
    seoDescription:
      'Book Pongyang Zipline and Jungle Coaster in Chiang Mai with 34 stations, jungle coaster, quick jump, giant swing, jungle bike, and more.',
  },
  {
    slug: 'zipline07',
    title: 'Zipline07: Phoenix Adventure Park',
    titleTh: 'Zipline07: Phoenix Adventure Park',
    excerpt:
      'A family-friendly Phoenix Adventure Park zipline experience with 24 to 45 platforms, triple safety, and soft adventure in nature.',
    excerptTh:
      'A family-friendly Phoenix Adventure Park zipline experience with 24 to 45 platforms, triple safety, and soft adventure in nature.',
    description:
      'Phoenix Adventure Park offers a soft adventure experience for families, kids, and older travelers in good physical health. The park features 24 to 45 platforms, lower platform heights, triple safety, and a nature-focused zipline experience near Chiang Mai.',
    descriptionTh:
      'Phoenix Adventure Park offers a soft adventure experience for families, kids, and older travelers in good physical health. The park features 24 to 45 platforms, lower platform heights, triple safety, and a nature-focused zipline experience near Chiang Mai.',
    duration: 'Full day',
    location: 'Phoenix Adventure Park, Chiang Mai',
    groupSize: 'Zipline adventure tour',
    price: 'Start from 1,500 - 1,900 THB / person',
    category: 'chiang-mai-zipline',
    tags: [
      'Chiang Mai',
      'Zipline',
      'Phoenix Adventure Park',
      'Family friendly',
      'Soft adventure',
      'Triple safety',
      'Full day',
    ],
    image: chiangMaiZiplineTourImage,
    highlights: [
      '24 to 45 platforms',
      'Family-friendly soft adventure',
      'Suitable for kids and healthy elders',
      'Lower platform heights',
      'Triple safety system',
    ],
    highlightsTh: [
      '24 to 45 platforms',
      'Family-friendly soft adventure',
      'Suitable for kids and healthy elders',
      'Lower platform heights',
      'Triple safety system',
    ],
    included: chiangMaiZiplineIncluded,
    includedTh: chiangMaiZiplineIncludedTh,
    seoTitle: 'Phoenix Adventure Park Chiang Mai | Family Zipline Adventure',
    seoDescription:
      'Book Phoenix Adventure Park Chiang Mai zipline with 24 to 45 platforms, family-friendly soft adventure, lower platform heights, and triple safety.',
  },
  {
    slug: 'adventure01',
    title: 'AD01: Sky Adventure',
    titleTh: 'AD01: Sky Adventure',
    excerpt:
      'A half-day Chiang Mai sky adventure designed to fulfil the dream of flying like a bird.',
    excerptTh:
      'A half-day Chiang Mai sky adventure designed to fulfil the dream of flying like a bird.',
    description:
      'Sky Adventure is a half-day Chiang Mai activity for travelers who want a memorable flying-style experience. The program starts and finishes in Chiang Mai and focuses on the feeling of taking to the sky above northern Thailand scenery.',
    descriptionTh:
      'Sky Adventure is a half-day Chiang Mai activity for travelers who want a memorable flying-style experience. The program starts and finishes in Chiang Mai and focuses on the feeling of taking to the sky above northern Thailand scenery.',
    duration: 'Half day',
    location: 'Chiang Mai',
    groupSize: 'Adventure activity tour',
    price: '3,000 THB / person',
    category: 'chiang-mai-adventure',
    tags: ['Chiang Mai', 'Adventure', 'Sky Adventure', 'Flying', 'Half day'],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Sky adventure experience',
      'Flying-style outdoor activity',
      'Half-day program',
      'Pickup and drop-off in Chiang Mai',
    ],
    highlightsTh: [
      'Sky adventure experience',
      'Flying-style outdoor activity',
      'Half-day program',
      'Pickup and drop-off in Chiang Mai',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Sky Adventure Chiang Mai | AD01 Adventure Tour',
    seoDescription:
      'Book AD01 Sky Adventure in Chiang Mai, a half-day flying-style outdoor activity with pickup and drop-off from Chiang Mai.',
  },
  {
    slug: 'adventure02',
    title: 'AD02: Chiang Mai ATV Adventure',
    titleTh: 'AD02: Chiang Mai ATV Adventure',
    excerpt:
      'A half-day or full-day Chiang Mai ATV adventure through mountain streams, jungle trails, and scenic peaks with expert guides.',
    excerptTh:
      'A half-day or full-day Chiang Mai ATV adventure through mountain streams, jungle trails, and scenic peaks with expert guides.',
    description:
      'Chiang Mai ATV Adventure is made for thrill seekers who want to escape the crowds and ride into nature. Travel through mountain streams, jungle moments, and peak scenery with small groups and expert guides for a wild outdoor experience.',
    descriptionTh:
      'Chiang Mai ATV Adventure is made for thrill seekers who want to escape the crowds and ride into nature. Travel through mountain streams, jungle moments, and peak scenery with small groups and expert guides for a wild outdoor experience.',
    duration: 'Half day or full day',
    location: 'Chiang Mai mountain trails',
    groupSize: 'Small-group ATV adventure',
    price: 'Start from 3,500 - 5,900 THB / person',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'ATV',
      'Jungle',
      'Mountain streams',
      'Half day',
      'Full day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Chiang Mai ATV riding',
      'Mountain streams and jungle trails',
      'Small groups',
      'Expert guides',
      'Half-day and full-day options',
    ],
    highlightsTh: [
      'Chiang Mai ATV riding',
      'Mountain streams and jungle trails',
      'Small groups',
      'Expert guides',
      'Half-day and full-day options',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Chiang Mai ATV Adventure | AD02 Outdoor Activity',
    seoDescription:
      'Book AD02 Chiang Mai ATV Adventure with mountain streams, jungle trails, small groups, expert guides, and half-day or full-day options.',
  },
  {
    slug: 'adventure03',
    title: 'AD03: Mountain Bike Adventure',
    titleTh: 'AD03: Mountain Bike Adventure',
    excerpt:
      'A full-day mountain biking adventure from Chiang Mai into nearby national parks, mountain trails, and scenic highland routes.',
    excerptTh:
      'A full-day mountain biking adventure from Chiang Mai into nearby national parks, mountain trails, and scenic highland routes.',
    description:
      'Spend a full day mountain biking in northern Thailand national parks and nearby mountains. Depart from Chiang Mai at a comfortable time, head for mountain tops and trail routes, and enjoy a guided day of outdoor riding.',
    descriptionTh:
      'Spend a full day mountain biking in northern Thailand national parks and nearby mountains. Depart from Chiang Mai at a comfortable time, head for mountain tops and trail routes, and enjoy a guided day of outdoor riding.',
    duration: 'Full day',
    location: 'Chiang Mai mountain trails',
    groupSize: 'Mountain biking adventure tour',
    price: 'Depend on your package',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'Mountain biking',
      'National park',
      'Mountain trails',
      'Full day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Full-day mountain biking',
      'Nearby Chiang Mai mountains',
      'National park scenery',
      'Guided trail riding',
      'Pickup and drop-off in Chiang Mai',
    ],
    highlightsTh: [
      'Full-day mountain biking',
      'Nearby Chiang Mai mountains',
      'National park scenery',
      'Guided trail riding',
      'Pickup and drop-off in Chiang Mai',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Mountain Bike Adventure Chiang Mai | AD03 Adventure Tour',
    seoDescription:
      'Book AD03 Mountain Bike Adventure from Chiang Mai with national park scenery, nearby mountain trails, guided riding, and full-day route options.',
  },
  {
    slug: 'adventure04',
    title: 'AD04: Chiang Mai Biking Tours',
    titleTh: 'AD04: Chiang Mai Biking Tours',
    excerpt:
      'A half-day Chiang Mai biking tour through hidden places, countryside, rice fields, and cultural routes around the Ping River area.',
    excerptTh:
      'A half-day Chiang Mai biking tour through hidden places, countryside, rice fields, and cultural routes around the Ping River area.',
    description:
      'Chiang Mai Biking Tours share hidden places of the city and countryside through recreational, cultural, and educational cycling adventures. Ride near the Ping River, mountains, rice fields, and lush countryside on a relaxed half-day program.',
    descriptionTh:
      'Chiang Mai Biking Tours share hidden places of the city and countryside through recreational, cultural, and educational cycling adventures. Ride near the Ping River, mountains, rice fields, and lush countryside on a relaxed half-day program.',
    duration: 'Half day',
    location: 'Chiang Mai countryside',
    groupSize: 'Biking adventure tour',
    price: 'Depend on your package',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'Biking',
      'Cycling',
      'Countryside',
      'Culture',
      'Half day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Chiang Mai cycling route',
      'Ping River surroundings',
      'Rice fields and countryside',
      'Hidden local places',
      'Cultural and educational ride',
    ],
    highlightsTh: [
      'Chiang Mai cycling route',
      'Ping River surroundings',
      'Rice fields and countryside',
      'Hidden local places',
      'Cultural and educational ride',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Chiang Mai Biking Tours | AD04 Cycling Adventure',
    seoDescription:
      'Book AD04 Chiang Mai Biking Tours with countryside scenery, Ping River surroundings, hidden local places, and cultural cycling routes.',
  },
  {
    slug: 'flying-paramotor',
    title: 'AD05: Chiang Mai Flying Paramotor',
    titleTh: 'AD05: Chiang Mai Flying Paramotor',
    excerpt:
      'A full-day Chiang Mai flying paramotor experience with a skilled flight instructor and scenic aerial views.',
    excerptTh:
      'A full-day Chiang Mai flying paramotor experience with a skilled flight instructor and scenic aerial views.',
    description:
      'Open up a new travel experience with Chiang Mai Flying Paramotor. Fly with a flight instructor who has more than 15 years of experience and a national team athlete background for a safe, fun, and memorable aerial adventure.',
    descriptionTh:
      'Open up a new travel experience with Chiang Mai Flying Paramotor. Fly with a flight instructor who has more than 15 years of experience and a national team athlete background for a safe, fun, and memorable aerial adventure.',
    duration: 'Full day',
    location: 'Chiang Mai',
    groupSize: 'Flying paramotor adventure',
    price: '3,500 THB / person',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'Paramotor',
      'Flying',
      'Aerial views',
      'Full day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Flying paramotor experience',
      'Experienced flight instructor',
      'More than 15 years of instructor experience',
      'Scenic Chiang Mai aerial views',
      'Pickup and drop-off in Chiang Mai',
    ],
    highlightsTh: [
      'Flying paramotor experience',
      'Experienced flight instructor',
      'More than 15 years of instructor experience',
      'Scenic Chiang Mai aerial views',
      'Pickup and drop-off in Chiang Mai',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Chiang Mai Flying Paramotor | AD05 Adventure Tour',
    seoDescription:
      'Book AD05 Chiang Mai Flying Paramotor with an experienced instructor, scenic aerial views, and pickup and drop-off from Chiang Mai.',
  },
  {
    slug: 'chiang-mai-white-water-rafting',
    title: 'AD06: Adventure White Water Rafting',
    titleTh: 'AD06: Adventure White Water Rafting',
    excerpt:
      'A full-day Chiang Mai white water rafting adventure on the Mae Taeng River with level 4 and 5 rapids.',
    excerptTh:
      'A full-day Chiang Mai white water rafting adventure on the Mae Taeng River with level 4 and 5 rapids.',
    description:
      'Adventure White Water Rafting takes you to the Mae Taeng River north of Chiang Mai. The journey starts at a narrow point of the river and runs through level 4 and 5 rapids, canyons, and adrenaline-filled white water sections.',
    descriptionTh:
      'Adventure White Water Rafting takes you to the Mae Taeng River north of Chiang Mai. The journey starts at a narrow point of the river and runs through level 4 and 5 rapids, canyons, and adrenaline-filled white water sections.',
    duration: 'Full day',
    location: 'Mae Taeng River',
    groupSize: 'White water rafting adventure',
    price: 'Depend on your package',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'White water rafting',
      'Mae Taeng River',
      'Rapids',
      'Full day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Mae Taeng River rafting',
      'Level 4 and 5 rapids',
      'River canyons',
      'Full-day adventure',
      'Pickup and drop-off in Chiang Mai',
    ],
    highlightsTh: [
      'Mae Taeng River rafting',
      'Level 4 and 5 rapids',
      'River canyons',
      'Full-day adventure',
      'Pickup and drop-off in Chiang Mai',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Adventure White Water Rafting Chiang Mai | AD06 Mae Taeng',
    seoDescription:
      'Book AD06 Adventure White Water Rafting on the Mae Taeng River near Chiang Mai with level 4 and 5 rapids and canyon scenery.',
  },
  {
    slug: 'horse',
    title: 'AD07: Horse Riding Adventure',
    titleTh: 'AD07: Horse Riding Adventure',
    excerpt:
      'A half-day Chiang Mai horse riding adventure through local landscapes for first-time and experienced riders.',
    excerptTh:
      'A half-day Chiang Mai horse riding adventure through local landscapes for first-time and experienced riders.',
    description:
      'Enjoy the beauty of the local landscape on a Chiang Mai horse riding adventure. Whether it is your first ride or you already have experience, this half-day trail riding program offers time with nature and memorable countryside scenery.',
    descriptionTh:
      'Enjoy the beauty of the local landscape on a Chiang Mai horse riding adventure. Whether it is your first ride or you already have experience, this half-day trail riding program offers time with nature and memorable countryside scenery.',
    duration: 'Half day',
    location: 'Chiang Mai countryside',
    groupSize: 'Horse riding adventure',
    price: 'Depend on your package',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'Horse riding',
      'Trail riding',
      'Countryside',
      'Half day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Horse riding trail experience',
      'Local countryside landscape',
      'Suitable for first-time and experienced riders',
      'Half-day program',
      'Pickup and drop-off in Chiang Mai',
    ],
    highlightsTh: [
      'Horse riding trail experience',
      'Local countryside landscape',
      'Suitable for first-time and experienced riders',
      'Half-day program',
      'Pickup and drop-off in Chiang Mai',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Horse Riding Adventure Chiang Mai | AD07 Trail Riding',
    seoDescription:
      'Book AD07 Horse Riding Adventure in Chiang Mai with local landscape trail riding for first-time and experienced riders.',
  },
  {
    slug: 'adventure08',
    title: 'AD08: Chiang Mai Shooting Range',
    titleTh: 'AD08: Chiang Mai Shooting Range',
    excerpt:
      'A Chiang Mai shooting range activity with expert trainers, real firearms, and safety guidance at a standard range.',
    excerptTh:
      'A Chiang Mai shooting range activity with expert trainers, real firearms, and safety guidance at a standard range.',
    description:
      'Chiang Mai Shooting Range offers a shooting course at a standard range with expert trainers. Various firearm types are available through the operator, and experienced instructors provide correct and safe methods during the activity.',
    descriptionTh:
      'Chiang Mai Shooting Range offers a shooting course at a standard range with expert trainers. Various firearm types are available through the operator, and experienced instructors provide correct and safe methods during the activity.',
    duration: 'Duration varies',
    location: 'Chiang Mai shooting range',
    groupSize: 'Shooting range activity',
    price: 'Depend on your package',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'Shooting range',
      'Trainer',
      'Safety guidance',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Standard shooting range',
      'Expert trainer support',
      'Various firearm options through the operator',
      'Safety guidance included',
      'Pickup and drop-off in Chiang Mai',
    ],
    highlightsTh: [
      'Standard shooting range',
      'Expert trainer support',
      'Various firearm options through the operator',
      'Safety guidance included',
      'Pickup and drop-off in Chiang Mai',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Chiang Mai Shooting Range | AD08 Adventure Activity',
    seoDescription:
      'Book AD08 Chiang Mai Shooting Range activity with expert trainers, safety guidance, and operator-managed firearm options.',
  },
  {
    slug: 'adventure09',
    title: 'AD09: Chiang Mai Fishing',
    titleTh: 'AD09: Chiang Mai Fishing',
    excerpt:
      'A half-day or full-day Chiang Mai fishing park activity with trainer support for learning and improving your fishing skills.',
    excerptTh:
      'A half-day or full-day Chiang Mai fishing park activity with trainer support for learning and improving your fishing skills.',
    description:
      'Chiang Mai Fishing introduces travelers to fishing in rivers, reservoirs, and artificial lake fishing parks. Learn the basics and try it yourself with trainer support that helps improve your fishing skills quickly.',
    descriptionTh:
      'Chiang Mai Fishing introduces travelers to fishing in rivers, reservoirs, and artificial lake fishing parks. Learn the basics and try it yourself with trainer support that helps improve your fishing skills quickly.',
    duration: 'Half day or full day',
    location: 'Chiang Mai Fishing Park',
    groupSize: 'Fishing activity tour',
    price: 'Depend on your package',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'Fishing',
      'Fishing Park',
      'Trainer',
      'Half day',
      'Full day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Chiang Mai Fishing Park',
      'River, reservoir, and lake fishing context',
      'Trainer support',
      'Learn and practice fishing skills',
      'Half-day and full-day options',
    ],
    highlightsTh: [
      'Chiang Mai Fishing Park',
      'River, reservoir, and lake fishing context',
      'Trainer support',
      'Learn and practice fishing skills',
      'Half-day and full-day options',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Chiang Mai Fishing | AD09 Fishing Park Activity',
    seoDescription:
      'Book AD09 Chiang Mai Fishing with trainer support, fishing park experience, and half-day or full-day package options.',
  },
  {
    slug: 'adventure10',
    title: 'AD10: Chiang Mai Kayak Adventure',
    titleTh: 'AD10: Chiang Mai Kayak Adventure',
    excerpt:
      'A full-day guided Chiang Mai kayak adventure with lessons for beginners, safety gear, and route planning around water conditions.',
    excerptTh:
      'A full-day guided Chiang Mai kayak adventure with lessons for beginners, safety gear, and route planning around water conditions.',
    description:
      'Chiang Mai Kayak Adventure welcomes all levels of kayakers and provides free lessons for beginners. Safety gear is provided, trips are fully guided, and the route can be adjusted for the best nature trip according to water conditions.',
    descriptionTh:
      'Chiang Mai Kayak Adventure welcomes all levels of kayakers and provides free lessons for beginners. Safety gear is provided, trips are fully guided, and the route can be adjusted for the best nature trip according to water conditions.',
    duration: 'Full day',
    location: 'Chiang Mai waterways',
    groupSize: 'Guided kayak adventure',
    price: 'Depend on your package',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'Kayak',
      'Guided trip',
      'Beginner lessons',
      'Full day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Guided kayaking',
      'Free beginner lessons',
      'Safety gear provided',
      'Nature route planning',
      'Water-condition-based trip selection',
    ],
    highlightsTh: [
      'Guided kayaking',
      'Free beginner lessons',
      'Safety gear provided',
      'Nature route planning',
      'Water-condition-based trip selection',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Chiang Mai Kayak Adventure | AD10 Guided Kayaking',
    seoDescription:
      'Book AD10 Chiang Mai Kayak Adventure with guided kayaking, beginner lessons, safety gear, and route planning based on water conditions.',
  },
  {
    slug: 'bamboo_rafting_in_mae_wang',
    title: 'AD11: Private Tour to Bamboo Rafting in Mae Wang',
    titleTh: 'AD11: Private Tour to Bamboo Rafting in Mae Wang',
    excerpt:
      'A private full-day bamboo rafting tour on the Mae Wang River with clear water, gentle flow, and northern Thailand river scenery.',
    excerptTh:
      'A private full-day bamboo rafting tour on the Mae Wang River with clear water, gentle flow, and northern Thailand river scenery.',
    description:
      'Bamboo Rafting in Mae Wang River is a classic northern Thailand excursion. Ride a 4-5 meter bamboo raft built for stability over river rock steps, enjoy clear cool water, and relax with a private full-day river experience from Chiang Mai.',
    descriptionTh:
      'Bamboo Rafting in Mae Wang River is a classic northern Thailand excursion. Ride a 4-5 meter bamboo raft built for stability over river rock steps, enjoy clear cool water, and relax with a private full-day river experience from Chiang Mai.',
    duration: 'Full day',
    location: 'Mae Wang River',
    groupSize: 'Private adventure tour',
    price: 'Start from 3,000 - 3,500 THB / person',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'Bamboo rafting',
      'Mae Wang River',
      'Private tour',
      'Full day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Private bamboo rafting tour',
      'Mae Wang River',
      'Clear and cool water',
      'Stable bamboo raft experience',
      'Pickup and drop-off in Chiang Mai',
    ],
    highlightsTh: [
      'Private bamboo rafting tour',
      'Mae Wang River',
      'Clear and cool water',
      'Stable bamboo raft experience',
      'Pickup and drop-off in Chiang Mai',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Bamboo Rafting in Mae Wang | AD11 Private Chiang Mai Tour',
    seoDescription:
      'Book AD11 private bamboo rafting in Mae Wang River from Chiang Mai with clear water, stable bamboo rafts, and full-day river scenery.',
  },
  {
    slug: 'tube_trek_water_park',
    title: 'AD12: Tube Trek Water Park',
    titleTh: 'AD12: Tube Trek Water Park',
    excerpt:
      'A half-day Chiang Mai water park activity for families with slides, water play, and a fun escape from hot weather.',
    excerptTh:
      'A half-day Chiang Mai water park activity for families with slides, water play, and a fun escape from hot weather.',
    description:
      'Tube Trek Water Park is a family-friendly Chiang Mai activity with many water play areas and attractions. It is designed for every member of the family to enjoy together and cool off during hot weather.',
    descriptionTh:
      'Tube Trek Water Park is a family-friendly Chiang Mai activity with many water play areas and attractions. It is designed for every member of the family to enjoy together and cool off during hot weather.',
    duration: 'Half day',
    location: 'Tube Trek Water Park, Chiang Mai',
    groupSize: 'Water park activity',
    price: '850 THB / person',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'Water park',
      'Tube Trek',
      'Family friendly',
      'Half day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Tube Trek Water Park',
      'Family-friendly water activities',
      'Many play areas',
      'Half-day program',
      'Pickup and drop-off in Chiang Mai',
    ],
    highlightsTh: [
      'Tube Trek Water Park',
      'Family-friendly water activities',
      'Many play areas',
      'Half-day program',
      'Pickup and drop-off in Chiang Mai',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Tube Trek Water Park Chiang Mai | AD12 Family Activity',
    seoDescription:
      'Book AD12 Tube Trek Water Park in Chiang Mai, a half-day family-friendly water park activity with play areas and water attractions.',
  },
  {
    slug: 'adventure13',
    title: 'AD13: Tuktuk Driving Tour',
    titleTh: 'AD13: Tuktuk Driving Tour',
    excerpt:
      'A half-day Chiang Mai Tuktuk Driving Tour where you drive a tuk tuk yourself for a memorable sightseeing experience.',
    excerptTh:
      'A half-day Chiang Mai Tuktuk Driving Tour where you drive a tuk tuk yourself for a memorable sightseeing experience.',
    description:
      'The Tuktuk Driving Tour lets you go beyond being a passenger. Drive a tuk tuk yourself and explore Chiang Mai on a half-day sightseeing experience with a playful local twist.',
    descriptionTh:
      'The Tuktuk Driving Tour lets you go beyond being a passenger. Drive a tuk tuk yourself and explore Chiang Mai on a half-day sightseeing experience with a playful local twist.',
    duration: 'Half day',
    location: 'Chiang Mai',
    groupSize: 'Tuk tuk driving activity',
    price: '5,000 THB / person',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'Tuk tuk',
      'Driving tour',
      'Sightseeing',
      'Half day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Drive a tuk tuk yourself',
      'Chiang Mai sightseeing route',
      'Unique local driving experience',
      'Half-day program',
      'Pickup and drop-off in Chiang Mai',
    ],
    highlightsTh: [
      'Drive a tuk tuk yourself',
      'Chiang Mai sightseeing route',
      'Unique local driving experience',
      'Half-day program',
      'Pickup and drop-off in Chiang Mai',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'Tuktuk Driving Tour Chiang Mai | AD13 Adventure Activity',
    seoDescription:
      'Book AD13 Tuktuk Driving Tour in Chiang Mai and drive a tuk tuk yourself on a half-day sightseeing adventure.',
  },
  {
    slug: 'adventure14',
    title: 'AD14: ATV Adventure Tour',
    titleTh: 'AD14: ATV Adventure Tour',
    excerpt:
      'A half-day or full-day Doi Saket ATV adventure ride through forests, reservoirs, hot springs, and off-road scenery.',
    excerptTh:
      'A half-day or full-day Doi Saket ATV adventure ride through forests, reservoirs, hot springs, and off-road scenery.',
    description:
      'ATV Adventure Tour combines off-road driving with the beauty of nature around Doi Saket. The 14-kilometer journey takes riders through dense forests, picturesque reservoirs, and bubbling hot springs for an exciting way to explore Chiang Mai landscapes.',
    descriptionTh:
      'ATV Adventure Tour combines off-road driving with the beauty of nature around Doi Saket. The 14-kilometer journey takes riders through dense forests, picturesque reservoirs, and bubbling hot springs for an exciting way to explore Chiang Mai landscapes.',
    duration: 'Half day or full day',
    location: 'Doi Saket, Chiang Mai',
    groupSize: 'ATV adventure tour',
    price: 'Start from 4,000 - 6,600 THB / person',
    category: 'chiang-mai-adventure',
    tags: [
      'Chiang Mai',
      'Adventure',
      'ATV',
      'Doi Saket',
      'Off-road',
      'Hot springs',
      'Half day',
      'Full day',
    ],
    image: chiangMaiAdventureTourImage,
    highlights: [
      'Doi Saket ATV route',
      '14-kilometer off-road journey',
      'Dense forests',
      'Reservoirs and hot springs',
      'Half-day and full-day options',
    ],
    highlightsTh: [
      'Doi Saket ATV route',
      '14-kilometer off-road journey',
      'Dense forests',
      'Reservoirs and hot springs',
      'Half-day and full-day options',
    ],
    included: chiangMaiAdventureIncluded,
    includedTh: chiangMaiAdventureIncludedTh,
    seoTitle: 'ATV Adventure Tour Chiang Mai | AD14 Doi Saket Ride',
    seoDescription:
      'Book AD14 ATV Adventure Tour in Doi Saket, Chiang Mai with a 14-kilometer off-road route through forests, reservoirs, and hot springs.',
  },
  {
    slug: 'restaurant01',
    title: 'RES01: Khantoke Dinner Old Chiangmai Cultural Center',
    titleTh: 'RES01: Khantoke Dinner Old Chiangmai Cultural Center',
    excerpt:
      'An evening Khantoke dinner at the Old Chiangmai Cultural Center with Northern Thai food and hill tribe dance performances.',
    excerptTh:
      'An evening Khantoke dinner at the Old Chiangmai Cultural Center with Northern Thai food and hill tribe dance performances.',
    description:
      'Experience Northern Thai dining at the Old Chiangmai Cultural Center, a long-running Chiang Mai Khantoke dinner venue known for food, cultural shows, and service. Enjoy a traditional meal with hill tribe dance performances in a unique Lanna-style setting.',
    descriptionTh:
      'Experience Northern Thai dining at the Old Chiangmai Cultural Center, a long-running Chiang Mai Khantoke dinner venue known for food, cultural shows, and service. Enjoy a traditional meal with hill tribe dance performances in a unique Lanna-style setting.',
    duration: '18:45 - 21:30',
    location: 'Old Chiangmai Cultural Center',
    groupSize: 'Khantoke dinner experience',
    price: '690 THB / person',
    category: 'chiang-mai-restaurants',
    tags: [
      'Chiang Mai',
      'Restaurant',
      'Khantoke dinner',
      'Old Chiangmai Cultural Center',
      'Northern Thai food',
      'Hill tribe dance',
      'Cultural show',
    ],
    image: chiangMaiRestaurantTourImage,
    highlights: [
      'Old Chiangmai Cultural Center',
      'Traditional Khantoke dinner',
      'Northern Thai cuisine',
      'Hill tribe dance show',
      'Evening cultural experience',
    ],
    highlightsTh: [
      'Old Chiangmai Cultural Center',
      'Traditional Khantoke dinner',
      'Northern Thai cuisine',
      'Hill tribe dance show',
      'Evening cultural experience',
    ],
    included: chiangMaiRestaurantIncluded,
    includedTh: chiangMaiRestaurantIncludedTh,
    seoTitle:
      'Khantoke Dinner Old Chiangmai Cultural Center | Chiang Mai Restaurants',
    seoDescription:
      'Book RES01 Khantoke Dinner at Old Chiangmai Cultural Center with Northern Thai food, hill tribe dance, and Lanna cultural show in Chiang Mai.',
  },
  {
    slug: 'restaurant02',
    title: 'RES02: Khantoke Dinner Khum Khantoke',
    titleTh: 'RES02: Khantoke Dinner Khum Khantoke',
    excerpt:
      'An evening Khum Khantoke dinner with authentic Northern Thai food, Lanna atmosphere, and cultural dance performances.',
    excerptTh:
      'An evening Khum Khantoke dinner with authentic Northern Thai food, Lanna atmosphere, and cultural dance performances.',
    description:
      'Dine on authentic Northern Thai food at Khum Khantoke and enjoy the atmosphere of Lanna Khantoke. The evening includes cultural performances such as candle dance, drum dance, sword dance, and hill tribe dance.',
    descriptionTh:
      'Dine on authentic Northern Thai food at Khum Khantoke and enjoy the atmosphere of Lanna Khantoke. The evening includes cultural performances such as candle dance, drum dance, sword dance, and hill tribe dance.',
    duration: '18:45 - 21:30',
    location: 'Khum Khantoke',
    groupSize: 'Khantoke dinner experience',
    price: '690 THB / person',
    category: 'chiang-mai-restaurants',
    tags: [
      'Chiang Mai',
      'Restaurant',
      'Khantoke dinner',
      'Khum Khantoke',
      'Lanna culture',
      'Northern Thai food',
      'Cultural show',
    ],
    image: chiangMaiRestaurantTourImage,
    highlights: [
      'Khum Khantoke dinner',
      'Authentic Northern Thai food',
      'Lanna Khantoke atmosphere',
      'Candle, drum, and sword dances',
      'Hill tribe dance performance',
    ],
    highlightsTh: [
      'Khum Khantoke dinner',
      'Authentic Northern Thai food',
      'Lanna Khantoke atmosphere',
      'Candle, drum, and sword dances',
      'Hill tribe dance performance',
    ],
    included: chiangMaiRestaurantIncluded,
    includedTh: chiangMaiRestaurantIncludedTh,
    seoTitle: 'Khum Khantoke Dinner Chiang Mai | RES02 Restaurant Experience',
    seoDescription:
      'Book RES02 Khum Khantoke Dinner in Chiang Mai with Northern Thai food, Lanna atmosphere, candle dance, drum dance, sword dance, and hill tribe show.',
  },
  {
    slug: 'restaurant03',
    title: 'RES03: River Cruise (Lunch Time)',
    titleTh: 'RES03: River Cruise (Lunch Time)',
    excerpt:
      'A lunchtime Ping River cruise in Chiang Mai with river scenery, teak houses, rural greenery, and relaxed sightseeing.',
    excerptTh:
      'A lunchtime Ping River cruise in Chiang Mai with river scenery, teak houses, rural greenery, and relaxed sightseeing.',
    description:
      'Leave the city behind and relax on the cool waters of the Ping River during a lunchtime cruise. Enjoy changing river scenes, teak houses, rural greenery, and local life along the water.',
    descriptionTh:
      'Leave the city behind and relax on the cool waters of the Ping River during a lunchtime cruise. Enjoy changing river scenes, teak houses, rural greenery, and local life along the water.',
    duration: '11:30 - 13:30',
    location: 'Ping River, Chiang Mai',
    groupSize: 'Lunch river cruise',
    price: '500 THB / person',
    category: 'chiang-mai-restaurants',
    tags: [
      'Chiang Mai',
      'Restaurant',
      'River cruise',
      'Lunch',
      'Ping River',
      'Teak houses',
      'Scenic dining',
    ],
    image: chiangMaiRestaurantTourImage,
    highlights: [
      'Lunch cruise on the Ping River',
      'Relaxed river sightseeing',
      'Teak houses and rural greenery',
      'Local life along the river',
      'Midday dining experience',
    ],
    highlightsTh: [
      'Lunch cruise on the Ping River',
      'Relaxed river sightseeing',
      'Teak houses and rural greenery',
      'Local life along the river',
      'Midday dining experience',
    ],
    included: chiangMaiRestaurantIncluded,
    includedTh: chiangMaiRestaurantIncludedTh,
    seoTitle: 'Chiang Mai Lunch River Cruise | RES03 Ping River Dining',
    seoDescription:
      'Book RES03 Chiang Mai lunchtime Ping River cruise with scenic river views, teak houses, rural greenery, and relaxed dining.',
  },
  {
    slug: 'restaurant04',
    title: 'RES04: Dinner River Cruise',
    titleTh: 'RES04: Dinner River Cruise',
    excerpt:
      'An evening Maeping dinner cruise in Chiang Mai with Thai dinner served aboard a special 30-seat river craft.',
    excerptTh:
      'An evening Maeping dinner cruise in Chiang Mai with Thai dinner served aboard a special 30-seat river craft.',
    description:
      'The Maeping Dinner Cruise leaves from the restaurant jetty for an evening on the Ping River. A Thai dinner is served aboard a special 30-seat craft, creating a relaxed scenic dining experience in Chiang Mai.',
    descriptionTh:
      'The Maeping Dinner Cruise leaves from the restaurant jetty for an evening on the Ping River. A Thai dinner is served aboard a special 30-seat craft, creating a relaxed scenic dining experience in Chiang Mai.',
    duration: '19:30 - 21:00',
    location: 'Ping River, Chiang Mai',
    groupSize: 'Dinner river cruise',
    price: '600 THB / person',
    category: 'chiang-mai-restaurants',
    tags: [
      'Chiang Mai',
      'Restaurant',
      'Dinner cruise',
      'Maeping Dinner Cruise',
      'Ping River',
      'Thai dinner',
      'Scenic dining',
    ],
    image: chiangMaiRestaurantTourImage,
    highlights: [
      'Maeping Dinner Cruise',
      'Thai dinner aboard the cruise',
      'Special 30-seat craft',
      'Evening Ping River atmosphere',
      'Scenic Chiang Mai dining',
    ],
    highlightsTh: [
      'Maeping Dinner Cruise',
      'Thai dinner aboard the cruise',
      'Special 30-seat craft',
      'Evening Ping River atmosphere',
      'Scenic Chiang Mai dining',
    ],
    included: chiangMaiRestaurantIncluded,
    includedTh: chiangMaiRestaurantIncludedTh,
    seoTitle: 'Chiang Mai Dinner River Cruise | RES04 Maeping Cruise',
    seoDescription:
      'Book RES04 Chiang Mai Dinner River Cruise with Thai dinner aboard a Maeping cruise craft on the Ping River.',
  },
  {
    slug: 'restaurant05',
    title: 'RES05: River Cruise Wiang Kum Kam',
    titleTh: 'RES05: River Cruise Wiang Kum Kam',
    excerpt:
      'A half-day Chiang Mai river cruise to the forgotten royal city of Wiang Kum Kam with hotel pickup and a boat landing start near downtown.',
    excerptTh:
      'A half-day Chiang Mai river cruise to the forgotten royal city of Wiang Kum Kam with hotel pickup and a boat landing start near downtown.',
    description:
      'River Cruise Wiang Kum Kam takes you to the forgotten royal city of Wiang Kum Kam. Start with pickup from your hotel and transfer to the Kitamon Restaurant boat landing, just a few minutes from downtown Chiang Mai.',
    descriptionTh:
      'River Cruise Wiang Kum Kam takes you to the forgotten royal city of Wiang Kum Kam. Start with pickup from your hotel and transfer to the Kitamon Restaurant boat landing, just a few minutes from downtown Chiang Mai.',
    duration: 'Half day',
    location: 'Wiang Kum Kam and Ping River',
    groupSize: 'River cruise experience',
    price: '650 THB / person',
    category: 'chiang-mai-restaurants',
    tags: [
      'Chiang Mai',
      'Restaurant',
      'River cruise',
      'Wiang Kum Kam',
      'Ping River',
      'Half day',
      'Cultural dining',
    ],
    image: chiangMaiRestaurantTourImage,
    highlights: [
      'River cruise to Wiang Kum Kam',
      'Forgotten royal city route',
      'Kitamon Restaurant boat landing',
      'Hotel pickup coordination',
      'Half-day Chiang Mai cruise experience',
    ],
    highlightsTh: [
      'River cruise to Wiang Kum Kam',
      'Forgotten royal city route',
      'Kitamon Restaurant boat landing',
      'Hotel pickup coordination',
      'Half-day Chiang Mai cruise experience',
    ],
    included: chiangMaiRestaurantIncluded,
    includedTh: chiangMaiRestaurantIncludedTh,
    seoTitle: 'River Cruise Wiang Kum Kam Chiang Mai | RES05 Ping River',
    seoDescription:
      'Book RES05 River Cruise Wiang Kum Kam from Chiang Mai with hotel pickup, Kitamon boat landing, and a half-day Ping River cultural cruise.',
  },
  {
    slug: 'cookery01',
    title: 'Cookery01: Baanthai Cookery School',
    titleTh: 'Cookery01: Baanthai Cookery School',
    excerpt:
      'A half-day, full-day, or evening Thai cooking class at Baanthai Cookery School in Chiang Mai with small classes and a recipe book.',
    excerptTh:
      'A half-day, full-day, or evening Thai cooking class at Baanthai Cookery School in Chiang Mai with small classes and a recipe book.',
    description:
      'Baanthai Cookery School is a Chiang Mai town cooking school for travelers who love Thai food and want to learn practical recipes. Choose full-day, half-day, or evening classes, cook 4 to 6 dishes depending on the program, and learn in a class size of up to 9 people. Vegetarians are welcome and a recipe book is included.',
    descriptionTh:
      'Baanthai Cookery School is a Chiang Mai town cooking school for travelers who love Thai food and want to learn practical recipes. Choose full-day, half-day, or evening classes, cook 4 to 6 dishes depending on the program, and learn in a class size of up to 9 people. Vegetarians are welcome and a recipe book is included.',
    duration: 'Half day, full day, or evening',
    location: 'Baanthai Cookery School, Chiang Mai',
    groupSize: 'Maximum 9 people',
    price: 'Half day 750 THB / full day 900 THB',
    category: 'chiang-mai-cookery',
    tags: [
      'Chiang Mai',
      'Cookery',
      'Thai cooking class',
      'Baanthai Cookery School',
      'Vegetarian friendly',
      'Recipe book',
      'Half day',
      'Full day',
    ],
    image: chiangMaiCookeryTourImage,
    highlights: [
      'Town cooking school',
      'Full-day class: 6 dishes',
      'Half-day class: 4 dishes',
      'Evening class: 5 dishes',
      'Maximum class size of 9 people',
      'Vegetarians welcome and recipe book included',
    ],
    highlightsTh: [
      'Town cooking school',
      'Full-day class: 6 dishes',
      'Half-day class: 4 dishes',
      'Evening class: 5 dishes',
      'Maximum class size of 9 people',
      'Vegetarians welcome and recipe book included',
    ],
    included: chiangMaiCookeryIncluded,
    includedTh: chiangMaiCookeryIncludedTh,
    seoTitle: 'Baanthai Cookery School Chiang Mai | Cookery01 Thai Cooking',
    seoDescription:
      'Book Cookery01 Baanthai Cookery School in Chiang Mai with half-day, full-day, or evening Thai cooking classes, small groups, and recipe book.',
  },
  {
    slug: 'cookery02',
    title: 'Cookery02: Asia Scenic Cooking',
    titleTh: 'Cookery02: Asia Scenic Cooking',
    excerpt:
      'A full-day Asia Scenic Thai cooking class in Chiang Mai town or on the farm with 6 dishes, small classes, and a recipe book.',
    excerptTh:
      'A full-day Asia Scenic Thai cooking class in Chiang Mai town or on the farm with 6 dishes, small classes, and a recipe book.',
    description:
      'Asia Scenic Thai Cooking is presented as more than a school, sharing Thai cooking and culture like an extension of home. Choose a full-day town class or farm class, cook 6 dishes, learn in a class size of up to 12 people, and receive a recipe book. Vegetarians are welcome.',
    descriptionTh:
      'Asia Scenic Thai Cooking is presented as more than a school, sharing Thai cooking and culture like an extension of home. Choose a full-day town class or farm class, cook 6 dishes, learn in a class size of up to 12 people, and receive a recipe book. Vegetarians are welcome.',
    duration: 'Full day',
    location: 'Asia Scenic Cooking, Chiang Mai',
    groupSize: 'Maximum 12 people',
    price: 'Start from 950 - 1,150 THB / person',
    category: 'chiang-mai-cookery',
    tags: [
      'Chiang Mai',
      'Cookery',
      'Thai cooking class',
      'Asia Scenic Cooking',
      'Farm cooking',
      'Vegetarian friendly',
      'Recipe book',
      'Full day',
    ],
    image: chiangMaiCookeryTourImage,
    highlights: [
      'Town full-day class: 6 dishes',
      'Farm full-day class: 6 dishes',
      'Class size up to 12 people',
      'Vegetarians welcome',
      'Recipe book included',
      'Thai cooking and culture focus',
    ],
    highlightsTh: [
      'Town full-day class: 6 dishes',
      'Farm full-day class: 6 dishes',
      'Class size up to 12 people',
      'Vegetarians welcome',
      'Recipe book included',
      'Thai cooking and culture focus',
    ],
    included: chiangMaiCookeryIncluded,
    includedTh: chiangMaiCookeryIncludedTh,
    seoTitle: 'Asia Scenic Cooking Chiang Mai | Cookery02 Thai Cooking Class',
    seoDescription:
      'Book Cookery02 Asia Scenic Cooking in Chiang Mai with town or farm full-day Thai cooking classes, 6 dishes, vegetarian options, and recipe book.',
  },
  {
    slug: 'cookery03',
    title: 'Cookery03: The Rice Barn Thai Cooking Farm',
    titleTh: 'Cookery03: The Rice Barn Thai Cooking Farm',
    excerpt:
      'A half-day or full-day Thai cooking farm class at The Rice Barn with fresh herbs, personal cooking stations, and a garden setting.',
    excerptTh:
      'A half-day or full-day Thai cooking farm class at The Rice Barn with fresh herbs, personal cooking stations, and a garden setting.',
    description:
      'The Rice Barn Thai Cooking Farm teaches real Thai flavors in a relaxing garden setting. Pick fresh herbs, cook at your own station, and choose from a half-day farm class with 5 dishes or a full-day farm class with 6 dishes.',
    descriptionTh:
      'The Rice Barn Thai Cooking Farm teaches real Thai flavors in a relaxing garden setting. Pick fresh herbs, cook at your own station, and choose from a half-day farm class with 5 dishes or a full-day farm class with 6 dishes.',
    duration: 'Half day or full day',
    location: 'The Rice Barn Thai Cooking Farm, Chiang Mai',
    groupSize: 'Thai cooking farm class',
    price: 'Start from 850 - 1,150 THB / person',
    category: 'chiang-mai-cookery',
    tags: [
      'Chiang Mai',
      'Cookery',
      'Thai cooking class',
      'The Rice Barn',
      'Cooking farm',
      'Fresh herbs',
      'Garden setting',
      'Half day',
      'Full day',
    ],
    image: chiangMaiCookeryTourImage,
    highlights: [
      'Thai cooking farm setting',
      'Pick fresh herbs',
      'Cook at your own station',
      'Half-day farm class: 5 dishes',
      'Full-day farm class: 6 dishes',
      'Relaxing garden atmosphere',
    ],
    highlightsTh: [
      'Thai cooking farm setting',
      'Pick fresh herbs',
      'Cook at your own station',
      'Half-day farm class: 5 dishes',
      'Full-day farm class: 6 dishes',
      'Relaxing garden atmosphere',
    ],
    included: chiangMaiCookeryIncluded,
    includedTh: chiangMaiCookeryIncludedTh,
    seoTitle:
      'The Rice Barn Thai Cooking Farm Chiang Mai | Cookery03 Class',
    seoDescription:
      'Book Cookery03 The Rice Barn Thai Cooking Farm in Chiang Mai with fresh herbs, personal cooking stations, half-day and full-day farm classes.',
  },
  {
    slug: 'golf01',
    title: 'Golf01: Alpine Golf Resort Chiangmai',
    titleTh: 'Golf01: Alpine Golf Resort Chiangmai',
    excerpt:
      'A half-day or full-day golf experience at Alpine Golf Resort Chiangmai, one of the best golf resorts in Chiang Mai.',
    excerptTh:
      'A half-day or full-day golf experience at Alpine Golf Resort Chiangmai, one of the best golf resorts in Chiang Mai.',
    description:
      'Alpine Golf Resort Chiangmai is one of the best golf resorts in Chiang Mai, Thailand. The course offers a memorable golfing experience with a laid-back resort atmosphere and full facilities ready for visiting golfers.',
    descriptionTh:
      'Alpine Golf Resort Chiangmai is one of the best golf resorts in Chiang Mai, Thailand. The course offers a memorable golfing experience with a laid-back resort atmosphere and full facilities ready for visiting golfers.',
    duration: 'Half day or full day',
    location: 'Alpine Golf Resort Chiangmai',
    groupSize: 'Private golf arrangement',
    price: 'Depend on season',
    category: 'chiang-mai-golf',
    tags: [
      'Chiang Mai',
      'Golf',
      'Alpine Golf Resort',
      'Golf course',
      'Golf resort',
      'Half day',
      'Full day',
    ],
    image: chiangMaiGolfTourImage,
    highlights: [
      'Alpine Golf Resort Chiangmai',
      'One of Chiang Mai best golf resorts',
      'Relaxed resort atmosphere',
      'Full golf facilities',
      'Seasonal rate arrangement',
    ],
    highlightsTh: [
      'Alpine Golf Resort Chiangmai',
      'One of Chiang Mai best golf resorts',
      'Relaxed resort atmosphere',
      'Full golf facilities',
      'Seasonal rate arrangement',
    ],
    included: chiangMaiGolfIncluded,
    includedTh: chiangMaiGolfIncludedTh,
    seoTitle: 'Alpine Golf Resort Chiangmai | Golf01 Chiang Mai Golf',
    seoDescription:
      'Book Golf01 Alpine Golf Resort Chiangmai with tee time coordination, transfers, and seasonal golf rate planning in Chiang Mai.',
  },
  {
    slug: 'golf02',
    title: 'Golf02: Chiangmai Highlands Golf and Spa Resort',
    titleTh: 'Golf02: Chiangmai Highlands Golf and Spa Resort',
    excerpt:
      'A half-day or full-day Chiangmai Highlands Golf and Spa Resort experience with a challenging course, comfortable climate, and excellent facilities.',
    excerptTh:
      'A half-day or full-day Chiangmai Highlands Golf and Spa Resort experience with a challenging course, comfortable climate, and excellent facilities.',
    description:
      'Chiangmai Highlands Golf and Spa Resort offers a challenging course in the comfortable climate of Northern Thailand. The clubhouse and locker room facilities are excellent, with Thai and Western cuisine and a well-equipped pro shop staffed by PGA-trained and qualified personnel.',
    descriptionTh:
      'Chiangmai Highlands Golf and Spa Resort offers a challenging course in the comfortable climate of Northern Thailand. The clubhouse and locker room facilities are excellent, with Thai and Western cuisine and a well-equipped pro shop staffed by PGA-trained and qualified personnel.',
    duration: 'Half day or full day',
    location: 'Chiangmai Highlands Golf and Spa Resort',
    groupSize: 'Private golf arrangement',
    price: 'Depend on season',
    category: 'chiang-mai-golf',
    tags: [
      'Chiang Mai',
      'Golf',
      'Chiangmai Highlands',
      'Golf and Spa Resort',
      'Pro shop',
      'Half day',
      'Full day',
    ],
    image: chiangMaiGolfTourImage,
    highlights: [
      'Chiangmai Highlands Golf and Spa Resort',
      'Challenging Northern Thailand course',
      'Excellent clubhouse and locker rooms',
      'Thai and Western cuisine',
      'PGA-trained pro shop staff',
    ],
    highlightsTh: [
      'Chiangmai Highlands Golf and Spa Resort',
      'Challenging Northern Thailand course',
      'Excellent clubhouse and locker rooms',
      'Thai and Western cuisine',
      'PGA-trained pro shop staff',
    ],
    included: chiangMaiGolfIncluded,
    includedTh: chiangMaiGolfIncludedTh,
    seoTitle:
      'Chiangmai Highlands Golf and Spa Resort | Golf02 Chiang Mai Golf',
    seoDescription:
      'Book Golf02 Chiangmai Highlands Golf and Spa Resort with tee time coordination, transfers, pro shop support, and seasonal golf rate planning.',
  },
  {
    slug: 'golf03',
    title: 'Golf03: Summit Green Valley Chiangmai Country Club',
    titleTh: 'Golf03: Summit Green Valley Chiangmai Country Club',
    excerpt:
      'A half-day or full-day round at Summit Green Valley Chiangmai Country Club, a championship-caliber 18-hole golf course.',
    excerptTh:
      'A half-day or full-day round at Summit Green Valley Chiangmai Country Club, a championship-caliber 18-hole golf course.',
    description:
      'Summit Green Valley Chiangmai Country Club is a championship-caliber 18-hole golf course that is beautifully landscaped and well maintained. It features well-placed sand bunkers and plenty of water that can come into play on nearly every hole.',
    descriptionTh:
      'Summit Green Valley Chiangmai Country Club is a championship-caliber 18-hole golf course that is beautifully landscaped and well maintained. It features well-placed sand bunkers and plenty of water that can come into play on nearly every hole.',
    duration: 'Half day or full day',
    location: 'Summit Green Valley Chiangmai Country Club',
    groupSize: 'Private golf arrangement',
    price: 'Depend on season',
    category: 'chiang-mai-golf',
    tags: [
      'Chiang Mai',
      'Golf',
      'Summit Green Valley',
      'Country Club',
      '18 holes',
      'Championship course',
      'Half day',
      'Full day',
    ],
    image: chiangMaiGolfTourImage,
    highlights: [
      'Summit Green Valley Chiangmai Country Club',
      'Championship-caliber 18-hole course',
      'Beautiful landscaping',
      'Sand bunkers and water hazards',
      'Seasonal rate arrangement',
    ],
    highlightsTh: [
      'Summit Green Valley Chiangmai Country Club',
      'Championship-caliber 18-hole course',
      'Beautiful landscaping',
      'Sand bunkers and water hazards',
      'Seasonal rate arrangement',
    ],
    included: chiangMaiGolfIncluded,
    includedTh: chiangMaiGolfIncludedTh,
    seoTitle:
      'Summit Green Valley Chiangmai Country Club | Golf03 Chiang Mai',
    seoDescription:
      'Book Golf03 Summit Green Valley Chiangmai Country Club, an 18-hole championship golf course with bunkers, water hazards, and seasonal rates.',
  },
  {
    slug: 'golf04',
    title: 'Golf04: Mae Jo Golf Resort and Spa',
    titleTh: 'Golf04: Mae Jo Golf Resort and Spa',
    excerpt:
      'A half-day or full-day golf experience at Mae Jo Golf Resort and Spa, located around 20 minutes from Chiang Mai city.',
    excerptTh:
      'A half-day or full-day golf experience at Mae Jo Golf Resort and Spa, located around 20 minutes from Chiang Mai city.',
    description:
      'Mae Jo Golf Resort and Spa is located about 20 minutes from the heart of Chiang Mai city and is designed for an enjoyable golf vacation. Escape the city and enjoy a memorable resort-style golf experience.',
    descriptionTh:
      'Mae Jo Golf Resort and Spa is located about 20 minutes from the heart of Chiang Mai city and is designed for an enjoyable golf vacation. Escape the city and enjoy a memorable resort-style golf experience.',
    duration: 'Half day or full day',
    location: 'Mae Jo Golf Resort and Spa',
    groupSize: 'Private golf arrangement',
    price: 'Depend on season',
    category: 'chiang-mai-golf',
    tags: [
      'Chiang Mai',
      'Golf',
      'Mae Jo Golf Resort',
      'Golf resort',
      'Spa',
      'Half day',
      'Full day',
    ],
    image: chiangMaiGolfTourImage,
    highlights: [
      'Mae Jo Golf Resort and Spa',
      'About 20 minutes from Chiang Mai city',
      'Resort-style golf vacation',
      'Relaxing escape from the city',
      'Seasonal rate arrangement',
    ],
    highlightsTh: [
      'Mae Jo Golf Resort and Spa',
      'About 20 minutes from Chiang Mai city',
      'Resort-style golf vacation',
      'Relaxing escape from the city',
      'Seasonal rate arrangement',
    ],
    included: chiangMaiGolfIncluded,
    includedTh: chiangMaiGolfIncludedTh,
    seoTitle: 'Mae Jo Golf Resort and Spa | Golf04 Chiang Mai Golf',
    seoDescription:
      'Book Golf04 Mae Jo Golf Resort and Spa near Chiang Mai with tee time coordination, transfers, and seasonal golf rate planning.',
  },
  {
    slug: 'golf05',
    title: 'Golf05: Chiang Mai Inthanon Golf and Natural Resort',
    titleTh: 'Golf05: Chiang Mai Inthanon Golf and Natural Resort',
    excerpt:
      'A half-day or full-day golf experience at Chiang Mai Inthanon Golf and Natural Resort with panoramic Doi Inthanon scenery.',
    excerptTh:
      'A half-day or full-day golf experience at Chiang Mai Inthanon Golf and Natural Resort with panoramic Doi Inthanon scenery.',
    description:
      'Chiang Mai Inthanon Golf and Natural Resort is a scenic course with panoramic vistas of Doi Inthanon, Thailand highest mountain. The course is in good condition and offers a peaceful setting worth the trip.',
    descriptionTh:
      'Chiang Mai Inthanon Golf and Natural Resort is a scenic course with panoramic vistas of Doi Inthanon, Thailand highest mountain. The course is in good condition and offers a peaceful setting worth the trip.',
    duration: 'Half day or full day',
    location: 'Chiang Mai Inthanon Golf and Natural Resort',
    groupSize: 'Private golf arrangement',
    price: 'Depend on season',
    category: 'chiang-mai-golf',
    tags: [
      'Chiang Mai',
      'Golf',
      'Inthanon Golf',
      'Doi Inthanon',
      'Natural Resort',
      'Scenic course',
      'Half day',
      'Full day',
    ],
    image: chiangMaiGolfTourImage,
    highlights: [
      'Chiang Mai Inthanon Golf and Natural Resort',
      'Panoramic Doi Inthanon views',
      'Peaceful natural setting',
      'Good course condition',
      'Seasonal rate arrangement',
    ],
    highlightsTh: [
      'Chiang Mai Inthanon Golf and Natural Resort',
      'Panoramic Doi Inthanon views',
      'Peaceful natural setting',
      'Good course condition',
      'Seasonal rate arrangement',
    ],
    included: chiangMaiGolfIncluded,
    includedTh: chiangMaiGolfIncludedTh,
    seoTitle:
      'Chiang Mai Inthanon Golf and Natural Resort | Golf05 Chiang Mai',
    seoDescription:
      'Book Golf05 Chiang Mai Inthanon Golf and Natural Resort with Doi Inthanon views, tee time coordination, transfers, and seasonal rates.',
  },
  {
    slug: 'golf06',
    title: 'Golf06: Royal Chiang Mai Golf Resort',
    titleTh: 'Golf06: Royal Chiang Mai Golf Resort',
    excerpt:
      'A half-day or full-day golf experience at Royal Chiang Mai Golf Resort, a peaceful retreat with family-friendly recreational facilities.',
    excerptTh:
      'A half-day or full-day golf experience at Royal Chiang Mai Golf Resort, a peaceful retreat with family-friendly recreational facilities.',
    description:
      'Royal Chiang Mai Golf Resort reflects traditional northern Thailand character and family values. It is a peaceful retreat for the whole family, with recreational facilities beyond golf.',
    descriptionTh:
      'Royal Chiang Mai Golf Resort reflects traditional northern Thailand character and family values. It is a peaceful retreat for the whole family, with recreational facilities beyond golf.',
    duration: 'Half day or full day',
    location: 'Royal Chiang Mai Golf Resort',
    groupSize: 'Private golf arrangement',
    price: 'Depend on season',
    category: 'chiang-mai-golf',
    tags: [
      'Chiang Mai',
      'Golf',
      'Royal Chiang Mai Golf Resort',
      'Family friendly',
      'Golf resort',
      'Half day',
      'Full day',
    ],
    image: chiangMaiGolfTourImage,
    highlights: [
      'Royal Chiang Mai Golf Resort',
      'Peaceful family retreat',
      'Northern Thailand atmosphere',
      'Recreational resort facilities',
      'Seasonal rate arrangement',
    ],
    highlightsTh: [
      'Royal Chiang Mai Golf Resort',
      'Peaceful family retreat',
      'Northern Thailand atmosphere',
      'Recreational resort facilities',
      'Seasonal rate arrangement',
    ],
    included: chiangMaiGolfIncluded,
    includedTh: chiangMaiGolfIncludedTh,
    seoTitle: 'Royal Chiang Mai Golf Resort | Golf06 Chiang Mai Golf',
    seoDescription:
      'Book Golf06 Royal Chiang Mai Golf Resort with tee time coordination, transfers, recreational resort facilities, and seasonal rate planning.',
  },
  {
    slug: 'golf07',
    title: 'Golf07: Gassan Khuntan Golf and Resort',
    titleTh: 'Golf07: Gassan Khuntan Golf and Resort',
    excerpt:
      'A half-day or full-day round at Gassan Khuntan Golf and Resort, an 18-hole par 72 course with Doi Khuntan mountain views.',
    excerptTh:
      'A half-day or full-day round at Gassan Khuntan Golf and Resort, an 18-hole par 72 course with Doi Khuntan mountain views.',
    description:
      'Gassan Khuntan Golf and Resort offers a challenging 18-hole par 72 course with peaceful mountain views surrounded by Doi Khuntan National Park. The resort includes accommodation, clubhouse, pro shop, banquet rooms, swimming pool, Thai massage, fitness, and an international restaurant.',
    descriptionTh:
      'Gassan Khuntan Golf and Resort offers a challenging 18-hole par 72 course with peaceful mountain views surrounded by Doi Khuntan National Park. The resort includes accommodation, clubhouse, pro shop, banquet rooms, swimming pool, Thai massage, fitness, and an international restaurant.',
    duration: 'Half day or full day',
    location: 'Gassan Khuntan Golf and Resort',
    groupSize: 'Private golf arrangement',
    price: 'Depend on season',
    category: 'chiang-mai-golf',
    tags: [
      'Chiang Mai',
      'Golf',
      'Gassan Khuntan',
      'Doi Khuntan National Park',
      '18 holes',
      'Par 72',
      'Mountain views',
      'Half day',
      'Full day',
    ],
    image: chiangMaiGolfTourImage,
    highlights: [
      'Gassan Khuntan Golf and Resort',
      '18-hole par 72 course',
      'Doi Khuntan National Park surroundings',
      'Mountain views',
      'Full resort facilities',
    ],
    highlightsTh: [
      'Gassan Khuntan Golf and Resort',
      '18-hole par 72 course',
      'Doi Khuntan National Park surroundings',
      'Mountain views',
      'Full resort facilities',
    ],
    included: chiangMaiGolfIncluded,
    includedTh: chiangMaiGolfIncludedTh,
    seoTitle: 'Gassan Khuntan Golf and Resort | Golf07 Chiang Mai Golf',
    seoDescription:
      'Book Golf07 Gassan Khuntan Golf and Resort, an 18-hole par 72 Chiang Mai course with Doi Khuntan mountain views and resort facilities.',
  },
  {
    slug: 'golf08',
    title: 'Golf08: Gassan Legacy Golf and Resort',
    titleTh: 'Golf08: Gassan Legacy Golf and Resort',
    excerpt:
      'A half-day or full-day round at Gassan Legacy Golf and Resort, an 18-hole par 72 lake course southeast of Chiang Mai.',
    excerptTh:
      'A half-day or full-day round at Gassan Legacy Golf and Resort, an 18-hole par 72 lake course southeast of Chiang Mai.',
    description:
      'Gassan Legacy Golf and Resort is a lake course set amid historical Gassan Lake, paddy fields, and mountains, where water and dense forest come into play. The championship course has 18 holes, par 72, measures 7,089 yards, and is located southeast of Chiang Mai.',
    descriptionTh:
      'Gassan Legacy Golf and Resort is a lake course set amid historical Gassan Lake, paddy fields, and mountains, where water and dense forest come into play. The championship course has 18 holes, par 72, measures 7,089 yards, and is located southeast of Chiang Mai.',
    duration: 'Half day or full day',
    location: 'Gassan Legacy Golf and Resort',
    groupSize: 'Private golf arrangement',
    price: 'Depend on season',
    category: 'chiang-mai-golf',
    tags: [
      'Chiang Mai',
      'Golf',
      'Gassan Legacy',
      'Lake course',
      '18 holes',
      'Par 72',
      'Gassan Lake',
      'Half day',
      'Full day',
    ],
    image: chiangMaiGolfTourImage,
    highlights: [
      'Gassan Legacy Golf and Resort',
      'Lake course with paddy fields and mountains',
      '18-hole par 72 championship course',
      '7,089-yard course',
      'Water and forest hazards',
    ],
    highlightsTh: [
      'Gassan Legacy Golf and Resort',
      'Lake course with paddy fields and mountains',
      '18-hole par 72 championship course',
      '7,089-yard course',
      'Water and forest hazards',
    ],
    included: chiangMaiGolfIncluded,
    includedTh: chiangMaiGolfIncludedTh,
    seoTitle: 'Gassan Legacy Golf and Resort | Golf08 Chiang Mai Golf',
    seoDescription:
      'Book Golf08 Gassan Legacy Golf and Resort, an 18-hole par 72 lake course near Chiang Mai with Gassan Lake, paddy fields, and mountain scenery.',
  },
  {
    slug: 'golf09',
    title: 'Golf09: Gassan Panorama Golf Club',
    titleTh: 'Golf09: Gassan Panorama Golf Club',
    excerpt:
      'A half-day or full-day round at Gassan Panorama Golf Club, a long scenic course built around Chiang Mai largest lake.',
    excerptTh:
      'A half-day or full-day round at Gassan Panorama Golf Club, a long scenic course built around Chiang Mai largest lake.',
    description:
      'Gassan Panorama Golf Club is built around Chiang Mai largest lake and stretches 7,596 yards, making it the longest golf course in Chiang Mai and Thailand according to the source page. The scenery includes waterside bunkers, mountain landscapes, and many flowers.',
    descriptionTh:
      'Gassan Panorama Golf Club is built around Chiang Mai largest lake and stretches 7,596 yards, making it the longest golf course in Chiang Mai and Thailand according to the source page. The scenery includes waterside bunkers, mountain landscapes, and many flowers.',
    duration: 'Half day or full day',
    location: 'Gassan Panorama Golf Club',
    groupSize: 'Private golf arrangement',
    price: 'Depend on season',
    category: 'chiang-mai-golf',
    tags: [
      'Chiang Mai',
      'Golf',
      'Gassan Panorama',
      'Lake course',
      'Waterside bunkers',
      'Mountain landscapes',
      'Half day',
      'Full day',
    ],
    image: chiangMaiGolfTourImage,
    highlights: [
      'Gassan Panorama Golf Club',
      'Built around Chiang Mai largest lake',
      '7,596-yard course',
      'Waterside bunkers',
      'Mountain landscapes and flowers',
    ],
    highlightsTh: [
      'Gassan Panorama Golf Club',
      'Built around Chiang Mai largest lake',
      '7,596-yard course',
      'Waterside bunkers',
      'Mountain landscapes and flowers',
    ],
    included: chiangMaiGolfIncluded,
    includedTh: chiangMaiGolfIncludedTh,
    seoTitle: 'Gassan Panorama Golf Club | Golf09 Chiang Mai Golf',
    seoDescription:
      'Book Golf09 Gassan Panorama Golf Club, a long scenic Chiang Mai lake course with waterside bunkers, mountain landscapes, and seasonal rates.',
  },
  {
    slug: 'chiang_mai_to_bangkok_01',
    title: 'CM to Bangkok 01: 3 Days 2 Nights Chiang Mai - Bangkok Route01',
    titleTh: 'CM to Bangkok 01: 3 Days 2 Nights Chiang Mai - Bangkok Route01',
    excerpt:
      'A 3-day private overland route from Chiang Mai to Bangkok via Lampang, Srisatchanalai, Sukhothai, Nakhon Sawan, and Ayutthaya.',
    excerptTh:
      'A 3-day private overland route from Chiang Mai to Bangkok via Lampang, Srisatchanalai, Sukhothai, Nakhon Sawan, and Ayutthaya.',
    description:
      'Travel from Chiang Mai to Bangkok over 3 days and 2 nights with heritage stops across northern and central Thailand. The route includes horse carting around Lampang city, Srisatchanalai Historical Park, Sukhothai Historical Park, a boat trip at Bung Boraped in Nakhon Sawan, Wat Kai Temple in Ayutthaya, and Ayutthaya World Heritage Historical Park.',
    descriptionTh:
      'Travel from Chiang Mai to Bangkok over 3 days and 2 nights with heritage stops across northern and central Thailand. The route includes horse carting around Lampang city, Srisatchanalai Historical Park, Sukhothai Historical Park, a boat trip at Bung Boraped in Nakhon Sawan, Wat Kai Temple in Ayutthaya, and Ayutthaya World Heritage Historical Park.',
    duration: '3 days 2 nights',
    location: 'Chiang Mai, Sukhothai, Ayutthaya, Bangkok',
    groupSize: 'Private multi-day route tour',
    price: 'Start from 8,300 - 33,000 THB / person',
    category: 'chiang-mai-to-bangkok',
    tags: [
      'Chiang Mai to Bangkok',
      'Sukhothai Historical Park',
      'Srisatchanalai Historical Park',
      'Ayutthaya',
      'Lampang',
      'Nakhon Sawan',
      '3 days 2 nights',
    ],
    image: chiangMaiToBangkokTourImage,
    highlights: [
      'Horse carting around Lampang city',
      'Srisatchanalai Historical Park',
      'Sukhothai Historical Park',
      'Boat trip at Bung Boraped',
      'Ayutthaya World Heritage Historical Park',
    ],
    highlightsTh: [
      'Horse carting around Lampang city',
      'Srisatchanalai Historical Park',
      'Sukhothai Historical Park',
      'Boat trip at Bung Boraped',
      'Ayutthaya World Heritage Historical Park',
    ],
    included: chiangMaiToBangkokIncluded,
    includedTh: chiangMaiToBangkokIncludedTh,
    seoTitle:
      'CM to Bangkok 01 | 3 Days 2 Nights Chiang Mai to Bangkok Route01',
    seoDescription:
      'Book CM to Bangkok 01, a 3-day private Chiang Mai to Bangkok route via Lampang, Srisatchanalai, Sukhothai, Nakhon Sawan, and Ayutthaya.',
  },
  {
    slug: 'chiang_mai_to_bangkok_02',
    title: 'CM to Bangkok 02: 3 Days 2 Nights Chiang Mai - Bangkok Route02',
    titleTh: 'CM to Bangkok 02: 3 Days 2 Nights Chiang Mai - Bangkok Route02',
    excerpt:
      'A 3-day private Chiang Mai to Bangkok route with temples in Lamphun and Lampang before Sukhothai, Nakhon Sawan, and Ayutthaya.',
    excerptTh:
      'A 3-day private Chiang Mai to Bangkok route with temples in Lamphun and Lampang before Sukhothai, Nakhon Sawan, and Ayutthaya.',
    description:
      'Travel from Chiang Mai to Bangkok over 3 days and 2 nights on Route02. The program visits Wat Phrathat Hariphunchai, the Elephant Conservation Centre, Wat Phrathat Lampang Luang, horse carting around the temple, Sukhothai Historical Park, Bung Boraped in Nakhon Sawan, Wat Kai Temple in Ayutthaya, and Ayutthaya World Heritage Historical Park.',
    descriptionTh:
      'Travel from Chiang Mai to Bangkok over 3 days and 2 nights on Route02. The program visits Wat Phrathat Hariphunchai, the Elephant Conservation Centre, Wat Phrathat Lampang Luang, horse carting around the temple, Sukhothai Historical Park, Bung Boraped in Nakhon Sawan, Wat Kai Temple in Ayutthaya, and Ayutthaya World Heritage Historical Park.',
    duration: '3 days 2 nights',
    location: 'Chiang Mai, Lampang, Sukhothai, Ayutthaya, Bangkok',
    groupSize: 'Private multi-day route tour',
    price: 'Start from 8,300 - 33,000 THB / person',
    category: 'chiang-mai-to-bangkok',
    tags: [
      'Chiang Mai to Bangkok',
      'Wat Phrathat Hariphunchai',
      'Elephant Conservation Centre',
      'Wat Phrathat Lampang Luang',
      'Sukhothai Historical Park',
      'Ayutthaya',
      '3 days 2 nights',
    ],
    image: chiangMaiToBangkokTourImage,
    highlights: [
      'Wat Phrathat Hariphunchai',
      'Elephant Conservation Centre',
      'Wat Phrathat Lampang Luang',
      'Sukhothai Historical Park',
      'Ayutthaya World Heritage Historical Park',
    ],
    highlightsTh: [
      'Wat Phrathat Hariphunchai',
      'Elephant Conservation Centre',
      'Wat Phrathat Lampang Luang',
      'Sukhothai Historical Park',
      'Ayutthaya World Heritage Historical Park',
    ],
    included: chiangMaiToBangkokIncluded,
    includedTh: chiangMaiToBangkokIncludedTh,
    seoTitle:
      'CM to Bangkok 02 | 3 Days 2 Nights Chiang Mai to Bangkok Route02',
    seoDescription:
      'Book CM to Bangkok 02, a 3-day private Chiang Mai to Bangkok route via Lamphun, Lampang, Sukhothai, Nakhon Sawan, and Ayutthaya.',
  },
  {
    slug: 'chiang_mai_to_bangkok_03',
    title: 'CM to Bangkok 03: 4 Days 3 Nights Chiang Mai - Bangkok',
    titleTh: 'CM to Bangkok 03: 4 Days 3 Nights Chiang Mai - Bangkok',
    excerpt:
      'A 4-day private route from Chiang Mai to Bangkok via Sukhothai, Kanchanaburi, waterfalls, Nakhon Pathom, and the floating market.',
    excerptTh:
      'A 4-day private route from Chiang Mai to Bangkok via Sukhothai, Kanchanaburi, waterfalls, Nakhon Pathom, and the floating market.',
    description:
      'Travel from Chiang Mai to Bangkok over 4 days and 3 nights with cultural and nature stops along the way. The route includes Lampang horse carting, Srisatchanalai Historical Park, Sukhothai Historical Park, Bung Boraped, Kanchanaburi World War II Bridge, War Cemetery and Museum, the train trip to Kra Sae Cave, Sai Yok Waterfall, Erawan Waterfall, Wat Phra Pathom Chedi, and Damnoen Saduak Floating Market.',
    descriptionTh:
      'Travel from Chiang Mai to Bangkok over 4 days and 3 nights with cultural and nature stops along the way. The route includes Lampang horse carting, Srisatchanalai Historical Park, Sukhothai Historical Park, Bung Boraped, Kanchanaburi World War II Bridge, War Cemetery and Museum, the train trip to Kra Sae Cave, Sai Yok Waterfall, Erawan Waterfall, Wat Phra Pathom Chedi, and Damnoen Saduak Floating Market.',
    duration: '4 days 3 nights',
    location: 'Chiang Mai, Sukhothai, Kanchanaburi, Ayutthaya, Bangkok',
    groupSize: 'Private multi-day route tour',
    price: 'Start from 10,600 - 40,500 THB / person',
    category: 'chiang-mai-to-bangkok',
    tags: [
      'Chiang Mai to Bangkok',
      'Sukhothai Historical Park',
      'Kanchanaburi',
      'Erawan Waterfall',
      'Damnoen Saduak Floating Market',
      'Kra Sae Cave',
      '4 days 3 nights',
    ],
    image: chiangMaiToBangkokTourImage,
    highlights: [
      'Srisatchanalai and Sukhothai Historical Parks',
      'Kanchanaburi World War II Bridge',
      'Train trip to Kra Sae Cave',
      'Sai Yok and Erawan Waterfalls',
      'Damnoen Saduak Floating Market',
    ],
    highlightsTh: [
      'Srisatchanalai and Sukhothai Historical Parks',
      'Kanchanaburi World War II Bridge',
      'Train trip to Kra Sae Cave',
      'Sai Yok and Erawan Waterfalls',
      'Damnoen Saduak Floating Market',
    ],
    included: chiangMaiToBangkokIncluded,
    includedTh: chiangMaiToBangkokIncludedTh,
    seoTitle: 'CM to Bangkok 03 | 4 Days 3 Nights Chiang Mai to Bangkok',
    seoDescription:
      'Book CM to Bangkok 03, a 4-day private Chiang Mai to Bangkok route via Sukhothai, Kanchanaburi, waterfalls, Nakhon Pathom, and Damnoen Saduak.',
  },
  {
    slug: 'chiang_mai_to_bangkok_04',
    title: 'CM to Bangkok 04: 5 Days 4 Nights Chiang Mai - Bangkok',
    titleTh: 'CM to Bangkok 04: 5 Days 4 Nights Chiang Mai - Bangkok',
    excerpt:
      'A 5-day private Chiang Mai to Bangkok journey combining Sukhothai, Kanchanaburi, Ayutthaya, waterfalls, and Damnoen Saduak.',
    excerptTh:
      'A 5-day private Chiang Mai to Bangkok journey combining Sukhothai, Kanchanaburi, Ayutthaya, waterfalls, and Damnoen Saduak.',
    description:
      'Travel from Chiang Mai to Bangkok over 5 days and 4 nights with a broad route of historical parks, river scenery, wartime heritage, waterfalls, and market experiences. The program includes Lampang horse carting, Srisatchanalai Historical Park, Sukhothai Historical Park, Bung Boraped, Kanchanaburi World War II Bridge, War Cemetery and Museum, Wat Kai Temple in Ayutthaya, Ayutthaya World Heritage Historical Park, the train trip to Kra Sae Cave, Sai Yok Waterfall, Erawan Waterfall, Wat Phra Pathom Chedi, and Damnoen Saduak Floating Market.',
    descriptionTh:
      'Travel from Chiang Mai to Bangkok over 5 days and 4 nights with a broad route of historical parks, river scenery, wartime heritage, waterfalls, and market experiences. The program includes Lampang horse carting, Srisatchanalai Historical Park, Sukhothai Historical Park, Bung Boraped, Kanchanaburi World War II Bridge, War Cemetery and Museum, Wat Kai Temple in Ayutthaya, Ayutthaya World Heritage Historical Park, the train trip to Kra Sae Cave, Sai Yok Waterfall, Erawan Waterfall, Wat Phra Pathom Chedi, and Damnoen Saduak Floating Market.',
    duration: '5 days 4 nights',
    location: 'Chiang Mai, Sukhothai, Kanchanaburi, Ayutthaya, Bangkok',
    groupSize: 'Private multi-day route tour',
    price: 'Start from 13,600 - 51,600 THB / person',
    category: 'chiang-mai-to-bangkok',
    tags: [
      'Chiang Mai to Bangkok',
      'Sukhothai Historical Park',
      'Kanchanaburi',
      'Ayutthaya',
      'Erawan Waterfall',
      'Damnoen Saduak Floating Market',
      '5 days 4 nights',
    ],
    image: chiangMaiToBangkokTourImage,
    highlights: [
      'Srisatchanalai and Sukhothai Historical Parks',
      'Kanchanaburi World War II Bridge and War Cemetery',
      'Ayutthaya World Heritage Historical Park',
      'Train trip to Kra Sae Cave and waterfalls',
      'Damnoen Saduak Floating Market',
    ],
    highlightsTh: [
      'Srisatchanalai and Sukhothai Historical Parks',
      'Kanchanaburi World War II Bridge and War Cemetery',
      'Ayutthaya World Heritage Historical Park',
      'Train trip to Kra Sae Cave and waterfalls',
      'Damnoen Saduak Floating Market',
    ],
    included: chiangMaiToBangkokIncluded,
    includedTh: chiangMaiToBangkokIncludedTh,
    seoTitle: 'CM to Bangkok 04 | 5 Days 4 Nights Chiang Mai to Bangkok',
    seoDescription:
      'Book CM to Bangkok 04, a 5-day private Chiang Mai to Bangkok route via Sukhothai, Kanchanaburi, Ayutthaya, waterfalls, and Damnoen Saduak.',
  },
  {
    slug: 'youth-camp-ele-nature-immersion',
    title: 'Ele-Nature Immersion Camp',
    titleTh: 'Ele-Nature Immersion Camp',
    excerpt:
      'A 6-day Chiang Mai youth camp in Mae Wang with elephant care, Lanna crafts, trekking, rafting, and nature learning.',
    excerptTh:
      'A 6-day Chiang Mai youth camp in Mae Wang with elephant care, Lanna crafts, trekking, rafting, and nature learning.',
    description:
      'Ele-Nature Immersion Camp is a six-day youth camp in the Mae Wang region of Chiang Mai. Participants connect with nature, learn meaningful elephant care, prepare food for elephants, experience traditional Lanna crafts, trek through lush landscapes, and raft down the Mae Wang River while building appreciation for local traditions and sustainable living.',
    descriptionTh:
      'Ele-Nature Immersion Camp is a six-day youth camp in the Mae Wang region of Chiang Mai. Participants connect with nature, learn meaningful elephant care, prepare food for elephants, experience traditional Lanna crafts, trek through lush landscapes, and raft down the Mae Wang River while building appreciation for local traditions and sustainable living.',
    duration: '6 days',
    location: 'Mae Wang, Chiang Mai',
    groupSize: 'Minimum 6 people / maximum 30 people',
    price: '12,500 THB / person',
    category: 'youth-camp',
    tags: [
      'Youth camp',
      'Chiang Mai summer camp',
      'Elephant care',
      'Mae Wang',
      'Lanna crafts',
      'Trekking',
      'Rafting',
    ],
    image: youthCampTourImage,
    highlights: [
      'Six-day Mae Wang youth camp',
      'Elephant care activities',
      'Traditional Lanna crafts',
      'Nature trekking',
      'Mae Wang River rafting',
    ],
    highlightsTh: [
      'Six-day Mae Wang youth camp',
      'Elephant care activities',
      'Traditional Lanna crafts',
      'Nature trekking',
      'Mae Wang River rafting',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Ele-Nature Immersion Camp | Chiang Mai Youth Camp',
    seoDescription:
      'Book Ele-Nature Immersion Camp, a 6-day Chiang Mai youth camp in Mae Wang with elephant care, Lanna crafts, trekking, rafting, and nature learning.',
  },
  {
    slug: 'youth-camp-chiang-dao-trek-cave',
    title: 'Chiang Dao Trek and Cave Camp',
    titleTh: 'Chiang Dao Trek and Cave Camp',
    excerpt:
      'A Chiang Mai youth camp built around Chiang Dao trekking, cave discovery, cultural immersion, ethical engagement, and nature learning.',
    excerptTh:
      'A Chiang Mai youth camp built around Chiang Dao trekking, cave discovery, cultural immersion, ethical engagement, and nature learning.',
    description:
      'Chiang Dao Trek and Cave Camp is designed as an educational and personal journey rather than a simple tour. The camp combines adventure, cultural immersion, ethical engagement, and geographical discovery, with Day 1 setting the foundation by connecting participants with nature and local traditions.',
    descriptionTh:
      'Chiang Dao Trek and Cave Camp is designed as an educational and personal journey rather than a simple tour. The camp combines adventure, cultural immersion, ethical engagement, and geographical discovery, with Day 1 setting the foundation by connecting participants with nature and local traditions.',
    duration: 'Camp program',
    location: 'Chiang Dao, Chiang Mai',
    groupSize: 'Minimum 8 people / maximum 70 people',
    price: '4,900 THB / person',
    category: 'youth-camp',
    tags: [
      'Youth camp',
      'Chiang Mai summer camp',
      'Chiang Dao',
      'Trekking',
      'Cave camp',
      'Cultural immersion',
      'Nature learning',
    ],
    image: youthCampTourImage,
    highlights: [
      'Chiang Dao trekking',
      'Cave discovery',
      'Cultural immersion',
      'Nature and geography learning',
      'Group camp format for ages 12 and up',
    ],
    highlightsTh: [
      'Chiang Dao trekking',
      'Cave discovery',
      'Cultural immersion',
      'Nature and geography learning',
      'Group camp format for ages 12 and up',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Chiang Dao Trek and Cave Camp | Chiang Mai Youth Camp',
    seoDescription:
      'Book Chiang Dao Trek and Cave Camp, a Chiang Mai youth camp with trekking, cave discovery, cultural immersion, and nature learning.',
  },
  {
    slug: 'youth-camp-elephant-poopoo-paper-park',
    title: 'Elephant Poo Poo Paper Park',
    titleTh: 'Elephant Poo Poo Paper Park',
    excerpt:
      'An eco-friendly Mae Rim workshop where students learn how recycled elephant dung fibers become handmade paper souvenirs.',
    excerptTh:
      'An eco-friendly Mae Rim workshop where students learn how recycled elephant dung fibers become handmade paper souvenirs.',
    description:
      'Elephant Poo Poo Paper Park is an outdoor museum in Mae Rim where visitors learn the sustainable process of making paper from recycled elephant dung fibers. Hands-on craft activities allow participants to make paper souvenirs while learning about conservation, upcycling, and creative reuse.',
    descriptionTh:
      'Elephant Poo Poo Paper Park is an outdoor museum in Mae Rim where visitors learn the sustainable process of making paper from recycled elephant dung fibers. Hands-on craft activities allow participants to make paper souvenirs while learning about conservation, upcycling, and creative reuse.',
    duration: 'Daily 8:30 AM - 5:15 PM',
    location: 'Mae Rim, Chiang Mai',
    groupSize: 'Suitable for all ages',
    price: 'Entrance 150 THB / person; craft activities 50 - 350 THB',
    category: 'youth-camp',
    tags: [
      'Youth camp workshop',
      'Eco learning',
      'Mae Rim',
      'Paper making',
      'Conservation',
      'Hands-on craft',
    ],
    image: youthCampTourImage,
    highlights: [
      'Eco-friendly outdoor museum',
      'Paper from recycled elephant dung fibers',
      'Hands-on paper souvenir activities',
      'Upcycling and conservation learning',
      'Mae Rim location',
    ],
    highlightsTh: [
      'Eco-friendly outdoor museum',
      'Paper from recycled elephant dung fibers',
      'Hands-on paper souvenir activities',
      'Upcycling and conservation learning',
      'Mae Rim location',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Elephant Poo Poo Paper Park | Chiang Mai Youth Camp Workshop',
    seoDescription:
      'Plan a Youth Camp visit to Elephant Poo Poo Paper Park in Mae Rim for eco learning, paper making, upcycling, and hands-on craft activities.',
  },
  {
    slug: 'youth-camp-lanna-ancient-thai-arts',
    title: 'Lanna Ancient Thai Arts Education Centre',
    titleTh: 'Lanna Ancient Thai Arts Education Centre',
    excerpt:
      'A Wat Sri Suphan learning stop focused on traditional Lanna craftsmanship, silverwork, artisan observation, and workshops.',
    excerptTh:
      'A Wat Sri Suphan learning stop focused on traditional Lanna craftsmanship, silverwork, artisan observation, and workshops.',
    description:
      'Located within Wat Sri Suphan, the Lanna Ancient Thai Arts Education Centre preserves and teaches traditional Lanna craftsmanship, especially silverwork. Students can observe techniques passed down through generations and join workshops that support local artisans and cultural preservation.',
    descriptionTh:
      'Located within Wat Sri Suphan, the Lanna Ancient Thai Arts Education Centre preserves and teaches traditional Lanna craftsmanship, especially silverwork. Students can observe techniques passed down through generations and join workshops that support local artisans and cultural preservation.',
    duration: 'Temple generally open daily 6:00 AM - 6:00 PM',
    location: 'Wat Sri Suphan, Chiang Mai',
    groupSize: 'Custom group visit',
    price: 'Workshop costs vary',
    category: 'youth-camp',
    tags: [
      'Youth camp workshop',
      'Lanna arts',
      'Wat Sri Suphan',
      'Silverwork',
      'Cultural learning',
      'Handicraft',
    ],
    image: youthCampTourImage,
    highlights: [
      'Traditional Lanna craftsmanship',
      'Silverwork learning',
      'Wat Sri Suphan setting',
      'Artisan observation',
      'Workshop-based cultural preservation',
    ],
    highlightsTh: [
      'Traditional Lanna craftsmanship',
      'Silverwork learning',
      'Wat Sri Suphan setting',
      'Artisan observation',
      'Workshop-based cultural preservation',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle:
      'Lanna Ancient Thai Arts Education Centre | Chiang Mai Youth Camp',
    seoDescription:
      'Plan a Youth Camp visit to the Lanna Ancient Thai Arts Education Centre at Wat Sri Suphan for silverwork, Lanna crafts, and cultural workshops.',
  },
  {
    slug: 'youth-camp-queen-sirikit-botanic-garden',
    title: 'Queen Sirikit Botanic Garden',
    titleTh: 'Queen Sirikit Botanic Garden',
    excerpt:
      'A Mae Rim nature learning stop with the Canopy Walkway, Glasshouse Complex, Thai flora, biodiversity, and conservation education.',
    excerptTh:
      'A Mae Rim nature learning stop with the Canopy Walkway, Glasshouse Complex, Thai flora, biodiversity, and conservation education.',
    description:
      'Queen Sirikit Botanic Garden in Mae Rim is a world-class center for conservation and the study of Thai flora. Youth groups can explore the Canopy Walkway, the Glasshouse Complex, cacti, tropical orchids, and plant collections while learning about biodiversity and environmental conservation.',
    descriptionTh:
      'Queen Sirikit Botanic Garden in Mae Rim is a world-class center for conservation and the study of Thai flora. Youth groups can explore the Canopy Walkway, the Glasshouse Complex, cacti, tropical orchids, and plant collections while learning about biodiversity and environmental conservation.',
    duration: 'Daily 8:30 AM - 5:00 PM',
    location: 'Mae Rim, Chiang Mai',
    groupSize: 'Custom group visit',
    price:
      'Foreigners 100 THB adult / 50 THB child; Thai citizens 40 THB adult / 10 THB child; vehicle fees extra',
    category: 'youth-camp',
    tags: [
      'Youth camp learning',
      'Botanic garden',
      'Mae Rim',
      'Canopy Walkway',
      'Biodiversity',
      'Conservation',
    ],
    image: youthCampTourImage,
    highlights: [
      'Canopy Walkway',
      'Glasshouse Complex',
      'Thai flora conservation',
      'Cacti and tropical orchids',
      'Biodiversity learning',
    ],
    highlightsTh: [
      'Canopy Walkway',
      'Glasshouse Complex',
      'Thai flora conservation',
      'Cacti and tropical orchids',
      'Biodiversity learning',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Queen Sirikit Botanic Garden | Chiang Mai Youth Camp',
    seoDescription:
      'Plan a Youth Camp visit to Queen Sirikit Botanic Garden in Mae Rim for the Canopy Walkway, Glasshouse Complex, biodiversity, and conservation learning.',
  },
  {
    slug: 'youth-camp-siam-insect-zoo',
    title: 'Siam Insect Zoo',
    titleTh: 'Siam Insect Zoo',
    excerpt:
      'An interactive Mae Rim discovery museum and live breeding farm with insects, butterflies, exhibits, and hands-on learning.',
    excerptTh:
      'An interactive Mae Rim discovery museum and live breeding farm with insects, butterflies, exhibits, and hands-on learning.',
    description:
      'Siam Insect Zoo in Mae Rim is an educational discovery museum and live insect breeding farm. Students can explore exhibits, see exotic spiders and beetles, visit the butterfly garden, and learn about entomology and biological diversity through close-up experiences.',
    descriptionTh:
      'Siam Insect Zoo in Mae Rim is an educational discovery museum and live insect breeding farm. Students can explore exhibits, see exotic spiders and beetles, visit the butterfly garden, and learn about entomology and biological diversity through close-up experiences.',
    duration: 'Daily 9:00 AM - 5:00 PM',
    location: 'Mae Rim, Chiang Mai',
    groupSize: 'Custom group visit',
    price:
      'Foreigners 200 THB adult / 150 THB child; Thai citizens and local residents 80 THB adult / 60 THB child',
    category: 'youth-camp',
    tags: [
      'Youth camp learning',
      'Siam Insect Zoo',
      'Mae Rim',
      'Entomology',
      'Butterfly garden',
      'Interactive museum',
    ],
    image: youthCampTourImage,
    highlights: [
      'Interactive discovery museum',
      'Live insect breeding farm',
      'Butterfly garden',
      'Close-up exhibit learning',
      'Entomology education',
    ],
    highlightsTh: [
      'Interactive discovery museum',
      'Live insect breeding farm',
      'Butterfly garden',
      'Close-up exhibit learning',
      'Entomology education',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Siam Insect Zoo | Chiang Mai Youth Camp Learning Activity',
    seoDescription:
      'Plan a Youth Camp visit to Siam Insect Zoo in Mae Rim for entomology exhibits, butterflies, close-up learning, and interactive discovery.',
  },
  {
    slug: 'youth-camp-chiang-mai-coffee-farm',
    title: 'Chiang Mai Coffee Farm Tour',
    titleTh: 'Chiang Mai Coffee Farm Tour',
    excerpt:
      'A full-day Pang Hai Village coffee learning tour with planting, roasting, brewing, mountain culture, and hands-on activities.',
    excerptTh:
      'A full-day Pang Hai Village coffee learning tour with planting, roasting, brewing, mountain culture, and hands-on activities.',
    description:
      'The Chiang Mai Coffee Farm Tour is an immersive full-day experience in Pang Hai Village. Students learn the journey of coffee from tree to cup, join planting, roasting, and brewing activities, and experience the culture of a mountain village in the Chiang Mai highlands.',
    descriptionTh:
      'The Chiang Mai Coffee Farm Tour is an immersive full-day experience in Pang Hai Village. Students learn the journey of coffee from tree to cup, join planting, roasting, and brewing activities, and experience the culture of a mountain village in the Chiang Mai highlands.',
    duration: 'Full day, 6 - 7 hours',
    location: 'Pang Hai Village, Mae Rim, Chiang Mai',
    groupSize: 'Custom group visit',
    price:
      'Adult 1,800 THB; children 8-13 years 900 THB; children 5-7 years 500 THB; children 1-4 years free',
    category: 'youth-camp',
    tags: [
      'Youth camp learning',
      'Coffee farm',
      'Pang Hai Village',
      'Planting',
      'Roasting',
      'Brewing',
      'Mountain village',
    ],
    image: youthCampTourImage,
    highlights: [
      'Coffee tree-to-cup learning',
      'Planting activity',
      'Roasting session',
      'Brewing session',
      'Mountain village culture',
    ],
    highlightsTh: [
      'Coffee tree-to-cup learning',
      'Planting activity',
      'Roasting session',
      'Brewing session',
      'Mountain village culture',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Chiang Mai Coffee Farm Tour | Youth Camp Learning Activity',
    seoDescription:
      'Plan a Youth Camp coffee farm tour in Pang Hai Village with planting, roasting, brewing, mountain culture, and hands-on coffee learning.',
  },
  {
    slug: 'youth-camp-earth-home-thailand',
    title: 'Earth Home Thailand',
    titleTh: 'Earth Home Thailand',
    excerpt:
      'A Mae Taeng sustainable living and natural building learning center focused on earth construction, farming, and community life.',
    excerptTh:
      'A Mae Taeng sustainable living and natural building learning center focused on earth construction, farming, and community life.',
    description:
      'Earth Home Thailand, also known as Mae Jo Baan Din, is a retreat and educational center focused on sustainable living and natural building. Youth groups can learn about earth and clay construction, sustainable farming, and simpler community-oriented living in harmony with nature.',
    descriptionTh:
      'Earth Home Thailand, also known as Mae Jo Baan Din, is a retreat and educational center focused on sustainable living and natural building. Youth groups can learn about earth and clay construction, sustainable farming, and simpler community-oriented living in harmony with nature.',
    duration: 'Advance arrangement required',
    location: 'Mae Taeng District, Chiang Mai',
    groupSize: 'Custom group program',
    price: 'Program and stay costs on request',
    category: 'youth-camp',
    tags: [
      'Youth camp learning',
      'Sustainable living',
      'Natural building',
      'Earth Home Thailand',
      'Mae Taeng',
      'Farming',
    ],
    image: youthCampTourImage,
    highlights: [
      'Natural building techniques',
      'Earth and clay construction',
      'Sustainable farming',
      'Community living',
      'Advance-arranged workshop format',
    ],
    highlightsTh: [
      'Natural building techniques',
      'Earth and clay construction',
      'Sustainable farming',
      'Community living',
      'Advance-arranged workshop format',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Earth Home Thailand | Chiang Mai Youth Camp Workshop',
    seoDescription:
      'Plan a Youth Camp program at Earth Home Thailand in Mae Taeng for natural building, sustainable farming, and hands-on eco living.',
  },
  {
    slug: 'youth-camp-umbrella-making-centre',
    title: 'Umbrella Making Centre',
    titleTh: 'Umbrella Making Centre',
    excerpt:
      'A San Kamphaeng craft stop where students observe handmade umbrella production and paint personalized souvenirs.',
    excerptTh:
      'A San Kamphaeng craft stop where students observe handmade umbrella production and paint personalized souvenirs.',
    description:
      'The Umbrella Making Centre in San Kamphaeng, also known as Bo Sang Umbrella Village, is a living museum for handmade umbrellas. Students can watch artisans craft umbrellas from mulberry paper and bamboo, then join painting activities to create a personalized souvenir.',
    descriptionTh:
      'The Umbrella Making Centre in San Kamphaeng, also known as Bo Sang Umbrella Village, is a living museum for handmade umbrellas. Students can watch artisans craft umbrellas from mulberry paper and bamboo, then join painting activities to create a personalized souvenir.',
    duration: 'Daily 8:30 AM - 4:30 PM',
    location: 'San Kamphaeng, Chiang Mai',
    groupSize: 'Custom group visit',
    price: 'Free entrance; workshop fees vary',
    category: 'youth-camp',
    tags: [
      'Youth camp workshop',
      'Umbrella making',
      'Bo Sang',
      'San Kamphaeng',
      'Handicraft',
      'Painting',
    ],
    image: youthCampTourImage,
    highlights: [
      'Bo Sang umbrella craft village',
      'Mulberry paper and bamboo umbrella making',
      'Artisan demonstrations',
      'Umbrella painting activity',
      'Free entrance',
    ],
    highlightsTh: [
      'Bo Sang umbrella craft village',
      'Mulberry paper and bamboo umbrella making',
      'Artisan demonstrations',
      'Umbrella painting activity',
      'Free entrance',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Umbrella Making Centre | Chiang Mai Youth Camp Workshop',
    seoDescription:
      'Plan a Youth Camp craft visit to the Umbrella Making Centre in San Kamphaeng for handmade umbrella demonstrations and painting workshops.',
  },
  {
    slug: 'youth-camp-chiang-mai-celadon',
    title: 'Chiang Mai Celadon',
    titleTh: 'Chiang Mai Celadon',
    excerpt:
      'A San Kamphaeng celadon pottery learning stop with jade-green glaze, clay shaping, kiln firing, and workshop options.',
    excerptTh:
      'A San Kamphaeng celadon pottery learning stop with jade-green glaze, clay shaping, kiln firing, and workshop options.',
    description:
      'Chiang Mai Celadon introduces students to the San Kamphaeng area famous jade-green pottery tradition. A workshop visit shows the production process from local clay shaping to high-temperature kiln firing, with opportunities to understand the skill and heritage behind durable celadon pieces.',
    descriptionTh:
      'Chiang Mai Celadon introduces students to the San Kamphaeng area famous jade-green pottery tradition. A workshop visit shows the production process from local clay shaping to high-temperature kiln firing, with opportunities to understand the skill and heritage behind durable celadon pieces.',
    duration: 'Daily 8:00 AM - 5:00 PM',
    location: 'Doi Saket, Chiang Mai',
    groupSize: 'Custom group visit',
    price: 'Products from about 100 THB; workshops about 250 THB / person',
    category: 'youth-camp',
    tags: [
      'Youth camp workshop',
      'Celadon',
      'Pottery',
      'San Kamphaeng',
      'Doi Saket',
      'Ceramics',
    ],
    image: youthCampTourImage,
    highlights: [
      'Celadon pottery learning',
      'Jade-green glaze tradition',
      'Clay shaping process',
      'High-temperature kiln firing',
      'Workshop and showroom visit',
    ],
    highlightsTh: [
      'Celadon pottery learning',
      'Jade-green glaze tradition',
      'Clay shaping process',
      'High-temperature kiln firing',
      'Workshop and showroom visit',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Chiang Mai Celadon | Youth Camp Pottery Workshop',
    seoDescription:
      'Plan a Youth Camp pottery visit to Chiang Mai Celadon for jade-green glaze, clay shaping, kiln firing, and ceramics workshop learning.',
  },
  {
    slug: 'youth-camp-ban-muang-kung',
    title: 'Ban Muang Kung',
    titleTh: 'Ban Muang Kung',
    excerpt:
      'A historic Hang Dong pottery village where students observe earthenware traditions and join a hands-on clay workshop.',
    excerptTh:
      'A historic Hang Dong pottery village where students observe earthenware traditions and join a hands-on clay workshop.',
    description:
      'Ban Muang Kung is a historic pottery village south of Chiang Mai known for centuries-old earthenware production. Youth groups can observe traditional techniques and kilns, then join a hands-on pottery workshop to shape clay and create a personal piece connected to Lanna heritage.',
    descriptionTh:
      'Ban Muang Kung is a historic pottery village south of Chiang Mai known for centuries-old earthenware production. Youth groups can observe traditional techniques and kilns, then join a hands-on pottery workshop to shape clay and create a personal piece connected to Lanna heritage.',
    duration: 'Generally 9:00 AM - 4:00 PM, closed Sundays',
    location: 'Hang Dong, Chiang Mai',
    groupSize: 'Advance booking recommended for groups',
    price: 'No entrance fee; half-day pottery workshop about 350 THB / person',
    category: 'youth-camp',
    tags: [
      'Youth camp workshop',
      'Ban Muang Kung',
      'Pottery',
      'Hang Dong',
      'Lanna craft',
      'Clay workshop',
    ],
    image: youthCampTourImage,
    highlights: [
      'Historic pottery village',
      'Traditional earthenware production',
      'Artisan and kiln observation',
      'Hands-on clay workshop',
      'Lanna craft heritage',
    ],
    highlightsTh: [
      'Historic pottery village',
      'Traditional earthenware production',
      'Artisan and kiln observation',
      'Hands-on clay workshop',
      'Lanna craft heritage',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Ban Muang Kung | Chiang Mai Youth Camp Pottery Workshop',
    seoDescription:
      'Plan a Youth Camp pottery workshop at Ban Muang Kung in Hang Dong for traditional earthenware, clay shaping, and Lanna craft learning.',
  },
  {
    slug: 'youth-camp-handmade-notebook-shop',
    title: 'Handmade Notebook Shop',
    titleTh: 'Handmade Notebook Shop',
    excerpt:
      'A Baan Kang Wat handmade bookbinding workshop with notebook making, paper design, and upcycled paper bead activities.',
    excerptTh:
      'A Baan Kang Wat handmade bookbinding workshop with notebook making, paper design, and upcycled paper bead activities.',
    description:
      'Note a Book is a handmade book and stationery shop in Baan Kang Wat. Students can learn traditional bookbinding, choose paper, design covers, and create personal handmade notebooks. The shop also teaches paper bead making from leftover bookbinding paper as an upcycling craft.',
    descriptionTh:
      'Note a Book is a handmade book and stationery shop in Baan Kang Wat. Students can learn traditional bookbinding, choose paper, design covers, and create personal handmade notebooks. The shop also teaches paper bead making from leftover bookbinding paper as an upcycling craft.',
    duration: 'Tuesday - Sunday, generally 10:00 AM - 6:00 PM',
    location: 'Baan Kang Wat, Chiang Mai',
    groupSize: 'Custom workshop group',
    price: 'Free entrance; workshops about 350 - 850 THB',
    category: 'youth-camp',
    tags: [
      'Youth camp workshop',
      'Bookbinding',
      'Handmade notebook',
      'Baan Kang Wat',
      'Paper craft',
      'Upcycling',
    ],
    image: youthCampTourImage,
    highlights: [
      'Traditional bookbinding',
      'Handmade notebook design',
      'Paper selection and cover design',
      'Paper bead upcycling',
      'Baan Kang Wat creative setting',
    ],
    highlightsTh: [
      'Traditional bookbinding',
      'Handmade notebook design',
      'Paper selection and cover design',
      'Paper bead upcycling',
      'Baan Kang Wat creative setting',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Handmade Notebook Shop | Chiang Mai Youth Camp Workshop',
    seoDescription:
      'Plan a Youth Camp bookbinding workshop at Note a Book in Baan Kang Wat for handmade notebooks, paper design, and upcycled paper beads.',
  },
  {
    slug: 'youth-camp-satee-ceramic',
    title: 'Satee Ceramic',
    titleTh: 'Satee Ceramic',
    excerpt:
      'A Baan Kang Wat ceramic workshop where students create cups or small bowls and learn hands-on clay craft.',
    excerptTh:
      'A Baan Kang Wat ceramic workshop where students create cups or small bowls and learn hands-on clay craft.',
    description:
      'Satee Ceramic is a pottery studio in the Baan Kang Wat community. Its hands-on ceramic workshop allows students to create pieces such as cups or small bowls from scratch, offering a meditative craft experience and a personal handmade souvenir.',
    descriptionTh:
      'Satee Ceramic is a pottery studio in the Baan Kang Wat community. Its hands-on ceramic workshop allows students to create pieces such as cups or small bowls from scratch, offering a meditative craft experience and a personal handmade souvenir.',
    duration: 'Tuesday - Sunday, generally 10:00 AM - 6:00 PM',
    location: 'Baan Kang Wat, Chiang Mai',
    groupSize: 'Advance booking recommended',
    price: 'Free gallery visit; workshops about 800 - 1,200 THB / person',
    category: 'youth-camp',
    tags: [
      'Youth camp workshop',
      'Satee Ceramic',
      'Ceramics',
      'Pottery',
      'Baan Kang Wat',
      'Clay craft',
    ],
    image: youthCampTourImage,
    highlights: [
      'Hands-on ceramic workshop',
      'Create cups or small bowls',
      'Clay craft learning',
      'Baan Kang Wat studio setting',
      'Personal handmade souvenir',
    ],
    highlightsTh: [
      'Hands-on ceramic workshop',
      'Create cups or small bowls',
      'Clay craft learning',
      'Baan Kang Wat studio setting',
      'Personal handmade souvenir',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Satee Ceramic | Chiang Mai Youth Camp Ceramic Workshop',
    seoDescription:
      'Plan a Youth Camp ceramic workshop at Satee Ceramic in Baan Kang Wat for clay craft, cup making, bowls, and handmade souvenirs.',
  },
  {
    slug: 'youth-camp-chiangmai-arts-crafts-workshop',
    title: 'Chiangmai Arts and Crafts Workshop',
    titleTh: 'Chiangmai Arts and Crafts Workshop',
    excerpt:
      'A Baan Kang Wat creative workshop experience with ceramics, printmaking, textiles, jewelry, and local artist-led learning.',
    excerptTh:
      'A Baan Kang Wat creative workshop experience with ceramics, printmaking, textiles, jewelry, and local artist-led learning.',
    description:
      'Chiangmai Arts and Crafts Workshop is a creative experience within Baan Kang Wat, a community of small art studios and shops. Youth groups can explore independent studios and join workshops in ceramics, printmaking, textiles, jewelry, and other crafts led by local artists.',
    descriptionTh:
      'Chiangmai Arts and Crafts Workshop is a creative experience within Baan Kang Wat, a community of small art studios and shops. Youth groups can explore independent studios and join workshops in ceramics, printmaking, textiles, jewelry, and other crafts led by local artists.',
    duration: 'Tuesday - Sunday, generally 10:00 AM - 6:00 PM',
    location: 'Baan Kang Wat, Chiang Mai',
    groupSize: 'Custom workshop group',
    price: 'Free entrance; workshops typically 300 - 1,500 THB or more',
    category: 'youth-camp',
    tags: [
      'Youth camp workshop',
      'Arts and crafts',
      'Baan Kang Wat',
      'Ceramics',
      'Printmaking',
      'Textiles',
      'Jewelry making',
    ],
    image: youthCampTourImage,
    highlights: [
      'Baan Kang Wat creative community',
      'Independent artist studios',
      'Ceramics and printmaking',
      'Textile and jewelry workshops',
      'Local artist-led learning',
    ],
    highlightsTh: [
      'Baan Kang Wat creative community',
      'Independent artist studios',
      'Ceramics and printmaking',
      'Textile and jewelry workshops',
      'Local artist-led learning',
    ],
    included: youthCampIncluded,
    includedTh: youthCampIncludedTh,
    seoTitle: 'Chiangmai Arts and Crafts Workshop | Youth Camp Activity',
    seoDescription:
      'Plan a Youth Camp arts and crafts workshop in Baan Kang Wat with ceramics, printmaking, textiles, jewelry, and local artist-led learning.',
  },
  {
    slug: 'event01',
    title:
      'Event01: Trekking at Kew Mae Pan Nature Trail, Inthanon National Park',
    titleTh:
      'Event01: Trekking at Kew Mae Pan Nature Trail, Inthanon National Park',
    excerpt:
      'A winter-season full-day Chiang Mai special tour to Doi Inthanon and the Kew Mae Pan Nature Trail, open from 1 November to 31 May.',
    excerptTh:
      'A winter-season full-day Chiang Mai special tour to Doi Inthanon and the Kew Mae Pan Nature Trail, open from 1 November to 31 May.',
    description:
      'Explore the natural beauty of Doi Inthanon National Park with an inspiring walk along Kew Mae Pan Nature Trail, one of Thailand most scenic walks. The 2.78-kilometer trail passes cloud forest, grassland, Himalayan flora, ferns, birdlife, and rare red rhododendrons, with 21 interpretive stations explaining local plants and ecosystems.',
    descriptionTh:
      'Explore the natural beauty of Doi Inthanon National Park with an inspiring walk along Kew Mae Pan Nature Trail, one of Thailand most scenic walks. The 2.78-kilometer trail passes cloud forest, grassland, Himalayan flora, ferns, birdlife, and rare red rhododendrons, with 21 interpretive stations explaining local plants and ecosystems.',
    duration: 'Full day; available 1 November - 31 May',
    location: 'Doi Inthanon National Park, Chiang Mai',
    groupSize: 'Seasonal Chiang Mai special tour',
    price: '1,400 THB',
    category: 'special-tours',
    tags: [
      'Special tours',
      'Kew Mae Pan',
      'Doi Inthanon',
      'Nature trail',
      'Winter season',
      'Trekking',
      'Full day',
    ],
    image: specialToursImage,
    highlights: [
      'Kew Mae Pan Nature Trail',
      'Doi Inthanon National Park',
      '2.78-kilometer scenic trail',
      'Cloud forest and grassland ecosystems',
      'Rare red rhododendrons',
    ],
    highlightsTh: [
      'Kew Mae Pan Nature Trail',
      'Doi Inthanon National Park',
      '2.78-kilometer scenic trail',
      'Cloud forest and grassland ecosystems',
      'Rare red rhododendrons',
    ],
    included: specialToursIncluded,
    includedTh: specialToursIncludedTh,
    seoTitle: 'Kew Mae Pan Nature Trail | Event01 Chiang Mai Special Tour',
    seoDescription:
      'Book Event01, a winter-season Chiang Mai special tour to Kew Mae Pan Nature Trail in Doi Inthanon National Park from 1 November to 31 May.',
  },
  {
    slug: 'event02',
    title: 'Event02: Cherry Blossom Khun Chang Kian',
    titleTh: 'Event02: Cherry Blossom Khun Chang Kian',
    excerpt:
      'A winter-season full-day Chiang Mai sakura tour to Khun Chang Kian, available around 20 December to 15 January.',
    excerptTh:
      'A winter-season full-day Chiang Mai sakura tour to Khun Chang Kian, available around 20 December to 15 January.',
    description:
      'Khun Chang Kian is located in the mountains of Chiang Mai near Doi Suthep-Pui National Park at about 1,000-2,000 meters above sea level. The area is famous for Queen tiger flower, often called Thailand sakura, with beautiful pink blossoms around the agricultural research station, training center, and Hmong village Ban Khun Chang Kian.',
    descriptionTh:
      'Khun Chang Kian is located in the mountains of Chiang Mai near Doi Suthep-Pui National Park at about 1,000-2,000 meters above sea level. The area is famous for Queen tiger flower, often called Thailand sakura, with beautiful pink blossoms around the agricultural research station, training center, and Hmong village Ban Khun Chang Kian.',
    duration: 'Full day; available 20 December - 15 January',
    location: 'Khun Chang Kian, Chiang Mai',
    groupSize: 'Seasonal Chiang Mai special tour',
    price: 'Start from 1,600 THB',
    category: 'special-tours',
    tags: [
      'Special tours',
      'Cherry blossom',
      'Khun Chang Kian',
      'Chiang Mai sakura',
      'Doi Suthep-Pui',
      'Winter season',
      'Full day',
    ],
    image: specialToursImage,
    highlights: [
      'Khun Chang Kian cherry blossoms',
      'Thailand sakura season',
      'Doi Suthep-Pui mountain scenery',
      'Agricultural research station',
      'Hmong village Ban Khun Chang Kian',
    ],
    highlightsTh: [
      'Khun Chang Kian cherry blossoms',
      'Thailand sakura season',
      'Doi Suthep-Pui mountain scenery',
      'Agricultural research station',
      'Hmong village Ban Khun Chang Kian',
    ],
    included: specialToursIncluded,
    includedTh: specialToursIncludedTh,
    seoTitle: 'Cherry Blossom Khun Chang Kian | Event02 Chiang Mai Special Tour',
    seoDescription:
      'Book Event02, a winter-season Chiang Mai cherry blossom tour to Khun Chang Kian, Doi Suthep-Pui, available around 20 December to 15 January.',
  },
  {
    slug: 'event03',
    title: 'Event03: Yi Peng Lantern Festival Chiang Mai 2026',
    titleTh: 'Event03: Yi Peng Lantern Festival Chiang Mai 2026',
    excerpt:
      'A special Chiang Mai Yi Peng Lantern Festival 2026 program at CAD Cultural Center on 24-25 November 2026.',
    excerptTh:
      'A special Chiang Mai Yi Peng Lantern Festival 2026 program at CAD Cultural Center on 24-25 November 2026.',
    description:
      'Experience Yi Peng Lantern Festival Chiang Mai 2026 at CAD Cultural Center Lanna Ethnicity in On Klang, Mae On District. On the full moon night, traditional paper floating lanterns are lit and released, filling the night sky with a spectacular display of light, prayers, wishes, hope, and peace.',
    descriptionTh:
      'Experience Yi Peng Lantern Festival Chiang Mai 2026 at CAD Cultural Center Lanna Ethnicity in On Klang, Mae On District. On the full moon night, traditional paper floating lanterns are lit and released, filling the night sky with a spectacular display of light, prayers, wishes, hope, and peace.',
    duration: 'Full day; 24-25 November 2026 only',
    location: 'CAD Cultural Center, Mae On, Chiang Mai',
    groupSize: 'Ticketed seasonal festival program',
    price: 'Start from 4,900 - 15,900 THB',
    category: 'special-tours',
    tags: [
      'Special tours',
      'Yi Peng 2026',
      'Lantern festival',
      'CAD Cultural Center',
      'Mae On',
      'Festival',
      'Winter season',
    ],
    image: specialToursImage,
    highlights: [
      'Yi Peng Lantern Festival 2026',
      'CAD Cultural Center Lanna Ethnicity',
      'Mass lantern release',
      'Full moon ceremony',
      '24-25 November 2026 only',
    ],
    highlightsTh: [
      'Yi Peng Lantern Festival 2026',
      'CAD Cultural Center Lanna Ethnicity',
      'Mass lantern release',
      'Full moon ceremony',
      '24-25 November 2026 only',
    ],
    included: specialToursIncluded,
    includedTh: specialToursIncludedTh,
    seoTitle: 'Yi Peng Lantern Festival Chiang Mai 2026 | Event03',
    seoDescription:
      'Book Event03, the Yi Peng Lantern Festival Chiang Mai 2026 special program at CAD Cultural Center on 24-25 November 2026.',
  },
  {
    slug: 'event04',
    title: 'Event04: Chiang Mai New Year Countdown 2027',
    titleTh: 'Event04: Chiang Mai New Year Countdown 2027',
    excerpt:
      'A ticketed Chiang Mai New Year Countdown 2027 evening program with cultural performances, fireworks, and festive celebrations on 31 December 2026.',
    excerptTh:
      'A ticketed Chiang Mai New Year Countdown 2027 evening program with cultural performances, fireworks, and festive celebrations on 31 December 2026.',
    description:
      'Experience Chiang Mai New Year Countdown 2027 with cultural performances, fireworks, and vibrant festivities. Celebrate on 31 December 2026 and enjoy a blend of tradition and modern celebration in Northern Thailand as the city welcomes the new year.',
    descriptionTh:
      'Experience Chiang Mai New Year Countdown 2027 with cultural performances, fireworks, and vibrant festivities. Celebrate on 31 December 2026 and enjoy a blend of tradition and modern celebration in Northern Thailand as the city welcomes the new year.',
    duration: '17:00 - midnight; 31 December 2026',
    location: 'Chiang Mai',
    groupSize: 'Ticketed seasonal countdown program',
    price: 'Start from 3,400 - 15,900 THB',
    category: 'special-tours',
    tags: [
      'Special tours',
      'Chiang Mai countdown',
      'New Year 2027',
      'Fireworks',
      'Cultural performances',
      'Festival',
      '31 December 2026',
    ],
    image: specialToursImage,
    highlights: [
      'Chiang Mai New Year Countdown 2027',
      'Cultural performances',
      'Fireworks',
      'Evening celebration',
      '31 December 2026',
    ],
    highlightsTh: [
      'Chiang Mai New Year Countdown 2027',
      'Cultural performances',
      'Fireworks',
      'Evening celebration',
      '31 December 2026',
    ],
    included: specialToursIncluded,
    includedTh: specialToursIncludedTh,
    seoTitle: 'Chiang Mai New Year Countdown 2027 | Event04 Special Tour',
    seoDescription:
      'Book Event04, the Chiang Mai New Year Countdown 2027 special program with cultural performances, fireworks, and festivities on 31 December 2026.',
  },
  {
    slug: 'muay-thai',
    title: 'Thai Kick Boxing or Muay Thai',
    titleTh: 'Thai Kick Boxing or Muay Thai',
    excerpt:
      'Watch real Muay Thai kick boxing in Chiang Mai, Thailand national combat sport known as the art of eight limbs.',
    excerptTh:
      'Watch real Muay Thai kick boxing in Chiang Mai, Thailand national combat sport known as the art of eight limbs.',
    description:
      'Experience real Muay Thai kick boxing in Chiang Mai. Known as the art of eight limbs, Muay Thai uses fists, knees, elbows, and feet in a dynamic ring sport with stand-up striking and clinching techniques. The source program offers grandstand, ringside, and VIP tickets for evening fights.',
    descriptionTh:
      'Experience real Muay Thai kick boxing in Chiang Mai. Known as the art of eight limbs, Muay Thai uses fists, knees, elbows, and feet in a dynamic ring sport with stand-up striking and clinching techniques. The source program offers grandstand, ringside, and VIP tickets for evening fights.',
    duration: 'Fight time 9:00 PM - 11:00 PM; pickup 8:00 PM; except Sunday',
    location: 'Chiang Mai',
    groupSize: 'Ticketed Muay Thai show',
    price: 'Grandstand 600 THB, ringside 1,000 THB, VIP 1,500 THB',
    category: 'muay-thai',
    tags: [
      'Muay Thai',
      'Thai kick boxing',
      'Chiang Mai',
      'Fight ticket',
      'Grandstand',
      'Ringside',
      'VIP',
    ],
    image: muayThaiTourImage,
    highlights: [
      'Real Muay Thai kick boxing in Chiang Mai',
      'Thailand national combat sport',
      'Art of eight limbs',
      'Grandstand, ringside, and VIP ticket options',
      'Evening fight time except Sunday',
    ],
    highlightsTh: [
      'Real Muay Thai kick boxing in Chiang Mai',
      'Thailand national combat sport',
      'Art of eight limbs',
      'Grandstand, ringside, and VIP ticket options',
      'Evening fight time except Sunday',
    ],
    included: muayThaiIncluded,
    includedTh: muayThaiIncludedTh,
    seoTitle: 'Thai Kick Boxing or Muay Thai | Chiang Mai Fight Tickets',
    seoDescription:
      'Book Chiang Mai Muay Thai tickets with grandstand, ringside, and VIP options for real Thai kick boxing evening fights.',
  },
  {
    slug: 'chiang-mai-car-rental-with-driver',
    title: 'Chiang Mai Car Rental With Driver',
    titleTh: 'Chiang Mai Car Rental With Driver',
    excerpt:
      'Private Chiang Mai car rental with an English-speaking driver, using a comfortable air-conditioned sedan, SUV, or van for custom travel plans.',
    excerptTh:
      'Private Chiang Mai car rental with an English-speaking driver, using a comfortable air-conditioned sedan, SUV, or van for custom travel plans.',
    description:
      'Hire a private car or van with driver in Chiang Mai for flexible travel by your own plan. The service uses comfortable air-conditioned vehicles, including sedan cars for up to 3 passengers and Toyota van commuters for up to 9 passengers, with experienced English-speaking local drivers. Driver working hours are 8:00 AM to 5:00 PM, with extra-hour and overnight-driver-accommodation charges when needed.',
    descriptionTh:
      'Hire a private car or van with driver in Chiang Mai for flexible travel by your own plan. The service uses comfortable air-conditioned vehicles, including sedan cars for up to 3 passengers and Toyota van commuters for up to 9 passengers, with experienced English-speaking local drivers. Driver working hours are 8:00 AM to 5:00 PM, with extra-hour and overnight-driver-accommodation charges when needed.',
    duration: 'Driver working hours 8:00 AM - 5:00 PM',
    location: 'Chiang Mai and custom destinations',
    groupSize: 'Sedan maximum 3 people; van maximum 9 people',
    price: 'Start from 2,500 THB / car or van',
    category: 'other',
    tags: [
      'Car rental with driver',
      'Chiang Mai',
      'Private transport',
      'Sedan car',
      'Toyota van commuter',
      'English-speaking driver',
      'Custom itinerary',
    ],
    image: carRentalTourImage,
    highlights: [
      'Private car or van rental with driver only',
      'Sedan car for up to 3 passengers',
      'Toyota van commuter for up to 9 passengers',
      'Extra hour after 6:00 PM: 300 THB / hour',
      'Popular round-trip destination rates from Chiang Mai city available',
    ],
    highlightsTh: [
      'Private car or van rental with driver only',
      'Sedan car for up to 3 passengers',
      'Toyota van commuter for up to 9 passengers',
      'Extra hour after 6:00 PM: 300 THB / hour',
      'Popular round-trip destination rates from Chiang Mai city available',
    ],
    included: carRentalIncluded,
    includedTh: carRentalIncludedTh,
    seoTitle: 'Chiang Mai Car Rental With Driver | Private Car and Van Hire',
    seoDescription:
      'Book Chiang Mai car rental with driver using a comfortable sedan or Toyota van commuter for custom private transport, city tours, and round-trip destinations.',
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug)
}
