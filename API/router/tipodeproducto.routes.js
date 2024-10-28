const Rutas = require("express").Router()
const controladorTipoDeProducto = require("../controllers/tipodeproducto.controller")

Rutas.post("/", controladorTipoDeProducto.crearTipoDeProducto)
Rutas.get("/", controladorTipoDeProducto.obtenerTiposDeProductos)
Rutas.get("/:id", controladorTipoDeProducto.obtenerTipoDeProductoPorId)
Rutas.put("/:id", controladorTipoDeProducto.actualizarTipoDeProducto)
Rutas.delete("/:id", controladorTipoDeProducto.eliminarTipoDeProducto)

module.exports = Rutas