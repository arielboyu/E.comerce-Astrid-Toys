const server = require("express").Router();
const {
  Order,
  Product,
  User,
  OrderDetails,
  ShippingData,
} = require("../db.js");
const nodemailer = require("nodemailer");

//Ruta que incluye los modelos en la lista del
// Frontend con direccion en componente orderTables.js
// con path en http://localhost:3000/dashboard/users/list
// Se actualizaron los modelos
// Se le agrego catch
server.get("/", (req, res) => {
  Order.findAll({
    include: [
      {
        model: Product,
        as: "products",
        attributes: ["name", "description", "stock", "price"],
      },
      {
        model: User,
        as: "user",
        attributes: ["name", "username"],
      },
    ],
  })
    .then((r) => res.status(200).send(r))
    .catch(() => {
      return res
        .status(400)
        .send("Error No se encontraron Ordenes Registradas");
    });
});

//S44- agrega filtro por state si es enviado por query
server.get("/search", (req, res) => {
  let state = req.query.state;
  Order.findAll({
    where: { state: state },
    include: [
      {
        model: Product,
        as: "products",
        attributes: ["name", "description", "stock", "price"],
      },
      {
        model: User,
        as: "user",
        attributes: ["name", "username"],
      },
    ],
  }).then((r) => res.status(200).json(r));
});

// Ruta que Busca por id
// Se modifico la Ruta agregando modelos al include
// Se le agrega Catch
server.get("/:id", (req, res) => {
  let id = req.params.id;
  Order.findOne({
    where: { id: id },
    include: [
      {
        model: Product,
        as: "products",
        attributes: ["name", "description", "stock", "price", "id", "image"],
      },
      {
        model: User,
        as: "user",
        attributes: ["name", "username"],
      },
    ],
  })
    .then((r) => res.status(200).json(r))
    .catch(() => {
      return res.status(400).send("Error No se encontro orden con ese ID");
    });
});
/* server.get("/details/:id", (req, res) => {
  let id = req.params.id;
  Order.findOne({ where: { id: id } }).then((order) => {
    order.getAllOrderdetails().then((orderDetails) => {
      res.send(orderDetails);
    });
  });
}); */
// S47 : Crear Ruta para modificar una Orden
//esta ruta recibe una orden por params y en base al id setea su estado a cancelado
//testeadas con postman, funcionando

server.put("/modify/cancel/:id", (req, res) => {
  Order.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((orden) => {
      orden.update({
        state: "CANCELLED",
      });
    })
    .then(() => {
      return res.send("se Cancela La Orden");
    })
    .catch(() => {
      return res.status(400).send("Error No se ha podido Cancelar  La orden ");
    });
});

server.put("/modify/dispatch/:id", (req, res) => {
  Order.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((orden) => {
      orden.update({
        state: "DISPATCHED",
      });
    })
    .then(() => {
      return res.send("se Despacha La Orden");
    })
    .catch(() => {
      return res.status(400).send("Error No se ha podido Despachar  La orden ");
    });
});

server.get("/pending/all", (req, res) => {
  Order.findAll({
    where: { state: "PENDING" },
    include: [
      {
        model: Product,
        as: "products",
        attributes: ["name", "description", "stock", "price"],
      },
      {
        model: User,
        as: "user",
        attributes: ["name", "username"],
      },
    ],
  })
    .then((orders) => res.status(200).json(orders))
    .catch(() => {
      return res.status(400).send("Error No se encontraron ordenes Pendientes");
    });
});

server.get("/cancel/all", (req, res) => {
  Order.findAll({
    where: { state: "CANCELLED" },
    include: [
      {
        model: Product,
        as: "products",
        attributes: ["name", "description", "stock", "price"],
      },
      {
        model: User,
        as: "user",
        attributes: ["name", "username"],
      },
    ],
  })
    .then((orders) => res.status(200).json(orders))
    .catch(() => {
      return res.status(400).send("Error No se encontraron ordenes Caneladas");
    });
});

server.get("/complete/all", (req, res) => {
  Order.findAll({
    where: { state: "COMPLETE" },
    include: [
      {
        model: Product,
        as: "products",
        attributes: ["name", "description", "stock", "price"],
      },
      {
        model: User,
        as: "user",
        attributes: ["name", "username"],
      },
    ],
  })
    .then((orders) => res.status(200).json(orders))
    .catch(() => {
      return res.status(400).send("Error No se encontraron ordenes Completas");
    });
});

server.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  Order.destroy({ where: { id } })
    .then((order) => res.status(200).send("se elimino la orden "))
    .catch((err) => {
      res.status(400).send(err);
    });
});

//POST for ShippingData con envío de mail
server.post("/shipping/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const { country, city, street, number, zipCode, email, userId } = data;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  User.findOne({ where: { id: userId } }).then((r) => {
    console.log(
      "Parametros mail: from: ",
      process.env.EMAIL,
      " - to:  ",
      email,
      " - orderId: ",
      id,
      " - userName: ",
      r.dataValues.name
    );
    const mainConfig = {
      from: process.env.EMAIL,
      to: email,
      subject: `AtridToys - Order ${id} purchased`,
      text: `Hi ${r.dataValues.name}! 
    Thank you for your purchase, we will send you another mail when we dispatch the product`,
    };
    transporter.sendMail(mainConfig, (err, info) => {
      if (err) {
        res.status(500).send("Failed send mail");
      } else {
        console.log("Mail send");
        Order.findOne({ where: { id: id, state: "COMPLETE" } })
          .then((order) => {
            if (order == null) {
              res.status(404).send("Order does not exist");
            } else {
              if (
                !country ||
                !city ||
                !street ||
                !number ||
                !zipCode ||
                !email
              ) {
                res
                  .status(400)
                  .send("ERROR: Some of the required fields are empty");
              } else {
                console.log("orderId: ", id);
                let orderId = id
                ShippingData.create({
                  country,
                  city,
                  street,
                  number,
                  zipCode,
                  email,
                  orderId
                }).then((r) => 
                res.send(r));
              }
            }
          })
          .catch((e) => res.send(e));
      }
    });
  });
});

module.exports = server;
