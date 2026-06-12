import { aboutWorkflow } from '../../about.data'
import {
  ClipboardCheck,
  Headphones,
  Route,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import styles from './WorkflowSection.module.css'

const workflowIcons: Record<string, LucideIcon> = {
  'Understand the group': UsersRound,
  'Design the program': Route,
  'Coordinate the details': ClipboardCheck,
  'Support the journey': Headphones,
}

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
        {aboutWorkflow.map((step) => {
          const Icon = workflowIcons[step.title] ?? Route

          return (
            <article className={styles.workflowCard} key={step.title}>
              <div className={styles.iconShell} aria-hidden="true">
                <Icon />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
