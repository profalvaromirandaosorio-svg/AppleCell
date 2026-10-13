
import "../csscomponents/header.css"
import { Link } from "react-router-dom"

import logo from "../assets/react.svg"
function Header() {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="Logo de AppleCell" />
            <h1>AppleCell</h1>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contactos">Contactos</Link>
       </nav>
    </header>
  )
}

export default Header