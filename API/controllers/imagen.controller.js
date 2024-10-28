const { where } = require("sequelize")
const db = require("../models/index.model")
const imagen = db.imagen


exports.crearImagen = (req, res) => {
    const { ubicacion, numerodeorden, idProducto } = req.body
    imagen.create({
        ubicacion: ubicacion,
        numerodeorden: numerodeorden,
        idProducto: idProducto
    })
    .then((registro) => {
        res.status(201).json({
            ok: true,
            msg: "Imagen creada correctamente.",
            status: 201,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear la imagen.",
            status: 500,
            data: error
        })
    })
}


exports.obtenerImagenes = (req, res) => {
    imagen.findAll()
    .then((registros) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de imagenes",
            status: 200,
            data: registros
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el listado de imagenes.",
            status: 500,
            data: error
        })
    })
}



exports.obtenerImagenPorId = (req, res) => {
    const _id = req.params.id
    imagen.findOne({
        where: { id:_id}
    })
    .then((registro) => {
        if (registro){
            res.status(200).json({
                ok: true,
                msg: "Imagen encontrada.",
                status: 200,
                data: registro
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "Imagen no encontrada.",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener la Imagen.",
            status: 500,
            data: error
        })
    })
}


exports.actualizarImagen = (req, res) => {
    const _id = req.params.id
    const { ubicacion, numerodeorden, idProducto } = req.body
    imagen.update({
        ubicacion: ubicacion,
        numerodeorden: numerodeorden,
        idProducto: idProducto 
    },
    {
        where: { id:_id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Imagen actualizada correctamente.",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar la imagen.",
            status: 500,
            data: error
        })
    })  
}



exports.eliminarImagen = (req, res) => {
    const _id = req.params.id
    imagen.destroy({
        where: { id:_id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Imagen eliminada correctamente.",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar la imagen.",
            status: 500,
            data: error
        })
    })  
}