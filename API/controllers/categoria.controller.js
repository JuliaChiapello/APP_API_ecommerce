const { where } = require("sequelize")
const db = require("../models/index.model")
const categoria = db.categoria

//Insertar una nueva categoria en la tabla categoria.
exports.crearCategoria = (req, res) => {
    const { descripcion } = req.body
    categoria.create({
        descripcion: descripcion
    })
    .then((registro) => {
        res.status(201).json({
            ok: true,
            msg: "Categoria creada correctamente.",
            status: 201,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear la categoria.",
            status: 500,
            data: error
        })
    })
}

//Lista todos las categorias contenidas en la tabla categoria.
exports.obtenerCategorias = (req, res) => {
    categoria.findAll()
    .then((registros) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de categorias",
            status: 200,
            data: registros
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el listado de categorias.",
            status: 500,
            data: error
        })
    })
}


//Retorna una categoria especifica de la tabla categoria.
exports.obtenerCategoriaPorId = (req, res) => {
    const _id = req.params.id
    categoria.findOne({
        where: { id:_id}
    })
    .then((registro) => {
        if (registro){
            res.status(200).json({
                ok: true,
                msg: "Categoria encontrada.",
                status: 200,
                data: registro
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "Categoria no encontrada.",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener la categoria.",
            status: 500,
            data: error
        })
    })
}

//Actualiza una determinada categoria en la tabla categoria.
exports.actualizarCategoria = (req, res) => {
    const _id = req.params.id
    const { descripcion } = req.body
    categoria.update({
        descripcion: descripcion
    },
    {
        where: { id:_id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Categoria actualizada correctamente.",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar la categoria.",
            status: 500,
            data: error
        })
    })  
}


//Elimina una categoria de la tabla categoria
exports.eliminarCategoria = (req, res) => {
    const _id = req.params.id
    categoria.destroy({
        where: { id:_id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Categoria eliminada correctamente.",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar la categoria.",
            status: 500,
            data: error
        })
    })  
}