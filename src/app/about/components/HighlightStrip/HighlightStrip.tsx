import { siteInfo } from '@/data/site'
import styles from './HighlightStrip.module.css'

const highlights = [
  {
    value: siteInfo.tatLicence,
    label: 'TAT licence',
    labelTh: 'ใบอนุญาต ททท.',
  },
  {
    value: 'Private',
    label: 'Custom travel planning',
    labelTh: 'ออกแบบทริปเฉพาะกลุ่ม',
  },
  {
    value: 'B2B',
    label: 'Partner-ready service',
    labelTh: 'รองรับพาร์ทเนอร์และองค์กร',
  },
  {
    value: 'MICE',
    label: 'Corporate group support',
    labelTh: 'ดูแลทริปองค์กรและอีเวนต์',
  },
]

export function HighlightStrip() {
  return (
    <section className={styles.highlightStrip} aria-label="Company highlights">
      {highlights.map((item) => (
        <article
          className={styles.highlightCard}
          key={`${item.value}-${item.label}`}
        >
          <strong>{item.value}</strong>
          <span>{item.label}</span>
          <small>{item.labelTh}</small>
        </article>
      ))}
    </section>
  )
}
