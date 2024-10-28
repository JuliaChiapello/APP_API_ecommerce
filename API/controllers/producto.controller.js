const { where } = require("sequelize")
const db = require("../models/index.model")
const producto = db.producto

//Insertar un nuevo producto o servicio en la tabla producto.
exports.crearProducto = (req, res) => {
    const { nombre, precio, cantidad, descripcion, idTipoDeProducto } = req.body
    producto.create({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        descripcion: descripcion,
        idTipoDeProducto: idTipoDeProducto
    })
    .then((registro) => {
        res.status(201).json({
            ok: true,
            msg: "Producto o servicio creado correctamente.",
            status: 201,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear el producto o servicio.",
            status: 500,
            data: error
        })
    })
}

//Lista todos los productos o servicios contenidos en la tabla producto.
exports.obtenerProductos = (req, res) => {
    producto.findAll()
    .then((registros) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de productos y/o servicios",
            status: 200,
            data: registros
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el listado de productos y/o servicios.",
            status: 500,
            data: error
        })
    })
}


//Retorna un producto o servicio especifico de la tabla producto.
exports.obtenerProductoPorId = (req, res) => {
    const _id = req.params.id
    producto.findOne({
        where: { id:_id}
    })
    .then((registro) => {
        if (registro){
            res.status(200).json({
                ok: true,
                msg: "Producto o servicio encontrado.",
                status: 200,
                data: registro
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "Producto o servicio no encontrado.",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el producto o servicio.",
            status: 500,
            data: error
        })
    })
}

//Actualiza los campos de un determinado producto o servicio en la tabla producto.
exports.actualizarProducto = (req, res) => {
    const _id = req.params.id
    const { nombre, precio, cantidad, descripcion, idTipoDeProducto } = req.body
    producto.update({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        descripcion: descripcion,
        idTipoDeProducto: idTipoDeProducto
    },
    {
        where: { id:_id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Producto o servicio actualizado correctamente.",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar el producto o servicio.",
            status: 500,
            data: error
        })
    })  
}


//Elimina un producto o servicio de la tabla producto
exports.eliminarProducto = (req, res) => {
    const _id = req.params.id
    producto.destroy({
        where: { id:_id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Producto o servicio eliminado correctamente.",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar el producto o  servicio.",
            status: 500,
            data: error
        })
    })  
}