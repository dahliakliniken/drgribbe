'use client'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { useFocusTrap } from '@/hooks/useFocusTrap'

import { CloseIcon } from '../icons/CloseIcon'

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

  useFocusTrap(isModalOpen, modalRef)

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
      openButtonRef.current?.focus()
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
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleClickOutside)

      // Set focus to the close button when the modal opens
      closeButtonRef.current?.focus()

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isModalOpen])

  return (
    <div className="focus-within:ring-green-500 relative inline-block focus-within:ring-2">
      <button
        ref={openButtonRef}
        onClick={openModal}
        className="focus:outline-hidden"
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
