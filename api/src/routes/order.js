const server = require('express').Router();
const { Order } = require('../db.js');


server.get('/', (req, res) => {
    Order.findAll()
        .then(order => {
            res.send(order);
        })
});



module.exports = server;