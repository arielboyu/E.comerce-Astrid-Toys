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
  //const fetchedFoo = Foo.findOne({ include: Bar });


  Category.findAll({
	where: {id: categoryId},
	include: [{
		model: Product 
		/* through: {
		  where: {
				// Here, `completed` is a column present at the junction table
			categoryid: categoryId
		  }
		} */
	  }]
  }).then((products) => {
	res.send(products);
  })
  .catch(next);

  //primero retorno de ProductsCategory todos los id_category que coincidan con nombreCat
  //despues hago un join entre esa tabla y los productos

  //me traigo las categorias id=nombreCat

   

  /* 	Product.findAll({
		include: [category]
         where:{
            fromId : userFrom
        } 
    })
		.then(products => {
			res.send(products);
		})
		.catch(next); */
});

module.exports = server;
