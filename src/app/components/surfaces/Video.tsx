'use client'

import { useTranslations } from 'next-intl'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'

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
  const [isPaused, setIsPaused] = useState(false)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

  useEffect(() => {
    if (!fadeTransition || !videoRef.current) return

    const video = videoRef.current

    // Function to handle time updates and trigger fade
    const handleTimeUpdate = () => {
      if (!video) return

      // Calculate when to start fading (seconds before the end)
      const fadeStartTime = video.duration - fadeDuration

      // If we're in the fade zone and not already fading
      if (video.currentTime >= fadeStartTime && !isFading) {
        setIsFading(true)
      }

      // If we've looped back to the beginning, remove the fade
      if (video.currentTime < fadeStartTime && isFading) {
        setIsFading(false)
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [fadeTransition, fadeDuration, isFading])

  const togglePlayPause = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPaused(false)
    } else {
      videoRef.current.pause()
      setIsPaused(true)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Space' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      togglePlayPause()
    }
  }

  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }

  const fadeStyle = isFading
    ? {
        opacity: 0,
        transition: `opacity ${fadeDuration}s ease-out`
      }
    : {
        opacity: 1,
        transition: `opacity 0.5s ease-in`
      }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        style={fadeTransition ? fadeStyle : undefined}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
        aria-hidden={alt ? 'false' : 'true'}
        tabIndex={showControls ? 0 : -1}
        onKeyDown={showControls ? handleKeyDown : undefined}
        controls={showControls}
        onLoadedData={handleVideoLoaded}
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
          {isPaused && (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50">
              <div className="ml-1 h-0 w-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white"></div>
            </div>
          )}
          {!isPaused && <span className="sr-only">{t('video.pause')}</span>}
        </button>
      )}
    </div>
  )
}
