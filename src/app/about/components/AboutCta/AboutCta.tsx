import Link from 'next/link'
import styles from './AboutCta.module.css'

export function AboutCta() {
  return (
    <section className={styles.cta} aria-labelledby="about-cta-title">
      <div className={styles.ctaCopy}>
        <p className={styles.eyebrow}>Start planning</p>

        <h2 id="about-cta-title">
          Browse our programs or contact the team for a custom itinerary.
        </h2>

        <p>
          Tell us your travel date, destination, group size, and preferred
          style. We will help shape a suitable travel program.
        </p>
      </div>

      <div className={styles.ctaActions}>
        <Link className={styles.primaryButton} href="/program-tours">
          Program Tours
        </Link>

        <Link className={styles.secondaryButton} href="/contact">
          Contact Unix Peak
        </Link>
      </div>
    </section>
  )
}
