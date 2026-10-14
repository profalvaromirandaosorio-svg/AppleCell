import "../csscomponents/home.css"

import imge from "../assets/vite.svg"

function Home() {
    return(
        <main>
            <h1>Welcome to AppleCell</h1>
            <p>Ejemplo de contenido para la página principal.</p>
            <img src={imge} alt="Imagen de AppleCell" />

            <h2>Sección de Productos</h2>
        </main>
    )
}

export default Home