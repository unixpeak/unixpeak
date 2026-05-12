import Image from 'next/image'
import Link from 'next/link'
import type { Tour } from '@/data/tours'
import styles from './FeaturedToursSection.module.css'

type FeaturedToursSectionProps = {
  tours: Tour[]
}

export default function FeaturedToursSection({
  tours,
}: FeaturedToursSectionProps) {
  const featuredTours = tours.slice(0, 3)

  return (
    <section className={styles.section} aria-labelledby="featured-tours-title">
      <div className={styles.sectionHeader}>
        <div className={styles.headingGroup}>
          <p className={styles.eyebrow}>Featured Tours</p>

          <h2 id="featured-tours-title">Easy Thailand tours from Bangkok</h2>
        </div>

        <p className={styles.intro}>
          Simple tour options with clear routes, local guides, and flexible
          support for travelers in Thailand.
        </p>
      </div>

      <div className={styles.tourGrid}>
        {featuredTours.map((tour) => (
          <article className={styles.tourCard} key={tour.slug}>
            <Link
              className={styles.imageLink}
              href={`/program-tours/${tour.slug}`}
              aria-label={`View ${tour.title}`}
            >
              <Image
                className={styles.tourImage}
                src={tour.image}
                alt={tour.title}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </Link>

            <div className={styles.tourContent}>
              <div className={styles.titleGroup}>
                <p className={styles.titleTh} lang="th">
                  {tour.titleTh}
                </p>

                <h3 className={styles.tourTitle}>
                  <Link href={`/program-tours/${tour.slug}`}>{tour.title}</Link>
                </h3>
              </div>

              <p className={styles.excerpt}>{tour.excerpt}</p>

              <div className={styles.infoBar} aria-label="Tour information">
                <div className={styles.infoItem}>
                  <span>Duration</span>
                  <strong>{tour.duration}</strong>
                </div>

                <div className={styles.infoItem}>
                  <span>Location</span>
                  <strong>{tour.location}</strong>
                </div>

                <div className={styles.infoItem}>
                  <span>Type</span>
                  <strong>{tour.groupSize}</strong>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <p className={styles.price}>{tour.price}</p>

                <Link
                  className={styles.cardLink}
                  href={`/program-tours/${tour.slug}`}
                >
                  View tour
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.sectionActions}>
        <Link className={styles.allToursLink} href="/program-tours">
          View all Program Tours
        </Link>
      </div>
    </section>
  )
}
