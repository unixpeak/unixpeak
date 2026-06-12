import type { Metadata } from "next";
import Link from "next/link";
import { faqItems } from "@/data/faq";
import { siteInfo } from "@/data/site";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Globe2,
  Handshake,
  MessageCircle,
  Sparkles,
  UserRoundCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Unix Peak Travel private tours, custom itineraries, group travel, corporate trips, MICE, booking, and TAT licence.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Unix Peak Travel",
    description:
      "Answers about private tours, custom travel planning, group tours, corporate travel, MICE, destinations, booking process, and TAT licence.",
    url: "/faq",
  },
};

const faqIcons: LucideIcon[] = [
  UserRoundCheck,
  Sparkles,
  UsersRound,
  BriefcaseBusiness,
  Building2,
  Globe2,
  MessageCircle,
  BadgeCheck,
  ClipboardCheck,
  Handshake,
];

export default function FaqPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>FAQ</p>
        <h1>Frequently asked questions about UNIXPEAK tours and travel planning</h1>
        <div className={styles.introGrid}>
          <p>
            Find quick answers about private tours, tailor-made itineraries,
            group travel, corporate trips, MICE programs, destinations, booking,
            and contact options with {siteInfo.companyName}.
          </p>
          <p>
            รวมคำตอบเบื้องต้นเกี่ยวกับทัวร์ส่วนตัว โปรแกรมออกแบบเฉพาะ
            ทัวร์หมู่คณะ ทริปองค์กร MICE จุดหมายปลายทาง การจอง และช่องทางติดต่อ
          </p>
        </div>
      </section>

      <section className={styles.faqGrid} aria-label="Frequently asked questions">
        {faqItems.map((item, index) => {
          const Icon = faqIcons[index] ?? MessageCircle;

          return (
            <article className={styles.faqCard} key={item.question}>
              <div className={styles.questionHeader}>
                <div className={styles.iconShell} aria-hidden="true">
                  <Icon />
                </div>
                <div>
                  <h2>{item.question}</h2>
                  <h3>{item.questionTh}</h3>
                </div>
              </div>

              <div className={styles.answerPair}>
                <p>{item.answer}</p>
                <p lang="th">{item.answerTh}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>Need details?</p>
          <h2>Contact us for a private tour, custom itinerary, or company trip</h2>
          <p>
            Share your destination, dates, group size, and travel style. The
            team can help with tour programs, corporate travel, and MICE planning.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Link className={styles.primaryButton} href="/contact">
            Contact
            <MessageCircle className={styles.buttonIcon} aria-hidden="true" />
          </Link>
          <Link className={styles.secondaryButton} href="/program-tours">
            Program Tours
            <ArrowRight className={styles.buttonIcon} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
