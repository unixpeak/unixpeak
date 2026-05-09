import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteInfo } from "@/data/site";
import { getTourBySlug, tours } from "@/data/tours";
import styles from "./page.module.css";

type TourPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tour Not Found",
    };
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
  };
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  const lineLink =
    siteInfo.socialLinks.find((link) => link.label === "LINE OA")?.href ??
    `https://line.me/ti/p/~${siteInfo.contact.lineOA}`;

  if (!tour) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <Link className={styles.backLink} href="/program-tours">
        Back to Program Tours
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{tour.location}</p>
          <h1>{tour.title}</h1>
          <p className={styles.titleTh}>{tour.titleTh}</p>
          <p className={styles.excerpt}>{tour.excerpt}</p>

          <dl className={styles.facts}>
            <div>
              <dt>Duration</dt>
              <dd>{tour.duration}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{tour.location}</dd>
            </div>
            <div>
              <dt>Group size</dt>
              <dd>{tour.groupSize}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.heroImageWrap}>
          <Image
            className={styles.heroImage}
            src={tour.image}
            alt={`${tour.title} travel program by Unix Peak Travel`}
            width={980}
            height={720}
            priority
          />
        </div>
      </section>

      <section className={styles.contentGrid}>
        <div className={styles.copyBlock}>
          <p className={styles.eyebrow}>Overview</p>
          <h2>English description</h2>
          <p>{tour.description}</p>
        </div>

        <div className={styles.copyBlock}>
          <p className={styles.eyebrow}>รายละเอียดภาษาไทย</p>
          <h2>Thai description</h2>
          <p>{tour.descriptionTh}</p>
        </div>
      </section>

      <section className={styles.listGrid}>
        <div className={styles.listBlock}>
          <p className={styles.eyebrow}>Highlights</p>
          <h2>What makes this program useful</h2>
          <ul>
            {tour.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <ul>
            {tour.highlightsTh.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className={styles.listBlock}>
          <p className={styles.eyebrow}>Included</p>
          <h2>Planning support included</h2>
          <ul>
            {tour.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {tour.includedTh.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>Plan this tour</p>
          <h2>Customize this program for your dates, route, and group</h2>
          <p>
            Contact {siteInfo.companyName} by WhatsApp, LINE OA, or the contact
            page for private tours, group tours, corporate travel, and MICE
            planning.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a
            className={styles.primaryButton}
            href={`https://wa.me/${siteInfo.contact.whatsapp.replace("+", "")}`}
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
  );
}
