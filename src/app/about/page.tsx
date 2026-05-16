import type { Metadata } from 'next'
import { AboutCta } from './components/AboutCta/AboutCta'
import { AboutHero } from './components/AboutHero/AboutHero'
import { DestinationsSection } from './components/DestinationsSection/DestinationsSection'
import { HighlightStrip } from './components/HighlightStrip/HighlightStrip'
import { ServicesSection } from './components/ServicesSection/ServicesSection'
import { StorySection } from './components/StorySection/StorySection'
import { ValuesSection } from './components/ValuesSection/ValuesSection'
import { WorkflowSection } from './components/WorkflowSection/WorkflowSection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About Unix Peak Travel',
  description:
    'Learn about Unix Peak Travel, a licensed Thailand travel company for private tours, tailor-made trips, group travel, B2B travel, corporate trips, and MICE programs.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Unix Peak Travel',
    description:
      'Licensed Thailand travel company for private tours, tailor-made travel, group tours, corporate travel, B2B travel, and MICE programs.',
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <AboutHero />
      <HighlightStrip />
      <StorySection />
      <ServicesSection />
      <ValuesSection />
      <DestinationsSection />
      <WorkflowSection />
      <AboutCta />
    </main>
  )
}
