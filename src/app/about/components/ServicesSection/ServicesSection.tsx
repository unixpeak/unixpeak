import { siteInfo } from '@/data/site'
import {
  BriefcaseBusiness,
  Building2,
  Handshake,
  Route,
  SlidersHorizontal,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import styles from './ServicesSection.module.css'

const serviceIcons: Record<string, LucideIcon> = {
  'Tailor-made travel': SlidersHorizontal,
  'Private tours': Route,
  'Group tours': UsersRound,
  'B2B travel': Handshake,
  MICE: Building2,
  'Corporate trips': BriefcaseBusiness,
}

export function ServicesSection() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>What we do</p>

        <h2 id="services-title">
          Travel services for private guests, agencies, and organizations.
        </h2>

        <p>
          Choose ready-made travel programs or work with us to design a custom
          itinerary for your group, company, or partner request.
        </p>
      </div>

      <div className={styles.serviceGrid}>
        {siteInfo.services.map((service) => {
          const Icon = serviceIcons[service.name] ?? Route

          return (
            <article className={styles.serviceCard} key={service.name}>
              <div className={styles.iconShell} aria-hidden="true">
                <Icon />
              </div>
              <p className={styles.serviceThai}>{service.nameTh}</p>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <small>{service.descriptionTh}</small>
            </article>
          )
        })}
      </div>
    </section>
  )
}
