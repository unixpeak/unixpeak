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
  {
    slug: 'package01-special-chiang-mai-highlights',
    title: 'Package01: Special Chiang Mai Highlights Package',
    titleTh: 'แพ็กเกจเชียงใหม่ไฮไลต์ครบในหนึ่งวัน',
    excerpt:
      'A full-day Chiang Mai package covering elephant experiences, orchid and butterfly gardens, local crafts, Tiger Kingdom, and Doi Suthep Temple.',
    excerptTh:
      'แพ็กเกจเชียงใหม่แบบเต็มวัน เหมาะสำหรับผู้ที่ต้องการเก็บไฮไลต์สำคัญหลายจุดในทริปเดียว',
    description:
      'This one-day Chiang Mai program is designed for travelers who want a broad introduction to the city and nearby countryside. The route can include an elephant camp experience, orchid and butterfly gardens, Tiger Kingdom, Sankampaeng and Borsang craft villages, and Doi Suthep Temple on Suthep-Pui mountain.',
    descriptionTh:
      'โปรแกรมเชียงใหม่หนึ่งวันสำหรับผู้ที่ต้องการเที่ยวหลายไฮไลต์ในเวลาจำกัด สามารถจัดเส้นทางรวมกิจกรรมช้าง สวนกล้วยไม้และผีเสื้อ Tiger Kingdom หมู่บ้านหัตถกรรมสันกำแพง-บ่อสร้าง และวัดพระธาตุดอยสุเทพ',
    duration: '8:00 - 19:00',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 2,100 - 3,500 THB / person',
    image: northernThailandPackageImage,
    highlights: [
      'Elephant camp experience',
      'Orchid and butterfly gardens',
      'Tiger Kingdom',
      'Sankampaeng and Borsang craft villages',
      'Doi Suthep Temple',
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
      'Special Chiang Mai Highlights Package | Unix Peak Travel',
    seoDescription:
      'Explore Chiang Mai highlights in one full-day package with elephant activities, orchid gardens, local crafts, Tiger Kingdom, and Doi Suthep Temple.',
  },
  {
    slug: 'package02-chiang-mai-animal-planet',
    title: 'Package02: One Day Chiang Mai Animal Planet Package',
    titleTh: 'แพ็กเกจเชียงใหม่สำหรับครอบครัวและคนรักสัตว์',
    excerpt:
      'A family-friendly Chiang Mai day tour focused on elephants, animal attractions, nature learning, and easy sightseeing.',
    excerptTh:
      'ทริปเชียงใหม่หนึ่งวันสำหรับครอบครัว เด็ก และผู้ที่ชอบธรรมชาติหรือกิจกรรมเกี่ยวกับสัตว์',
    description:
      'This Chiang Mai day package is suitable for families and travelers who enjoy nature and animal experiences. The route can include elephant care activities, feeding and bathing elephants, the World of Insects museum, Tiger Kingdom, and Chiang Mai Zoo.',
    descriptionTh:
      'โปรแกรมนี้เหมาะกับครอบครัวและนักเดินทางที่สนใจธรรมชาติและสัตว์ สามารถจัดกิจกรรมดูแลช้าง ให้อาหาร อาบน้ำช้าง เยี่ยมชมพิพิธภัณฑ์แมลง Tiger Kingdom และสวนสัตว์เชียงใหม่',
    duration: '8:00 - 17:00',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 2,300 - 3,700 THB / person',
    image: northernThailandPackageImage,
    highlights: [
      'Elephant care activity',
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
      'Chiang Mai Animal Planet Day Package | Unix Peak Travel',
    seoDescription:
      'Plan a family-friendly Chiang Mai animal and nature day package with elephant care, Tiger Kingdom, Chiang Mai Zoo, and nature learning stops.',
  },
  {
    slug: 'package03-chiang-mai-wonder-package',
    title: 'Package03: Chiang Mai Wonder Package',
    titleTh: 'แพ็กเกจเชียงใหม่ 3 วัน เที่ยววัฒนธรรมและธรรมชาติ',
    excerpt:
      'A 3-day Chiang Mai sightseeing package covering temples, handicraft villages, elephant activities, hill tribe culture, and Doi Inthanon.',
    excerptTh:
      'แพ็กเกจเชียงใหม่ 3 วัน รวมวัดสำคัญ หมู่บ้านหัตถกรรม กิจกรรมธรรมชาติ และดอยอินทนนท์',
    description:
      'This 3-day package brings together Chiang Mai culture, nature, and classic sightseeing. Suggested days include Doi Suthep, city temples, Sankampaeng handicraft village, Mae Taeng elephant activities, Tiger Kingdom, Karen Long Neck and hill tribe village, orchid farm, and Doi Inthanon National Park.',
    descriptionTh:
      'แพ็กเกจ 3 วันนี้รวมเส้นทางวัฒนธรรมและธรรมชาติของเชียงใหม่ เช่น วัดพระธาตุดอยสุเทพ วัดในเมือง หมู่บ้านหัตถกรรมสันกำแพง กิจกรรมช้างแม่แตง Tiger Kingdom หมู่บ้านกะเหรี่ยงคอยาว สวนกล้วยไม้ และดอยอินทนนท์',
    duration: '3 days',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 4,900 - 6,300 THB / person',
    image: northernThailandPackageImage,
    highlights: [
      'Doi Suthep Temple and Chiang Mai city temples',
      'Sankampaeng handicraft village',
      'Mae Taeng elephant activities',
      'Karen Long Neck and hill tribe village',
      'Doi Inthanon National Park',
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
    seoTitle: 'Chiang Mai Wonder 3-Day Package | Unix Peak Travel',
    seoDescription:
      'Book a 3-day Chiang Mai Wonder package with temples, handicraft villages, elephant activities, hill tribe culture, orchid farm, and Doi Inthanon.',
  },
  {
    slug: 'package04-chiang-mai-chiang-rai-exclusive-package',
    title: 'Package04: Exclusive Chiang Mai and Chiang Rai Package',
    titleTh: 'แพ็กเกจเชียงใหม่-เชียงราย 3 วัน',
    excerpt:
      'A 3-day Northern Thailand package combining Chiang Mai nature and crafts with a full Chiang Rai sightseeing route.',
    excerptTh:
      'แพ็กเกจ 3 วัน รวมกิจกรรมเชียงใหม่และเส้นทางท่องเที่ยวเชียงรายแบบเต็มวัน',
    description:
      'This private package combines two days around Chiang Mai with one day in Chiang Rai. Suggested routing includes elephant activities, Sankampaeng handicraft village, Doi Inthanon National Park, hot spring, White Temple, Golden Triangle, Long Neck Village, and Mae Sai before returning to Chiang Mai.',
    descriptionTh:
      'โปรแกรมส่วนตัว 3 วัน ผสมผสานกิจกรรมในเชียงใหม่และเชียงราย เส้นทางแนะนำมีทั้งกิจกรรมช้าง หมู่บ้านหัตถกรรมสันกำแพง ดอยอินทนนท์ น้ำพุร้อน วัดร่องขุ่น สามเหลี่ยมทองคำ หมู่บ้านกะเหรี่ยงคอยาว และแม่สาย',
    duration: '3 days',
    location: 'Chiang Mai and Chiang Rai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 4,500 - 14,000 THB / person',
    image: northernThailandPackageImage,
    highlights: [
      'Elephant activities in Chiang Mai',
      'Sankampaeng handicraft village',
      'Doi Inthanon National Park',
      'White Temple and Golden Triangle',
      'Long Neck Village and Mae Sai',
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
      'Chiang Mai and Chiang Rai 3-Day Package | Unix Peak Travel',
    seoDescription:
      'Plan a 3-day Chiang Mai and Chiang Rai private package with elephant activities, Doi Inthanon, White Temple, Golden Triangle, Long Neck Village, and Mae Sai.',
  },
  {
    slug: 'package05-chiang-mai-sukhothai-package',
    title: 'Package05: Chiang Mai to Sukhothai Heritage Package',
    titleTh: 'แพ็กเกจเชียงใหม่-สุโขทัย 2 วัน',
    excerpt:
      'A 2-day heritage route from Chiang Mai to Sukhothai, Lampang, Phitsanulok, and Lamphun.',
    excerptTh:
      'แพ็กเกจมรดกประวัติศาสตร์ 2 วัน จากเชียงใหม่สู่สุโขทัย ลำปาง พิษณุโลก และลำพูน',
    description:
      'This 2-day package is designed for travelers interested in Thai history and ancient cities. Suggested stops include Wat Phra That Lampang Luang, Sukhothai Historical Park, Phra Buddha Chinnarat in Phitsanulok, and Wat Phra That Hariphunchai in Lamphun before returning to Chiang Mai.',
    descriptionTh:
      'แพ็กเกจ 2 วันนี้เหมาะสำหรับผู้สนใจประวัติศาสตร์ไทยและเมืองโบราณ เส้นทางแนะนำรวมวัดพระธาตุลำปางหลวง อุทยานประวัติศาสตร์สุโขทัย พระพุทธชินราช จังหวัดพิษณุโลก และวัดพระธาตุหริภุญชัย จังหวัดลำพูน',
    duration: '2 days',
    location: 'Sukhothai, Lampang, Phitsanulok and Lamphun',
    groupSize: 'Private package tour',
    price: 'Start from 2,500 - 10,000 THB / person',
    image: northernThailandPackageImage,
    highlights: [
      'Wat Phra That Lampang Luang',
      'Sukhothai Historical Park',
      'Ancient capital heritage route',
      'Phra Buddha Chinnarat in Phitsanulok',
      'Wat Phra That Hariphunchai in Lamphun',
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
      'Chiang Mai to Sukhothai 2-Day Heritage Package | Unix Peak Travel',
    seoDescription:
      'Explore a 2-day Chiang Mai to Sukhothai heritage package with Lampang, Sukhothai Historical Park, Phitsanulok, and Lamphun.',
  },
  {
    slug: 'package06-chiang-mai-nature-package',
    title: 'Package06: Chiang Mai Nature Package',
    titleTh: 'แพ็กเกจธรรมชาติเชียงใหม่ 2 วัน',
    excerpt:
      'A 2-day Chiang Mai nature package combining elephant activities, local handicrafts, and Doi Inthanon National Park.',
    excerptTh:
      'แพ็กเกจธรรมชาติเชียงใหม่ 2 วัน รวมกิจกรรมช้าง หมู่บ้านหัตถกรรม และดอยอินทนนท์',
    description:
      'This 2-day package focuses on Chiang Mai nature and soft adventure. Suggested routing includes elephant safari-style activities, Sankampaeng handicraft village, and a full day at Doi Inthanon National Park.',
    descriptionTh:
      'แพ็กเกจ 2 วันนี้เน้นธรรมชาติและกิจกรรมเบาๆ ในเชียงใหม่ เส้นทางแนะนำรวมกิจกรรมช้าง หมู่บ้านหัตถกรรมสันกำแพง และเที่ยวอุทยานแห่งชาติดอยอินทนนท์แบบเต็มวัน',
    duration: '2 days',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 3,300 - 8,300 THB / person',
    image: northernThailandPackageImage,
    highlights: [
      'Elephant activities',
      'Sankampaeng handicraft village',
      'Doi Inthanon National Park',
      'Northern Thailand nature route',
      'Flexible private pacing',
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
    seoTitle: 'Chiang Mai Nature 2-Day Package | Unix Peak Travel',
    seoDescription:
      'Plan a 2-day Chiang Mai nature package with elephant activities, Sankampaeng handicraft village, and Doi Inthanon National Park.',
  },
  {
    slug: 'package07-discover-chiang-mai-package',
    title: 'Package07: Discover Chiang Mai Package',
    titleTh: 'แพ็กเกจ Discover Chiang Mai 2 วัน',
    excerpt:
      'A 2-day Chiang Mai sightseeing route with Doi Suthep, hot spring, cave, handicrafts, elephant activities, orchids, Tiger Kingdom, and hill tribe culture.',
    excerptTh:
      'แพ็กเกจเชียงใหม่ 2 วัน รวมวัด ธรรมชาติ น้ำพุร้อน งานหัตถกรรม กิจกรรมช้าง และวัฒนธรรมชาวเขา',
    description:
      'This 2-day sightseeing package is suitable for first-time Chiang Mai visitors. Suggested stops include Doi Suthep Temple, Muang On Cave, Sankampaeng Hot Spring, handicraft villages, Mae Sa elephant activities, orchid farm, Tiger Kingdom, and Karen Long Neck and hill tribe village.',
    descriptionTh:
      'แพ็กเกจ 2 วันนี้เหมาะสำหรับผู้มาเชียงใหม่ครั้งแรก เส้นทางแนะนำรวมวัดพระธาตุดอยสุเทพ ถ้ำเมืองออน น้ำพุร้อนสันกำแพง หมู่บ้านหัตถกรรม กิจกรรมช้างแม่สา สวนกล้วยไม้ Tiger Kingdom และหมู่บ้านกะเหรี่ยงคอยาว',
    duration: '2 days',
    location: 'Chiang Mai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 2,500 - 7,000 THB / person',
    image: northernThailandPackageImage,
    highlights: [
      'Doi Suthep Temple',
      'Muang On Cave and Sankampaeng Hot Spring',
      'Handicraft villages',
      'Mae Sa elephant activities and orchid farm',
      'Tiger Kingdom and Karen Long Neck Village',
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
    seoTitle: 'Discover Chiang Mai 2-Day Package | Unix Peak Travel',
    seoDescription:
      'Discover Chiang Mai in 2 days with Doi Suthep, Muang On Cave, Sankampaeng Hot Spring, handicrafts, elephant activities, orchids, and hill tribe culture.',
  },
  {
    slug: 'package08-chiang-mai-nature-heritage-package',
    title: 'Package08: Chiang Mai Nature and Heritage City Package',
    titleTh: 'แพ็กเกจธรรมชาติและเมืองมรดกเชียงใหม่ 2 วัน',
    excerpt:
      'A 2-day package combining Doi Inthanon nature with Lampang and Lamphun cultural heritage.',
    excerptTh:
      'แพ็กเกจ 2 วัน รวมธรรมชาติดอยอินทนนท์และเส้นทางมรดกวัฒนธรรมลำปาง-ลำพูน',
    description:
      'This package balances nature and heritage. Suggested routing includes Doi Inthanon National Park, the Thai Elephant Conservation Center area, Wat Phra That Lampang Luang, Wat Phra That Hariphunchai, and Wat Chamadevi before returning to Chiang Mai.',
    descriptionTh:
      'โปรแกรมนี้ผสมผสานธรรมชาติและวัฒนธรรม เส้นทางแนะนำรวมดอยอินทนนท์ พื้นที่ศูนย์อนุรักษ์ช้างไทย วัดพระธาตุลำปางหลวง วัดพระธาตุหริภุญชัย และวัดจามเทวี ก่อนกลับเชียงใหม่',
    duration: '2 days',
    location: 'Chiang Mai, Lampang and Lamphun',
    groupSize: 'Private package tour',
    price: 'Start from 2,500 - 8,200 THB / person',
    image: northernThailandPackageImage,
    highlights: [
      'Doi Inthanon National Park',
      'Thai Elephant Conservation Center area',
      'Wat Phra That Lampang Luang',
      'Wat Phra That Hariphunchai',
      'Wat Chamadevi',
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
      'Chiang Mai Nature and Heritage 2-Day Package | Unix Peak Travel',
    seoDescription:
      'Plan a 2-day Chiang Mai nature and heritage package with Doi Inthanon, Lampang, Lamphun, Wat Phra That Lampang Luang, and Wat Hariphunchai.',
  },
  {
    slug: 'package09-amazing-chiang-mai-chiang-rai-package',
    title: 'Package09: Amazing Chiang Mai and Chiang Rai Tour Package',
    titleTh: 'แพ็กเกจ Amazing Chiang Mai - Chiang Rai 3 วัน',
    excerpt:
      'A 3-day Chiang Mai and Chiang Rai package with temples, elephant activities, dinner culture, White Temple, Golden Triangle, Doi Tung, and hill tribe culture.',
    excerptTh:
      'แพ็กเกจ 3 วัน รวมเชียงใหม่และเชียงราย เหมาะสำหรับผู้ที่ต้องการเที่ยวไฮไลต์ภาคเหนือแบบครบขึ้น',
    description:
      'This 3-day package combines one highlight day in Chiang Mai with two days in Chiang Rai. Suggested stops include Doi Suthep Temple, Tiger Kingdom, orchid farm, Mae Sa elephant activities, Kantoke dinner, hot spring, White Temple, Chiang Saen ancient city, Mae Sai, Doi Tung Palace, Mae Fah Luang Garden, and Long Neck Village.',
    descriptionTh:
      'แพ็กเกจ 3 วันนี้รวมหนึ่งวันไฮไลต์เชียงใหม่และสองวันเชียงราย เส้นทางแนะนำมีวัดพระธาตุดอยสุเทพ Tiger Kingdom สวนกล้วยไม้ กิจกรรมช้างแม่สา ขันโตก น้ำพุร้อน วัดร่องขุ่น เมืองโบราณเชียงแสน แม่สาย พระตำหนักดอยตุง สวนแม่ฟ้าหลวง และหมู่บ้านกะเหรี่ยงคอยาว',
    duration: '3 days',
    location: 'Chiang Mai and Chiang Rai, Thailand',
    groupSize: 'Private package tour',
    price: 'Start from 5,000 - 15,000 THB / person',
    image: northernThailandPackageImage,
    highlights: [
      'Doi Suthep Temple and Chiang Mai highlights',
      'Mae Sa elephant activities and orchid farm',
      'Kantoke dinner',
      'White Temple and Chiang Saen ancient city',
      'Doi Tung Palace and Mae Fah Luang Garden',
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
      'Amazing Chiang Mai and Chiang Rai 3-Day Package | Unix Peak Travel',
    seoDescription:
      'Book an Amazing Chiang Mai and Chiang Rai 3-day package with Doi Suthep, elephant activities, Kantoke dinner, White Temple, Mae Sai, Doi Tung, and Long Neck Village.',
  },
  {
    slug: 'package10-ban-mae-kampong-2-day-tour',
    title: 'Package10: Ban Mae Kampong 2-Day Tour',
    titleTh: 'แพ็กเกจบ้านแม่กำปอง 2 วัน',
    excerpt:
      'A 2-day Ban Mae Kampong village stay program for travelers who want a slower local countryside experience near Chiang Mai.',
    excerptTh:
      'แพ็กเกจบ้านแม่กำปอง 2 วัน สำหรับผู้ที่อยากสัมผัสวิถีหมู่บ้านและธรรมชาติใกล้เชียงใหม่',
    description:
      'This 2-day Ban Mae Kampong program is designed for travelers who want a local village atmosphere and a slower countryside pace. The route can include village walks, mountain scenery, local food, and an overnight stay arranged around the group style.',
    descriptionTh:
      'โปรแกรมบ้านแม่กำปอง 2 วันเหมาะสำหรับผู้ที่ต้องการพักผ่อนแบบชุมชนและสัมผัสบรรยากาศชนบทใกล้เชียงใหม่ สามารถจัดเส้นทางเดินชมหมู่บ้าน วิวภูเขา อาหารท้องถิ่น และที่พักค้างคืนตามสไตล์ของกลุ่ม',
    duration: '2 days',
    location: 'Ban Mae Kampong, Chiang Mai',
    groupSize: 'Private package tour',
    price: 'Start from 2,600 - 11,000 THB / person',
    image: northernThailandPackageImage,
    highlights: [
      'Ban Mae Kampong village atmosphere',
      'Countryside and mountain scenery',
      'Local food experience',
      'Optional overnight stay',
      'Flexible slow-travel pacing',
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
    seoTitle: 'Ban Mae Kampong 2-Day Tour | Unix Peak Travel',
    seoDescription:
      'Plan a Ban Mae Kampong 2-day tour from Chiang Mai with village walks, local food, mountain scenery, overnight stay options, and private trip support.',
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug)
}
