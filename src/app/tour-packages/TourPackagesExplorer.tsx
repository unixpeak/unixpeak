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
  lineHref: string
  statusOptions: string[]
  totalPackages: number
}

const fallbackImage = '/images/tours/thailand-trip.png'

const priceFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
})

function formatPrice(value: number | null) {
  if (typeof value !== 'number') {
    return 'รอราคา'
  }

  return `${priceFormatter.format(value)} บาท`
}

function formatDate(value: string) {
  if (!value) {
    return 'รอวันเดินทาง'
  }

  const date = new Date(`${value}T00:00:00+07:00`)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('th-TH', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Bangkok',
  }).format(date)
}

function formatDateRange(startDate: string, endDate: string) {
  if (!startDate && !endDate) {
    return 'รอวันเดินทาง'
  }

  if (!endDate || startDate === endDate) {
    return formatDate(startDate)
  }

  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}

function formatDuration(days: number | null, nights: number | null) {
  if (!days && !nights) {
    return 'รอระยะเวลา'
  }

  if (days && nights) {
    return `${days} วัน ${nights} คืน`
  }

  return days ? `${days} วัน` : `${nights} คืน`
}

function formatTime(value: string) {
  return value ? value.slice(0, 5) : ''
}

function formatStatus(status: string) {
  const normalizedStatus = status.trim().toLowerCase()

  if (normalizedStatus === 'book') {
    return 'เปิดจอง'
  }

  if (normalizedStatus.includes('close')) {
    return 'ปิดกรุ๊ป'
  }

  if (normalizedStatus.includes('full')) {
    return 'เต็ม'
  }

  return status || 'รอสถานะ'
}

