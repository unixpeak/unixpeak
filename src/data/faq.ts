export type FaqItem = {
  question: string;
  answer: string;
  questionTh: string;
  answerTh: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Do you offer private tours in Thailand?",
    answer:
      "Yes. Unix Peak Travel arranges private tours in Thailand for couples, families, friends, VIP guests, and small groups. Routes, transport, timing, and activities can be adjusted to your travel style.",
    questionTh: "มีบริการทัวร์ส่วนตัวในประเทศไทยไหม?",
    answerTh:
      "มีบริการทัวร์ส่วนตัวสำหรับคู่รัก ครอบครัว เพื่อน แขก VIP และกรุ๊ปเล็ก สามารถปรับเส้นทาง รถ เวลา และกิจกรรมให้เหมาะกับสไตล์การเดินทางได้",
  },
  {
    question: "Can you create a custom itinerary?",
    answer:
      "Yes. We create tailor-made itineraries based on destination, duration, budget, interests, hotel style, food preferences, and group size. English is used as the primary planning language, with Thai support available.",
    questionTh: "สามารถออกแบบโปรแกรมเดินทางเฉพาะได้ไหม?",
    answerTh:
      "ได้ เราออกแบบโปรแกรมตามจุดหมาย จำนวนวัน งบประมาณ ความสนใจ โรงแรม อาหาร และจำนวนผู้เดินทาง โดยสื่อสารได้ทั้งภาษาอังกฤษและภาษาไทย",
  },
  {
    question: "Do you organize group tours?",
    answer:
      "Yes. We support group tours for families, schools, associations, companies, agencies, and special interest groups. Programs can include transport, guides, hotels, meals, activities, and local coordination.",
    questionTh: "รับจัดทัวร์หมู่คณะหรือไม่?",
    answerTh:
      "รับจัดทัวร์หมู่คณะสำหรับครอบครัว โรงเรียน สมาคม บริษัท เอเจนซี่ และกลุ่มเฉพาะทาง สามารถจัดรถ ไกด์ โรงแรม อาหาร กิจกรรม และการประสานงานในพื้นที่",
  },
  {
    question: "Can you handle corporate trips?",
    answer:
      "Yes. We plan corporate travel for team building, incentive trips, client hosting, executive travel, company outings, and business partner programs in Thailand and selected international destinations.",
    questionTh: "รับจัดทริปองค์กรไหม?",
    answerTh:
      "รับจัดทริปองค์กรสำหรับทีมบิลดิ้ง อินเซนทีฟ รับรองลูกค้า ทริปผู้บริหาร เอาท์ติ้งบริษัท และโปรแกรมพาร์ทเนอร์ธุรกิจ ทั้งในไทยและต่างประเทศบางจุดหมาย",
  },
  {
    question: "What MICE services do you provide?",
    answer:
      "Our MICE support can cover meetings, incentives, conferences, events, destination planning, group transport, hotel coordination, venue support, activities, and on-ground operation planning.",
    questionTh: "บริการ MICE ครอบคลุมอะไรบ้าง?",
    answerTh:
      "บริการ MICE ครอบคลุมการประชุม อินเซนทีฟ สัมมนา อีเวนต์ การวางแผนจุดหมาย รถหมู่คณะ โรงแรม สถานที่ กิจกรรม และการเตรียมงานหน้างาน",
  },
  {
    question: "Which destinations do you cover?",
    answer:
      "Unix Peak Travel offers travel programs for Thailand, Vietnam, Bali, and Kazakhstan. Thailand is a core destination, and international programs can be tailored for private, group, and corporate travel.",
    questionTh: "มีจุดหมายปลายทางที่ไหนบ้าง?",
    answerTh:
      "Unix Peak Travel ให้บริการโปรแกรมท่องเที่ยวประเทศไทย เวียดนาม บาหลี และคาซัคสถาน โดยประเทศไทยเป็นจุดหมายหลัก และโปรแกรมต่างประเทศสามารถปรับสำหรับกรุ๊ปส่วนตัว หมู่คณะ และองค์กร",
  },
  {
    question: "How do I contact Unix Peak Travel or make a payment inquiry?",
    answer:
      "You can contact us by phone, WhatsApp, LINE OA, Facebook, or Instagram. For payment details, package quotation, and booking confirmation, please contact the team directly so we can confirm the latest program and availability.",
    questionTh: "ติดต่อ Unix Peak Travel หรือสอบถามการชำระเงินได้อย่างไร?",
    answerTh:
      "ติดต่อได้ทางโทรศัพท์ WhatsApp, LINE OA, Facebook หรือ Instagram หากต้องการรายละเอียดการชำระเงิน ใบเสนอราคา หรือยืนยันการจอง กรุณาติดต่อทีมงานโดยตรงเพื่อตรวจสอบข้อมูลล่าสุด",
  },
  {
    question: "Is Unix Peak Travel licensed by TAT?",
    answer:
      "Yes. Unix Peak Travel operates with TAT licence number 11/11298.",
    questionTh: "Unix Peak Travel มีใบอนุญาต ททท. หรือไม่?",
    answerTh:
      "มี Unix Peak Travel ดำเนินงานภายใต้ใบอนุญาต ททท. เลขที่ 11/11298",
  },
  {
    question: "What is the booking process?",
    answer:
      "Send your destination, travel dates, number of travelers, budget range, and preferred travel style. We review the request, suggest a route, prepare a quotation, and confirm details before booking services.",
    questionTh: "ขั้นตอนการจองเป็นอย่างไร?",
    answerTh:
      "แจ้งจุดหมาย วันที่เดินทาง จำนวนผู้เดินทาง งบประมาณโดยประมาณ และสไตล์ทริปที่ต้องการ ทีมงานจะตรวจสอบข้อมูล แนะนำเส้นทาง จัดทำใบเสนอราคา และยืนยันรายละเอียดก่อนจองบริการ",
  },
  {
    question: "Can travel programs be arranged for B2B partners?",
    answer:
      "Yes. We support agencies, companies, and business partners with travel program planning, destination coordination, supplier support, and group travel operations.",
    questionTh: "รองรับงานสำหรับพาร์ทเนอร์ B2B หรือไม่?",
    answerTh:
      "รองรับงานสำหรับเอเจนซี่ บริษัท และพาร์ทเนอร์ธุรกิจ ทั้งการวางแผนโปรแกรม ประสานงานจุดหมาย ซัพพลายเออร์ และการดูแลทริปหมู่คณะ",
  },
];
