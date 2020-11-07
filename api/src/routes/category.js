const server = require('express').Router();
const { Product,Category } = require('../db.js');


// S17 : Crear ruta para agregar o sacar categorias de un producto.
// POST /products/:idProducto/category/:idCategoria
// Agrega la categoria al producto.
// DELETE /products/:idProducto/category/:idCategoria
// Elimina la categoria al producto.

server.get('/', (req, res) => {
    Category.findAll()
        .then(category => {
            res.send(category);
        })
});

server.post('/:idProducto/category/:idCategoria', (req,res)=>{
    Product.findAll({where:{productId:req.params.idProducto}})
    .on('success',(product)=>{
        product.setCategories(req.params.idCategoria)
    })
    .catch(e=>res.send(e))
});

server.delete('/:idProducto/category/:idCategoria', (req,res)=>{
    Product.find({where:{productId:req.params.idProducto}})
    .on('success',(product)=>{
        product.removeCategory(req.params.idCategoria)
    })
    .catch(e=>res.send(e))
});


// S18 : Crear ruta para crear/agregar Categoria
// POST /products/category/
// Crea una categoría nueva.

// este post hace referencia a la creacion de una nueva category.
server.post('/products/category/', (req,res) => {
    const {name,description} = req.body
    if (!name || !description) {
		return res.status(400).send('Debes completar todos los campos');
	} else {
    Category.create(
        {
            name,
            description
        }
    )
    .then(category => 
        res.status(200).send(category))
        .catch((err) => {
            res.status(400).send(err);
          });
       }
    
})

// S19 : Crear Ruta para eliminar Categoria
// DELETE /products/category/:id 
server.delete('/products/category/:id', (req,res)=>{
        const id = req.params.id;
        Categories.destroy({ where: { id } })
        .then(category => 
        res.status(200).send("se elimino la categoria" + category  ))
        .catch((err) => {
         res.status(400).send(err);
          });
});


// S20 : Crear ruta para Modificar Categoria
// PUT /products/category/:id
// se crea el modelo de ruta modificar categoria, se actualizan los valores y retorna en la data la category  
server.put('/products/category/:id',(req,res) =>{
    const { name, description} = req.body;
    Categories.findByPk(req.params.idCategory)
    .then((data) => {
      if (name) data.name = name;
      if (description) data.description = description;
      data.save();
      res
        .status(200)
        .send( `Se ha actializado la categoria correctamente` );
    })
    .catch((err) => {
      res.status(400).send(err);
    });
})


module.exports=(server);