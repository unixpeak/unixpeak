import { siteInfo } from '@/data/site'
import styles from './DestinationsSection.module.css'

export function DestinationsSection() {
  return (
    <section
      className={styles.destinationsSection}
      aria-labelledby="destinations-title"
    >
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>Destinations</p>

        <h2 id="destinations-title">
          Programs across Thailand.
        </h2>
      </div>

      <ul className={styles.destinationList}>
        {siteInfo.destinations.map((destination) => (
          <li className={styles.destinationItem} key={destination.name}>
            <span>{destination.name}</span>
            <small>{destination.nameTh}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}
