const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  const user = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      UNIQUE: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    githubId: {
      type: DataTypes.STRING
    },
    facebookId: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    hooks: {
      beforeUpdate: (user) =>
        (user.password = bcrypt.hashSync(
          user.password,
          bcrypt.genSaltSync(10),
          null
        )),
      beforeCreate: (user) =>
        (user.password = bcrypt.hashSync(
          user.password,
          bcrypt.genSaltSync(10),
          null
        )),
    },
  }
);
user.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
return user
};
