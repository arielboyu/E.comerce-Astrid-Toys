const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
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



module.exports = server;
