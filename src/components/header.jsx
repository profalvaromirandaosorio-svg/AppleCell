
import "../csscomponents/header.css"
import { NavLink } from "react-router-dom"

import car from "../assets/car.png"
import logo from "../assets/react.svg"
function Header() {
  return (
    <header className="site-header">
        <div className="site-brand">
            <img className="site-brand-logo" src={logo} alt="" />
            <h1 className="site-brand-name">AppleCell</h1>
        </div>

        <div className="header-actions">
          <nav className="header-nav" aria-label="Navegación principal">
            <NavLink className="header-link" to="/">Home</NavLink>
            <NavLink className="header-link" to="/productos">Productos</NavLink>
            <NavLink className="header-link" to="/contacto">Contacto</NavLink>
            <img className="header-cart-image" src={car} alt="Carrito de compras" />
          </nav>
        </div>
    </header>
  )
}

export default Header