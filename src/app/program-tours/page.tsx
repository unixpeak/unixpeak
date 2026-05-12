import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteInfo } from '@/data/site'
import { tours } from '@/data/tours'
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

      <section className={styles.tourList} aria-label="All program tours">
        {tours.map((tour) => (
          <article className={styles.tourCard} key={tour.slug}>
            <Link
              className={styles.imageLink}
              href={`/program-tours/${tour.slug}`}
              aria-label={`View ${tour.title}`}
            >
              <Image
                className={styles.tourImage}
                src={tour.image}
                alt={`${tour.title} travel program by Unix Peak Travel`}
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1400px) 50vw, 33vw"
              />
            </Link>

            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <div>
                  <p className={styles.cardEyebrow}>{tour.location}</p>

                  <h2>
                    <Link href={`/program-tours/${tour.slug}`}>
                      {tour.title}
                    </Link>
                  </h2>

                  <p className={styles.titleTh} lang="th">
                    {tour.titleTh}
                  </p>
                </div>

                <p className={styles.price}>{tour.price}</p>
              </div>

              <div className={styles.copy}>
                <p>{tour.excerpt}</p>
                <p lang="th">{tour.excerptTh}</p>
              </div>

              <dl className={styles.facts}>
                <div>
                  <dt>Duration</dt>
                  <dd>{tour.duration}</dd>
                </div>

                <div>
                  <dt>Type</dt>
                  <dd>{tour.groupSize}</dd>
                </div>

                <div>
                  <dt>Area</dt>
                  <dd>{tour.location}</dd>
                </div>
              </dl>

              <div className={styles.highlights}>
                <h3>Highlights</h3>

                <ul>
                  {tour.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <Link
                className={styles.detailsLink}
                href={`/program-tours/${tour.slug}`}
              >
                View tour details
              </Link>
            </div>
          </article>
        ))}
      </section>

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
