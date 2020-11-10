const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('orderdetails', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price:{
        type : DataTypes.INTEGER,
        allowNull: false
    }
  });
};
