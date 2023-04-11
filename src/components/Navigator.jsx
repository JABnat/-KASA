import '../styles/Navigator.css'
import logo from "../assets/logo.svg"


export default function Navigator() {
    return (
        <div className="navigator">
          <img className="logo-nav" src={logo} alt="Kasa logo"/>
            <div className="button-container">
              <a href='https://jabnat-zany-train-5gx57r7gggfp469-3000.preview.app.github.dev/Home'>
                <div className="acceuil-button">Acceuil</div>
              </a>
              <a href='https://jabnat-zany-train-5gx57r7gggfp469-3000.preview.app.github.dev/About'>
                <div className="apropos-button">A Propos</div>
              </a>
        </div>
      </div>
  )
}