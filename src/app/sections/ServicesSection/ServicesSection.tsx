import styles from './ServicesSection.module.css'

type ServiceItem = {
  title: string
  titleTh: string
  description: string
}

type ServicesSectionProps = {
  services: ServiceItem[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.sectionHeader}>
        <div className={styles.headingGroup}>
          <p className={styles.eyebrow}>Services</p>

          <h2 id="services-title">
            Tour planning for guests, groups, and companies
          </h2>
        </div>

        <p className={styles.intro}>
          Flexible travel support for private trips, group tours, and business
          events in Thailand.
        </p>
      </div>

      <div className={styles.serviceGrid}>
        {services.map((service) => (
          <article className={styles.serviceCard} key={service.title}>
            <div className={styles.cardTop}>
              <p className={styles.titleTh} lang="th">
                {service.titleTh}
              </p>
            </div>

            <div className={styles.cardBody}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
