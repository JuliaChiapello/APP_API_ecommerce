const Rutas = require("express").Router()
const controladorProductoXCategoria = require("../controllers/productoXcategoria.controller")

Rutas.post("/", controladorProductoXCategoria.crearProductoXCategoria)
Rutas.get("/", controladorProductoXCategoria.obtenerProductosXCategorias)
Rutas.get("/:id", controladorProductoXCategoria.obtenerProductoXCategoriaPorId)
Rutas.put("/:id", controladorProductoXCategoria.actualizarProductoXCategoria)
Rutas.delete("/:id", controladorProductoXCategoria.eliminarProductoXCategoria)

module.exports = Rutas