import Image from "next/image";
import { siteInfo } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  const facebook = siteInfo.socialLinks.find((link) => link.label === "Facebook");
  const instagram = siteInfo.socialLinks.find((link) => link.label === "Instagram");
  const line = siteInfo.socialLinks.find((link) => link.label === "LINE OA");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <section className={styles.company} aria-label="Company information">
          <Image
            className={styles.logo}
            src="/logo/unixpeak-logo.png"
            alt={`${siteInfo.companyName} logo`}
            width={150}
            height={50}
          />
          <p className={styles.kicker}>Licensed travel company in Thailand</p>
          <h2>{siteInfo.companyName}</h2>
          <p>{siteInfo.shortDescription}</p>
          <p className={styles.licence}>TAT licence: {siteInfo.tatLicence}</p>
        </section>

        <section className={styles.column} aria-label="Contact details">
          <h3>Contact</h3>
          <ul>
            {siteInfo.contact.phones.map((contact) => (
              <li key={contact.phone}>
                <a href={`tel:${contact.phone.replaceAll("-", "")}`}>
                  {contact.phone} {contact.nameTh}
                </a>
              </li>
            ))}
            <li>
              <a href={`https://wa.me/${siteInfo.contact.whatsapp.replace("+", "")}`}>
                WhatsApp {siteInfo.contact.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={line?.href ?? `https://line.me/ti/p/~${siteInfo.contact.lineOA}`}
                target="_blank"
                rel="noreferrer"
              >
                LINE OA: {siteInfo.contact.lineOA}
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.column} aria-label="Social media">
          <h3>Social</h3>
          <ul>
            {facebook ? (
              <li>
                <a href={facebook.href} target="_blank" rel="noreferrer">
                  Facebook: {facebook.value}
                </a>
              </li>
            ) : null}
            {instagram ? (
              <li>
                <a href={instagram.href} target="_blank" rel="noreferrer">
                  Instagram: {instagram.value}
                </a>
              </li>
            ) : null}
          </ul>
        </section>
      </div>
    </footer>
  );
}
