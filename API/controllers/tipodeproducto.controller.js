const { where } = require("sequelize")
const db = require("../models/index.model")
const tipodeproducto = db.tipodeproducto


exports.crearTipoDeProducto = (req, res) => {
    const { descripcion } = req.body
    tipodeproducto.create({
        descripcion: descripcion
    })
    .then((registro) => {
        res.status(201).json({
            ok: true,
            msg: "Tipo de producto creado correctamente.",
            status: 201,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear el tipo del producto.",
            status: 500,
            data: error
        })
    })
}


exports.obtenerTiposDeProductos = (req, res) => {
    tipodeproducto.findAll()
    .then((registros) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de tipos de productos",
            status: 200,
            data: registros
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el listado de tipos de productos.",
            status: 500,
            data: error
        })
    })
}



exports.obtenerTipoDeProductoPorId = (req, res) => {
    const _id = req.params.id
    tipodeproducto.findOne({
        where: { id:_id}
    })
    .then((registro) => {
        if (registro){
            res.status(200).json({
                ok: true,
                msg: "Tipo de producto encontrado.",
                status: 200,
                data: registro
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "Tipo de producto no encontrado.",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el tipo de producto.",
            status: 500,
            data: error
        })
    })
}


exports.actualizarTipoDeProducto = (req, res) => {
    const _id = req.params.id
    const { descripcion } = req.body
    tipodeproducto.update({
        descripcion: descripcion
    },
    {
        where: { id:_id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Tipo de producto actualizado correctamente.",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar el tipo de producto.",
            status: 500,
            data: error
        })
    })  
}



exports.eliminarTipoDeProducto = (req, res) => {
    const _id = req.params.id
    tipodeproducto.destroy({
        where: { id:_id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Tipo de producto eliminado correctamente.",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar el tipo de producto.",
            status: 500,
            data: error
        })
    })  
}