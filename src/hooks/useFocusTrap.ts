import { RefObject, useEffect, useRef } from 'react'

export const useFocusTrap = (
  isOpen: boolean,
  containerRef: RefObject<HTMLElement | null>
) => {
  const firstFocusableElementRef = useRef<HTMLElement | null>(null)
  const lastFocusableElementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const focusableElements = containerRef.current.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      ) as NodeListOf<HTMLElement>

      firstFocusableElementRef.current = focusableElements[0]
      lastFocusableElementRef.current =
        focusableElements[focusableElements.length - 1]

      const trapFocus = (e: KeyboardEvent) => {
        if (
          !firstFocusableElementRef.current ||
          !lastFocusableElementRef.current
        )
          return

        if (e.key === 'Tab') {
          if (
            e.shiftKey &&
            document.activeElement === firstFocusableElementRef.current
          ) {
            e.preventDefault()
            lastFocusableElementRef.current.focus()
          } else if (
            !e.shiftKey &&
            document.activeElement === lastFocusableElementRef.current
          ) {
            e.preventDefault()
            firstFocusableElementRef.current.focus()
          }
        }
      }

      document.addEventListener('keydown', trapFocus)

      return () => {
        document.removeEventListener('keydown', trapFocus)
      }
    }
  }, [isOpen, containerRef])
}
