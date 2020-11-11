const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('order', {
    state: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
