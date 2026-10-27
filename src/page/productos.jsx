import Card from "../components/card.jsx"
import iphone13 from "../assets/iphone13.webp"
import iphone14 from "../assets/iphone14.jpg"
import iphone15 from "../assets/iphone15.jpg"
import iphone16 from "../assets/iphone16.webp"
import iphone17 from "../assets/iphone17.jpg"
import iphone18 from "../assets/iphone18.webp"
import "../csscomponents/productos.css"

const produclista = [
    {
        id: "iphone17",
        title: "iPhone 17",
        description: "Conoce el iPhone 17 en AppleCell.",
        image: iphone17,
    },
    {
        id: "iphone18",
        title: "iPhone 18",
        description: "Conoce el iPhone 18 en AppleCell.",
        image: iphone18,
    },
    {
        id: "iphone16",
        title: "iPhone 16",
        description: "Descubre el iPhone 16 en AppleCell.",
        image: iphone16,
    },
    {
        id: "iphone15",
        title: "iPhone 15",
        description: "Encuentra el iPhone 15 que buscas en AppleCell.",
        image: iphone15,
    },
        {
        id: "iphone14",
        title: "iPhone 14",
        description: "Encuentra el iPhone 14 que buscas en AppleCell.",
        image: iphone14,
    },    {
        id: "iphone13",
        title: "iPhone 13",
        description: "Encuentra el iPhone 13 que buscas en AppleCell.",
        image: iphone13,
    },
]

function Productos({ onAddToCart }) {
    return (
        <section className="productos">
            <h1>Productos</h1>
            <div className="produclista">
                {produclista.map((producto) => (
                    <Card key={producto.id} {...producto} onAddToCart={onAddToCart} />
                ))}
            </div>
        </section>
    )
}

export default Productos
