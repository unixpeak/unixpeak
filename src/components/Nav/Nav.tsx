"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteInfo } from "@/data/site";
import styles from "./Nav.module.css";

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          className={styles.brand}
          href="/"
          aria-label={`${siteInfo.companyName} home`}
          onClick={closeMenu}
        >
          <span className={styles.logoFrame}>
            <Image
              className={styles.logo}
              src="/logo/unixpeak-logo.png"
              alt={`${siteInfo.companyName} logo`}
              width={132}
              height={44}
              priority
            />
          </span>
          <span>
            <span className={styles.brandName}>{siteInfo.companyName}</span>
            <span className={styles.brandTagline}>Thailand travel planner</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {siteInfo.mainNavigation.map((link) => (
            <Link
              className={`${styles.navLink} ${
                pathname === link.href ? styles.activeLink : ""
              }`}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={styles.menuButton}
          type="button"
          aria-label="Open navigation menu"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          onClick={openMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <button
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <aside
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation menu"
        aria-hidden={!isOpen}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerBrand}>
            <Image
              className={styles.drawerLogo}
              src="/logo/unixpeak-logo.png"
              alt={`${siteInfo.companyName} logo`}
              width={116}
              height={38}
            />
            <p className={styles.drawerEyebrow}>Menu</p>
            <p className={styles.drawerTitle}>{siteInfo.companyName}</p>
          </div>
          <button
            className={styles.closeButton}
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            <span aria-hidden="true">Close</span>
          </button>
        </div>

        <nav className={styles.drawerNav} aria-label="Mobile primary navigation">
          {siteInfo.mainNavigation.map((link) => (
            <Link
              className={`${styles.drawerLink} ${
                pathname === link.href ? styles.drawerActiveLink : ""
              }`}
              href={link.href}
              key={link.href}
              onClick={closeMenu}
            >
              <span>{link.label}</span>
              <span className={styles.drawerLinkThai}>{link.labelTh}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.drawerContact}>
          <p>Plan a private tour or corporate trip</p>
          <a href={`https://wa.me/${siteInfo.contact.whatsapp.replace("+", "")}`}>
            WhatsApp {siteInfo.contact.whatsapp}
          </a>
        </div>
      </aside>
    </header>
  );
}
