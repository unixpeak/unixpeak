import type { Metadata } from 'next'
import Link from 'next/link'
import { siteInfo } from '@/data/site'
import { tours } from '@/data/tours'
import { ProgramToursFilter } from './ProgramToursFilter'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Program Tours',
  description:
    'Explore Unix Peak Travel programs for Thailand day trips, private tours, tailor-made travel, corporate trips, MICE, Vietnam, Bali, and Kazakhstan.',
  alternates: {
    canonical: '/program-tours',
  },
  openGraph: {
    title: 'Program Tours | Unix Peak Travel',
    description:
      'Private tours, tailor-made travel packages, group tours, MICE, corporate trips, and selected international travel programs by Unix Peak Travel.',
    url: '/program-tours',
  },
}

export default function ProgramToursPage() {
  const whatsappNumber = siteInfo.contact.whatsapp.replace(/\D/g, '')

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Program Tours</p>

          <h1>Thailand tours made simple for every type of trip</h1>

          <div className={styles.heroText}>
            <p>
              Explore selected travel programs by {siteInfo.companyName}. Start
              with a ready-made tour, then adjust the route, pace, transport,
              and activities for your group.
            </p>

            <p lang="th">
              เลือกโปรแกรมทัวร์เบื้องต้น แล้วปรับเส้นทาง เวลาเดินทาง
              และรูปแบบบริการให้เหมาะกับทริปส่วนตัว หมู่คณะ องค์กร หรือ MICE
            </p>
          </div>
        </div>

        <div className={styles.heroPanel} aria-label="Tour service summary">
          <div>
            <strong>{tours.length}</strong>
            <span>Ready programs</span>
          </div>

          <div>
            <strong>EN / TH</strong>
            <span>Bilingual support</span>
          </div>

          <div>
            <strong>Private</strong>
            <span>Groups & business trips</span>
          </div>
        </div>
      </section>

      <ProgramToursFilter />

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>Custom itinerary</p>

          <h2>Need a trip built around your dates and group?</h2>

          <p>
            Contact {siteInfo.companyName} for private tours, corporate trips,
            MICE, B2B travel programs, and tailor-made planning.
          </p>
        </div>

        <div className={styles.ctaActions}>
          <a
            className={styles.primaryButton}
            href={`https://wa.me/${whatsappNumber}`}
          >
            WhatsApp {siteInfo.contact.whatsapp}
          </a>

          <Link className={styles.secondaryButton} href="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
