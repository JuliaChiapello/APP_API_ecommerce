module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize
    const Producto = sequelize.define("Producto", {
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false    
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false    
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false    
        },
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    })
    return Producto
}