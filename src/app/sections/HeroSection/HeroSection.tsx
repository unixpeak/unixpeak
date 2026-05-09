import Link from 'next/link'
import { tours } from '@/data/tours'
import Slider from './Slider'
import styles from './HeroSection.module.css'

type HeroSectionProps = {
  companyName: string
}

const heroImages = [
  {
    src: '/images/home/unixpeak-banner.jpg',
    alt: 'Unix Peak Travel tailor-made Thailand private tours and corporate travel programs',
  },
  ...tours.slice(0, 4).map((tour) => ({
    src: tour.image,
    alt: `${tour.title} travel program by Unix Peak Travel`,
  })),
].filter(
  (image, index, images) =>
    image.src.trim().length > 0 &&
    images.findIndex((item) => item.src === image.src) === index,
)

export default function HeroSection({ companyName }: HeroSectionProps) {
  return (
    <section id="hero" className={styles.section}>
      <Slider images={heroImages} />

      <div className={`container ${styles.content}`}>
        <div className={styles.contentGrid}>
          <div className={styles.textBox}>
            <p className={styles.kicker}>UNIXPEAK TRAVEL</p>

            <h1 className={styles.title}>
              Thailand tours,
              <br />
              private trips and MICE
            </h1>

            <p className={styles.desc}>
              {companyName} plans private tours, group travel, B2B travel, MICE,
              and corporate trips across Thailand and selected international
              destinations.
            </p>

            <p className={styles.descTh}>
              รับวางแผนทริปส่วนตัว ทัวร์หมู่คณะ ทริปองค์กร B2B และ MICE ในไทย
              พร้อมโปรแกรมต่างประเทศตามความเหมาะสมของกลุ่ม
            </p>

            <div className={styles.actions}>
              <Link href="/program-tours" className="btn btnPrimary">
                Explore Program Tours
              </Link>

              <Link href="/contact" className="btn">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
