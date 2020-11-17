const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("review", {
    score: {
        type: DataTypes.ENUM(1,2,3,4,5),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(120)
    }})
};