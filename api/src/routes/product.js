const server = require("express").Router();
const { Product } = require("../db.js");

server.get("/", (req, res, next) => {
  Product.findAll()
    .then((products) => {
      console.log("GET OK");
      res.send(products);
    })
    .catch(next);
});

// s25 : Crear ruta para crear/agregar Producto
// POST /products
// Controla que estén todos los campos requeridos, si no retorna un statos 400.
// Si pudo crear el producto retorna el status 201 y retorna la información del producto.

// Este post agrega un nuevo producto
server.post("/", (req, res) => {
  const { name, description, price, stock, image } = req.body;
  if (name && description && price && stock) {
    Product.create({
      name,
      description,
      price,
      stock,
      image,
    })
      .then((productCreated) => {
        res.status(201).send(productCreated);
      })
      .catch((err) => {
        console.log("Error en POST" + err);
      });
  } else {
    res.status(400).send("ERROR: Campos sin completar");
  }
});

module.exports = server;
