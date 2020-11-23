const server = require("express").Router();
const { Product, Category, Review, User } = require("../db.js");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.dirname(path.dirname(__dirname))+"/public/images",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  dest: path.dirname(__dirname) + "/" + "public/images",
});

/* let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({storage}) */

const recalculateAverageScore = require("../controllers/recalculateAverageScore.js");

//esta funcion pasa la primer letra de un word a mayus
function capitalize(word) {
  word = word.toLowerCase();
  return word[0].toUpperCase() + word.slice(1);
}

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, path.join(__dirname, '/uploads'))
//   },
//   filename: function(req, file, cb) {
//     cb(null, file.originalname)
//   }
// });

// const upload = multer({storage});

server.get("/actives", (req, res, next) => {
  Product.findAll({
    where: {
      active: true,
    },
  })
    .then((products) => {
      console.log("GET OK");

      res.send(products);
    })
    .catch(next);
});

server.get("/", (req, res, next) => {
  Product.findAll({
    order: [["id", "ASC"]],
  })
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

// S23 : Crear ruta que retorne productos segun el keyword de búsqueda
// GET /search?data={valor}
// Retorna todos los productos que tengan {valor} en su nombre o descripcion.
//ATENCION: NO ES CASE SENSITIVE.
server.get("/search", (req, res, next) => {
  var data = req.query.data;
  console.log("esto es la data: " + data);
  Product.findAll({
    where: {
      [Op.or]: {
        name: {
          [Op.iLike]: `%${data}%`,
        },
        description: {
          [Op.iLike]: `%${data}%`,
        },
      },
    },
  })
    .then((products) => {
      console.log(products);
      res.send(products);
    })
    .catch(next);
});

// s25 : Crear ruta para crear/agregar Producto
// POST /products
// Controla que estén todos los campos requeridos, si no retorna un statos 400.
// Si pudo crear el producto retorna el status 201 y retorna la información del producto.
server.post("/upload/:idProduct", upload.single("image"), function (req, res) {
  console.log(req.file);
  console.log("este es el idProduct: ", req.params.idProduct);
  let idProduct = req.params.idProduct;
  fs.renameSync(
    req.file.path,
    req.file.destination +
      "/" +
      idProduct.toString() +
      "." +
      req.file.mimetype.split("/")[1]
  );
  console.log("NUEVA RUTA:");
  //fs.rename(req.file.path + "." + req.file.mimetype.split("/")[1], req.file.destination+"/"+idProduct.toString()+"." + req.file.mimetype.split("/")[1])
  Product.findOne({ where: { id: idProduct } }).then((product) => {
    console.log(product);
    product.setDataValue("image", req.file.destination + "/" + idProduct);
    product.save();
    console.log("-----------------------------------------------");
    console.log(product);
    res.send("uploaded");
  });

  // the uploaded file object
});
// Este post agrega un nuevo producto

server.post("/", (req, res) => {
  const {
    name,
    description,
    price,
    stock,
    image,
    categories,
    active,
  } = req.body;

  if (name && description && price && stock) {
    Product.create({
      name,
      stock,
      price,
      description,
      active,
      image,
    })
      .then((productCreated) => {
        //buscar categoria a la que tengo que agregar el producto
        categories.map((cat) => {
          let catId = parseInt(cat);
          Category.findOne({ where: { id: catId } })
            .then((category) => productCreated.addCategory(category))
            .catch((err) => console.log("Error con las categorias " + err));
        });
        // Category.findAll({ where: { id: catId } }).then((res) =>
        //   productCreated.addCategories(res)
        // );
        //Cargo la imagen
        res.send(productCreated);
      })
      .catch((err) => {
        console.log("Error en POST" + err);
      });
  } else {
    res.status(400).send("ERROR: Campos sin completar");
  }
});

// S26 : Crear ruta para Modificar Producto
// PUT /products/:id
// Modifica el producto con id: id. Retorna 400 si los campos enviados no son correctos.
// Retorna 200 si se modificó con exito, y retorna los datos del producto modificado.

// Este put modifica el producto al que se apunta por parámetro
server.put("/:id", (req, res) => {
  const product = req.params.id;
  const {
    name,
    description,
    price,
    stock,
    image,
    active,
    categories,
  } = req.body;
  Product.findOne({
    where: {
      id: product,
    },
  })
    .then((product) => {
      if (product) {
        product
          .update({ name, description, price, stock, image, active })
          .then((productUpdated) => {
            //elimina las categorias para luego setear el nuevo set
            productUpdated.setCategories();
            //recorre las categorias que llegan por body
            categories.map((category) => {
              //buscar categoria a la que tengo que agregar el producto
              Category.findAll({ where: { name: category } }).then((res) =>
                productUpdated.addCategories(res)
              );
            });
          })
          .then(res.status(200).send(product));
      } else {
        res.status(400).send("No se encontró producto con ese ID");
      }
    })

    .catch((err) => {
      res.status(400).send("Los campos enviados no son correctos" + err);
    });
});

// S27 : Crear Ruta para eliminar Producto
// DELETE /products/:id
// PUT /products/:id
// Retorna 200 si se elimino con exito.

server.delete("/:productID", (req, res) => {
  const productID = req.params.productID;
  Product.destroy({
    where: {
      id: productID,
    },
  })
    .then((product) => {
      if (product) {
        res.status(200).send("Se eliminó el producto" + product);
      } else {
        res.status(400).send("No se encontró producto con ID " + productID);
      }
    })
    .catch((err) => {
      console.log("Error en DELETE" + err);
    });
});

server.get("/:id", (req, res, next) => {
  //query
  /* select * from product where idProduct = req.params.id*/

  Product.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((r) => {
      res.send(r);
    })
    .catch(next);
});

//Devuelve las categorias de un producto
server.get("/:id/categories", (req, res, next) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      product.getCategories().then((categories) => res.send(categories));
    })
    .catch(next);
});

