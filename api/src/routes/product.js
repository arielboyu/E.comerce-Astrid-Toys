const server = require("express").Router();
const { Product, Category } = require("../db.js");

//products
server.get("/", (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});

///products/categoria/:nombreCa
server.get("/categoria/:nombreCat", (req, res, next) => {
  let categoryId = req.params.nombreCat;
  Category.findAll({
    where: { id: categoryId },
    include: [
      {
        model: Product,
      },
    ],
  })
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});

module.exports = server;
