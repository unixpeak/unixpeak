import { aboutValues } from '../../about.data'
import {
  CalendarCheck,
  MapPinned,
  ShieldCheck,
  SlidersHorizontal,
  type LucideIcon,
} from 'lucide-react'
import styles from './ValuesSection.module.css'

const valueIcons: Record<string, LucideIcon> = {
  'Clear planning': CalendarCheck,
  'Local coordination': MapPinned,
  'Flexible programs': SlidersHorizontal,
  'Professional support': ShieldCheck,
}

export function ValuesSection() {
  return (
    <section className={styles.valueSection} aria-labelledby="values-title">
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>Why travel with us</p>

        <h2 id="values-title">
          Clean communication, flexible ideas, reliable trip support.
        </h2>
      </div>

      <div className={styles.valueGrid}>
        {aboutValues.map((value) => {
          const Icon = valueIcons[value.title] ?? ShieldCheck

          return (
            <article className={styles.valueCard} key={value.title}>
              <div className={styles.iconShell} aria-hidden="true">
                <Icon />
              </div>
              <h3>{value.title}</h3>
              <p className={styles.thaiText}>{value.titleTh}</p>
              <p>{value.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
