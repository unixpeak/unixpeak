import styles from './DestinationsSection.module.css'

type DestinationItem = {
  name: string
  nameTh: string
}

type DestinationsSectionProps = {
  destinations: DestinationItem[]
}

export default function DestinationsSection({
  destinations,
}: DestinationsSectionProps) {
  return (
    <section className={styles.destinations}>
      <div>
        <p className={styles.eyebrow}>Destinations</p>
        <h2>Regional programs from Thailand specialists</h2>
      </div>

      <ul>
        {destinations.map((destination) => (
          <li key={destination.name}>
            <span>{destination.name}</span>
            <small>{destination.nameTh}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}
