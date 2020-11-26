const server = require("express").Router();
const { User, Order, Product, Orderdetails } = require("../db.js");
const { Op } = require("sequelize");

server.get("/", (req, res) => {
  console.log(req.user)
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(400).send("Error en el GET de Usuarios ", err);
    });
});

server.post("/create", (req, res) => {
  const { name, username, email, password } = req.body;
  console.log(req.body);
  if (name && username && email && password) {
    User.create({
      name,
      username,
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

//Se agrega ruta para cambiar password

server.put("/:id/changepsw", (req, res) => {
  const { password } = req.body;
  if (!password) {
    res.status(400).send("Should enter new password");
  }
  User.findByPk(req.params.id)
    .then((user) => {
      user.update({
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

/* server.get("/:idUser/cart", (req, res) => {
  const idUsuario = req.params.idUser;
  User.findOne({
    include: [
      {
        model: Order,
        include: [
          {
            model: Product,
          },
        ],
        where: { state: "PENDING" },
      },
    ],
    where: { id: idUsuario },
  }).then((user) => {
    res.send(user);
  });
});  */

// Esta ruta retorna un carrito, la volvi a hacer, antes estaba como esta arriba
server.get("/:idUser/cart", (req, res) => {
  const id = req.params.idUser;
  Order.findOne({
    where: {
      userId: id,
      state: "PENDING"
    },
    include: Product
  }).then((order) => res.status(200).json(order));
});

//S40 : Crear Ruta para vaciar el carrito
server.delete("/:idUser/cart", (req, res) => {
  const idUsuario = req.params.idUser;
  User.findOne({ where: { id: idUsuario } })
    .then((user) => {
      if (user === null) {
        res.status(404);
        res.send("No se encontró el usuario");
      } else {
        user
          .getOrders({ where: { state: "PENDING" } })
          .then((orders) =>
            orders.map((order) => {
              order.update({ state: "CANCELLED" });
            })
          )
          .then((r) => res.send(r));
      }
    })
    .catch((e) => res.send("Hubo un error: ", e));
});

//Eliminar un solo item del carrito
server.delete("/:idUser/cart/:productId", (req, res) => {
  const idUsuario = req.params.idUser;
  const productId = req.params.productId;
  User.findOne({ where: { id: idUsuario } })
    .then((user) => {
      if (user === null) {
        res.status(404);
        res.send("No se encontró el usuario");
      } else {
        user
          .getOrders({ where: { productId: productId } })
          .then((orders) =>
            orders.map((order) => {
              order.update({ state: "CANCELLED" });
            })
          )
          .then((r) => res.send(r));
      }
    })
    .catch((e) => res.send("Hubo un error: ", e));
});

//ruta para agregar CREAR EL CARRITO
//testeada
//maneja errores
server.post("/:idUser/cart/", (req, res) => {
  const idUser = req.params.idUser;
  var { quantity, productId } = req.body;
  Order.create({ state: "PENDING" })
    .then((orden) => {
      User.findOne({ where: { id: idUser } }).then((user) => {
        if (user == null) {
          res.send("no se encontro usuario");
        } else {
          orden.setUser(user).then((order) => {
            Product.findOne({ where: { id: productId } }).then((myProduct) => {
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

//ruta para agregar un producto al carrito
//testeada
//maneja errores
server.put("/:idUser/cart/", (req, res) => {
  const idUser = req.params.idUser;
  var { quantity, productId, orderId } = req.body;
  Order.findOne({ where: { id: orderId } })
    .then((order) => {
      User.findOne({ where: { id: idUser } }).then((user) => {
        if (user == null) {
          res.send("no se encontro usuario");
        } else {
          Product.findOne({ where: { id: productId } }).then((myProduct) => {
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
        }
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Ruta para agregar mas de un articulo a la orden

server.post("/cart/products", (req, res) => {
  const user = req.body.user
  const arrProducts = req.body.carrito
  if(user.id === null){
    res.status(403).send(`User invalid ${user.id}`)
  } else {
  Order.create({ state: "COMPLETE" })
  .then((orden) => {
    User.findOne({
      where: { id: user.id }
     }
     ).then((resUser) => { 
        orden.setUser(resUser).then((order) => {
          arrProducts.map((prod)=>{
            Product.findOne({
              where: { id : prod.id}
            }).then((resProd)=>{
              order.addProduct(resProd, {
                through: {
                  price: prod.price,
                  quantity: prod.cant
                }
              }).then(ord => {
                console.log("Entre al final de Product")
                res.sendStatus(200)})
            })
          })
        });
      })
    });
  }
})


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
  }).then((r) => res.status(200).json(r));
});

//S41: Crear ruta para editar las cantidades del carrito.
//Esta ruta le suma o resta lo que pase de quantity a la orden.
server.put("/:order/:id", (req, res) => {
  const productId = req.params.id;
  const orderId = req.params.order;
  var { quantity } = req.body;

  Order.findOne({ where: { id: orderId } }).then((order) => {
    if (order.state === "PENDING") {
      Orderdetails.findOne({
        where: { [Op.and]: [{ productId: productId }, { orderId: orderId }] },
      }).then((order) => {
        if (order == null) {
          res.send("no existe el producto en la orden");
        } else {
          order.increment("quantity", { by: quantity }).then((r) => {
            res.send(r);
          });
        }
      });
    } else {
      res.send("No se puede modificar la orden");
    }
  });
});

//EXTRA: Crear una ruta que retorne el historial de compras (canceladas y completadas)
server.get("/shopping/:id", (req, res) => {
  const id = req.params.id;
  Order.findAll({
    where: {
      userId: id,
      [Op.or]: [{ state: "CANCELLED" }, { state: "COMPLETE" }],
    },
  }).then((orders) => res.status(200).json(orders));
});

//Cambiar User a Admin
server.put("/change/rol/:id", (req, res)=>{
  const id = req.params.id
  User.findOne({where: { id: id}})
  .then((userFind)=>{
    userFind.update({ isAdmin : true})
    .then(r => console.log("Rol change"))
    .catch(err => console.log("Rol not change"))
  })
  .catch(err => console.log("User not found"))
})


module.exports = server;
