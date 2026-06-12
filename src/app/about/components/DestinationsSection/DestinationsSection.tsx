import { siteInfo } from '@/data/site'
import {
  Building2,
  Landmark,
  MapPin,
  Mountain,
  type LucideIcon,
} from 'lucide-react'
import styles from './DestinationsSection.module.css'

const destinationIcons: Record<string, LucideIcon> = {
  'Chiang Mai': Mountain,
  Bangkok: Building2,
  'Chiang Rai': MapPin,
  Ayutthaya: Landmark,
}

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
        {siteInfo.destinations.map((destination) => {
          const Icon = destinationIcons[destination.name] ?? MapPin

          return (
            <li className={styles.destinationItem} key={destination.name}>
              <Icon className={styles.destinationIcon} aria-hidden="true" />
              <span>{destination.name}</span>
              <small>{destination.nameTh}</small>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
