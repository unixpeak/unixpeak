import { siteInfo } from '@/data/site'
import {
  BadgeCheck,
  Building2,
  Handshake,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import styles from './HighlightStrip.module.css'

type Highlight = {
  value: string
  label: string
  labelTh: string
  icon: LucideIcon
}

const highlights: Highlight[] = [
  {
    value: siteInfo.tatLicence,
    label: 'TAT licence',
    labelTh: 'ใบอนุญาต ททท.',
    icon: BadgeCheck,
  },
  {
    value: 'Private',
    label: 'Custom travel planning',
    labelTh: 'ออกแบบทริปเฉพาะกลุ่ม',
    icon: UserRound,
  },
  {
    value: 'B2B',
    label: 'Partner-ready service',
    labelTh: 'รองรับพาร์ทเนอร์และองค์กร',
    icon: Handshake,
  },
  {
    value: 'MICE',
    label: 'Corporate group support',
    labelTh: 'ดูแลทริปองค์กรและอีเวนต์',
    icon: Building2,
  },
]

export function HighlightStrip() {
  return (
    <section className={styles.highlightStrip} aria-label="Company highlights">
      {highlights.map((item) => {
        const Icon = item.icon

        return (
          <article
            className={styles.highlightCard}
            key={`${item.value}-${item.label}`}
          >
            <Icon className={styles.highlightIcon} aria-hidden="true" />
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <small>{item.labelTh}</small>
          </article>
        )
      })}
    </section>
  )
}
