const server = require("express").Router();
const { Product, Category } = require("../db.js");
const { Op } = require("sequelize");

server.get("/", (req, res, next) => {
  Product.findAll()
    .then((products) => {
      console.log("GET OK");

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
	var data = req.query.data
	console.log("esto es la data: "+data)
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

// S26 : Crear ruta para Modificar Producto
// PUT /products/:id
// Modifica el producto con id: id. Retorna 400 si los campos enviados no son correctos.
// Retorna 200 si se modificó con exito, y retorna los datos del producto modificado.

// Este put modifica el producto al que se apunta por parámetro
server.put("/:id", (req, res) => {
	const product = req.params.id;
	const { name, description, price, stock, image, active } = req.body;
	Product.findOne({
	  where: {
		id: product,
	  },
	})
	  .then((product) => {
		if (product) {
		  product.update({ name, description, price, stock, image, active });
		  res.status(200).send(product);
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
		console.log("Error en PUT" + err);
	  });
  });

//Retorna un objeto de tipo producto con todos sus datos. (Incluidas las categorías e imagenes).
server.get('/products/:id', (req, res, next) => {
	//const { id, name, description, category, image } = req.body;
	Product.findOne({where: {id: req.params.id}})
		.then(product => {
			res.status(201).send(product);
		})
		.catch(next);
})


server.get('/:id', (req, res, next) => {
	Product.findAll({
		where: {
		  id: req.params.id
		}
	  })
	.then(r => {
		res.send(r)
	})
	.catch(next);

});



module.exports = server;
