module.exports = (app) => {
    rutasProductos = require("./producto.routes")
    app.use("/producto", rutasProductos)

    rutasCategorias = require("./categoria.routes")
    app.use("/categoria", rutasCategorias)

    rutasProductoXCategoria = require("./productoXcategoria.routes")
    app.use("/productoXcategoria", rutasProductoXCategoria)

    rutasTipoDeProducto = require("./tipodeproducto.routes")
    app.use("/tipodeproducto", rutasTipoDeProducto)

    rutasImagen = require("./imagen.routes")
    app.use("/imagen", rutasImagen)
}