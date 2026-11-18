'use client'

import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import { useRef } from 'react'

import { CloseIcon } from '../icons/CloseIcon'

type ImageModalProps = {
  imageSrc: StaticImageData
  imageAlt: string
}

export const ImageModal = ({ imageSrc, imageAlt }: ImageModalProps) => {
  const t = useTranslations('common')
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <div className="relative inline-block focus-within:ring-2 focus-within:ring-green-500">
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="focus:outline-hidden"
        aria-label={t('imageModal.openFullViewAria', { imageAlt })}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="h-auto w-full rounded-md transition-opacity hover:opacity-90"
        />
      </button>

      <dialog
        ref={dialogRef}
        aria-label={t('imageModal.fullViewAria', { imageAlt })}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none items-center justify-center bg-transparent backdrop:bg-black/75 open:flex"
        onPointerDown={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close()
          }
        }}
      >
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label={t('imageModal.closeAria')}
          className="absolute top-4 right-4 text-white"
        >
          <CloseIcon />
        </button>
        <Image
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="max-h-[90vh] object-contain"
        />
      </dialog>
    </div>
  )
}
