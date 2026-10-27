import "../csscomponents/home.css"
import iphone17 from "../assets/iphone17.jpg"

function Home() {
    return (
        <main className="home">
            <section className="home-about" aria-labelledby="home-about-title">
                <div className="home-about-content">
                    <p className="home-eyebrow">Tecnología para tu día a día</p>
                    <h1 id="home-about-title">Conoce AppleCell</h1>
                    <p>
                        En AppleCell acercamos la innovación de Apple a las personas.
                        Te ayudamos a encontrar el iPhone ideal y te acompañamos para
                        que disfrutes al máximo cada una de sus funciones.
                    </p>
                    <p>
                        Nuestro compromiso es ofrecer una experiencia de compra
                        cercana, con atención personalizada y productos que conectan
                        con lo que más te importa.
                    </p>
                </div>
                <div className="home-about-image">
                    <img src={iphone17} alt="iPhone disponible en AppleCell" />
                </div>
            </section>
        </main>
    )
}

export default Home