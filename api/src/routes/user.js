const server = require("express").Router();
const { User } = require("../db.js");

server.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(400).send("Error en el GET de Usuarios ", err);
    });
});

server.post("/create", (req, res) => {
  const { name, lastname, email, password } = req.body;
  if (name && lastname && email && password) {
    User.create({
      name,
      lastname,
      email,
      password,
    })
      .then((userCreated) => {
        console.log("Usuario creado OK ", userCreated);
        res.send(userCreated);
      })
      .catch((err) => {
        res.status(400).send("Error al crear usuario ", err);
      });
  } else {
    res.status(400).send("Error! campos sin completar");
  }
});

module.exports = server;
