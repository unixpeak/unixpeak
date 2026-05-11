import Link from 'next/link'
import Slider from './Slider'
import styles from './HeroSection.module.css'

type HeroSectionProps = {
  companyName: string
}

const heroImages = [
  {
    src: '/images/hero/Hero-1.png',
    alt: 'Unix Peak Travel Thailand tour program slide',
  },
  {
    src: '/images/hero/Hero-2.png',
    alt: 'Unix Peak Travel private trip planning slide',
  },
  {
    src: '/images/hero/Hero-3.png',
    alt: 'Unix Peak Travel group tour and destination slide',
  },
  {
    src: '/images/hero/Hero-4.png',
    alt: 'Unix Peak Travel corporate travel and MICE slide',
  },
  {
    src: '/images/hero/Hero-5.png',
    alt: 'Unix Peak Travel tailor-made travel package slide',
  },
  {
    src: '/images/hero/Hero-6.png',
    alt: 'Unix Peak Travel international travel program slide',
  },
]

export default function HeroSection({ companyName }: HeroSectionProps) {
  return (
    <section id="hero" className={styles.section}>
      <Slider images={heroImages} />

      <div className={`container ${styles.content}`}>
        <div className={styles.contentGrid}>
          <div className={styles.textBox}>
            <p className={styles.kicker}>UNIXPEAK TRAVEL</p>

            <h1 className={styles.title}>
              Thailand tours, private trips and MICE
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
