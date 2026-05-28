export type TourPackageProviderId = 'zego'

export type TourPackageProvider = {
  id: TourPackageProviderId
  name: string
}

export type TourPackagePeriod = {
  id: string
  code: string
  startDate: string
  endDate: string
  status: string
  airport: string
  groupSize: number | null
  bookedSeats: number | null
  availableSeats: number | null
  price: number | null
  originalPrice: number | null
  childPrice: number | null
  joinLandPrice: number | null
  deposit: number | null
  promotion: boolean
  confirmed: boolean
  note: string
  updatedAt: string
}

export type TourPackageFlight = {
  airlineCode: string
  airlineName: string
  flightNo: string
  route: string
  departureTime: string
  arrivalTime: string
}

export type TourPackageItineraryDay = {
  id: string
  day: number | null
  description: string
  hotel: string
  hotelStars: number | null
  breakfast: boolean
  lunch: boolean
  dinner: boolean
}

export type TourPackage = {
  provider: TourPackageProvider
  id: string
  code: string
  name: string
  countryCode: string
  countryName: string
  countryIso2: string
  countryIso3: string
  days: number | null
  nights: number | null
  airlineCode: string
  airlineName: string
  locations: string[]
  highlight: string
  imageUrl: string
  pdfUrl: string
  wordUrl: string
  totalMeals: number | null
  planeMeals: boolean
  minHotelStars: number | null
  maxHotelStars: number | null
  minPrice: number | null
  availableSeats: number
  totalPeriods: number
  openPeriods: number
  nextPeriod: TourPackagePeriod | null
  periods: TourPackagePeriod[]
  flights: TourPackageFlight[]
  itinerary: TourPackageItineraryDay[]
  updatedAt: string
}

export type TourPackageSourceResult = {
  provider: TourPackageProvider
  packages: TourPackage[]
  fetchedAt: string
  latestUpdate: string
  status: 'ready' | 'missing-token' | 'error'
  message: string
}

export type TourPackageLoadResult = {
  packages: TourPackage[]
  sources: TourPackageSourceResult[]
  fetchedAt: string
}
