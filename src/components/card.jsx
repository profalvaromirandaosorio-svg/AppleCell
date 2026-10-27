

function Card({ title, description, image, onAddToCart }) {
  return (
    <article className="card">
      {image ? (
        <img className="cardimg" src={image} alt={title} />
      ) : (
        <div className="cardimg-placeholder" role="img" aria-label={`Imagen de ${title} no disponible`}>
          Imagen próximamente
        </div>
      )}
      <div className="cardcont">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="card-button" type="button" onClick={onAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </article>
  )
}

export default Card