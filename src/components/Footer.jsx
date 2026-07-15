import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>EnergyHome AI</h2>
          <p>Votre partenaire énergétique</p>
        </div>
        <div className="footer-links">
          <h3>Liens Utiles</h3>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">À Propos</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="footer-bottom">
        <div></div>
        <p>© 2026 EnergyHome AI</p>
        <ul>
          <li><Link href="#">Mentions légales</Link></li>
          <li><Link href="#">Politique de confidentialité</Link></li>
        </ul>
      </div>
    </footer>
  )
}