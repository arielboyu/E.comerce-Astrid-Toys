const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

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
