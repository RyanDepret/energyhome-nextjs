'use client'
import { useState } from 'react'
import './Simulateur.css'
import { useTranslations } from 'next-intl'

function Simulateur() {
  const [surface, setSurface] = useState('')
  const [annee, setAnnee] = useState('')
  const [resultat, setResultat] = useState('')
  const t = useTranslations('simulateur')

  function calculerDPE() {
    if (surface === '' || annee === '') {
      setResultat(t('error'))
      return
    }

    if (annee < 1975) {
      setResultat('Classe F ou G')
    } else if (annee >= 1975 && annee < 2000) {
      setResultat('Classe D ou E')
    } else if (annee >= 2000 && annee < 2010) {
      setResultat('Classe C')
    } else {
      setResultat('Classe A ou B')
    }
  }

  return (
    <section className="simulateur">
      <h2 className="section-title">{t('title')} <span className="highlight">{t('highlight')}</span></h2>
      <div className="dpe-form">
        <input
          type="number"
          placeholder={t('surface')}
          value={surface}
        onChange={(e) => setSurface(e.target.value)}
      />
      <input
        type="number"
        placeholder={t('annee')}
        value={annee}
        onChange={(e) => setAnnee(e.target.value)}
      />
      
      <button onClick={calculerDPE}>{t('button')}</button>
      <p>{resultat}</p>
      </div>
    </section>
  )
}

export default Simulateur