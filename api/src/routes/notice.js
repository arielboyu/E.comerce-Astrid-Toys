const server = require("express").Router();
const { Product, Orderdetails } = require("../db.js");

//Ruta para devolver el product mas vendido
server.get("/", (req, res) => {
  //qty, orderdet producId
  Orderdetails.findOne({
    order: [["quantity", "desc"]],
  })
    .then((order) => {
      let data = order.dataValues.productId;
      console.log(order.dataValues.productId);
      console.log(order.dataValues);
      Product.findByPk(data)
      .then((product) => {
        console.log(product);
        res.send(product);
      })
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});


//Devuelve una ruta que tenga fecha mas reciente
server.get("/date", (req, res) => {
  //qty, orderdet producId
  Product.findOne({
    order: [["createdAt", "desc"]],
  })
    .then((product) => {
      console.log(product);
      res.send(product);
    })
      .catch((err) => {
        res.sendStatus(404);
      });
    });


//Devuelve ruta que tenga el producto mas barato
server.get("/offer", (req, res) => {

  Product.findOne({
    product: [["price", "asc"]],
  })
  .then((product) => {
    console.log(product);
    res.send(product);
  })
    .catch((err) => {
      res.sendStatus(404);
    });
  });



module.exports = server;
