import './About.css'
export const metadata = {
  title: "À Propos — EnergyHome AI",
  description: "Découvrez la mission d'EnergyHome AI et notre approche pour analyser la performance énergétique des logements français.",
}

function About() {
  return (
    <main className="about">
      <section className="about-hero">
        <h1>Notre mission</h1>
        <p>EnergyHome AI vous accompagne dans la transformation de votre maison en un espace intelligent et écoénergétique.</p>
      </section>

      <section className="about-context">
        <h2>Le <span className="highlight">contexte</span></h2>
        <p>La loi Climat et Résilience impose des obligations strictes en matière d'efficacité énergétique. Les logements classés G sont interdits à la location depuis 2025, les F le seront en 2028.</p>
      </section>

      <section className="about-approach">
        <h2>Notre <span className="highlight">approche</span></h2>
        <p>EnergyHome AI s'appuie sur les données ouvertes de l'ADEME pour analyser la performance énergétique des logements français grâce à l'intelligence artificielle.</p>
      </section>

      <section className="about-tech">
        <h2><span className="highlight">Les technologies</span> utilisées</h2>
        <div className="tech-grid">
            <span className="tech-badge">HTML5 / CSS3</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">React.js</span>
            <span className="tech-badge">Next.js</span>
            <span className="tech-badge">FastAPI — à venir</span>
            <span className="tech-badge">Python — à venir</span>
            <span className="tech-badge">SQL — à venir</span>
        </div>
      </section>
    </main>
  )
}

export default About