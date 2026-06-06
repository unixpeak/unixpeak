'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { siteInfo } from '@/data/site';
import styles from './FAB.module.css';

type FabItem = {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
};

function getFabItems(): FabItem[] {
  const facebook = siteInfo.socialLinks.find((link) => link.label === 'Facebook');
  const instagram = siteInfo.socialLinks.find((link) => link.label === 'Instagram');
  const line = siteInfo.socialLinks.find((link) => link.label === 'LINE OA');
  const whatsapp = siteInfo.socialLinks.find((link) => link.label === 'WhatsApp');
  const phoneItems = siteInfo.contact.phones.map((contact) => ({
    label: `Call ${contact.phone}`,
    href: `tel:${contact.phone.replaceAll('-', '')}`,
    icon: '/icons/Phone-2.png',
  }));

  return [
    ...phoneItems,
    line
      ? {
          label: 'LINE OA',
          href: line.href,
          icon: '/icons/LINE.png',
          external: true,
        }
      : null,
    whatsapp
      ? {
          label: 'WhatsApp',
          href: whatsapp.href,
          icon: '/icons/Whatsapp.svg',
          external: true,
        }
      : null,
    facebook
      ? {
          label: 'Facebook',
          href: facebook.href,
          icon: '/icons/Facebook.png',
          external: true,
        }
      : null,
    instagram
      ? {
          label: 'Instagram',
          href: instagram.href,
          icon: '/icons/IG.svg',
          external: true,
        }
      : null,
  ].filter((item): item is FabItem => Boolean(item));
}

const fabItems = getFabItems();

export function FAB() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (fabItems.length === 0) {
    return null;
  }

  return (
    <aside className={styles.fabWrap} aria-label="Quick contact">
      <nav
        className={`${styles.items} ${isOpen ? styles.itemsOpen : ''}`}
        aria-hidden={!isOpen}
      >
        {fabItems.map((item, index) => (
          <a
            key={`${item.label}-${item.href}`}
            className={styles.item}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            style={{ '--item-index': index } as CSSProperties}
            aria-label={item.label}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
          >
            <span className={styles.itemText}>{item.label}</span>
            <span className={styles.itemIcon}>
              <Image
                className={styles.iconImage}
                src={item.icon}
                alt=""
                width={56}
                height={56}
              />
            </span>
          </a>
        ))}
      </nav>

      <button
        className={`${styles.mainButton} ${isOpen ? styles.mainButtonOpen : ''}`}
        type="button"
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={styles.mainButtonInner}>
          <Image
            className={styles.mainIcon}
            src={isOpen ? '/icons/Call-end.png' : '/icons/Call-start.png'}
            alt=""
            width={88}
            height={88}
          />
        </span>
      </button>
    </aside>
  );
}
