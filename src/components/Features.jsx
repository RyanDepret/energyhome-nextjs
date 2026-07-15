'use client'
import './Features.css'
import { useTranslations } from 'next-intl'

function Features() {
  const t = useTranslations('features')
  return (
    <section className="features">
      <h2 className="section-title">{t('title')} <span className="highlight">{t('highlight')}</span></h2>
      <div className="features-grid">
        <div className="feature-item">
          <i className="fas fa-chart-line"></i>
          <h3>{t('card1_title')}</h3>
          <p>{t('card1_text')}</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-bolt"></i>
          <h3>{t('card2_title')}</h3>
          <p>{t('card2_text')}</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-leaf"></i>
          <h3>{t('card3_title')}</h3>
          <p>{t('card3_text')}</p>
        </div>
      </div>
    </section>
  )
}

export default Features