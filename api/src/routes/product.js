const server = require("express").Router();
const { Product, Category, Review } = require("../db.js");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
const multer = require("multer");
const fs = require('fs');



const upload = multer({dest: 'public/image'}) 


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



//esta funcion pasa la primer letra de un word a mayus
function capitalize(word) {
  word = word.toLowerCase();
  return word[0].toUpperCase() + word.slice(1);
}

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
      console.log("Se tendrian que renderizar los productos");

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
server.post('/upload', upload.single("image"), function(req, res) {
  console.log(req.file)
  console.log("este es el name: ", req.body.name)
  fs.renameSync(req.file.path, req.file.path + "." + req.file.mimetype.split("/")[1]);
  res.send("uploaded"); // the uploaded file object
});
// Este post agrega un nuevo producto
server.post("/",  (req, res) => {
  const {
    name,
    description,
    price,
    stock,
    image,
    categories,
    active,
  } = req.body;
  //const categoryId = 0;
  // Category.findAll({where: {name:category}}).then((res)=>
  //{categoryId = res.id} )
  if (name && description && price && stock) {
    Product.create({
      name,
      stock,
      price,
      description,
      active,
    })
      .then((productCreated) => {
        //buscar categoria a la que tengo que agregar el producto
        categories.map((cat) => {
          let catId = parseInt(cat);
          Category.findAll({ where: { id: catId } })
            .then((res) => productCreated.addCategories(res))
            .catch((err) => console.log("Error con las categorias " + err));
        });
        // Category.findAll({ where: { id: catId } }).then((res) =>
        //   productCreated.addCategories(res)
        // );
        //Cargo la imagen
      })
      .catch((err) => {
        console.log("Error en POST" + err);
      });
  } else {
    res.status(400).send("ERROR: Campos sin completar");
  }
});

//S54 : Crear ruta para crear/agregar Review
//POST /product/:id/review
server.post("/:id/review", (req, res) => {
  const productId = req.params.id;
  const userId = 1; //HARCODEADO, sacar cuando tengamos lo de la sesion
  const { score, description } = req.body; //objeto review pasado por body
  if (score && description && productId && userId) {
    Review.create({ score, description, productId, userId })
      .then(() => Review.count({ where: { productId: productId } }))
      .then((count) => {
        Review.sum("score", { where: { productId: productId } })
          .then((sum) => {
            let averageScore = sum / count;
            Product.update(
              { averageScore: averageScore },
              { where: { id: productId } }
            ).then((r) => console.log(r));
          })
          .then((r) => res.send(r));
      })
      //    let rating =Review.sum({where:{productId:productId}})
      //   Product.update({rating},{where:{id:productId}}))
      .catch((err) => {
        console.log("Error en POST review" + err);
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

module.exports = server;
