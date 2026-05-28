import styles from './page.module.css'

export default function TourPackagesLoading() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Live Tour Packages</p>
          <h1>Loading supplier packages</h1>
          <p>
            Fetching live departures, seats, prices, flights, and itinerary
            previews.
          </p>
        </div>

        <div className={styles.heroPanel} aria-hidden="true">
          <div />
          <div />
          <div />
          <div />
        </div>
      </section>

      <section className={styles.loadingGrid} aria-label="Loading packages">
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
