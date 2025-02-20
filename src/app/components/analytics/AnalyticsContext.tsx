'use client'

import type React from 'react'
import { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'

type AnalyticsContextType = {
  isAnalyticsEnabled: boolean
  setIsAnalyticsEnabled: (enabled: boolean) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
)

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useState(false)

  useEffect(() => {
    const consent = Cookies.get('cookieConsent')
    setIsAnalyticsEnabled(consent === 'true')
  }, [])

  return (
    <AnalyticsContext.Provider
      value={{ isAnalyticsEnabled, setIsAnalyticsEnabled }}
    >
      {children}
    </AnalyticsContext.Provider>
  )
}

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}
