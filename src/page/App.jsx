//se importan los componentes header y footer y el enrrutador de react-router-dom
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"

import "../csscomponents/App.css" //se importa la hoja de estilos para la aplicación

//se importa el enrrutador de react-router-dom
import AppRoutes from "./approuter"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="contenido">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App