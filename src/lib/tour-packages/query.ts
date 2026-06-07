import type {
  TourPackage,
  TourPackageCardFlight,
  TourPackageCardItineraryDay,
  TourPackageCardPeriod,
  TourPackageCardSummary,
  TourPackagePeriod,
} from './types'

export type TourPackageSortMode = 'next-date' | 'price-low' | 'name'

export type TourPackageQueryParams = {
  search?: string
  country?: string
  status?: string
  openSeatsOnly?: boolean
  sort?: TourPackageSortMode
  offset?: number
  limit?: number
}

export type TourPackagePage<TItem = TourPackage> = {
  items: TItem[]
  total: number
  offset: number
  limit: number
  hasMore: boolean
}

export const TOUR_PACKAGE_PAGE_SIZE = 20

export const defaultTourPackageQuery: Required<TourPackageQueryParams> = {
  search: '',
  country: 'all',
  status: 'Book',
  openSeatsOnly: false,
  sort: 'next-date',
  offset: 0,
  limit: TOUR_PACKAGE_PAGE_SIZE,
}

function normalizeSearch(value: string) {
  return value.trim().toLowerCase()
}

type TourPackageAvailabilityPeriod = Pick<
  TourPackagePeriod,
  'availableSeats' | 'status'
>

type TourPackageStatusShape = {
  nextPeriod: TourPackageAvailabilityPeriod | null
}

function normalizeStatusValue(status: string) {
  const normalizedStatus = status.trim().toLowerCase()

  if (!normalizedStatus || normalizedStatus === 'available') {
    return 'Book'
  }

  if (normalizedStatus.includes('full')) {
    return 'Full'
  }

  return status
}

export function getPackageStatus(tourPackage: TourPackageStatusShape) {
  if (tourPackage.nextPeriod && isFullPeriod(tourPackage.nextPeriod)) {
    return 'Full'
  }

  return normalizeStatusValue(tourPackage.nextPeriod?.status ?? 'Book')
}

export function isClosedPeriod(period: TourPackageAvailabilityPeriod) {
  return period.status.toLowerCase().includes('close')
}

export function isFullPeriod(period: TourPackageAvailabilityPeriod) {
  return (
    period.status.toLowerCase().includes('full') ||
    (!isClosedPeriod(period) &&
      typeof period.availableSeats === 'number' &&
      period.availableSeats <= 0)
  )
}

export function isOpenPeriod(period: TourPackageAvailabilityPeriod) {
  return (
    (period.availableSeats ?? 0) > 0 &&
    !isClosedPeriod(period) &&
    !isFullPeriod(period)
  )
}

function getVisibleCardPeriods(tourPackage: TourPackage) {
  const today = new Date().toISOString().slice(0, 10)
  const upcomingPeriods = tourPackage.periods.filter(
    (period) => !period.startDate || period.startDate >= today,
  )
  const periods =
    upcomingPeriods.length > 0 ? upcomingPeriods : tourPackage.periods
  const firstPeriods = periods.slice(0, 4)
  const firstFullPeriod = periods.find(isFullPeriod)

  if (
    !firstFullPeriod ||
    firstPeriods.some((period) => period.id === firstFullPeriod.id)
  ) {
    return firstPeriods
  }

  return [...periods.slice(0, 3), firstFullPeriod]
}

function toCardPeriod(period: TourPackagePeriod): TourPackageCardPeriod {
  return {
    id: period.id,
    code: period.code,
    startDate: period.startDate,
    endDate: period.endDate,
    status: period.status,
    availableSeats: period.availableSeats,
    price: period.price,
    promotion: period.promotion,
    confirmed: period.confirmed,
  }
}

function toCardFlight(flight: TourPackage['flights'][number]): TourPackageCardFlight {
  return {
    airlineCode: flight.airlineCode,
    flightNo: flight.flightNo,
    route: flight.route,
    departureTime: flight.departureTime,
    arrivalTime: flight.arrivalTime,
  }
}

function toCardItineraryDay(
  day: TourPackage['itinerary'][number],
): TourPackageCardItineraryDay {
  return {
    id: day.id,
    day: day.day,
    description: day.description,
  }
}

export function toTourPackageCardSummary(
  tourPackage: TourPackage,
): TourPackageCardSummary {
  const cardPeriods = getVisibleCardPeriods(tourPackage)
  const visibleAvailableSeats = cardPeriods
    .filter(isOpenPeriod)
    .reduce((total, period) => total + Math.max(period.availableSeats ?? 0, 0), 0)

  return {
    provider: tourPackage.provider,
    id: tourPackage.id,
    code: tourPackage.code,
    name: tourPackage.name,
    countryName: tourPackage.countryName,
    days: tourPackage.days,
    nights: tourPackage.nights,
    airlineCode: tourPackage.airlineCode,
    airlineName: tourPackage.airlineName,
    locations: tourPackage.locations,
    highlight: tourPackage.highlight,
    imageUrl: tourPackage.imageUrl,
    pdfUrl: tourPackage.pdfUrl,
    wordUrl: tourPackage.wordUrl,
    minPrice: tourPackage.minPrice,
    availableSeats: visibleAvailableSeats,
    totalPeriods: tourPackage.totalPeriods,
    openPeriods: tourPackage.openPeriods,
    fullPeriods: tourPackage.periods.filter(isFullPeriod).length,
    nextPeriod: tourPackage.nextPeriod
      ? toCardPeriod(tourPackage.nextPeriod)
      : null,
    periods: cardPeriods.map(toCardPeriod),
    flights: tourPackage.flights.slice(0, 2).map(toCardFlight),
    itinerary: tourPackage.itinerary
      .filter((day) => day.description)
      .slice(0, 3)
      .map(toCardItineraryDay),
  }
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
      statuses.add(isFullPeriod(period) ? 'Full' : normalizeStatusValue(period.status))
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
            : normalizeStatusValue(period.status) === normalizedQuery.status,
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

export function queryTourPackageCards(
  packages: TourPackage[],
  query: TourPackageQueryParams = {},
): TourPackagePage<TourPackageCardSummary> {
  const page = queryTourPackages(packages, query)

  return {
    ...page,
    items: page.items.map(toTourPackageCardSummary),
  }
}
