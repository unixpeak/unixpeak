import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { siteInfo } from '@/data/site'
import { getTourBySlug, tours } from '@/data/tours'
import styles from './page.module.css'

type TourPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }))
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) {
    return {
      title: 'Tour Not Found',
    }
  }

  return {
    title: tour.seoTitle,
    description: tour.seoDescription,
    alternates: {
      canonical: `/program-tours/${tour.slug}`,
    },
    openGraph: {
      title: tour.seoTitle,
      description: tour.seoDescription,
      url: `/program-tours/${tour.slug}`,
      images: [
        {
          url: tour.image,
          alt: `${tour.title} travel program by Unix Peak Travel`,
        },
      ],
    },
  }
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) {
    notFound()
  }

  const whatsappNumber = siteInfo.contact.whatsapp.replace(/\D/g, '')
  const lineLink =
    siteInfo.socialLinks.find((link) => link.label === 'LINE OA')?.href ??
    `https://line.me/ti/p/~${siteInfo.contact.lineOA}`

  return (
    <main className={styles.page}>
      <Link className={styles.backLink} href="/program-tours">
        Back to Program Tours
      </Link>

      <article className={styles.article}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>{tour.location}</p>

            <h3>{tour.title}</h3>

            <p className={styles.titleTh} lang="th">
              {tour.titleTh}
            </p>

            <p className={styles.excerpt}>{tour.excerpt}</p>

            <p className={styles.price}>{tour.price}</p>

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
          </div>

          <div className={styles.heroImageWrap}>
            <Image
              className={styles.heroImage}
              src={tour.image}
              alt={`${tour.title} travel program by Unix Peak Travel`}
              fill
              priority
              sizes="(max-width: 980px) 100vw, 46vw"
            />
          </div>
        </section>

        <section className={styles.contentGrid} aria-label="Tour overview">
          <div className={styles.copyBlock}>
            <p className={styles.eyebrow}>Overview</p>

            <h2>About this tour</h2>

            <p>{tour.description}</p>
          </div>

          <div className={styles.copyBlock}>
            <p className={styles.eyebrow}>ภาษาไทย</p>

            <h2>รายละเอียดทัวร์</h2>

            <p lang="th">{tour.descriptionTh}</p>
          </div>
        </section>

        <section className={styles.listGrid} aria-label="Tour details">
          <div className={styles.listBlock}>
            <p className={styles.eyebrow}>Highlights</p>

            <h2>What you will see</h2>

            <ul>
              {tour.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <ul lang="th">
              {tour.highlightsTh.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className={styles.listBlock}>
            <p className={styles.eyebrow}>Included</p>

            <h2>What is included</h2>

            <ul>
              {tour.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ul lang="th">
              {tour.includedTh.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <p className={styles.eyebrow}>Plan this tour</p>

            <h2>Customize this program for your group</h2>

            <p>
              Contact {siteInfo.companyName} for private tours, group tours,
              corporate travel, MICE planning, and tailor-made routes.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <a
              className={styles.primaryButton}
              href={`https://wa.me/${whatsappNumber}`}
            >
              WhatsApp {siteInfo.contact.whatsapp}
            </a>

            <a className={styles.secondaryButton} href={lineLink}>
              LINE OA {siteInfo.contact.lineOA}
            </a>

            <Link className={styles.textLink} href="/contact">
              Contact page
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
