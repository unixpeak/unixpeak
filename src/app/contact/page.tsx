import type { Metadata } from "next";
import Link from "next/link";
import { siteInfo } from "@/data/site";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  Camera,
  ClipboardList,
  MapPinned,
  MessageCircle,
  PhoneCall,
  Send,
  Share2,
  SlidersHorizontal,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Unix Peak Travel",
  description:
    "Contact Unix Peak Travel for private tours, tailor-made trips, group tours, corporate travel, B2B travel, and MICE enquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Unix Peak Travel",
    description:
      "Reach Unix Peak Travel for private tours, custom itineraries, corporate trips, MICE, and travel programs in Thailand and selected international destinations.",
    url: "/contact",
  },
};

const enquiryItems: { label: string; icon: LucideIcon }[] = [
  {
    label: "Destination",
    icon: MapPinned,
  },
  {
    label: "Travel dates",
    icon: CalendarDays,
  },
  {
    label: "Travelers",
    icon: UsersRound,
  },
  {
    label: "Travel style",
    icon: SlidersHorizontal,
  },
  {
    label: "Private, corporate, or MICE",
    icon: Building2,
  },
];

export default function ContactPage() {
  const facebook = siteInfo.socialLinks.find((link) => link.label === "Facebook");
  const instagram = siteInfo.socialLinks.find((link) => link.label === "Instagram");
  const whatsappHref = `https://wa.me/${siteInfo.contact.whatsapp.replace("+", "")}`;
  const lineHref =
    siteInfo.socialLinks.find((link) => link.label === "LINE OA")?.href ??
    "https://line.me/R/ti/p/@703ufvoq";

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Contact</p>
        <h1>Contact Unix Peak Travel</h1>
        <div className={styles.introGrid}>
          <p>
            Contact {siteInfo.companyName} for private tours, tailor-made trips,
            corporate travel, group tours, B2B travel, and MICE enquiries in
            Thailand and selected international destinations.
          </p>
          <p>
            ติดต่อ Unix Peak Travel เพื่อสอบถามทัวร์ส่วนตัว แพ็กเกจออกแบบเฉพาะ
            ทัวร์หมู่คณะ ทริปองค์กร งาน B2B และ MICE
          </p>
        </div>
      </section>

      <section className={styles.contactGrid} aria-label="Main contact channels">
        {siteInfo.contact.phones.map((contact, index) => (
          <a
            className={styles.contactCard}
            href={`tel:${contact.phone.replaceAll("-", "")}`}
            key={contact.phone}
          >
            <span className={styles.iconShell} aria-hidden="true">
              <PhoneCall />
            </span>
            <span>Phone {index + 1}</span>
            <strong>{contact.phone}</strong>
            <p>{contact.nameTh || contact.name}</p>
          </a>
        ))}
        <a className={styles.contactCard} href={whatsappHref}>
          <span className={styles.iconShell} aria-hidden="true">
            <MessageCircle />
          </span>
          <span>WhatsApp</span>
          <strong>{siteInfo.contact.whatsapp}</strong>
          <p>Travel planning team</p>
        </a>
        <a className={styles.contactCard} href={lineHref}>
          <span className={styles.iconShell} aria-hidden="true">
            <Send />
          </span>
          <span>LINE OA</span>
          <strong>{siteInfo.contact.lineOA}</strong>
          <p>Official Account</p>
        </a>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.panel}>
          <p className={styles.eyebrow}>Social media</p>
          <h2>Follow and message UNIXPEAK</h2>
          <div className={styles.socialList}>
            {facebook ? (
              <a href={facebook.href} target="_blank" rel="noreferrer">
                <Share2 className={styles.listIcon} aria-hidden="true" />
                <span>Facebook</span>
                <strong>{facebook.value}</strong>
              </a>
            ) : null}
            {instagram ? (
              <a href={instagram.href} target="_blank" rel="noreferrer">
                <Camera className={styles.listIcon} aria-hidden="true" />
                <span>Instagram</span>
                <strong>{instagram.value}</strong>
              </a>
            ) : null}
          </div>
        </div>

        <div className={styles.panel}>
          <p className={styles.eyebrow}>Licence and trust</p>
          <h2>Thailand-based licensed travel company</h2>
          <div className={styles.licenceCard}>
            <BadgeCheck className={styles.licenceIcon} aria-hidden="true" />
            <div>
              <span>TAT licence</span>
              <strong>{siteInfo.tatLicence}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.enquiryGuide}>
        <div>
          <p className={styles.eyebrow}>Before contacting us</p>
          <h2>Prepare a few details so we can recommend the right program</h2>
          <p>
            A clear first message helps the team suggest routes, timing, and
            travel support that fit your group.
          </p>
        </div>
        <ul>
          {enquiryItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <Icon aria-hidden="true" />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>Start planning</p>
          <h2>Send your trip details and preferred travel style</h2>
        </div>
        <div className={styles.ctaActions}>
          <a className={styles.primaryButton} href={whatsappHref}>
            WhatsApp
            <MessageCircle className={styles.buttonIcon} aria-hidden="true" />
          </a>
          <a className={styles.secondaryButton} href={lineHref}>
            LINE OA
            <Send className={styles.buttonIcon} aria-hidden="true" />
          </a>
          <Link className={styles.textLink} href="/program-tours">
            <ClipboardList className={styles.buttonIcon} aria-hidden="true" />
            Program Tours
            <ArrowRight className={styles.buttonIcon} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
