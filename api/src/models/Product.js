const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('product', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      image :{
        type: DataTypes.BLOB,
        allowNull: true
      }
    });
  };
};




//NOTAS PARA NICO, BORRAR: 
/* El Modelo de producto debe tener por lo menos estos atributos:

Nombre
Descripción
Precio
Stock
Pertenecer a una o más categorías.
Tener por lo menos una imagen. */
//otro