import type { Metadata } from "next";
import Link from "next/link";
import { siteInfo } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Unix Peak Travel",
  description:
    "Learn about Unix Peak Travel, a Thailand-based licensed travel company for tailor-made trips, private tours, group tours, B2B travel, corporate travel, and MICE.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Unix Peak Travel",
    description:
      "Thailand-based licensed travel company for private tours, tailor-made travel, group tours, corporate travel, B2B travel, and MICE.",
    url: "/about",
  },
};

const workflow = [
  "Listen to travel goals",
  "Plan a suitable itinerary",
  "Coordinate travel details",
  "Support private and corporate groups",
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>About us</p>
        <h1>About Unix Peak Travel</h1>
        <div className={styles.introGrid}>
          <p>
            {siteInfo.companyName} is a Thailand-based licensed travel company
            for tailor-made trips, private tours, group tours, B2B travel,
            corporate travel, and MICE programs.
          </p>
          <p>
            Unix Peak Travel เป็นบริษัทท่องเที่ยวในประเทศไทย ให้บริการวางแผนทริปส่วนตัว
            ทัวร์หมู่คณะ ทริปองค์กร B2B และ MICE พร้อมใบอนุญาต ททท.
            เลขที่ {siteInfo.tatLicence}
          </p>
        </div>
        <div className={styles.licenceCard}>
          <span>TAT licence</span>
          <strong>{siteInfo.tatLicence}</strong>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>What we do</p>
          <h2>Travel services for private guests, groups, and organizations</h2>
        </div>

        <div className={styles.cardGrid}>
          {siteInfo.services.map((service) => (
            <article className={styles.card} key={service.name}>
              <p>{service.nameTh}</p>
              <h3>{service.name}</h3>
              <span>{service.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.destinations}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Destinations</p>
          <h2>Programs across Thailand and selected international destinations</h2>
        </div>

        <ul>
          {siteInfo.destinations.map((destination) => (
            <li key={destination.name}>
              <span>{destination.name}</span>
              <small>{destination.nameTh}</small>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>How we work</p>
          <h2>Simple planning, clear coordination, practical support</h2>
        </div>

        <div className={styles.workflowGrid}>
          {workflow.map((step, index) => (
            <article className={styles.workflowCard} key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>Start planning</p>
          <h2>Browse our programs or contact the team for a custom itinerary</h2>
        </div>
        <div className={styles.ctaActions}>
          <Link className={styles.primaryButton} href="/program-tours">
            Program Tours
          </Link>
          <Link className={styles.secondaryButton} href="/contact">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
