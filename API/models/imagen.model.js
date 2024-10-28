module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize
    const Imagen = sequelize.define("Imagen", {
        ubicacion: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        numerodeorden: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Imagen
}