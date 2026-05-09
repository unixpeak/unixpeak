import Image from 'next/image'
import Link from 'next/link'
import styles from './FeaturedToursSection.module.css'

type FeaturedTour = {
  slug: string
  image: string
  title: string
  excerpt: string
  duration: string
  location: string
}

type FeaturedToursSectionProps = {
  tours: FeaturedTour[]
}

export default function FeaturedToursSection({
  tours,
}: FeaturedToursSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>Featured tours</p>

        <h2>Start with a program, then tailor it to your group</h2>

        <p>
          Browse sample tour programs for day trips, custom Thailand travel, and
          corporate travel support.
        </p>
      </div>

      <div className={styles.tourGrid}>
        {tours.map((tour) => (
          <Link
            className={styles.tourCard}
            href={`/program-tours/${tour.slug}`}
            key={tour.slug}
          >
            <Image
              className={styles.tourImage}
              src={tour.image}
              alt={`${tour.title} travel program by Unix Peak Travel`}
              width={720}
              height={520}
            />

            <div className={styles.tourContent}>
              <h3>{tour.title}</h3>
              <p>{tour.excerpt}</p>

              <dl>
                <div>
                  <dt>Duration</dt>
                  <dd>{tour.duration}</dd>
                </div>

                <div>
                  <dt>Location</dt>
                  <dd>{tour.location}</dd>
                </div>
              </dl>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
