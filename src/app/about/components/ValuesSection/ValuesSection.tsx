import { aboutValues } from '../../about.data'
import styles from './ValuesSection.module.css'

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
        {aboutValues.map((value) => (
          <article className={styles.valueCard} key={value.title}>
            <h3>{value.title}</h3>
            <p className={styles.thaiText}>{value.titleTh}</p>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
