import { useEffect,useState } from 'react'

export function useDelayedAnimation(delay: number) {
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return showAnimation
}
