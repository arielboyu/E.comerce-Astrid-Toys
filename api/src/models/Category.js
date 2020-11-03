const { DataTypes } = require('sequelize');
import Product from './Product.js'

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING
    }
  });
};
