import { siteInfo } from '@/data/site'
import styles from './StorySection.module.css'

export function StorySection() {
  return (
    <section className={styles.storySection} aria-labelledby="story-title">
      <div
        className={styles.storyVisual}
        aria-label="Thailand travel image placeholder"
      >
        <div className={styles.mockImageWide}>
          <span>Future Thailand Travel Image</span>
        </div>
      </div>

      <div className={styles.storyCopy}>
        <p className={styles.eyebrow}>Who we are</p>

        <h2 id="story-title">
          A Thailand-based team focused on thoughtful travel coordination.
        </h2>

        <div className={styles.storyTextGroup}>
          <p>
            {siteInfo.companyName} helps travelers, agencies, and organizations
            build practical programs across Thailand and selected international
            destinations. We focus on clear planning, reliable coordination, and
            travel experiences that feel suitable for the people joining the
            trip.
          </p>

          <p className={styles.thaiText}>
            Unix Peak Travel ให้บริการวางแผนและประสานงานทริปท่องเที่ยว
            สำหรับลูกค้าส่วนตัว หมู่คณะ องค์กร และพาร์ทเนอร์ธุรกิจ
            โดยเน้นความชัดเจน ความยืดหยุ่น
            และการดูแลที่เหมาะกับรูปแบบของแต่ละกลุ่ม
          </p>
        </div>
      </div>
    </section>
  )
}
