'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { getPackageCategory, tours } from '@/data/tours'
import type { PackageCategoryId } from '@/data/tours'
import {
  defaultProgramTourCategory,
  filterToursByCategory,
  getCategorySummaries,
  getCategorySummary,
} from './function'
import styles from './page.module.css'

export function ProgramToursFilter() {
  const [selectedCategory, setSelectedCategory] =
    useState<PackageCategoryId>(defaultProgramTourCategory)

  const categorySummaries = useMemo(() => getCategorySummaries(tours), [])
  const selectedCategorySummary = useMemo(
    () => getCategorySummary(categorySummaries, selectedCategory),
    [categorySummaries, selectedCategory],
  )
  const filteredTours = useMemo(
    () => filterToursByCategory(tours, selectedCategory),
    [selectedCategory],
  )

  return (
    <>
      <section
        className={styles.categoryPanel}
        aria-label="Package categories"
      >
        <div className={styles.categoryHeader}>
          <p className={styles.eyebrow}>Package categories</p>

          <h2>Tour programs grouped for easy planning</h2>

          <p>
            Start with From Bangkok programs, then compare other travel styles
            by region, activity, and pace.
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {categorySummaries.map((category) => {
            const isSelected = category.id === selectedCategory
            const isEmpty = category.count === 0

            return (
              <button
                className={`${styles.categoryChip} ${
                  isSelected ? styles.categoryChipActive : ''
                } ${isEmpty ? styles.categoryChipEmpty : ''}`}
                key={category.id}
                type="button"
                disabled={isEmpty}
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span>{category.label}</span>
                <strong>{category.count}</strong>
              </button>
            )
          })}
        </div>
      </section>

      <section className={styles.tourListHeader}>
        <div>
          <p className={styles.eyebrow}>Selected programs</p>
          <h2>{selectedCategorySummary.label}</h2>
        </div>

        <p>
          <strong>{filteredTours.length}</strong>
          <span>
            {filteredTours.length === 1 ? 'ready program' : 'ready programs'}
          </span>
        </p>
      </section>

      <section
        className={styles.tourList}
        aria-label={`${selectedCategorySummary.label} program tours`}
      >
        {filteredTours.map((tour) => {
          const category = getPackageCategory(tour.category)

          return (
            <article className={styles.tourCard} key={tour.slug}>
              <Link
                className={styles.imageLink}
                href={`/program-tours/${tour.slug}`}
                aria-label={`View ${tour.title}`}
              >
                <Image
                  className={styles.tourImage}
                  src={tour.image}
                  alt={`${tour.title} travel program by Unix Peak Travel`}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, (max-width: 1180px) 33vw, 25vw"
                />

                <span className={styles.imageBadge}>{category.label}</span>
              </Link>

              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <div className={styles.titleGroup}>
                    <h2>
                      <Link href={`/program-tours/${tour.slug}`}>
                        {tour.title}
                      </Link>
                    </h2>

                    <p className={styles.titleTh} lang="th">
                      {tour.titleTh}
                    </p>
                  </div>

                  <p className={styles.price}>{tour.price}</p>
                </div>

                <dl className={styles.facts}>
                  <div>
                    <dt>Duration</dt>
                    <dd>{tour.duration}</dd>
                  </div>

                  <div>
                    <dt>Type</dt>
                    <dd>{tour.groupSize}</dd>
                  </div>

                  <div>
                    <dt>Area</dt>
                    <dd>{tour.location}</dd>
                  </div>
                </dl>

                <div className={styles.copy}>
                  <p>{tour.excerpt}</p>
                  <p lang="th">{tour.excerptTh}</p>
                </div>

                <div
                  className={styles.tags}
                  aria-label={`${tour.title} keywords`}
                >
                  {tour.tags.slice(0, 4).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.highlights}>
                  <h3>Highlights</h3>

                  <ul>
                    {tour.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  className={styles.detailsLink}
                  href={`/program-tours/${tour.slug}`}
                >
                  View tour details
                </Link>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}
