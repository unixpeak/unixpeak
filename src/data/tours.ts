export type Tour = {
  slug: string;
  title: string;
  titleTh: string;
  excerpt: string;
  excerptTh: string;
  description: string;
  descriptionTh: string;
  duration: string;
  location: string;
  groupSize: string;
  image: string;
  highlights: string[];
  highlightsTh: string[];
  included: string[];
  includedTh: string[];
  seoTitle: string;
  seoDescription: string;
};

export const tours: Tour[] = [
  {
    slug: "thailand-day-trips",
    title: "Thailand Day Trips",
    titleTh: "ทริปเที่ยวไทยแบบวันเดียว",
    excerpt:
      "Private and group day trips in Thailand with flexible routes, local highlights, and smooth transport planning.",
    excerptTh:
      "ทริปเที่ยวไทยแบบวันเดียวสำหรับส่วนตัวและหมู่คณะ ปรับเส้นทางได้ พร้อมช่วยดูแลการเดินทางให้ราบรื่น",
    description:
      "Explore Thailand in one day with a practical, well-paced tour program. Unix Peak Travel helps plan routes for Bangkok, nearby provinces, cultural sites, food stops, markets, viewpoints, and local experiences.",
    descriptionTh:
      "เหมาะสำหรับผู้ที่มีเวลาจำกัดแต่ต้องการเที่ยวให้คุ้มค่า ทีมงานช่วยวางเส้นทางในกรุงเทพฯ จังหวัดใกล้เคียง แหล่งวัฒนธรรม ร้านอาหาร ตลาด จุดชมวิว และกิจกรรมท้องถิ่น",
    duration: "1 day",
    location: "Thailand",
    groupSize: "Private and group options",
    image: "/images/tours/bangkok-tour.png",
    highlights: [
      "Flexible day trip route planning",
      "Private transport and local coordination",
      "Culture, food, shopping, and nature options",
      "Suitable for visitors with limited travel time",
    ],
    highlightsTh: [
      "ปรับเส้นทางได้ตามเวลาและความสนใจ",
      "ช่วยประสานรถและรายละเอียดในพื้นที่",
      "เลือกได้ทั้งวัฒนธรรม อาหาร ช้อปปิ้ง และธรรมชาติ",
      "เหมาะสำหรับผู้มีเวลาท่องเที่ยวจำกัด",
    ],
    included: [
      "Trip consultation",
      "Suggested itinerary",
      "Transport arrangement",
      "Local travel coordination",
    ],
    includedTh: [
      "ให้คำปรึกษาเส้นทาง",
      "แนะนำโปรแกรมเดินทาง",
      "จัดเตรียมการเดินทาง",
      "ประสานงานการท่องเที่ยวในพื้นที่",
    ],
    seoTitle: "Thailand Day Trips | Private Tours by Unix Peak Travel",
    seoDescription:
      "Plan Thailand day trips with Unix Peak Travel. Private and group tours for Bangkok, nearby provinces, culture, food, markets, and local experiences.",
  },
  {
    slug: "tailor-made-thailand-travel-package",
    title: "Tailor-Made Thailand Travel Package",
    titleTh: "แพ็กเกจเที่ยวไทยออกแบบเฉพาะ",
    excerpt:
      "Custom Thailand travel packages designed around your schedule, interests, travel style, and budget.",
    excerptTh:
      "แพ็กเกจเที่ยวไทยที่ปรับตามวันเดินทาง ความสนใจ สไตล์ทริป และงบประมาณของคุณ",
    description:
      "Plan a Thailand trip that fits your group instead of following a fixed template. We help shape routes, hotels, transport, activities, meals, and local support for leisure travelers, families, VIP guests, and special interest groups.",
    descriptionTh:
      "ออกแบบทริปไทยให้เหมาะกับกลุ่มของคุณ โดยช่วยวางเส้นทาง โรงแรม รถ กิจกรรม มื้ออาหาร และการประสานงานในพื้นที่ เหมาะสำหรับครอบครัว แขก VIP และกลุ่มที่ต้องการโปรแกรมเฉพาะ",
    duration: "Custom duration",
    location: "Thailand",
    groupSize: "Private, family, VIP, and group travel",
    image: "/images/tours/thailand-trip.png",
    highlights: [
      "Custom route and itinerary design",
      "Hotel, transport, activity, and meal planning",
      "Options for leisure, family, luxury, and special interest travel",
      "English primary planning with Thai support available",
    ],
    highlightsTh: [
      "ออกแบบเส้นทางและโปรแกรมตามโจทย์ของกลุ่ม",
      "ช่วยวางแผนโรงแรม รถ กิจกรรม และมื้ออาหาร",
      "เหมาะกับทริปพักผ่อน ครอบครัว แขก VIP และกลุ่มเฉพาะทาง",
      "สื่อสารได้ทั้งภาษาอังกฤษและภาษาไทย",
    ],
    included: [
      "Travel consultation",
      "Custom itinerary planning",
      "Supplier and transport coordination",
      "Destination recommendations",
    ],
    includedTh: [
      "ให้คำปรึกษาการเดินทาง",
      "วางแผนโปรแกรมเฉพาะ",
      "ประสานงานซัพพลายเออร์และรถ",
      "แนะนำจุดหมายและกิจกรรม",
    ],
    seoTitle: "Tailor-Made Thailand Travel Packages | Unix Peak Travel",
    seoDescription:
      "Custom Thailand travel packages by Unix Peak Travel for private trips, families, VIP guests, groups, hotels, transport, activities, and local experiences.",
  },
  {
    slug: "corporate-travel-mice",
    title: "Corporate Travel & MICE",
    titleTh: "ทริปองค์กรและ MICE",
    excerpt:
      "Corporate trips, incentive travel, meetings, events, and MICE programs with dependable travel logistics.",
    excerptTh:
      "ทริปองค์กร อินเซนทีฟ ประชุม อีเวนต์ และโปรแกรม MICE พร้อมการประสานงานเดินทางอย่างเป็นระบบ",
    description:
      "Support corporate travel from concept to operation. Unix Peak Travel plans programs for team building, incentive trips, meetings, conferences, site visits, client hosting, and executive travel.",
    descriptionTh:
      "วางแผนและประสานงานทริปองค์กรตั้งแต่แนวคิดจนถึงการเดินทางจริง ครอบคลุมทีมบิลดิ้ง อินเซนทีฟ ประชุม สัมมนา ดูงาน รับรองลูกค้า และทริปผู้บริหาร",
    duration: "Custom duration",
    location: "Thailand and selected international destinations",
    groupSize: "Corporate groups and business partners",
    image: "/images/tours/thailand-trip.png",
    highlights: [
      "Corporate travel and incentive trip planning",
      "Meeting, conference, and event logistics",
      "Transport, venue, hotel, and activity coordination",
      "B2B support for agencies and organizations",
    ],
    highlightsTh: [
      "วางแผนทริปองค์กรและอินเซนทีฟ",
      "ประสานงานประชุม สัมมนา และอีเวนต์",
      "ดูแลรถ สถานที่ โรงแรม และกิจกรรม",
      "รองรับงาน B2B สำหรับเอเจนซี่และองค์กร",
    ],
    included: [
      "Program planning",
      "Travel logistics coordination",
      "Venue and supplier support",
      "On-ground operation planning",
    ],
    includedTh: [
      "วางแผนโปรแกรม",
      "ประสานโลจิสติกส์การเดินทาง",
      "ดูแลสถานที่และซัพพลายเออร์",
      "วางแผนปฏิบัติงานหน้างาน",
    ],
    seoTitle: "Corporate Travel and MICE Thailand | Unix Peak Travel",
    seoDescription:
      "Corporate travel, MICE, incentive trips, meetings, conferences, and business group travel in Thailand by Unix Peak Travel.",
  },
  {
    slug: "vietnam-travel-program",
    title: "Vietnam Travel Program",
    titleTh: "โปรแกรมท่องเที่ยวเวียดนาม",
    excerpt:
      "Vietnam travel programs for private groups, company trips, leisure travel, and B2B partners.",
    excerptTh:
      "โปรแกรมเวียดนามสำหรับกรุ๊ปส่วนตัว ทริปบริษัท ทริปพักผ่อน และพาร์ทเนอร์ B2B",
    description:
      "Discover Vietnam with routes that can include city culture, food, scenic landscapes, heritage towns, and company travel programs. The itinerary can be adjusted by travel season, group size, and preferred pace.",
    descriptionTh:
      "วางเส้นทางเวียดนามได้ทั้งเมืองหลัก อาหาร วัฒนธรรม วิวธรรมชาติ เมืองมรดก และทริปบริษัท โดยปรับตามฤดูกาล จำนวนผู้เดินทาง และจังหวะที่กลุ่มต้องการ",
    duration: "Custom duration",
    location: "Vietnam",
    groupSize: "Private groups, group tours, and corporate groups",
    image: "/images/tours/thailand-trip.png",
    highlights: [
      "Flexible Vietnam itinerary planning",
      "Leisure, group, and company trip options",
      "Food, culture, heritage, and scenic route ideas",
      "B2B coordination available",
    ],
    highlightsTh: [
      "ปรับโปรแกรมเวียดนามตามฤดูกาลและจำนวนคน",
      "รองรับทริปพักผ่อน หมู่คณะ และบริษัท",
      "แนะนำเส้นทางอาหาร วัฒนธรรม มรดก และวิวธรรมชาติ",
      "ประสานงานกับพาร์ทเนอร์ B2B ได้",
    ],
    included: [
      "Destination consultation",
      "Suggested travel route",
      "Group travel planning",
      "Local supplier coordination",
    ],
    includedTh: [
      "ให้คำปรึกษาจุดหมาย",
      "แนะนำเส้นทางท่องเที่ยว",
      "วางแผนทริปหมู่คณะ",
      "ประสานซัพพลายเออร์ในพื้นที่",
    ],
    seoTitle: "Vietnam Travel Programs | Unix Peak Travel",
    seoDescription:
      "Plan Vietnam travel programs with Unix Peak Travel for private groups, corporate trips, group tours, culture, food, heritage, and scenic routes.",
  },
  {
    slug: "bali-travel-program",
    title: "Bali Travel Program",
    titleTh: "โปรแกรมท่องเที่ยวบาหลี",
    excerpt:
      "Bali travel programs for leisure groups, private trips, incentive travel, and corporate retreats.",
    excerptTh:
      "โปรแกรมบาหลีสำหรับทริปพักผ่อน กรุ๊ปส่วนตัว อินเซนทีฟ และรีทรีตองค์กร",
    description:
      "Create a Bali travel plan with beaches, temples, wellness, cafes, nature, and cultural experiences. Programs can be built for couples, families, friends, incentive groups, and corporate retreats.",
    descriptionTh:
      "ออกแบบทริปบาหลีที่รวมชายหาด วัด เวลเนส คาเฟ่ ธรรมชาติ และวัฒนธรรม เหมาะกับคู่รัก ครอบครัว เพื่อน กรุ๊ปอินเซนทีฟ และรีทรีตองค์กร",
    duration: "Custom duration",
    location: "Bali, Indonesia",
    groupSize: "Private groups, leisure groups, and corporate groups",
    image: "/images/tours/thailand-trip.png",
    highlights: [
      "Bali itinerary planning for different travel styles",
      "Beach, culture, wellness, and nature options",
      "Suitable for leisure and incentive travel",
      "Transport and local coordination support",
    ],
    highlightsTh: [
      "วางแผนทริปบาหลีตามสไตล์ของกลุ่ม",
      "เลือกได้ทั้งชายหาด วัฒนธรรม เวลเนส และธรรมชาติ",
      "เหมาะกับทริปพักผ่อนและอินเซนทีฟ",
      "ช่วยประสานการเดินทางและรายละเอียดในพื้นที่",
    ],
    included: [
      "Trip consultation",
      "Custom itinerary outline",
      "Activity recommendations",
      "Local coordination planning",
    ],
    includedTh: [
      "ให้คำปรึกษาทริป",
      "ร่างโปรแกรมเฉพาะ",
      "แนะนำกิจกรรม",
      "วางแผนประสานงานในพื้นที่",
    ],
    seoTitle: "Bali Travel Program | Unix Peak Travel",
    seoDescription:
      "Bali travel programs by Unix Peak Travel for private trips, leisure groups, incentive travel, corporate retreats, beaches, culture, wellness, and nature.",
  },
  {
    slug: "kazakhstan-travel-program",
    title: "Kazakhstan Travel Program",
    titleTh: "โปรแกรมท่องเที่ยวคาซัคสถาน",
    excerpt:
      "Kazakhstan travel programs for scenic landscapes, city experiences, private groups, and special interest travel.",
    excerptTh:
      "โปรแกรมคาซัคสถานสำหรับธรรมชาติ เมืองสำคัญ กรุ๊ปส่วนตัว และทริปความสนใจเฉพาะ",
    description:
      "Plan a Kazakhstan travel program with dramatic landscapes, city stops, nature routes, and seasonal experiences. The program can be tailored for private groups, photography trips, company groups, and travelers seeking a fresh destination.",
    descriptionTh:
      "วางแผนทริปคาซัคสถานที่รวมธรรมชาติ เมืองสำคัญ เส้นทางถ่ายภาพ และประสบการณ์ตามฤดูกาล เหมาะกับกรุ๊ปส่วนตัว ทริปบริษัท และผู้ที่มองหาจุดหมายใหม่",
    duration: "Custom duration",
    location: "Kazakhstan",
    groupSize: "Private groups, special interest groups, and corporate groups",
    image: "/images/tours/thailand-trip.png",
    highlights: [
      "Custom Kazakhstan route planning",
      "Nature, city, seasonal, and photography-focused options",
      "Suitable for private and corporate groups",
      "Support for a distinctive international destination",
    ],
    highlightsTh: [
      "วางแผนเส้นทางคาซัคสถานตามโจทย์ของกลุ่ม",
      "เลือกได้ทั้งธรรมชาติ เมือง ฤดูกาล และเส้นทางถ่ายภาพ",
      "เหมาะสำหรับกรุ๊ปส่วนตัวและองค์กร",
      "เหมาะกับผู้ที่ต้องการจุดหมายต่างประเทศที่แตกต่าง",
    ],
    included: [
      "Destination consultation",
      "Custom route planning",
      "Group travel coordination",
      "Seasonal travel recommendations",
    ],
    includedTh: [
      "ให้คำปรึกษาจุดหมาย",
      "วางแผนเส้นทางเฉพาะ",
      "ประสานงานทริปหมู่คณะ",
      "แนะนำช่วงเวลาการเดินทาง",
    ],
    seoTitle: "Kazakhstan Travel Program | Unix Peak Travel",
    seoDescription:
      "Custom Kazakhstan travel programs by Unix Peak Travel for private groups, corporate trips, scenic landscapes, seasonal routes, and special interest travel.",
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}
