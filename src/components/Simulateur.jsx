'use client'
import { useState } from 'react'
import './Simulateur.css'

function Simulateur() {
  const [surface, setSurface] = useState('')
  const [annee, setAnnee] = useState('')
  const [resultat, setResultat] = useState('')

  function calculerDPE() {
    if (surface === '' || annee === '') {
      setResultat('⚠️ Veuillez remplir tous les champs')
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
      <h2 className="section-title">Simulez votre <span className="highlight">DPE</span></h2>
      <div className="dpe-form">
        <input
          type="number"
          placeholder="Surface (m²)"
          value={surface}
        onChange={(e) => setSurface(e.target.value)}
      />
      <input
        type="number"
        placeholder="Année de construction"
        value={annee}
        onChange={(e) => setAnnee(e.target.value)}
      />
      
      <button onClick={calculerDPE}>Calculer mon DPE</button>
      <p>{resultat}</p>
      </div>
    </section>
  )
}

export default Simulateur