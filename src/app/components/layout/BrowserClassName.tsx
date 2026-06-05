'use client'

import { useEffect } from 'react'

import { isFirefoxIOS } from '@/utils/browser'

export const BrowserClassName = () => {
    useEffect(() => {
        if (isFirefoxIOS()) {
            document.documentElement.classList.add('firefox-ios')
        }

        return () => {
            document.documentElement.classList.remove('firefox-ios')
        }
    }, [])

    return null
}