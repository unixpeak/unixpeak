import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/data/site";
import { tours } from "@/data/tours";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Program Tours",
  description:
    "Explore Unix Peak Travel programs for Thailand day trips, tailor-made travel, corporate trips, MICE, Vietnam, Bali, and Kazakhstan.",
  alternates: {
    canonical: "/program-tours",
  },
  openGraph: {
    title: "Program Tours | Unix Peak Travel",
    description:
      "Private tours, tailor-made travel packages, group tours, MICE, corporate trips, and selected international travel programs by Unix Peak Travel.",
    url: "/program-tours",
  },
};

export default function ProgramToursPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Program Tours</p>
        <h1>Private tours, tailor-made packages, and corporate travel programs</h1>
        <div className={styles.heroText}>
          <p>
            Explore travel programs by {siteInfo.companyName} for Thailand,
            Vietnam, Bali, and Kazakhstan. Start with a suggested program, then
            adjust the route, pace, transport, and activities for your group.
          </p>
          <p>
            เลือกโปรแกรมเบื้องต้นสำหรับทริปส่วนตัว ทัวร์หมู่คณะ ทริปองค์กร และ MICE
            แล้วปรับเส้นทาง เวลาเดินทาง และรูปแบบบริการให้เหมาะกับกลุ่มของคุณ
          </p>
        </div>
      </section>

      <section className={styles.tourList} aria-label="All program tours">
        {tours.map((tour) => (
          <Link
            className={styles.tourCard}
            href={`/program-tours/${tour.slug}`}
            key={tour.slug}
          >
            <div className={styles.imageWrap}>
              <Image
                className={styles.tourImage}
                src={tour.image}
                alt={`${tour.title} travel program by Unix Peak Travel`}
                width={760}
                height={540}
              />
            </div>

            <div className={styles.cardContent}>
              <div>
                <p className={styles.cardEyebrow}>{tour.location}</p>
                <h2>{tour.title}</h2>
                <p className={styles.titleTh}>{tour.titleTh}</p>
              </div>

              <p className={styles.excerpt}>{tour.excerpt}</p>
              <p className={styles.titleTh}>{tour.excerptTh}</p>

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

              <div className={styles.highlights}>
                <h3>Key highlights</h3>
                <ul>
                  {tour.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <span className={styles.detailsLink}>View tour details</span>
            </div>
          </Link>
        ))}
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>Custom itinerary</p>
          <h2>Need a route built around your dates, budget, and group?</h2>
          <p>
            Contact Unix Peak Travel for private tours, corporate trips, MICE,
            B2B programs, and tailor-made travel planning.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a
            className={styles.primaryButton}
            href={`https://wa.me/${siteInfo.contact.whatsapp.replace("+", "")}`}
          >
            WhatsApp {siteInfo.contact.whatsapp}
          </a>
          <Link className={styles.secondaryButton} href="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
