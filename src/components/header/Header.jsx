import "./header.module.scss"
import { Link } from "react-router-dom"
import logo from "../../assets/icones/logo.png"

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Imagem de logo do site connect sendo representada por uma mão segurando um coração, simbolizando apoio" />

      <nav>
        <Link to={"/doacao"}>Doação</Link>
        <Link to={"/voluntariado"}>Voluntariado</Link>
        <Link to={"/mentoria"}>Mentoria</Link>
        <Link to={"/eventosEP"}>Eventos</Link>
      </nav>

      <img src="https://avatars.githubusercontent.com/u/133176621?v=4" alt="Imagem do usuário" />
    </header>
  )
}

export default Header
