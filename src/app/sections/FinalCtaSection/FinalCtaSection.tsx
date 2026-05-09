import styles from './FinalCtaSection.module.css'

type PrimaryPhone = {
  phone: string
}

type FinalCtaSectionProps = {
  whatsapp: string
  lineOA: string
  lineLink: string
  primaryPhone?: PrimaryPhone
}

export default function FinalCtaSection({
  whatsapp,
  lineOA,
  lineLink,
  primaryPhone,
}: FinalCtaSectionProps) {
  const whatsappHref = `https://wa.me/${whatsapp.replace('+', '')}`
  const phoneHref = primaryPhone
    ? `tel:${primaryPhone.phone.replaceAll('-', '')}`
    : ''

  return (
    <section className={styles.finalCta}>
      <div>
        <p className={styles.eyebrow}>Plan your trip</p>

        <h2>Tell us where you want to go and how your group travels</h2>

        <p>
          Contact Unix Peak Travel by WhatsApp, LINE OA, or phone for private
          tours, custom travel packages, corporate trips, and MICE programs.
        </p>
      </div>

      <div className={styles.contactActions}>
        <a className={styles.primaryButton} href={whatsappHref}>
          WhatsApp {whatsapp}
        </a>

        <a className={styles.secondaryButton} href={lineLink}>
          LINE OA {lineOA}
        </a>

        {primaryPhone ? (
          <a className={styles.textLink} href={phoneHref}>
            Call {primaryPhone.phone}
          </a>
        ) : null}
      </div>
    </section>
  )
}
