import type { TourPackageLoadResult } from './types'
import { getZegoTourPackages } from './providers/zego'

export async function getTourPackages(): Promise<TourPackageLoadResult> {
  const sources = await Promise.all([getZegoTourPackages()])
  const packages = sources.flatMap((source) => source.packages)
  const fetchedAt =
    sources
      .map((source) => source.fetchedAt)
      .filter(Boolean)
      .sort()
      .at(-1) ?? new Date().toISOString()

  return {
    packages,
    sources,
    fetchedAt,
  }
}

export type {
  TourPackage,
  TourPackageFlight,
  TourPackageItineraryDay,
  TourPackageLoadResult,
  TourPackagePeriod,
  TourPackageProvider,
  TourPackageSourceResult,
} from './types'
