import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  
  return {
    title: t('contact_title'),
    description: t('contact_description'),
    alternates: {
      canonical: `https://energyhome-nextjs.vercel.app/${locale}/contact`,
    }
  }
}

export default function ContactLayout({ children }) {
  return children
}