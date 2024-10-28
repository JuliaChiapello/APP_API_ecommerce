const Rutas = require("express").Router()
const controladorImagen = require("../controllers/imagen.controller")

Rutas.post("/", controladorImagen.crearImagen)
Rutas.get("/", controladorImagen.obtenerImagenes)
Rutas.get("/:id", controladorImagen.obtenerImagenPorId)
Rutas.put("/:id", controladorImagen.actualizarImagen)
Rutas.delete("/:id", controladorImagen.eliminarImagen)

module.exports = Rutas