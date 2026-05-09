import styles from './WhyChooseSection.module.css'

type WhyChooseSectionProps = {
  reasons: string[]
}

export default function WhyChooseSection({ reasons }: WhyChooseSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.whyGrid}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Why choose UNIXPEAK</p>

          <h2>Professional travel support with practical local coordination</h2>

          <p>
            Unix Peak Travel focuses on clear planning, useful communication,
            and travel programs shaped around each group.
          </p>
        </div>

        <div className={styles.reasonList}>
          {reasons.map((reason) => (
            <div className={styles.reasonItem} key={reason}>
              <span aria-hidden="true" />
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