export function TourPackagesExplorer({
  countryOptions,
  initialPackages,
  lineHref,
  statusOptions,
  totalPackages,
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
        throw new Error('โหลดแพ็กเกจทัวร์ไม่ได้ กรุณาลองใหม่อีกครั้ง')
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
              : 'โหลดแพ็กเกจทัวร์ไม่ได้ กรุณาลองใหม่อีกครั้ง',
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
          : 'โหลดแพ็กเกจเพิ่มเติมไม่ได้ กรุณาลองใหม่อีกครั้ง',
      )
    } finally {
      setIsLoadingMore(false)
    }
  }

  return (
    <>
      <section className={styles.filters} aria-label="ตัวกรองแพ็กเกจทัวร์">
        <div className={styles.filtersHeader}>
          <div>
            <p className={styles.eyebrow}>ค้นหาแพ็กเกจ</p>
            <h2>ค้นหาแพ็กเกจทัวร์ต่างประเทศ</h2>
          </div>

          <p>
            <strong>{totalCount}</strong>
            <span>แพ็กเกจที่พบ</span>
          </p>
        </div>

        <div className={styles.controlGrid}>
          <label className={styles.control}>
            <span>ค้นหา</span>
            <input
              type="search"
              value={search}
              placeholder="ประเทศ, Package Code, สายการบิน..."
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <label className={styles.control}>
            <span>ประเทศ</span>
            <select
              value={selectedCountry}
              onChange={(event) => setSelectedCountry(event.target.value)}
            >
              <option value="all">ทุกประเทศ</option>
              {countryOptions.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.control}>
            <span>สถานะ</span>
            <select
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
            >
              <option value="all">ทุกสถานะ</option>
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {formatStatus(status)}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.control}>
            <span>เรียงตาม</span>
            <select
              value={sortMode}
              onChange={(event) =>
                setSortMode(event.target.value as TourPackageSortMode)
              }
            >
              <option value="next-date">วันเดินทางใกล้สุด</option>
              <option value="price-low">ราคาต่ำสุด</option>
              <option value="seats-high">ที่นั่งมากสุด</option>
              <option value="name">ชื่อแพ็กเกจ</option>
            </select>
          </label>
        </div>

        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={openSeatsOnly}
            onChange={(event) => setOpenSeatsOnly(event.target.checked)}
          />
          <span>แสดงเฉพาะแพ็กเกจที่ยังมีที่นั่ง</span>
        </label>
      </section>

      {isFiltering ? (
        <section className={styles.inlineStatus} role="status">
          กำลังอัปเดตแพ็กเกจ...
        </section>
      ) : null}

      {errorMessage ? (
        <section className={styles.inlineError} role="status">
          {errorMessage}
        </section>
      ) : null}

      {visiblePackages.length > 0 ? (
        <section className={styles.packageGrid} aria-label="รายการแพ็กเกจทัวร์">
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
                    alt={`แพ็กเกจทัวร์ ${tourPackage.name}`}
                    fill
                    fetchPriority={index < 2 ? 'high' : 'auto'}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    sizes="(max-width: 760px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />

                  <div className={styles.cardBadges}>
                    <span>{tourPackage.provider.name}</span>
                    {nextPeriod?.promotion ? <span>โปรโมชัน</span> : null}
                    {nextPeriod?.confirmed ? <span>คอนเฟิร์มแล้ว</span> : null}
                  </div>
                </div>

                <div className={styles.packageContent}>
                  <div className={styles.packageTop}>
                    <div>
                      <p className={styles.cardEyebrow}>
                        {tourPackage.countryName || 'ต่างประเทศ'}
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
                      เริ่มต้น <strong>{formatPrice(tourPackage.minPrice)}</strong>
                    </p>
                  </div>

                  <dl className={styles.quickFacts}>
                    <div>
                      <dt>ระยะเวลา</dt>
                      <dd>
                        {formatDuration(tourPackage.days, tourPackage.nights)}
                      </dd>
                    </div>

                    <div>
                      <dt>Airline</dt>
                      <dd>{tourPackage.airlineName || 'รอสายการบิน'}</dd>
                    </div>

                    <div>
                      <dt>ที่นั่ง</dt>
                      <dd>{tourPackage.availableSeats}</dd>
                    </div>

                    <div>
                      <dt>สถานะ</dt>
                      <dd>{formatStatus(getPackageStatus(tourPackage))}</dd>
                    </div>
                  </dl>

                  {tourPackage.highlight ? (
                    <p className={styles.highlight} lang="th">
                      {tourPackage.highlight}
                    </p>
                  ) : null}

                  <div className={styles.detailColumns}>
                    <div className={styles.detailBlock}>
                      <h4>วันเดินทางที่เปิดจอง</h4>

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
                        <p>รอวันเดินทาง</p>
                      )}
                    </div>

                    <div className={styles.detailBlock}>
                      <h4>ไฟลต์บิน</h4>

                      {visibleFlights.length > 0 ? (
                        <ul>
                          {visibleFlights.map((flight) => (
                            <li key={`${flight.flightNo}-${flight.route}`}>
                              <span>
                                {flight.flightNo || flight.airlineCode} -{' '}
                                {flight.route || 'รอเส้นทาง'}
                              </span>
                              <strong>
                                {[formatTime(flight.departureTime), formatTime(flight.arrivalTime)]
                                  .filter(Boolean)
                                  .join(' - ') || 'รอเวลา'}
                              </strong>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>รอข้อมูลไฟลต์</p>
                      )}
                    </div>
                  </div>

                  {visibleItinerary.length > 0 ? (
                    <div className={styles.itinerary}>
                      <h4>โปรแกรมคร่าว ๆ</h4>

                      <ol>
                        {visibleItinerary.map((day) => (
                          <li key={day.id || day.day}>
                            <strong>วันที่ {day.day ?? '-'}</strong>
                            <span lang="th">{day.description}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ) : null}

                  <div className={styles.cardActions}>
                    <a
                      className={styles.primaryButton}
                      href={lineHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      สอบถามผ่าน LINE
                    </a>

                    {tourPackage.pdfUrl ? (
                      <a
                        className={styles.secondaryButton}
                        href={tourPackage.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        เปิด PDF
                      </a>
                    ) : null}

                    {tourPackage.wordUrl ? (
                      <a
                        className={styles.textButton}
                        href={tourPackage.wordUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        ไฟล์ Word
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
          <p className={styles.eyebrow}>ไม่พบแพ็กเกจ</p>
          <h2>ไม่พบแพ็กเกจที่ตรงกับตัวกรอง</h2>
          <p>
            ลองเปลี่ยนประเทศ สถานะ หรือคำค้นหาอีกครั้ง หาก supplier โหลดข้อมูล
            ไม่สำเร็จ ระบบจะแสดงแจ้งเตือนด้านบน
          </p>
        </section>
      )}

      {visiblePackages.length > 0 ? (
        <section className={styles.loadMoreWrap} aria-label="โหลดแพ็กเกจเพิ่มเติม">
          <p>
            แสดง <strong>{visiblePackages.length}</strong> จาก{' '}
            <strong>{totalCount}</strong> แพ็กเกจ
          </p>

          {hasMore ? (
            <button
              className={styles.loadMoreButton}
              type="button"
              disabled={isFiltering || isLoadingMore}
              onClick={loadMorePackages}
            >
              {isLoadingMore ? 'กำลังโหลด...' : 'โหลดเพิ่มเติม'}
            </button>
          ) : (
            <span>โหลดแพ็กเกจที่ตรงกันครบแล้ว</span>
          )}
        </section>
      ) : null}
    </>
  )
}
