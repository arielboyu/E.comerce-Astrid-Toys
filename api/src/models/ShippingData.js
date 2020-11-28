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
    street:{
        type : DataTypes.STRING,
        allowNull: false
    },
    number:{
        type : DataTypes.INTEGER,
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
