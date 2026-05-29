import styles from './page.module.css'

export default function TourPackagesLoading() {
  return (
    <div className={styles.page} lang="th">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Tour Packages</p>
          <h1>กำลังโหลดแพ็กเกจทัวร์ต่างประเทศ</h1>
          <p>
            กำลังดึงข้อมูลวันเดินทาง ที่นั่ง ราคา ไฟลต์ และโปรแกรมทัวร์จาก
            supplier
          </p>
        </div>

        <div className={styles.heroPanel} aria-hidden="true">
          <div />
          <div />
          <div />
          <div />
        </div>
      </section>

      <section className={styles.loadingGrid} aria-label="กำลังโหลดแพ็กเกจ">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className={styles.loadingCard} key={index}>
            <span />
            <strong />
            <p />
            <p />
          </div>
        ))}
      </section>
    </div>
  )
}
