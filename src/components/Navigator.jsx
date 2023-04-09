import '../styles/Navigator.css'
import logo from "../assets/logo.svg"


export default function Navigator() {
    return (
        <div className="navigator">
        <img className="logo-nav" src={logo} alt="Kasa logo"/>
        <div className="button-container">
        <div className="acceuil-button">Acceuil</div>
        <div className="apropos-button">A Propos</div>
        </div>
      </div>
  )
}