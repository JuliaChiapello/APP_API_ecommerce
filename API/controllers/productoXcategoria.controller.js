const { where } = require("sequelize")
const db = require("../models/index.model")
const productoXcategoria = db.productoXcategoria

exports.crearProductoXCategoria = (req, res) => {
    const { ProductoId, CategoriumId } = req.body
    productoXcategoria.create({
        ProductoId: ProductoId,
        CategoriumId: CategoriumId
    })
    .then((registro) => {
        res.status(201).json({
            ok: true,
            msg: "Relación producto por categoria creada correctamente.",
            status: 201,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear la relación producto por categoria.",
            status: 500,
            data: error
        })
    })
}


exports.obtenerProductosXCategorias = (req, res) => {
    productoXcategoria.findAll({
        include: [{
            model: db.producto
        },
        {
            model: db.categoria 
        }]
    })
    .then((registros) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de la relación productos por categorias",
            status: 200,
            data: registros
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el listado de la relación de productos por categorias.",
            status: 500,
            data: error
        })
    })
}



exports.obtenerProductoXCategoriaPorId = (req, res) => {
    const _id = req.params.id
    productoXcategoria.findOne({
        where: { id:_id}
    })
    .then((registro) => {
        if (registro){
            res.status(200).json({
                ok: true,
                msg: "Relación producto por categoria encontrada.",
                status: 200,
                data: registro
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "Relación producto por categoria no encontrado.",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener la relación producto por categoria.",
            status: 500,
            data: error
        })
    })
}


exports.actualizarProductoXCategoria = (req, res) => {
    const _id = req.params.id
    const { idProducto, idCategoria } = req.body
    productoXcategoria.update({
        idProducto: idProducto,
        idCategoria: idCategoria
    },
    {
        where: { id:_id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Relación producto por categoria actualizada correctamente.",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar la relación producto por categoria.",
            status: 500,
            data: error
        })
    })  
}



exports.eliminarProductoXCategoria = (req, res) => {
    const _id = req.params.id
    productoXcategoria.destroy({
        where: { id:_id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Relación producto por categoria eliminada correctamente.",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar la relación producto por categoria.",
            status: 500,
            data: error
        })
    })  
}