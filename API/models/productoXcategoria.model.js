module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize
    const ProductoXCategoria = sequelize.define("ProductoXCategoria", {
    })
    return ProductoXCategoria
}