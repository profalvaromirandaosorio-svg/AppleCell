/*Crear el servidor*/
const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()

app.use(cors())
app.use(express.json())

/*Conexión a PostgreSQL*/
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tienda_db",
  password: "123456",
  port: 5432
})

/*Levantar servidor*/
const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
  console.log(`Servidor backend funcionando en puerto ${PORT}`)
})


/*API para agregar producto al carrito*/
app.post("/carrito", async (req, res) => {

  const { nombre, precio, imagen } = req.body

  try {

    await pool.query(
      "INSERT INTO carrito(nombre,precio,imagen,cantidad) VALUES($1,$2,$3,$4)",
      [nombre, precio, imagen, 1]
    )

    res.json({ mensaje: "Producto agregado al carrito" })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error al agregar producto" })
  }

})