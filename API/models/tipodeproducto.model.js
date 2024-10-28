module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize
    const TipoDeCategoria = sequelize.define("TipoDeCategoria", {
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    })
    return TipoDeCategoria
}