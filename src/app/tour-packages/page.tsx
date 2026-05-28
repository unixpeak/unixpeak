import type { Metadata } from 'next'
import Link from 'next/link'
import { connection } from 'next/server'
import { siteInfo } from '@/data/site'
import { getTourPackages } from '@/lib/tour-packages'
import type { TourPackage } from '@/lib/tour-packages'
import {
  getTourPackageCountries,
  getTourPackageStatuses,
  queryTourPackages,
} from '@/lib/tour-packages/query'
import { TourPackagesExplorer } from './TourPackagesExplorer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Tour Packages',
  description:
    'Live international tour packages with departure dates, seats, prices, flights, itineraries, and PDF programs from Unix Peak Travel.',
  alternates: {
    canonical: '/tour-packages',
  },
  openGraph: {
    title: 'Tour Packages | Unix Peak Travel',
    description:
      'Browse live travel packages with dates, seats, prices, flights, itineraries, and downloadable program files.',
    url: '/tour-packages',
  },
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(value)
}

function formatDateTime(value: string) {
  if (!value) {
    return 'Not available'
  }

  const normalizedValue = value.includes('T')
    ? value
    : value.includes(' ')
      ? `${value.replace(' ', 'T')}+07:00`
      : `${value}T00:00:00+07:00`
  const date = new Date(normalizedValue)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Bangkok',
  }).format(date)
}

function formatDate(value: string) {
  if (!value) {
    return 'Date TBC'
  }

  const date = new Date(`${value}T00:00:00+07:00`)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Bangkok',
  }).format(date)
}

function getPackageStats(packages: TourPackage[]) {
  const countries = new Set(
    packages.map((tourPackage) => tourPackage.countryName).filter(Boolean),
  )
  const openPackages = packages.filter(
    (tourPackage) => tourPackage.openPeriods > 0,
  ).length
  const totalSeats = packages.reduce(
    (total, tourPackage) => total + tourPackage.availableSeats,
    0,
  )
  const nextDeparture =
    packages
      .map((tourPackage) => tourPackage.nextPeriod?.startDate ?? '')
      .filter(Boolean)
      .sort()[0] ?? ''

  return {
    countries: countries.size,
    openPackages,
    totalSeats,
    nextDeparture,
  }
}

export default async function TourPackagesPage() {
  await connection()

  const packageData = await getTourPackages()
  const initialPackagePage = queryTourPackages(packageData.packages)
  const stats = getPackageStats(packageData.packages)
  const whatsappNumber = siteInfo.contact.whatsapp.replace(/\D/g, '')
  const sourceMessages = packageData.sources.filter(
    (source) => source.status !== 'ready',
  )

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Live Tour Packages</p>

          <h1>Ready package data from trusted travel suppliers</h1>

          <p>
            Browse live departures with prices, seat availability, flights,
            itinerary previews, and downloadable program files. ZegoAPI is the
            first connected source, with room to add more suppliers later.
          </p>

          <div className={styles.heroActions}>
            <a
              className={styles.primaryButton}
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              Ask for quotation
            </a>

            <Link className={styles.secondaryButton} href="/contact">
              Contact team
            </Link>
          </div>
        </div>

        <div className={styles.heroPanel} aria-label="Live package summary">
          <div>
            <strong>{formatNumber(packageData.packages.length)}</strong>
            <span>Packages loaded</span>
          </div>

          <div>
            <strong>{formatNumber(stats.countries)}</strong>
            <span>Countries</span>
          </div>

          <div>
            <strong>{formatNumber(stats.openPackages)}</strong>
            <span>With open seats</span>
          </div>

          <div>
            <strong>{formatNumber(stats.totalSeats)}</strong>
            <span>Total seats shown</span>
          </div>
        </div>
      </section>

      <section className={styles.sourceStrip} aria-label="Package source status">
        <div>
          <span>Source</span>
          <strong>
            {packageData.sources
              .map((source) => source.provider.name)
              .join(', ') || 'Not connected'}
          </strong>
        </div>

        <div>
          <span>Next departure</span>
          <strong>
            {stats.nextDeparture
              ? formatDate(stats.nextDeparture)
              : 'Date TBC'}
          </strong>
        </div>

        <div>
          <span>Last sync</span>
          <strong>{formatDateTime(packageData.fetchedAt)}</strong>
        </div>

        <div>
          <span>Supplier update</span>
          <strong>
            {formatDateTime(
              packageData.sources.find((source) => source.latestUpdate)
                ?.latestUpdate ?? '',
            )}
          </strong>
        </div>
      </section>

      {sourceMessages.length > 0 ? (
        <section className={styles.notice} role="status">
          <div>
            <p className={styles.eyebrow}>Source notice</p>
            <h2>Some live package data could not be loaded</h2>
          </div>

          <ul>
            {sourceMessages.map((source) => (
              <li key={source.provider.id}>
                <strong>{source.provider.name}:</strong> {source.message}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <TourPackagesExplorer
        countryOptions={getTourPackageCountries(packageData.packages)}
        initialPackages={initialPackagePage.items}
        statusOptions={getTourPackageStatuses(packageData.packages)}
        totalPackages={initialPackagePage.total}
        whatsappNumber={whatsappNumber}
      />
    </div>
  )
}
