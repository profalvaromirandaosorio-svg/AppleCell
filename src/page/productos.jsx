import Card from "../components/card.jsx"
import iphone13 from "../assets/iphone13.webp"
import iphone14 from "../assets/iphone14.jpg"
import iphone15 from "../assets/iphone15.jpg"
import iphone16 from "../assets/iphone16.webp"
import iphone17 from "../assets/iphone17.jpg"
import iphone18 from "../assets/iphone18.webp"
import "../csscomponents/productos.css"
import { useState } from "react"

const produclista = [
    {
        id: "iphone17",
        title: "iPhone 17",
        description: "Conoce el iPhone 17 en AppleCell.",
        image: iphone17,
        price: 1300,
    },
    {
        id: "iphone18",
        title: "iPhone 18",
        description: "Conoce el iPhone 18 en AppleCell.",
        image: iphone18,
        price: 1800,
    },
    {
        id: "iphone16",
        title: "iPhone 16",
        description: "Descubre el iPhone 16 en AppleCell.",
        image: iphone16,
        price: 1100,
    },
    {
        id: "iphone15",
        title: "iPhone 15",
        description: "Encuentra el iPhone 15 que buscas en AppleCell.",
        image: iphone15,
        price: 900,
    },
        {
        id: "iphone14",
        title: "iPhone 14",
        description: "Encuentra el iPhone 14 que buscas en AppleCell.",
        image: iphone14,
        price: 700,
    },    {
        id: "iphone13",
        title: "iPhone 13",
        description: "Encuentra el iPhone 13 que buscas en AppleCell.",
        image: iphone13,
        price: 500,
    },
]

function Productos({ onAddToCart }) {
    const [mensaje, setMensaje] = useState("")

    async function agregarAlCarrito(producto) {
        setMensaje("")

        try {
            const response = await fetch("http://localhost:3002/carrito", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nombre: producto.title,
                    precio: producto.price,
                    imagen: producto.image,
                }),
            })
            const resultado = await response.json()

            if (!response.ok) {
                throw new Error(resultado.error || "No se pudo agregar el producto.")
            }

            onAddToCart()
            setMensaje(`${producto.title} se agregó al carrito.`)
        } catch (error) {
            setMensaje(`Error al agregar ${producto.title}: ${error.message}`)
        }
    }

    return (
        <section className="productos">
            <h1>Productos</h1>
            {mensaje && <p role="status">{mensaje}</p>}
            <div className="produclista">
                {produclista.map((producto) => (
                    <Card
                        key={producto.id}
                        {...producto}
                        onAddToCart={() => agregarAlCarrito(producto)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Productos
