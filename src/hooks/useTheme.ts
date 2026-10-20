import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const darkQuery = '(prefers-color-scheme: dark)'

function initialTheme(): Theme {
  // index.html applies any saved theme before first paint
  const saved = document.documentElement.getAttribute('data-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia(darkQuery).matches ? 'dark' : 'light'
}

/** Follows the OS colour scheme until the visitor picks one explicitly. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const [explicit, setExplicit] = useState(() => document.documentElement.hasAttribute('data-theme'))

  useEffect(() => {
    if (explicit) return
    const media = window.matchMedia(darkQuery)
    const onChange = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light')
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [explicit])

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // storage unavailable (private mode); the choice lasts for this visit only
    }
    setExplicit(true)
    setTheme(next)
  }, [theme])

  return { theme, toggle }
}
