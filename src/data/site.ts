export type ContactPerson = {
  name: string;
  nameTh: string;
  phone: string;
};

export type SocialLink = {
  label: string;
  value: string;
  href: string;
};

export type NavigationLink = {
  label: string;
  labelTh: string;
  href: string;
};

export type Destination = {
  name: string;
  nameTh: string;
};

export type Service = {
  name: string;
  nameTh: string;
  description: string;
  descriptionTh: string;
};

export type SiteInfo = {
  companyName: string;
  shortDescription: string;
  shortDescriptionTh: string;
  tatLicence: string;
  contact: {
    phones: ContactPerson[];
    whatsapp: string;
    lineOA: string;
  };
  socialLinks: SocialLink[];
  mainNavigation: NavigationLink[];
  destinations: Destination[];
  services: Service[];
};

export const siteInfo: SiteInfo = {
  companyName: 'Unix Peak Travel',
  shortDescription:
    'Thailand-based travel company for tailor-made trips, private tours, group tours, B2B travel, MICE, and corporate travel programs.',
  shortDescriptionTh:
    'บริษัทท่องเที่ยวในประเทศไทย สำหรับทริปออกแบบเฉพาะ ทัวร์ส่วนตัว ทัวร์หมู่คณะ งาน B2B, MICE และทริปองค์กร',
  tatLicence: '11/11298',
  contact: {
    phones: [
      {
        name: 'Fuse',
        nameTh: 'คุณฟิวส์',
        phone: '099-593-6529',
      },
      {
        name: 'Opal',
        nameTh: 'คุณโอปอล์',
        phone: '085-156-4236',
      },
    ],
    whatsapp: '+66995936529',
    lineOA: '@703ufvoq',
  },
  socialLinks: [
    {
      label: 'Facebook',
      value: 'UnixPeak',
      href: 'https://www.facebook.com/UnixPeak',
    },
    {
      label: 'Instagram',
      value: '@unixpeak.thailand',
      href: 'https://www.instagram.com/unixpeak.thailand',
    },
    {
      label: 'LINE OA',
      value: '@703ufvoq',
      href: 'https://line.me/R/ti/p/@703ufvoq',
    },
    {
      label: 'WhatsApp',
      value: '+66995936529',
      href: 'https://wa.me/66995936529',
    },
  ],
  mainNavigation: [
    {
      label: 'Home',
      labelTh: 'หน้าแรก',
      href: '/#top',
    },
    {
      label: 'Program Tours',
      labelTh: 'โปรแกรมทัวร์',
      href: '/program-tours',
    },
    {
      label: 'ทัวร์ต่างประเทศ',
      labelTh: 'แพ็กเกจทัวร์',
      href: '/tour-packages',
    },
    {
      label: 'About Us',
      labelTh: 'เกี่ยวกับเรา',
      href: '/about',
    },
    {
      label: 'FAQ',
      labelTh: 'คำถามที่พบบ่อย',
      href: '/faq',
    },
    {
      label: 'Contact',
      labelTh: 'ติดต่อเรา',
      href: '/contact',
    },
  ],
  destinations: [
    {
      name: 'Chiang Mai',
      nameTh: 'เชียงใหม่',
    },
    {
      name: 'Bangkok',
      nameTh: 'กรุงเทพฯ',
    },
    {
      name: 'Chiang Rai',
      nameTh: 'เชียงราย',
    },
    {
      name: 'Ayutthaya',
      nameTh: 'อยุธยา',
    },
  ],
  services: [
    {
      name: 'Tailor-made travel',
      nameTh: 'แพ็กเกจท่องเที่ยวออกแบบเฉพาะ',
      description:
        'Custom travel plans built around route, pace, budget, interests, and group profile.',
      descriptionTh:
        'วางแผนทริปให้เหมาะกับเส้นทาง เวลาเดินทาง งบประมาณ ความสนใจ และรูปแบบของกลุ่ม',
    },
    {
      name: 'Private tours',
      nameTh: 'ทัวร์ส่วนตัว',
      description:
        'Flexible private tours with planned transport, guides, activities, and local support.',
      descriptionTh:
        'ทัวร์ส่วนตัวที่ปรับได้ตามเวลาและความสนใจ พร้อมประสานรถ ไกด์ กิจกรรม และทีมดูแลในพื้นที่',
    },
    {
      name: 'Group tours',
      nameTh: 'ทัวร์หมู่คณะ',
      description:
        'Organized travel programs for families, friends, schools, associations, and special interest groups.',
      descriptionTh:
        'โปรแกรมสำหรับครอบครัว เพื่อน โรงเรียน สมาคม บริษัท และกลุ่มที่มีความสนใจเฉพาะ',
    },
    {
      name: 'B2B travel',
      nameTh: 'บริการท่องเที่ยวสำหรับพาร์ทเนอร์ B2B',
      description:
        'Travel program support for agencies, organizations, and business partners.',
      descriptionTh:
        'บริการวางแผนและประสานโปรแกรมท่องเที่ยวสำหรับเอเจนซี่ องค์กร และพาร์ทเนอร์ธุรกิจ',
    },
    {
      name: 'MICE',
      nameTh: 'MICE',
      description:
        'Meetings, incentives, conferences, and events with travel logistics and destination planning.',
      descriptionTh:
        'ดูแลการประชุม อินเซนทีฟ สัมมนา และอีเวนต์ พร้อมวางแผนการเดินทางและการประสานงาน',
    },
    {
      name: 'Corporate trips',
      nameTh: 'ทริปองค์กร',
      description:
        'Corporate travel for team building, incentive trips, client hosting, and executive programs.',
      descriptionTh:
        'ทริปองค์กรสำหรับทีมบิลดิ้ง อินเซนทีฟ รับรองลูกค้า เอาท์ติ้ง และโปรแกรมผู้บริหาร',
    },
  ],
}
