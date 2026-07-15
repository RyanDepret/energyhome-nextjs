'use client'
import '@/components/About.css'
import { useTranslations } from 'next-intl'

function About() {
  const t = useTranslations('about')
  return (
    <main className="about">
      <section className="about-hero">
        <h1>{t('mission_title')} <span className="highlight">{t('mission_highlight')}</span></h1>
        <p>{t('mission_text')}</p>
      </section>

      <section className="about-context">
        <h2>{t('context_title')} <span className="highlight">{t('context_highlight')}</span></h2>
        <p>{t('context_text')}</p>
      </section>

      <section className="about-approach">
        <h2>{t('approach_title')} <span className="highlight">{t('approach_highlight')}</span></h2>
        <p>{t('approach_text')}</p>
      </section>

      <section className="about-tech">
        <h2><span className="highlight">{t('tech_title')}</span> {t('tech_highlight')}</h2>
        <div className="tech-grid">
            <span className="tech-badge">{t('badge_html')}</span>
            <span className="tech-badge">{t('badge_javascript')}</span>
            <span className="tech-badge">{t('badge_react')}</span>
            <span className="tech-badge">{t('badge_next')}</span>
            <span className="tech-badge">{t('badge_fastapi')}</span>
            <span className="tech-badge">{t('badge_python')}</span>
            <span className="tech-badge">{t('badge_sql')}</span>
        </div>
      </section>
    </main>
  )
}

export default About