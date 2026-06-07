import type {
  TourPackage,
  TourPackageFlight,
  TourPackageItineraryDay,
  TourPackagePeriod,
  TourPackageProvider,
  TourPackageSourceResult,
} from '../types'

const ZEGO_API_BASE_URL = 'https://www.zegoapi.com/v1.5'
const ZEGO_PROGRAM_TOURS_PATH = '/programtours'
const DEFAULT_REVALIDATE_SECONDS = 15 * 60

export const zegoProvider: TourPackageProvider = {
  id: 'zego',
  name: 'ZegoAPI',
}

type UnknownRecord = Record<string, unknown>

function asRecord(value: unknown): UnknownRecord {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as UnknownRecord)
    : {}
}

function asRecordArray(value: unknown): UnknownRecord[] {
  return Array.isArray(value) ? value.map(asRecord) : []
}

function asString(value: unknown): string {
  if (typeof value === 'string') {
    return value.trim()
  }

  if (typeof value === 'number' && Number.isFinite(value)) {
    return String(value)
  }

  return ''
}

function asNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value
  }

  if (typeof value === 'string') {
    const normalized = value.replace(/,/g, '').trim()
    const numberValue = Number(normalized)

    if (Number.isFinite(numberValue)) {
      return numberValue
    }
  }

  return null
}

function asPositivePrice(value: unknown): number | null {
  const numberValue = asNumber(value)
  return numberValue && numberValue > 0 ? numberValue : null
}

function asBooleanFlag(value: unknown): boolean {
  return value === true || value === 1 || value === '1' || value === 'Y'
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value.map(asString).filter(Boolean)
}

function normalizeMealFlag(value: unknown): boolean {
  return asBooleanFlag(value)
}

function getDisplayPrice(period: UnknownRecord): number | null {
  return (
    asPositivePrice(period.Price_End) ??
    asPositivePrice(period.Price) ??
    asPositivePrice(period.Price_JoinLand)
  )
}

function normalizePeriod(value: UnknownRecord): TourPackagePeriod {
  const price = getDisplayPrice(value)
  const originalPrice = asPositivePrice(value.Price)

  return {
    id: asString(value.PeriodID) || asString(value.PeriodCode),
    code: asString(value.PeriodCode),
    startDate: asString(value.PeriodStartDate),
    endDate: asString(value.PeriodEndDate),
    status: asString(value.PeriodStatus) || 'Book',
    airport: asString(value.Airport),
    groupSize: asNumber(value.GroupSize),
    bookedSeats: asNumber(value.Book),
    availableSeats: asNumber(value.Seat),
    price,
    originalPrice,
    childPrice:
      asPositivePrice(value.Price_Child_End) ??
      asPositivePrice(value.Price_Child),
    joinLandPrice:
      asPositivePrice(value.Price_JoinLand_End) ??
      asPositivePrice(value.Price_JoinLand),
    deposit: asPositivePrice(value.Deposit_End) ?? asPositivePrice(value.Deposit),
    promotion: asBooleanFlag(value.Promotion),
    confirmed: asBooleanFlag(value.PeriodConfirm),
    note: asString(value.PeriodNote),
    updatedAt: asString(value.UpdateDate),
  }
}

function normalizeFlight(value: UnknownRecord): TourPackageFlight {
  return {
    airlineCode: asString(value.AirlineCode),
    airlineName: asString(value.AirlineName),
    flightNo: asString(value.FlightNo),
    route: asString(value.Route),
    departureTime: asString(value.DepartureTime),
    arrivalTime: asString(value.ArrivalTime),
  }
}

function normalizeItineraryDay(value: UnknownRecord): TourPackageItineraryDay {
  return {
    id: asString(value.ItinID) || asString(value.ItinDay),
    day: asNumber(value.ItinDay),
    description: asString(value.ItinDes),
    hotel: asString(value.ItinHotel),
    hotelStars: asNumber(value.ItinHotelStar),
    breakfast: normalizeMealFlag(value.ItinBfast),
    lunch: normalizeMealFlag(value.ItinLunch),
    dinner: normalizeMealFlag(value.ItinDnr),
  }
}

function compareIsoDate(left: string, right: string) {
  if (!left && !right) {
    return 0
  }

  if (!left) {
    return 1
  }

  if (!right) {
    return -1
  }

  return left.localeCompare(right)
}

function isClosedPeriod(period: TourPackagePeriod) {
  return period.status.toLowerCase().includes('close')
}

function isFullPeriod(period: TourPackagePeriod) {
  return (
    period.status.toLowerCase().includes('full') ||
    (!isClosedPeriod(period) &&
      typeof period.availableSeats === 'number' &&
      period.availableSeats <= 0)
  )
}

function isOpenPeriod(period: TourPackagePeriod) {
  return (
    (period.availableSeats ?? 0) > 0 &&
    !isClosedPeriod(period) &&
    !isFullPeriod(period)
  )
}

