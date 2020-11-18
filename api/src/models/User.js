const { DataTypes } = require("sequelize");
const crypto = require("crypto");
const { bcrypt } = require("bcrypt");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "user",
    {
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
        //seteo password como funcion en lugar de variable(no aparece en findAll y findOne)
        /*         get() {
          return () => this.getDataValue("contraseña");
        }, */
      },
      //sal / salt en criptografia es un numero de bit aleatorios
      //se usa como una de las entradas de funcion hash (la otra entrada es la password)
      //para
      salt: {
        type: DataTypes.STRING,
        //seteo salt como funcion en lugar de variable (no aparece en findAll y findOne)
        get() {
          return () => this.getDataValue("salt");
        },
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
/*     {
      classMethods: {
        generateHash: function (password) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword: function (password) {
          return bcrypt.compareSync(password, this.password);
        },
      },
    } */

    /*     {
      //funcion para generar salt, y para encriptacion
      classMethods: {
        generateSalt: function () {
          return crypto.randomBytes(16).toString("base64");
        },
        encryptPassword: function (plainText, salt) {
          return crypto
            .createHash("RSA-SHA256")
            .update(plainText)
            .update(salt)
            .digest("hex");
        },
      },
      hooks: {
        beforeCreate: (user) => {
          if (user.changed("password")) {
            user.salt = this.generateSalt();
            user.password = this.encryptPassword(user.password(), user.salt());
          }
        },
        beforeUpdate: (user) => {
          if (user.changed("password")) {
            user.salt = this.generateSalt();
            user.password = this.encryptPassword(user.password(), user.salt());
          }
        },
      },
    } */
  );
};
