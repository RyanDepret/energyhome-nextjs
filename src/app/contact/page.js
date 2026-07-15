import './Contact.css'
export const metadata = {
  title: "Contact — EnergyHome AI",
  description: "Contactez l'équipe d'EnergyHome AI pour toute question concernant notre service d'analyse de la performance énergétique.",
}

function Contact() {
  return (
    <main className="contact">
  <form className="contact-form">
    <h2>Contactez-<span className="highlight">nous</span></h2>
    <p>Une question sur votre DPE ? On vous répond rapidement.</p>
    
    <div className="contact-field">
      <label>Nom</label>
      <input type="text" placeholder="Votre nom" />
    </div>
    
    <div className="contact-field">
      <label>Email</label>
      <input type="email" placeholder="Votre email" />
    </div>
    
    <div className="contact-field">
      <label>Message</label>
      <textarea placeholder="Votre message" rows="4"></textarea>
    </div>
    
    <button type="submit">Envoyer</button>
  </form>
</main>
  )
}

export default Contact