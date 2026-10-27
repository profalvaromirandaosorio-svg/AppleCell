
import "../csscomponents/header.css"
import { NavLink } from "react-router-dom"

import logo from "../assets/react.svg"
function Header({ cartCount }) {
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
          </nav>
          <div
            className="header-cart"
            role="img"
            aria-label={`Carrito de compras: ${cartCount} productos`}
            title={`Carrito de compras: ${cartCount} productos`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 9H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            {cartCount > 0 && (
              <span className="header-cart-count" aria-live="polite">{cartCount}</span>
            )}
          </div>
        </div>
    </header>
  )
}

export default Header