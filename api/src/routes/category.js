const server = require('express').Router();
const { Product,Category } = require('../db.js');
// S17 : Crear ruta para agregar o sacar categorias de un producto.
// POST /products/:idProducto/category/:idCategoria
// Agrega la categoria al producto.
// DELETE /products/:idProducto/category/:idCategoria
// Elimina la categoria al producto.
server.post('/:idProducto/category/:idCategoria', (req,res)=>{
    Product.find({where:{productId=req.params.idProducto}})
    .on('success',(product)=>{
        product.setCategories(req.params.idCategoria)
    })
    .catch(e=>res.send(e))
});

server.delete('/:idProducto/category/:idCategoria', (req,res)=>{
    Product.find({where:{productId=req.params.idProducto}})
    .on('success',(product)=>{
        product.removeCategory(req.params.idCategoria)
    })
    .catch(e=>res.send(e))
});




// S18 : Crear ruta para crear/agregar Categoria
// POST /products/category/
// Crea una categoría nueva.

// este post hace referencia a la creacion de una nueva category.
server.post('/category/', (req,res) => {
    Category.create(
        {
            name:req.body.name,
            description: req.body.description
        }
    )
    .then(category => 
        res.send(category))
})



export default router;