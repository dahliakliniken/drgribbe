'use client'

import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type VideoProps = {
  src: string
  alt: string
  height?: string
  width?: string
  className?: string
  showControls?: boolean
  playbackRate?: number
  fadeTransition?: boolean
  fadeDuration?: number
}

export const Video = ({
  src,
  alt,
  height = 'auto',
  width = '100%',
  className = '',
  showControls = true,
  playbackRate = 1.0,
  fadeTransition = false,
  fadeDuration = 1.0
}: VideoProps) => {
  const t = useTranslations()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPaused, setIsPaused] = useState(true)
  const [isFading, setIsFading] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference and setup video initial state
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isReducedMotion = mediaQuery.matches
    setPrefersReducedMotion(isReducedMotion)

    // Set playback rate
    video.playbackRate = playbackRate

    // If user prefers reduced motion, ensure video is paused
    if (isReducedMotion && !video.paused) {
      video.pause()
    }

    // Listen for changes in user preference
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
      if (e.matches && video && !video.paused) {
        video.pause()
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [playbackRate])

  // Handle fade transition effect
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current
    if (!video || video.duration === Infinity) return

    const fadeStartTime = video.duration - fadeDuration
    setIsFading(video.currentTime >= fadeStartTime)
  }, [fadeDuration])

  useEffect(() => {
    const video = videoRef.current
    if (!fadeTransition || !video) return

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [fadeTransition, handleTimeUpdate])

  // Play/pause toggle
  const togglePlayPause = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().catch((err) => console.error('Failed to play video:', err))
    } else {
      video.pause()
    }
  }, [])

  // Sync paused state with actual video state
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePause = () => setIsPaused(true)
    const handlePlay = () => setIsPaused(false)

    video.addEventListener('pause', handlePause)
    video.addEventListener('play', handlePlay)

    return () => {
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('play', handlePlay)
    }
  }, [])

  // Memoize the fade style to prevent unnecessary recalculations
  const fadeStyle = useMemo(() => {
    if (!fadeTransition) return undefined

    const fadeInDuration = 0.5
    const fadeOutDuration = fadeDuration

    return {
      opacity: isFading ? 0 : 1,
      transition: `opacity ${
        isFading ? fadeOutDuration : fadeInDuration
      }s ease-${isFading ? 'out' : 'in'}`
    }
  }, [fadeTransition, isFading, fadeDuration])

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        style={fadeStyle}
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        aria-label={alt}
        aria-hidden={!alt}
        tabIndex={showControls ? 0 : -1}
        controls={showControls}
      >
        <source src={src} type="video/mp4" />
        {t('video.fallback')}
      </video>

      {showControls && (
        <button
          className="absolute inset-0 flex h-full w-full items-center justify-center bg-black/0 transition-colors hover:bg-black/20"
          onClick={togglePlayPause}
          aria-label={isPaused ? t('video.play') : t('video.pause')}
        >
          {isPaused ? (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50">
              <div className="ml-1 h-0 w-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white"></div>
            </div>
          ) : (
            <span className="sr-only">{t('video.pause')}</span>
          )}
        </button>
      )}
    </div>
  )
}
