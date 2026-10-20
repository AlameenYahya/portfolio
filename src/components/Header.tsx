import { useState } from 'react'
import { navLinks, profile } from '../data/profile.ts'
import { useTheme } from '../hooks/useTheme.ts'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons.tsx'

export default function Header() {
  const { theme, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#top" className="brand" aria-label="Home">
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-name">{profile.shortName}</span>
        </a>

        <nav id="primary-nav" className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            className="icon-btn menu-btn"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
