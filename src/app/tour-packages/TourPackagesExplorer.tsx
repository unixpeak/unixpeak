'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { TourPackage } from '@/lib/tour-packages'
import {
  getPackageStatus,
  isOpenPeriod,
  TOUR_PACKAGE_PAGE_SIZE,
  type TourPackagePage,
  type TourPackageSortMode,
} from '@/lib/tour-packages/query'
import styles from './page.module.css'

type TourPackagesExplorerProps = {
  countryOptions: string[]
  initialPackages: TourPackage[]
  statusOptions: string[]
  totalPackages: number
  whatsappNumber: string
}

const fallbackImage = '/images/tours/thailand-trip.png'

const priceFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
})

function formatPrice(value: number | null) {
  if (typeof value !== 'number') {
    return 'Price TBC'
  }

  return `${priceFormatter.format(value)} THB`
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

function formatDateRange(startDate: string, endDate: string) {
  if (!startDate && !endDate) {
    return 'Date TBC'
  }

  if (!endDate || startDate === endDate) {
    return formatDate(startDate)
  }

  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}

function formatDuration(days: number | null, nights: number | null) {
  if (!days && !nights) {
    return 'Duration TBC'
  }

  if (days && nights) {
    return `${days}D ${nights}N`
  }

  return days ? `${days} days` : `${nights} nights`
}

function formatTime(value: string) {
  return value ? value.slice(0, 5) : ''
}

function buildWhatsAppLink(tourPackage: TourPackage, whatsappNumber: string) {
  const period = tourPackage.nextPeriod
  const message = [
    `Hello Unix Peak Travel, I am interested in ${tourPackage.name}.`,
    `Package code: ${tourPackage.code}`,
    period
      ? `Departure: ${formatDateRange(period.startDate, period.endDate)}`
      : '',
  ]
    .filter(Boolean)
    .join('\n')

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function TourPackagesExplorer({
  countryOptions,
  initialPackages,
  statusOptions,
  totalPackages,
  whatsappNumber,
}: TourPackagesExplorerProps) {
  const [search, setSearch] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [openSeatsOnly, setOpenSeatsOnly] = useState(true)
  const [sortMode, setSortMode] = useState<TourPackageSortMode>('next-date')
  const [visiblePackages, setVisiblePackages] = useState(initialPackages)
  const [totalCount, setTotalCount] = useState(totalPackages)
  const [isFiltering, setIsFiltering] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const didMount = useRef(false)

  const hasMore = visiblePackages.length < totalCount

  const buildPackagesUrl = useCallback(
    (offset: number) => {
      const params = new URLSearchParams({
        search,
        country: selectedCountry,
        status: selectedStatus,
        openSeatsOnly: String(openSeatsOnly),
        sort: sortMode,
        offset: String(offset),
        limit: String(TOUR_PACKAGE_PAGE_SIZE),
      })

      return `/api/tour-packages?${params.toString()}`
    },
    [openSeatsOnly, search, selectedCountry, selectedStatus, sortMode],
  )

  const fetchPackagePage = useCallback(
    async (offset: number, signal?: AbortSignal) => {
      const response = await fetch(buildPackagesUrl(offset), {
        signal,
      })

      if (!response.ok) {
        throw new Error('Tour packages could not be loaded.')
      }

      return (await response.json()) as TourPackagePage
    },
    [buildPackagesUrl],
  )

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      return
    }

    const controller = new AbortController()
    const timer = window.setTimeout(() => {
      setIsFiltering(true)
      setErrorMessage('')

      fetchPackagePage(0, controller.signal)
        .then((page) => {
          setVisiblePackages(page.items)
          setTotalCount(page.total)
        })
        .catch((error) => {
          if (error instanceof DOMException && error.name === 'AbortError') {
            return
          }

          setErrorMessage(
            error instanceof Error
              ? error.message
              : 'Tour packages could not be loaded.',
          )
        })
        .finally(() => {
          if (!controller.signal.aborted) {
            setIsFiltering(false)
          }
        })
    }, 250)

    return () => {
      window.clearTimeout(timer)
      controller.abort()
    }
  }, [fetchPackagePage])

  async function loadMorePackages() {
    setIsLoadingMore(true)
    setErrorMessage('')

    try {
      const page = await fetchPackagePage(visiblePackages.length)

      setVisiblePackages((currentPackages) => [
        ...currentPackages,
        ...page.items,
      ])
      setTotalCount(page.total)
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'More tour packages could not be loaded.',
      )
    } finally {
      setIsLoadingMore(false)
    }
  }

  return (
    <>
      <section className={styles.filters} aria-label="Tour package filters">
        <div className={styles.filtersHeader}>
          <div>
            <p className={styles.eyebrow}>Package Finder</p>
            <h2>Live departures and supplier programs</h2>
          </div>

          <p>
            <strong>{totalCount}</strong>
            <span>
              {totalCount === 1 ? 'package' : 'packages'} found
            </span>
          </p>
        </div>

        <div className={styles.controlGrid}>
          <label className={styles.control}>
            <span>Search</span>
            <input
              type="search"
              value={search}
              placeholder="Country, package code, airline..."
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <label className={styles.control}>
            <span>Country</span>
            <select
              value={selectedCountry}
              onChange={(event) => setSelectedCountry(event.target.value)}
            >
              <option value="all">All countries</option>
              {countryOptions.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.control}>
            <span>Status</span>
            <select
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
            >
              <option value="all">All statuses</option>
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.control}>
            <span>Sort</span>
            <select
              value={sortMode}
              onChange={(event) =>
                setSortMode(event.target.value as TourPackageSortMode)
              }
            >
              <option value="next-date">Next departure</option>
              <option value="price-low">Lowest price</option>
              <option value="seats-high">Most seats</option>
              <option value="name">Package name</option>
            </select>
          </label>
        </div>

        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={openSeatsOnly}
            onChange={(event) => setOpenSeatsOnly(event.target.checked)}
          />
          <span>Only show packages with open seats</span>
        </label>
      </section>

      {isFiltering ? (
        <section className={styles.inlineStatus} role="status">
          Updating packages...
        </section>
      ) : null}

      {errorMessage ? (
        <section className={styles.inlineError} role="status">
          {errorMessage}
        </section>
      ) : null}

      {visiblePackages.length > 0 ? (
        <section className={styles.packageGrid} aria-label="Tour package list">
          {visiblePackages.map((tourPackage, index) => {
            const nextPeriod = tourPackage.nextPeriod
            const imageSrc = tourPackage.imageUrl || fallbackImage
            const openPeriods = tourPackage.periods.filter(isOpenPeriod)
            const visiblePeriods = (
              openPeriods.length > 0 ? openPeriods : tourPackage.periods
            ).slice(0, 3)
            const visibleFlights = tourPackage.flights.slice(0, 2)
            const visibleItinerary = tourPackage.itinerary
              .filter((day) => day.description)
              .slice(0, 3)

            return (
              <article className={styles.packageCard} key={tourPackage.code}>
                <div className={styles.packageImageWrap}>
                  <Image
                    className={styles.packageImage}
                    src={imageSrc}
                    alt={`${tourPackage.name} tour package`}
                    fill
                    fetchPriority={index < 2 ? 'high' : 'auto'}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    sizes="(max-width: 760px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />

                  <div className={styles.cardBadges}>
                    <span>{tourPackage.provider.name}</span>
                    {nextPeriod?.promotion ? <span>Promotion</span> : null}
                    {nextPeriod?.confirmed ? <span>Confirmed</span> : null}
                  </div>
                </div>

                <div className={styles.packageContent}>
                  <div className={styles.packageTop}>
                    <div>
                      <p className={styles.cardEyebrow}>
                        {tourPackage.countryName || 'International'}
                      </p>

                      <h3>{tourPackage.name}</h3>

                      <p className={styles.packageCode}>
                        {tourPackage.code}
                        {tourPackage.locations.length > 0
                          ? ` - ${tourPackage.locations.join(', ')}`
                          : ''}
                      </p>
                    </div>

                    <p className={styles.price}>
                      From <strong>{formatPrice(tourPackage.minPrice)}</strong>
                    </p>
                  </div>

                  <dl className={styles.quickFacts}>
                    <div>
                      <dt>Duration</dt>
                      <dd>
                        {formatDuration(tourPackage.days, tourPackage.nights)}
                      </dd>
                    </div>

                    <div>
                      <dt>Airline</dt>
                      <dd>{tourPackage.airlineName || 'TBC'}</dd>
                    </div>

                    <div>
                      <dt>Seats</dt>
                      <dd>{tourPackage.availableSeats}</dd>
                    </div>

                    <div>
                      <dt>Status</dt>
                      <dd>{getPackageStatus(tourPackage)}</dd>
                    </div>
                  </dl>

                  {tourPackage.highlight ? (
                    <p className={styles.highlight} lang="th">
                      {tourPackage.highlight}
                    </p>
                  ) : null}

                  <div className={styles.detailColumns}>
                    <div className={styles.detailBlock}>
                      <h4>Next departures</h4>

                      {visiblePeriods.length > 0 ? (
                        <ul>
                          {visiblePeriods.map((period) => (
                            <li key={period.id || period.code}>
                              <span>
                                {formatDateRange(
                                  period.startDate,
                                  period.endDate,
                                )}
                              </span>
                              <strong>{formatPrice(period.price)}</strong>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>Date TBC</p>
                      )}
                    </div>

                    <div className={styles.detailBlock}>
                      <h4>Flights</h4>

                      {visibleFlights.length > 0 ? (
                        <ul>
                          {visibleFlights.map((flight) => (
                            <li key={`${flight.flightNo}-${flight.route}`}>
                              <span>
                                {flight.flightNo || flight.airlineCode} -{' '}
                                {flight.route || 'Route TBC'}
                              </span>
                              <strong>
                                {[formatTime(flight.departureTime), formatTime(flight.arrivalTime)]
                                  .filter(Boolean)
                                  .join(' - ') || 'Time TBC'}
                              </strong>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>Flight TBC</p>
                      )}
                    </div>
                  </div>

                  {visibleItinerary.length > 0 ? (
                    <div className={styles.itinerary}>
                      <h4>Itinerary preview</h4>

                      <ol>
                        {visibleItinerary.map((day) => (
                          <li key={day.id || day.day}>
                            <strong>Day {day.day ?? '-'}</strong>
                            <span lang="th">{day.description}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ) : null}

                  <div className={styles.cardActions}>
                    <a
                      className={styles.primaryButton}
                      href={buildWhatsAppLink(tourPackage, whatsappNumber)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ask on WhatsApp
                    </a>

                    {tourPackage.pdfUrl ? (
                      <a
                        className={styles.secondaryButton}
                        href={tourPackage.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open PDF
                      </a>
                    ) : null}

                    {tourPackage.wordUrl ? (
                      <a
                        className={styles.textButton}
                        href={tourPackage.wordUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Word file
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      ) : (
        <section className={styles.emptyState}>
          <p className={styles.eyebrow}>No packages</p>
          <h2>No tour packages match the current filters</h2>
          <p>
            Try another country, status, or search term. Live source errors will
            also appear above this section.
          </p>
        </section>
      )}

      {visiblePackages.length > 0 ? (
        <section className={styles.loadMoreWrap} aria-label="Load more packages">
          <p>
            Showing <strong>{visiblePackages.length}</strong> of{' '}
            <strong>{totalCount}</strong> packages.
          </p>

          {hasMore ? (
            <button
              className={styles.loadMoreButton}
              type="button"
              disabled={isFiltering || isLoadingMore}
              onClick={loadMorePackages}
            >
              {isLoadingMore ? 'Loading...' : 'Load 20 more packages'}
            </button>
          ) : (
            <span>All matching packages loaded</span>
          )}
        </section>
      ) : null}
    </>
  )
}
