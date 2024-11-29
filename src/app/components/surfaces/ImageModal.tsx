'use client'
import { useEffect, useRef, useState } from 'react'
import { CloseIcon } from '../icons/CloseIcon'
import Image, { StaticImageData } from 'next/image'

type ImageModalProps = {
  imageSrc: StaticImageData
  imageAlt: string
}

export const ImageModal = ({ imageSrc, imageAlt }: ImageModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const openModal = () => {
    document.body.style.overflow = 'hidden' // Prevent background scrolling
    setIsVisible(true)
    setTimeout(() => {
      setIsModalOpen(true)
    }, 10) // Small delay to ensure the transition starts
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = '' // Restore background scrolling
    }, 300) // Duration of the transition
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal()
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      // Trap focus within the modal
      const focusableElements = modalRef.current?.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      ) as NodeListOf<HTMLElement>

      const firstFocusable = focusableElements?.[0]
      const lastFocusable = focusableElements?.[focusableElements.length - 1]

      const trapFocus = (e: KeyboardEvent) => {
        if (!firstFocusable || !lastFocusable) return

        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstFocusable) {
            e.preventDefault()
            lastFocusable?.focus()
          } else if (!e.shiftKey && document.activeElement === lastFocusable) {
            e.preventDefault()
            firstFocusable?.focus()
          }
        }
      }

      document.addEventListener('keydown', trapFocus)
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleClickOutside)

      // Set focus to the close button when the modal opens
      closeButtonRef.current?.focus()

      return () => {
        document.removeEventListener('keydown', trapFocus)
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('mousedown', handleClickOutside)
      }
    } else {
      // Return focus to the button that triggered the modal
      openButtonRef.current?.focus()
    }
  }, [isModalOpen])

  return (
    <div className="focus-within:ring-green-500 relative inline-block focus-within:ring-2">
      <button
        ref={openButtonRef}
        onClick={openModal}
        className="focus:outline-none"
        aria-label={`Open full view of ${imageAlt}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="h-auto w-full rounded-md transition-opacity hover:opacity-90"
        />
      </button>

      {/* Modal */}
      {isVisible && (
        <div
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
        >
          <div ref={modalRef} className={`max-h-screen w-auto overflow-hidden`}>
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute right-4 top-4 text-white"
            >
              <CloseIcon />
            </button>
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="max-h-[90vh]"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
