import type { NextRequest } from 'next/server'
import { getTourPackages } from '@/lib/tour-packages'
import {
  defaultTourPackageQuery,
  queryTourPackageCards,
  type TourPackageSortMode,
} from '@/lib/tour-packages/query'

function getNumberParam(value: string | null, fallback: number) {
  if (!value) {
    return fallback
  }

  const numberValue = Number(value)
  return Number.isFinite(numberValue) ? numberValue : fallback
}

function getSortParam(value: string | null): TourPackageSortMode {
  if (
    value === 'next-date' ||
    value === 'price-low' ||
    value === 'name'
  ) {
    return value
  }

  return defaultTourPackageQuery.sort
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const openSeatsOnlyParam = searchParams.get('openSeatsOnly')
  const packageData = await getTourPackages()
  const page = queryTourPackageCards(packageData.packages, {
    search: searchParams.get('search') ?? defaultTourPackageQuery.search,
    country: searchParams.get('country') ?? defaultTourPackageQuery.country,
    status: searchParams.get('status') ?? defaultTourPackageQuery.status,
    openSeatsOnly:
      openSeatsOnlyParam === null
        ? defaultTourPackageQuery.openSeatsOnly
        : openSeatsOnlyParam === 'true',
    sort: getSortParam(searchParams.get('sort')),
    offset: getNumberParam(
      searchParams.get('offset'),
      defaultTourPackageQuery.offset,
    ),
    limit: getNumberParam(searchParams.get('limit'), defaultTourPackageQuery.limit),
  })

  return Response.json({
    ...page,
    fetchedAt: packageData.fetchedAt,
  })
}
