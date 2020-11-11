const server = require("express").Router();
const { User, Order, OrderDetails, Product } = require("../db.js");
//const Product = require("../models/Product.js");

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

// S37 : Crear Ruta para eliminar Usuario
// filtramos por id y utilizamos el metodo delete
server.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  User.destroy({ where: { id } })
    .then((user) => res.status(200).send("se elimino el usuario " + user))
    .catch((err) => {
      res.status(400).send(err);
    });
});

// S35 : Crear Ruta para modificar Usuario
// Se validan los campos, se filtra por id y se actualizan los values!
server.put("/:id", (req, res) => {
  const { name, lastname, email, password } = req.body;
  if (!name || !lastname || !email || !password) {
    res.status(400).send("Debes Completar todos Los Campos ");
  }
  User.findByPk(req.params.id)
    .then((user) => {
      user.update({
        name: name,
        lastname: lastname,
        email: email,
        password: password,
      });
    })
    .then(() => {
      res.send("El User ha sido Actualizado");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

server.get("/:idUser/cart", (req, res) => {
  const idUsuario = req.params.idUser;
  User.findOne({ where: { id: idUsuario } }).then((user) => {
    user
      .getOrders({ where: { state: "PENDING" } })
      .then((orders) => res.send(orders));
  });
});

//ruta para agregar un producto al carrito
//testeada
//maneja errores
server.post("/:idUser/cart/", (req, res) => {
  const idUser = req.params.idUser;
  var { quantity, idProduct } = req.body;
  Order.create({ state: "PENDING" })
    .then((orden) => {
      User.findOne({ where: { id: idUser } }).then((user) => {
        if (user == null) {
          res.send("no se encontro usuario");
        } else {
          orden.setUser(user).then((order) => {
            Product.findOne({ where: { id: idProduct } }).then((myProduct) => {
              if (myProduct == null) {
                res.send("no se encontro producto");
              } else {
                order
                  .addProduct(myProduct, {
                    through: { price: myProduct.price, quantity: quantity },
                  })
                  .then((ord) => {
                    res.send(ord);
                  });
              }
            });
          });
        }
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

/* through: { price: myProduct.price,
  quantity: randomNum(100) }, */
//funciones de modelos

//var pepito = User.created({name: fulanito})

//funciones de instancias

//fulanito.getOrders()

// S45 : Crear Ruta que retorne todas las Ordenes de los usuarios
server.get("/orders/:id", (req, res) => {
  const id = req.params.id;
  Order.findAll({
    where: {
      userId: id,
    },
  })
    .then((r) => res
    .status(200).json(r))
})


module.exports = server;
