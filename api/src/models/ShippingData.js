const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('shippingdata', {
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city:{
        type : DataTypes.STRING,
        allowNull: false
    },
    adress:{
        type : DataTypes.STRING,
        allowNull: false
    },
    zipCode:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type : DataTypes.STRING,
        allowNull: false
    }  
  });
};
