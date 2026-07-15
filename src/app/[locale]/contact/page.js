'use client'
import { useTranslations } from 'next-intl'
import '@/components/Contact.css'

function Contact() {
  const t = useTranslations('contact')
  return (
    <main className="contact">
  <form className="contact-form">
    <h2>{t('title')} <span className="highlight">{t('highlight')}</span></h2>
    <p>{t('description')}</p>
    
    <div className="contact-field">
      <label>{t('name')}</label>
      <input type="text" placeholder={t('name_placeholder')} />
    </div>
    
    <div className="contact-field">
      <label>{t('email')}</label>
      <input type="email" placeholder={t('email_placeholder')} />
    </div>
    
    <div className="contact-field">
      <label>{t('message')}</label>
      <textarea placeholder={t('message_placeholder')} rows="4"></textarea>
    </div>
    
    <button type="submit">{t('button')}</button>
  </form>
</main>
  )
}

export default Contact