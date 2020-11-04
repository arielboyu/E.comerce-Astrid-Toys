import express from 'express';
import db from '../models';
const categories = db.model('Category.js');
const router = express.Router();

// S17 : Crear ruta para agregar o sacar categorias de un producto.
// POST /products/:idProducto/category/:idCategoria
// Agrega la categoria al producto.
// DELETE /products/:idProducto/category/:idCategoria
// Elimina la categoria al producto.





// S18 : Crear ruta para crear/agregar Categoria
// POST /products/category/
// Crea una categoría nueva.

// este post hace referencia a la creacion de una nueva category.
router.post('/category/', (req,res) => {
    categories.create(
        {
            name:req.body.name,
            description: req.body.description
        }
    )
    .then(category => 
        res.send(category))
})



export default router;