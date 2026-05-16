import { siteInfo } from '@/data/site'
import styles from './ServicesSection.module.css'

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
        {siteInfo.services.map((service) => (
          <article className={styles.serviceCard} key={service.name}>
            <p className={styles.serviceThai}>{service.nameTh}</p>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <small>{service.descriptionTh}</small>
          </article>
        ))}
      </div>
    </section>
  )
}
