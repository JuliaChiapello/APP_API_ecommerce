module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize
    const Categoria = sequelize.define("Categoria", {
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    })
    return Categoria
}