function getNextPeriod(periods: TourPackagePeriod[]): TourPackagePeriod | null {
  if (periods.length === 0) {
    return null
  }

  const today = new Date().toISOString().slice(0, 10)
  const upcomingOpenPeriods = periods.filter(
    (period) => period.startDate >= today && isOpenPeriod(period),
  )
  const upcomingPeriods = periods.filter((period) => period.startDate >= today)
  const openPeriods = periods.filter(isOpenPeriod)
  const candidates =
    upcomingOpenPeriods.length > 0
      ? upcomingOpenPeriods
      : upcomingPeriods.length > 0
        ? upcomingPeriods
        : openPeriods.length > 0
          ? openPeriods
          : periods

  return [...candidates].sort((left, right) =>
    compareIsoDate(left.startDate, right.startDate),
  )[0]
}

function getLatestUpdate(periods: TourPackagePeriod[], fallback = '') {
  return periods
    .map((period) => period.updatedAt)
    .filter(Boolean)
    .sort()
    .at(-1) ?? fallback
}

function normalizeProgramTour(value: unknown): TourPackage | null {
  const program = asRecord(value)
  const id = asString(program.ProductID)
  const code = asString(program.ProductCode)
  const name = asString(program.ProductName)

  if (!id || !code || !name) {
    return null
  }

  const periods = asRecordArray(program.Periods)
    .map(normalizePeriod)
    .filter((period) => period.id || period.code)
    .sort((left, right) => compareIsoDate(left.startDate, right.startDate))
  const nextPeriod = getNextPeriod(periods)
  const minPrice =
    periods
      .map((period) => period.price)
      .filter((price): price is number => typeof price === 'number')
      .sort((left, right) => left - right)[0] ?? null
  const openPeriodsList = periods.filter(isOpenPeriod)
  const availableSeats = openPeriodsList.reduce(
    (total, period) => total + Math.max(period.availableSeats ?? 0, 0),
    0,
  )
  const openPeriods = openPeriodsList.length

  return {
    provider: zegoProvider,
    id,
    code,
    name,
    countryCode: asString(program.CountryCode),
    countryName: asString(program.CountryName),
    countryIso2: asString(program.CountryCodeISO2),
    countryIso3: asString(program.CountryCodeISO3),
    days: asNumber(program.Days),
    nights: asNumber(program.Nights),
    airlineCode: asString(program.AirlineCode),
    airlineName: asString(program.AirlineName),
    locations: asStringArray(program.Locations),
    highlight: asString(program.Highlight),
    imageUrl: asString(program.URLImage),
    pdfUrl: asString(program.FilePDF),
    wordUrl: asString(program.FileWord),
    totalMeals: asNumber(program.TotalMeals),
    planeMeals: asBooleanFlag(program.PlaneMeals),
    minHotelStars: asNumber(program.MinHotelStars),
    maxHotelStars: asNumber(program.MaxHotelStars),
    minPrice,
    availableSeats,
    totalPeriods: periods.length,
    openPeriods,
    nextPeriod,
    periods,
    flights: asRecordArray(program.Flights).map(normalizeFlight),
    itinerary: asRecordArray(program.Itinerary).map(normalizeItineraryDay),
    updatedAt: getLatestUpdate(periods),
  }
}

function normalizeProgramTours(value: unknown): TourPackage[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .map(normalizeProgramTour)
    .filter((program): program is TourPackage => program !== null)
}

function getZegoToken() {
  return process.env.ZEGO_API_TOKEN?.trim() ?? ''
}

export async function getZegoTourPackages(): Promise<TourPackageSourceResult> {
  const fetchedAt = new Date().toISOString()
  const token = getZegoToken()

  if (!token) {
    return {
      provider: zegoProvider,
      packages: [],
      fetchedAt,
      latestUpdate: '',
      status: 'missing-token',
      message: 'Zego API token is not configured on the server.',
    }
  }

  try {
    const response = await fetch(`${ZEGO_API_BASE_URL}${ZEGO_PROGRAM_TOURS_PATH}`, {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
      next: {
        revalidate: DEFAULT_REVALIDATE_SECONDS,
        tags: ['tour-packages', 'zego-program-tours'],
      },
      signal: AbortSignal.timeout(20_000),
    })

    const responseText = await response.text()

    if (!response.ok) {
      throw new Error(
        responseText || `Zego API returned HTTP ${response.status}`,
      )
    }

    const json = JSON.parse(responseText) as unknown
    const packages = normalizeProgramTours(json)
    const latestUpdate =
      packages
        .map((tourPackage) => tourPackage.updatedAt)
        .filter(Boolean)
        .sort()
        .at(-1) ?? ''

    return {
      provider: zegoProvider,
      packages,
      fetchedAt,
      latestUpdate,
      status: 'ready',
      message: `Loaded ${packages.length} packages from ZegoAPI.`,
    }
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Zego API could not be loaded.'

    return {
      provider: zegoProvider,
      packages: [],
      fetchedAt,
      latestUpdate: '',
      status: 'error',
      message,
    }
  }
}
