import Image from "next/image";
import Link from "next/link";
import { ContactsBox, type ContactBoxLink } from "@/components/ContactsBox/ContactsBox";
import { paymentMethods } from "@/data/payments";
import { siteInfo } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  const facebook = siteInfo.socialLinks.find((link) => link.label === "Facebook");
  const instagram = siteInfo.socialLinks.find((link) => link.label === "Instagram");
  const line = siteInfo.socialLinks.find((link) => link.label === "LINE OA");
  const whatsapp = siteInfo.socialLinks.find((link) => link.label === "WhatsApp");
  const primaryPhone = siteInfo.contact.phones[0];
  const year = new Date().getFullYear();

  const contactItems = [
    line
      ? {
          label: "LINE",
          href: line.href,
          icon: "/icons/LINE.png",
          external: true,
        }
      : null,
    facebook
      ? {
          label: "Facebook",
          href: facebook.href,
          icon: "/icons/Facebook.png",
          external: true,
        }
      : null,
    instagram
      ? {
          label: "Instagram",
          href: instagram.href,
          icon: "/icons/IG.svg",
          external: true,
        }
      : null,
    whatsapp
      ? {
          label: "WhatsApp",
          href: whatsapp.href,
          icon: "/icons/Whatsapp.svg",
          external: true,
        }
      : null,
    primaryPhone
      ? {
          label: "Phone",
          href: `tel:${primaryPhone.phone.replaceAll("-", "")}`,
          icon: "/icons/Phone.svg",
          external: false,
        }
      : null,
  ];
  const contactLinks = contactItems.filter(
    (link): link is ContactBoxLink => Boolean(link),
  );

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <Link href="/#top" className={styles.brand} aria-label="Unix Peak Travel home">
            <Image
              className={styles.logo}
              src="/logo/unixpeak-logo.svg"
              alt={`${siteInfo.companyName} logo`}
              width={220}
              height={80}
            />
          </Link>

          <p className={styles.description}>{siteInfo.shortDescription}</p>

          <ContactsBox links={contactLinks} />

          <div className={styles.contactText} aria-label="Contact details">
            {siteInfo.contact.phones.map((contact) => (
              <a
                key={contact.phone}
                href={`tel:${contact.phone.replaceAll("-", "")}`}
              >
                {contact.phone} {contact.nameTh}
              </a>
            ))}
            <a href={whatsapp?.href ?? `https://wa.me/${siteInfo.contact.whatsapp.replace("+", "")}`}>
              WhatsApp {siteInfo.contact.whatsapp}
            </a>
            <a
              href={line?.href ?? `https://line.me/ti/p/~${siteInfo.contact.lineOA}`}
              target="_blank"
              rel="noreferrer"
            >
              LINE OA {siteInfo.contact.lineOA}
            </a>
          </div>

          <div className={styles.payments} aria-label="Accepted payment methods">
            <span className={styles.paymentLabel}>Payment</span>
            <ul className={styles.paymentList}>
              {paymentMethods.map((method) => {
                const isWise = method.name === "Wise";

                return (
                  <li className={styles.paymentItem} key={method.name}>
                    <Image
                      className={`${styles.paymentIcon} ${
                        isWise ? styles.wiseLogo : ""
                      }`}
                      src={method.icon}
                      alt={isWise ? "Wise" : ""}
                      width={isWise ? 84 : 28}
                      height={isWise ? 47 : 28}
                    />
                    {isWise ? null : <span>{method.name}</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.meta}>
          <div className={styles.metaLeft}>
            <span className={styles.licence}>TAT licence {siteInfo.tatLicence}</span>
            <span className={styles.servicePill}>Private tours</span>
            <span className={styles.servicePill}>MICE</span>
            <span className={styles.servicePill}>Corporate travel</span>
          </div>

          <div className={styles.metaRight}>
            <p className={styles.copy}>
              © {year} {siteInfo.companyName}. All rights reserved.
            </p>
            <div className={styles.metaLinks} aria-label="Footer navigation">
              {siteInfo.mainNavigation.map((link) => (
                <Link key={link.href} href={link.href} className={styles.metaLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
