'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  const t = useTranslations('footer')
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>EnergyHome AI</h2>
          <p>{t('description')}</p>
        </div>
        <div className="footer-links">
          <h3>{t('links_title')}</h3>
          <ul>
            <li><Link href="/">{t('home')}</Link></li>
            <li><Link href="/about">{t('about')}</Link></li>
            <li><Link href="/contact">{t('contact')}</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>{t('social_title')}</h3>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="footer-bottom">
        <div></div>
        <p>© 2026 EnergyHome AI</p>
        <ul>
          <li><Link href="#">{t('legal')}</Link></li>
          <li><Link href="#">{t('privacy')}</Link></li>
        </ul>
      </div>
    </footer>
  )
}