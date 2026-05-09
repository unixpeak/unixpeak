import { siteInfo } from '@/data/site'
import { tours } from '@/data/tours'
import HeroSection from './sections/HeroSection/HeroSection'
import ServicesSection from './sections/ServicesSection/ServicesSection'
import FeaturedToursSection from './sections/FeaturedToursSection/FeaturedToursSection'
import WhyChooseSection from './sections/WhyChooseSection/WhyChooseSection'
import FinalCtaSection from './sections/FinalCtaSection/FinalCtaSection'
import SocialmediaSection from './sections/SocialmediaSection/SocialmediaSection'
import styles from './page.module.css'

const featuredTours = tours.slice(0, 3)

const services = [
  {
    title: 'Private Tours',
    titleTh: 'ทัวร์ส่วนตัว',
    description:
      'Flexible private trips with route planning, transport coordination, and local support.',
  },
  {
    title: 'Tailor-Made Travel',
    titleTh: 'แพ็กเกจออกแบบเฉพาะ',
    description:
      'Custom travel plans built around your destination, schedule, group size, and budget.',
  },
  {
    title: 'Corporate Travel & MICE',
    titleTh: 'ทริปองค์กรและ MICE',
    description:
      'Business travel, meetings, incentives, events, and company trip planning.',
  },
  {
    title: 'Group Tours',
    titleTh: 'ทัวร์หมู่คณะ',
    description:
      'Organized travel programs for families, agencies, schools, companies, and groups.',
  },
]

const reasons = [
  'Licensed travel company in Thailand',
  'Custom planning for private and group travel',
  'Private, corporate, B2B, and MICE trip support',
  'Local coordination for smoother travel operations',
]

export default function PageClient() {
  const primaryPhone = siteInfo.contact.phones[0]

  const lineLink =
    siteInfo.socialLinks.find((link) => link.label === 'LINE OA')?.href ??
    `https://line.me/ti/p/~${siteInfo.contact.lineOA}`
  const facebookLink =
    siteInfo.socialLinks.find((link) => link.label === 'Facebook')?.href ??
    'https://www.facebook.com/UnixPeak'
  const instagramLink =
    siteInfo.socialLinks.find((link) => link.label === 'Instagram')?.href ??
    'https://www.instagram.com/unixpeak.thailand'

  return (
    <div className={styles.page}>
      <HeroSection
        companyName={siteInfo.companyName}
      />

      <ServicesSection services={services} />

      <FeaturedToursSection tours={featuredTours} />

      <WhyChooseSection reasons={reasons} />

      <FinalCtaSection
        whatsapp={siteInfo.contact.whatsapp}
        lineOA={siteInfo.contact.lineOA}
        lineLink={lineLink}
        primaryPhone={primaryPhone}
      />

      <SocialmediaSection
        facebookHref={facebookLink}
        instagramHref={instagramLink}
      />
    </div>
  )
}
