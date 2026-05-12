'use client'

import Link from 'next/link'
import { useMemo, useRef, useState } from 'react'
import type { TravelVideo } from '@/data/videos'
import styles from './VideoHighlightsSection.module.css'

type VideoHighlightsSectionProps = {
  videos: TravelVideo[]
}

function getEmbedSrc(video: TravelVideo) {
  if (video.provider === 'youtube') {
    return `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`
  }

  return `https://drive.google.com/file/d/${video.videoId}/preview`
}

export default function VideoHighlightsSection({
  videos,
}: VideoHighlightsSectionProps) {
  const playerFrameRef = useRef<HTMLDivElement | null>(null)
  const [selectedVideoId, setSelectedVideoId] = useState(videos[0]?.id ?? '')

  const selectedVideo = useMemo(
    () => videos.find((video) => video.id === selectedVideoId) ?? videos[0],
    [selectedVideoId, videos],
  )

  if (!selectedVideo) return null

  const embedSrc = getEmbedSrc(selectedVideo)

  const selectVideo = (videoId: string) => {
    setSelectedVideoId(videoId)

    window.requestAnimationFrame(() => {
      playerFrameRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  return (
    <section className={styles.section} aria-labelledby="video-highlights-title">
      <div className={styles.header}>
        <div className={styles.headingGroup}>
          <p className={styles.eyebrow}>Video Highlights</p>

          <h2 id="video-highlights-title">
            Watch travel moments from Unix Peak Travel
          </h2>
        </div>

        <p className={styles.intro}>
          See quick video highlights for trip ideas, tour programs, and travel
          inspiration before planning your private or group journey.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.playerCard}>
          <div ref={playerFrameRef} className={styles.playerFrame}>
            <iframe
              className={styles.player}
              src={embedSrc}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className={styles.playerCopy}>
            <p className={styles.provider}>
              {selectedVideo.provider === 'youtube' ? 'YouTube' : 'Google Drive'}
            </p>

            <h3>{selectedVideo.title}</h3>

            <p className={styles.titleTh} lang="th">
              {selectedVideo.titleTh}
            </p>

            <p>{selectedVideo.description}</p>

            {selectedVideo.note ? (
              <p className={styles.note}>{selectedVideo.note}</p>
            ) : null}

            <div className={styles.actions}>
              <a
                className={styles.secondaryButton}
                href={selectedVideo.href}
                target="_blank"
                rel="noreferrer"
              >
                Open video
              </a>

              <Link className={styles.primaryButton} href="/program-tours">
                View Program Tours
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.videoList} aria-label="Choose video">
          {videos.map((video) => {
            const isSelected = video.id === selectedVideo.id

            return (
              <button
                className={`${styles.videoCard} ${
                  isSelected ? styles.videoCardActive : ''
                }`}
                key={video.id}
                type="button"
                onClick={() => selectVideo(video.id)}
                aria-pressed={isSelected}
              >
                <span className={styles.videoCardTop}>
                  <span>{video.provider === 'youtube' ? 'YouTube' : 'Drive'}</span>
                  <span>{isSelected ? 'Selected' : 'Watch'}</span>
                </span>

                <strong>{video.title}</strong>

                <span className={styles.videoCardThai} lang="th">
                  {video.titleTh}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