// RUTA PARA TRAER LOS PRODUCTOS CORRESPONDIENTES A UNA CATEGORIA EN PARTICULAR
server.get("/search/:category", (req, res) => {
  var categoryName = capitalize(req.params.category);
  Category.findOne({
    where: {
      name: categoryName,
    },
  })
    .then((category) => {
      category.getProducts().then((products) => {
        console.log("entre acá");
        res.send(products);
      });
    })
    .catch((err) => {
      console.log("entre acá" + err);
      res.sendStatus(404);
    });
});

//-----------REVIEWS------------

//S54 : Crear ruta para crear/agregar Review
//POST /product/:id/review
server.post("/:id/review", (req, res) => {
  const productId = req.params.id;
  const { userId, score, description } = req.body; //objeto review pasado por body
  if (score && description && productId && userId) {
    Review.create({ score, description, productId, userId })
      .then(() => recalculateAverageScore(productId))
      .then((r) => res.send(r))
      .catch((err) => {
        console.log("Error en POST review: " + err);
      });
  } else {
    res.status(400).send("ERROR: Campos sin completar");
  }
});

//S55 : Crear ruta para Modificar Review
//PUT /product/:id/review/:idReview

server.put("/:id/review/:idReview", (req, res) => {
  const productId = req.params.id;
  const reviewId = req.params.idReview;
  const { score, description } = req.body;
  Review.update(
    { score: score, description: description },
    { where: { id: reviewId } }
  )
    .then(() => recalculateAverageScore(productId))
    .then((r) => res.send(r))
    .catch((err) => {
      console.log("Error en PUT review: " + err);
      res.send(err);
    });
});

//S56 : Crear Ruta para eliminar Review
//DELETE /product/:id/review/:idReview

server.delete("/:id/review/:idReview", (req, res) => {
  const productId = req.params.id;
  const reviewId = req.params.idReview;
  Review.destroy({ where: { id: reviewId } })
    .then(() => recalculateAverageScore(productId))
    .then((r) => res.send(r))
    .catch((err) => {
      console.log("Error en DELETE review: " + err);
      res.send(err);
    });
});

//S57 : Crear Ruta para obtener todas las reviews de un producto.
//GET /product/:id/review/

server.get("/:id/review/", (req, res) => {
  const productId = req.params.id;
  Review.findAll({ where: { productId: productId }, include: User })
    .then((r) => res.send(r))
    .catch((err) => {
      console.log("Error en GET review: " + err);
      res.send(err);
    });
});

module.exports = server;
