//importar librerias
import { Route, Routes } from "react-router-dom"

//importar las paginas
import Contacto from "./contactos.jsx"
import Home from "./home.jsx"
import Productos from "./productos.jsx"


function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>   
    )
}

export default AppRouter