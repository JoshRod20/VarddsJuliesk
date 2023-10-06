const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    'varyuliesk',
    'root',
    'password', {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const Category = sequelize.define('categoria', {
    ID_Categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Descripcion: {
        type: DataTypes.STRING
    }
},
{
    timestamps: false // Deshabilitar las columnas createdAt y updatedAt
});

module.exports = Category;
