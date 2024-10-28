const Rutas = require("express").Router()
const controladorCategoria = require("../controllers/categoria.controller")

Rutas.post("/", controladorCategoria.crearCategoria)
Rutas.get("/", controladorCategoria.obtenerCategorias)
Rutas.get("/:id", controladorCategoria.obtenerCategoriaPorId)
Rutas.put("/:id", controladorCategoria.actualizarCategoria)
Rutas.delete("/:id", controladorCategoria.eliminarCategoria)

module.exports = Rutas