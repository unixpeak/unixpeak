import type { TourPackage } from './types'

export type TourPackageSortMode = 'next-date' | 'price-low' | 'seats-high' | 'name'

export type TourPackageQueryParams = {
  search?: string
  country?: string
  status?: string
  openSeatsOnly?: boolean
  sort?: TourPackageSortMode
  offset?: number
  limit?: number
}

export type TourPackagePage = {
  items: TourPackage[]
  total: number
  offset: number
  limit: number
  hasMore: boolean
}

export const TOUR_PACKAGE_PAGE_SIZE = 20

export const defaultTourPackageQuery: Required<TourPackageQueryParams> = {
  search: '',
  country: 'all',
  status: 'all',
  openSeatsOnly: false,
  sort: 'next-date',
  offset: 0,
  limit: TOUR_PACKAGE_PAGE_SIZE,
}

function normalizeSearch(value: string) {
  return value.trim().toLowerCase()
}

export function getPackageStatus(tourPackage: TourPackage) {
  if (tourPackage.nextPeriod && isFullPeriod(tourPackage.nextPeriod)) {
    return 'Full'
  }

  return tourPackage.nextPeriod?.status || 'Available'
}

export function isClosedPeriod(period: TourPackage['periods'][number]) {
  return period.status.toLowerCase().includes('close')
}

export function isFullPeriod(period: TourPackage['periods'][number]) {
  return (
    period.status.toLowerCase().includes('full') ||
    (!isClosedPeriod(period) &&
      typeof period.availableSeats === 'number' &&
      period.availableSeats <= 0)
  )
}

export function isOpenPeriod(period: TourPackage['periods'][number]) {
  return (
    (period.availableSeats ?? 0) > 0 &&
    !isClosedPeriod(period) &&
    !isFullPeriod(period)
  )
}

function includesSearch(tourPackage: TourPackage, search: string) {
  if (!search) {
    return true
  }

  const haystack = [
    tourPackage.name,
    tourPackage.code,
    tourPackage.countryName,
    tourPackage.airlineName,
    tourPackage.highlight,
    ...tourPackage.locations,
  ]
    .join(' ')
    .toLowerCase()

  return haystack.includes(search)
}

function getSortValue(tourPackage: TourPackage, sortMode: TourPackageSortMode) {
  if (sortMode === 'price-low') {
    return tourPackage.minPrice ?? Number.MAX_SAFE_INTEGER
  }

  if (sortMode === 'seats-high') {
    return -tourPackage.availableSeats
  }

  if (sortMode === 'name') {
    return tourPackage.name
  }

  return tourPackage.nextPeriod?.startDate || '9999-12-31'
}

export function getTourPackageCountries(packages: TourPackage[]) {
  const countries = new Map<string, string>()

  packages.forEach((tourPackage) => {
    if (tourPackage.countryName) {
      countries.set(tourPackage.countryName, tourPackage.countryName)
    }
  })

  return [...countries.values()].sort((left, right) => left.localeCompare(right))
}

export function getTourPackageStatuses(packages: TourPackage[]) {
  const statuses = new Set<string>()

  packages.forEach((tourPackage) => {
    statuses.add(getPackageStatus(tourPackage))

    tourPackage.periods.forEach((period) => {
      statuses.add(isFullPeriod(period) ? 'Full' : period.status)
    })
  })

  return [...statuses]
    .filter(Boolean)
    .sort((left, right) => left.localeCompare(right))
}

export function queryTourPackages(
  packages: TourPackage[],
  query: TourPackageQueryParams = {},
): TourPackagePage {
  const normalizedQuery = {
    ...defaultTourPackageQuery,
    ...query,
  }
  const search = normalizeSearch(normalizedQuery.search)
  const offset = Math.max(0, normalizedQuery.offset)
  const limit = Math.max(1, Math.min(normalizedQuery.limit, 60))

  const filteredPackages = packages
    .filter((tourPackage) => includesSearch(tourPackage, search))
    .filter(
      (tourPackage) =>
        normalizedQuery.country === 'all' ||
        tourPackage.countryName === normalizedQuery.country,
    )
    .filter(
      (tourPackage) =>
        normalizedQuery.status === 'all' ||
        getPackageStatus(tourPackage) === normalizedQuery.status ||
        tourPackage.periods.some((period) =>
          isFullPeriod(period)
            ? normalizedQuery.status === 'Full'
            : period.status === normalizedQuery.status,
        ),
    )
    .filter(
      (tourPackage) =>
        !normalizedQuery.openSeatsOnly || tourPackage.openPeriods > 0,
    )
    .sort((left, right) => {
      const leftValue = getSortValue(left, normalizedQuery.sort)
      const rightValue = getSortValue(right, normalizedQuery.sort)

      if (typeof leftValue === 'number' && typeof rightValue === 'number') {
        return leftValue - rightValue
      }

      return String(leftValue).localeCompare(String(rightValue))
    })

  return {
    items: filteredPackages.slice(offset, offset + limit),
    total: filteredPackages.length,
    offset,
    limit,
    hasMore: offset + limit < filteredPackages.length,
  }
}
