'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './SocialmediaSection.module.css'

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process?: () => void
      }
    }
  }
}

type SocialmediaSectionProps = {
  facebookHref: string
  instagramHref: string
}

const facebookHeight = 620

function normalizeInstagramUrl(url: string) {
  return url.endsWith('/') ? url : `${url}/`
}

export default function SocialmediaSection({
  facebookHref,
  instagramHref,
}: SocialmediaSectionProps) {
  const facebookRef = useRef<HTMLDivElement | null>(null)
  const instagramRef = useRef<HTMLQuoteElement | null>(null)
  const [facebookWidth, setFacebookWidth] = useState(420)
  const [shouldLoadEmbeds, setShouldLoadEmbeds] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  const instagramUrl = normalizeInstagramUrl(instagramHref)

  useEffect(() => {
    const element = facebookRef.current
    if (!element) return

    const updateWidth = () => {
      const nextWidth = Math.max(280, Math.min(500, Math.floor(element.clientWidth)))
      setFacebookWidth(nextWidth)
    }

    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const loadEmbeds = () => setShouldLoadEmbeds(true)

    if (document.readyState === 'complete') {
      loadEmbeds()
      return
    }

    window.addEventListener('load', loadEmbeds, { once: true })

    return () => window.removeEventListener('load', loadEmbeds)
  }, [])

  const processInstagramEmbeds = useCallback(() => {
    if (!shouldLoadEmbeds || !instagramRef.current) return

    const process = () => window.instgrm?.Embeds?.process?.()

    window.requestAnimationFrame(() => {
      process()
      window.setTimeout(process, 300)
      window.setTimeout(process, 1200)
    })
  }, [shouldLoadEmbeds])

  useEffect(() => {
    if (!shouldLoadEmbeds || !scriptLoaded) return
    processInstagramEmbeds()
  }, [shouldLoadEmbeds, scriptLoaded, processInstagramEmbeds])

  const facebookEmbedSrc = useMemo(() => {
    const href = encodeURIComponent(facebookHref)

    return `https://www.facebook.com/plugins/page.php?href=${href}&tabs=timeline&width=${facebookWidth}&height=${facebookHeight}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`
  }, [facebookHref, facebookWidth])

  return (
    <section className={styles.section} aria-labelledby="social-media-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.kicker}>Follow UNIXPEAK</p>
          <h2 id="social-media-title" className={styles.title}>
            Connect with Unix Peak Travel
          </h2>
          <p className={styles.description}>
            Follow us on Facebook and Instagram for travel updates, program
            ideas, trip moments, and easy ways to contact the team.
          </p>
          <p className={styles.descriptionTh}>
            ติดตาม Unix Peak Travel เพื่อดูไอเดียทริป โปรแกรมท่องเที่ยว
            และช่องทางติดต่อทีมงานได้สะดวกยิ่งขึ้น
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.top}>
              <p className={styles.label}>Facebook</p>
              <h3 className={styles.cardTitle}>UnixPeak</h3>
              <p className={styles.cardText}>
                Follow our Facebook page for tour program updates, travel
                planning notes, and contact options for private or corporate
                trips.
              </p>
            </div>

            <div ref={facebookRef} className={styles.embedWrap}>
              {shouldLoadEmbeds ? (
                <iframe
                  key={facebookEmbedSrc}
                  title="Unix Peak Travel Facebook page"
                  className={styles.facebookFrame}
                  src={facebookEmbedSrc}
                  width={facebookWidth}
                  height={facebookHeight}
                  loading="eager"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className={styles.socialPlaceholder} aria-hidden="true">
                  <span>Facebook</span>
                </div>
              )}
            </div>

            <div className={styles.actions}>
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
                aria-label="Visit Unix Peak Travel on Facebook"
              >
                Visit Facebook
              </a>
              <Link href="/contact" className={styles.secondaryButton}>
                Contact Us
              </Link>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.top}>
              <p className={styles.label}>Instagram</p>
              <h3 className={styles.cardTitle}>@unixpeak.thailand</h3>
              <p className={styles.cardText}>
                See visual updates from Unix Peak Travel, destination ideas,
                and snapshots from travel programs in Thailand and beyond.
              </p>
            </div>

            <div className={styles.embedWrap}>
              {shouldLoadEmbeds ? (
                <blockquote
                  ref={instagramRef}
                  className="instagram-media"
                  data-instgrm-permalink={instagramUrl}
                  data-instgrm-version="14"
                >
                  <a
                    className={styles.instagramFallback}
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Instagram @unixpeak.thailand
                  </a>
                </blockquote>
              ) : (
                <div className={styles.socialPlaceholder} aria-hidden="true">
                  <span>Instagram</span>
                </div>
              )}
            </div>

            <div className={styles.actions}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
                aria-label="Visit Unix Peak Travel on Instagram"
              >
                Visit Instagram
              </a>
              <Link href="/program-tours" className={styles.secondaryButton}>
                Program Tours
              </Link>
            </div>
          </article>
        </div>
      </div>

      {shouldLoadEmbeds ? (
        <Script
          id="instagram-embed-script"
          src="https://www.instagram.com/embed.js"
          strategy="afterInteractive"
          onLoad={() => {
            setScriptLoaded(true)
            processInstagramEmbeds()
          }}
          onReady={() => {
            setScriptLoaded(true)
            processInstagramEmbeds()
          }}
        />
      ) : null}
    </section>
  )
}
