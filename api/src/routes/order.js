const server = require('express').Router();
const { Order,Product,User, } = require('../db.js');

//Ruta que incluye los modelos en la lista del 
// Frontend con direccion en componente orderTables.js
// con path en http://localhost:3000/dashboard/users/list
// Se actualizaron los modelos 
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
                    attributes: ["name" , "username"]
                }
              ],
    })
    .then((r) => 
    res.status(200).send(r))
});

//S44- agrega filtro por state si es enviado por query
server.get('/search', (req, res) => {
    let state = req.query.state
    Order.findAll({where:{state:state},
        include: [

                {
                  model: Product,
                  as: "products",
                  attributes: [ "name", "description", "stock", "price"],
                },
                {
                    model: User,
                    as:"user",
                    attributes: ["name" , "username"]
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


// S47 : Crear Ruta para modificar una Orden
//esta ruta recibe una orden por params y en base al id setea su estado a complete
//testeadas con postman, funcionando  
server.put('/modify/complete/:id', (req, res) => {
    Order.findOne({
            where: {
                id: req.params.id,
            }
        }).then(orden => {
            orden.update({
                state: 'COMPLETE',
            })
        })
        .then(() => {
            return res.send("se asigna  la orden a  Complete")
                   
        })
        .catch(() => {
            return res.status(400).send("Error No se ha podido Completar La orden ");
        })
});


//Esta ruta setea el estado de una orden en base a su id  a canelado 

server.put('/modify/cancel/:id', (req, res) => {
    Order.findOne({
            where: {
                id: req.params.id,
            }
        }).then(orden => {
            orden.update({
                state: 'CANCELLED',
            })
        })
        .then(() => {
            return res.send("se Cancela La Orden")
                   
        })
        .catch(() => {
            return res.status(400).send("Error No se ha podido Cancelar  La orden ");
        })
});



module.exports = server;