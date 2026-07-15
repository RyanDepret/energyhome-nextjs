'use client'
import { useState } from 'react'
import './Hero.css'
import { useTranslations } from 'next-intl'

function Hero() {
  const [message, setMessage] = useState('')
  const t = useTranslations('hero')

  function handleClick() {
    setMessage('Analyse en cours...')
  }

  return (
    <section id="hero" style={{ backgroundImage: "url('/hero-bg.png')" }}>
      <div className="hero-content">
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <button onClick={handleClick}>{t('button')}</button>
        <p>{message}</p>
      </div>
    </section>
  )
}

export default Hero