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
  title: 'แพ็กเกจทัวร์ต่างประเทศ',
  description:
    'แพ็กเกจทัวร์ต่างประเทศพร้อมวันเดินทาง ที่นั่ง ราคา ไฟลต์ โปรแกรมเดินทาง และไฟล์ PDF จาก Unix Peak Travel.',
  alternates: {
    canonical: '/tour-packages',
  },
  openGraph: {
    title: 'แพ็กเกจทัวร์ต่างประเทศ | Unix Peak Travel',
    description:
      'เลือกแพ็กเกจทัวร์ต่างประเทศพร้อมวันเดินทาง ที่นั่ง ราคา ไฟลต์ โปรแกรมเดินทาง และไฟล์ PDF.',
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
    return 'ยังไม่มีข้อมูล'
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

  return new Intl.DateTimeFormat('th-TH', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Bangkok',
  }).format(date)
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
  const lineLink =
    siteInfo.socialLinks.find((link) => link.label === 'LINE OA')?.href ??
    'https://line.me/R/ti/p/@703ufvoq'
  const sourceMessages = packageData.sources.filter(
    (source) => source.status !== 'ready',
  )

  return (
    <div className={styles.page} lang="th">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Tour Packages</p>

          <h1>แพ็กเกจทัวร์ต่างประเทศพร้อมเลือกวันเดินทาง</h1>

          <p>
            รวมแพ็กเกจจาก supplier ที่อัปเดตข้อมูลจริง ทั้งราคา ที่นั่ง
            ไฟลต์ โปรแกรมเดินทาง และไฟล์ PDF ให้ลูกค้าไทยเลือกทริปต่างประเทศ
            ได้ง่ายขึ้น
          </p>

          <div className={styles.heroActions}>
            <a
              className={styles.primaryButton}
              href={lineLink}
              target="_blank"
              rel="noreferrer"
            >
              สอบถามผ่าน LINE
            </a>

            <Link className={styles.secondaryButton} href="/contact">
              ติดต่อทีมงาน
            </Link>
          </div>
        </div>

        <div className={styles.heroPanel} aria-label="สรุปแพ็กเกจทัวร์">
          <div>
            <strong>{formatNumber(packageData.packages.length)}</strong>
            <span>แพ็กเกจทั้งหมด</span>
          </div>

          <div>
            <strong>{formatNumber(stats.countries)}</strong>
            <span>ประเทศ</span>
          </div>

          <div>
            <strong>{formatNumber(stats.openPackages)}</strong>
            <span>ยังมีที่นั่ง</span>
          </div>

          <div>
            <strong>{formatNumber(stats.totalSeats)}</strong>
            <span>ที่นั่งรวม</span>
          </div>
        </div>
      </section>

      <section className={styles.sourceStrip} aria-label="สถานะแหล่งข้อมูลแพ็กเกจ">
        <div>
          <span>แหล่งข้อมูล</span>
          <strong>
            {packageData.sources
              .map((source) => source.provider.name)
              .join(', ') || 'ยังไม่ได้เชื่อมต่อ'}
          </strong>
        </div>

        <div>
          <span>วันเดินทางเร็วสุด</span>
          <strong>
            {stats.nextDeparture
              ? formatDate(stats.nextDeparture)
              : 'รอวันเดินทาง'}
          </strong>
        </div>

        <div>
          <span>ซิงก์ล่าสุด</span>
          <strong>{formatDateTime(packageData.fetchedAt)}</strong>
        </div>

        <div>
          <span>อัปเดตจาก supplier</span>
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
            <p className={styles.eyebrow}>แจ้งเตือนข้อมูล</p>
            <h2>ข้อมูลบางส่วนจาก supplier โหลดไม่สำเร็จ</h2>
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
        lineHref={lineLink}
        statusOptions={getTourPackageStatuses(packageData.packages)}
        totalPackages={initialPackagePage.total}
      />
    </div>
  )
}
