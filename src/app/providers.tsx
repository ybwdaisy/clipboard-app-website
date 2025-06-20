'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const GoogleAnalyticsProvider = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'G-780SKCM4C8', {
        page_path: pathname,
      });
    }
  }, [pathname])

  return null
}