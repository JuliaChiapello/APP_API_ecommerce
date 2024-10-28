const Sequelize = require("sequelize")
const config = require("../config/index.config")
const sequelize = new Sequelize(
    config.db.schema,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        dialect: config.db.dialect,
        port: config.db.port
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.producto = require("./producto.model")(sequelize, Sequelize)
db.categoria = require("./categoria.model")(sequelize, Sequelize)
db.productoXcategoria = require("./productoXcategoria.model")(sequelize, Sequelize)
db.tipodeproducto = require("./tipodeproducto.model")(sequelize, Sequelize)
db.imagen = require("./imagen.model")(sequelize, Sequelize)


//Cardinalidad N a N entre producto y categoria.
db.producto.hasMany(db.productoXcategoria)
db.categoria.hasMany(db.productoXcategoria)
db.productoXcategoria.belongsTo(db.producto)
db.productoXcategoria.belongsTo(db.categoria)

//Cardinalidades 1 a N.
db.producto.hasMany(db.imagen)
db.imagen.belongsTo(db.producto)


db.tipodeproducto.hasMany(db.producto);
db.producto.belongsTo(db.tipodeproducto)


module.exports = db