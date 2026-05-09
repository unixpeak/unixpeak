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
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>Services</p>

        <h2>Travel planning for private guests, groups, and organizations</h2>

        <p>
          Clear, flexible support for leisure travel, business groups, and
          destination programs.
        </p>
      </div>

      <div className={styles.serviceGrid}>
        {services.map((service) => (
          <article className={styles.serviceCard} key={service.title}>
            <p>{service.titleTh}</p>
            <h3>{service.title}</h3>
            <span>{service.description}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
