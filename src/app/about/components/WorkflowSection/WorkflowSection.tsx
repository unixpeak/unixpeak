import { aboutWorkflow } from '../../about.data'
import styles from './WorkflowSection.module.css'

export function WorkflowSection() {
  return (
    <section
      className={styles.workflowSection}
      aria-labelledby="workflow-title"
    >
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>How we work</p>

        <h2 id="workflow-title">A simple process from idea to travel day.</h2>
      </div>

      <div className={styles.workflowGrid}>
        {aboutWorkflow.map((step, index) => (
          <article className={styles.workflowCard} key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
