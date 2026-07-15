'use client'
import Link from 'next/link'
import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <Link href="/" className="logo">
        <span>EnergyHome AI</span>
      </Link>

      <button 
        className="burger" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={menuOpen ? "nav-open" : "nav-closed"}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
        <ul className="nav-links">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>À Propos</Link></li>
        </ul>
        <Link href="/contact" className="nav-btn" onClick={() => setMenuOpen(false)}>
          Contactez-nous
        </Link>
      </nav>
    </header>
  )
}