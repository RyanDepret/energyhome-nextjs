'use client'
import { useState } from 'react'
import './Hero.css'

function Hero() {
  const [message, setMessage] = useState('')

  function handleClick() {
    setMessage('Analyse en cours...')
  }

  return (
    <section id="hero" style={{ backgroundImage: "url('/hero-bg.png')" }}>
      <div className="hero-content">
        <h1>Analysez votre performance énergétique</h1>
        <p>Découvrez la classe DPE de votre logement grâce à l'IA</p>
        <button onClick={handleClick}>Analyser votre logement</button>
        <p>{message}</p>
      </div>
    </section>
  )
}

export default Hero