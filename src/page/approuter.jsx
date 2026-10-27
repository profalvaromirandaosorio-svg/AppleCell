//importar librerias
import { Route, Routes } from "react-router-dom"

//importar las paginas
import Contactos from "./contactos.jsx"
import Home from "./home.jsx"
import Productos from "./productos.jsx"

function AppRouter({ onAddToCart }) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos onAddToCart={onAddToCart} />} />
            <Route path="/contacto" element={<Contactos />} />
        </Routes>
    )
}

export default AppRouter