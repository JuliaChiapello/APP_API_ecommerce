const Rutas = require("express").Router()
const controladorProducto = require("../controllers/producto.controller")

Rutas.post("/", controladorProducto.crearProducto)
Rutas.get("/", controladorProducto.obtenerProductos)
Rutas.get("/:id", controladorProducto.obtenerProductoPorId)
Rutas.put("/:id", controladorProducto.actualizarProducto)
Rutas.delete("/:id", controladorProducto.eliminarProducto)

module.exports = Rutas