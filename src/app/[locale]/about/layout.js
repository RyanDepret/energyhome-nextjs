import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  
  return {
    title: t('about_title'),
    description: t('about_description'),
    alternates: {
      canonical: `https://energyhome-nextjs.vercel.app/${locale}/about`,
    }
  }
}

export default function AboutLayout({ children }) {
  return children
}