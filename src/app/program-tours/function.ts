import { packageCategories } from '@/data/tours'
import type { PackageCategoryId, Tour } from '@/data/tours'

export const defaultProgramTourCategory: PackageCategoryId = 'from-bangkok'

export type CategorySummary = (typeof packageCategories)[number] & {
  count: number
}

export function getCategorySummaries(programs: Tour[]): CategorySummary[] {
  return packageCategories.map((category) => ({
    ...category,
    count: programs.filter((tour) => tour.category === category.id).length,
  }))
}

export function filterToursByCategory(
  programs: Tour[],
  categoryId: PackageCategoryId,
) {
  return programs.filter((tour) => tour.category === categoryId)
}

export function getCategorySummary(
  categorySummaries: CategorySummary[],
  categoryId: PackageCategoryId,
) {
  return (
    categorySummaries.find((category) => category.id === categoryId) ??
    categorySummaries.find(
      (category) => category.id === defaultProgramTourCategory,
    ) ??
    categorySummaries[0]
  )
}
