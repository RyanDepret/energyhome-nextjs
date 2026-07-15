'use client'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('nav')

  const changerLangue = (newLocale) => {
    router.replace(pathname, { locale: newLocale })
  }
  const [langueOpen, setLangueOpen] = useState(false)
  
return (
    <header className="header">
  <Link href="/" className="logo">
    <span>EnergyHome AI</span>
  </Link>

  <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

  <nav className={menuOpen ? "nav-open" : "nav-closed"}>
    <div className="nav-header-mobile">
      <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
        <span>EnergyHome AI</span>
      </Link>
      <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
    </div>
    <ul className="nav-links">
      <li><Link href="/" onClick={() => setMenuOpen(false)}>{t('home')}</Link></li>
      <li><Link href="/about" onClick={() => setMenuOpen(false)}>{t('about')}</Link></li>
    </ul>
    <Link href="/contact" className="nav-btn mobile-nav-btn" onClick={() => setMenuOpen(false)}>
      {t('contact')}
    </Link>
    <div className="langue-selector mobile-langue">
      <button className="langue-btn" onClick={() => setLangueOpen(!langueOpen)}>
        {locale === 'fr' ? '🇫🇷' : '🇬🇧'} ▾
      </button>
      {langueOpen && (
        <div className="langue-dropdown">
          <button onClick={() => { changerLangue('fr'); setLangueOpen(false) }}>Français</button>
          <button onClick={() => { changerLangue('en'); setLangueOpen(false) }}>English</button>
        </div>
      )}
    </div>
  </nav>

  <div className="header-right">
    <div className="langue-selector">
      <button className="langue-btn" onClick={() => setLangueOpen(!langueOpen)}>
        {locale === 'fr' ? '🇫🇷' : '🇬🇧'} ▾
      </button>
      {langueOpen && (
        <div className="langue-dropdown">
          <button onClick={() => { changerLangue('fr'); setLangueOpen(false) }}>Français</button>
          <button onClick={() => { changerLangue('en'); setLangueOpen(false) }}>English</button>
        </div>
      )}
    </div>
    <Link href="/contact" className="nav-btn desktop-btn">
      {t('contact')}
    </Link>
  </div>
</header>
  )
}