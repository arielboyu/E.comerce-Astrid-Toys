const server = require('express').Router();
const { Order,Product,User, } = require('../db.js');

//Ruta que incluye los modelos en la lista del 
// Frontend con direccion en componente orderTables.js
// con path en http://localhost:3000/dashboard/users/list
server.get('/', (req, res) => {
    Order.findAll({
        include: [

                {
                  model: Product,
                  as: "products",
                  attributes: [ "name", "description", "stock", "price"],
                },
                {
                    model: User,
                    as:"user",
                    attributes: ["name" , "lastname"]
                }
              ],
    })
    .then((r) => res
    .status(200).json(r))
});

// Ruta que Busca por id
server.get('/:id',(req, res)=>{
	Order.findByPk(
        req.params.id, 
    )
        .then(order => {
            res.send(order);
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
});



module.exports = server;