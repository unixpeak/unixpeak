import Link from 'next/link'
import { siteInfo } from '@/data/site'
import styles from './AboutHero.module.css'

export function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-title">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>About Unix Peak Travel</p>

        <h1 id="about-title">
          Licensed Thailand travel partner.
        </h1>

        <p className={styles.lead}>{siteInfo.shortDescription}</p>
        <p className={styles.leadThai}>{siteInfo.shortDescriptionTh}</p>

        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} href="/program-tours">
            Explore Program Tours
          </Link>

          <Link className={styles.secondaryButton} href="/contact">
            Plan a Custom Trip
          </Link>
        </div>
      </div>

      <div
        className={styles.heroVisual}
        aria-label="Travel service visual placeholder"
      >
        <div className={styles.mockImageLarge}>
          <span>Future About Image</span>
        </div>
      </div>
    </section>
  )
}
