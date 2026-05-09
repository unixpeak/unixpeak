import Image from "next/image";
import styles from "./ContactsBox.module.css";

export type ContactBoxLink = {
  label: string;
  href: string;
  icon: string;
  external: boolean;
};

type ContactsBoxProps = {
  links: ContactBoxLink[];
  ariaLabel?: string;
  className?: string;
};

export function ContactsBox({
  links,
  ariaLabel = "Quick contact",
  className = "",
}: ContactsBoxProps) {
  if (links.length === 0) return null;

  return (
    <nav
      className={`${styles.contactBar} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {links.map((link) => (
        <a
          key={link.label}
          className={styles.contactIcon}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noreferrer" : undefined}
          aria-label={link.label}
          title={link.label}
        >
          <Image src={link.icon} alt="" width={96} height={96} />
        </a>
      ))}
    </nav>
  );
}
