'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type VideoProps = {
  src: string
  poster?: string
  fallbackImageSrc?: string
  fallbackImageAlt?: string
  height?: string
  width?: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  preload?: 'none' | 'metadata' | 'auto'
  fallbackImagePriority?: boolean
}

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

export const Video = ({
  src,
  poster,
  fallbackImageSrc,
  fallbackImageAlt = '',
  height,
  width,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  preload = 'metadata',
  fallbackImagePriority = false
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasVideoError, setHasVideoError] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (video && prefersReducedMotion) {
      video.pause()
    }
  }, [prefersReducedMotion])

  const showImageFallback =
    hasVideoError || (prefersReducedMotion && !!fallbackImageSrc)

  const shouldAutoPlay = autoPlay && !prefersReducedMotion
  const containerStyle = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {})
  }

  return (
    <div className={`relative ${className}`} style={containerStyle}>
      {showImageFallback && fallbackImageSrc ? (
        <Image
          src={fallbackImageSrc}
          alt={fallbackImageAlt}
          fill
          className="h-full w-full object-cover"
          sizes="100vw"
          priority={fallbackImagePriority}
        />
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay={shouldAutoPlay}
          muted={muted}
          loop={loop}
          playsInline
          preload={preload}
          poster={poster}
          aria-hidden="true"
          onError={() => setHasVideoError(true)}
        >
          <source src={src} type="video/mp4" />
          {'Your browser does not support the video tag.'}
        </video>
      )}
    </div>
  )
}
