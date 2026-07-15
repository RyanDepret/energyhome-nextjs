import './Features.css'

function Features() {
  return (
    <section className="features">
      <h2 className="section-title">Comment ça <span className="highlight">marche ?</span></h2>
      <div className="features-grid">
        <div className="feature-item">
          <i className="fas fa-chart-line"></i>
          <h3>Analyse de consommation</h3>
          <p>Obtenez des insights détaillés sur votre consommation d'énergie.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-bolt"></i>
          <h3>Recommandations personnalisées</h3>
          <p>Recevez des conseils adaptés à votre profil énergétique.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-leaf"></i>
          <h3>Suivi en temps réel</h3>
          <p>Surveillez votre consommation et ajustez vos habitudes.</p>
        </div>
      </div>
    </section>
  )
}

export default Features