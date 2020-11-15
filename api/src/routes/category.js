const server = require('express').Router();
const { Product, Category } = require('../db.js');


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

server.get("/:categoryName", (req, res, next) => {
    let categoryName = req.params.categoryName;
    Category.findAll({
      where: { name: categoryName },
      include: [
        {
          model: Product,
        },
      ],
    })
      .then((category) => {

            res.send(category);
      })
      .catch(next);
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
// POST /category/create
// Crea una categoría nueva.

// este post hace referencia a la creacion de una nueva category.
server.post('/create', (req,res) => {
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
// ruta categories/delete/:id ,hace llamada a handleDelete 
// con referencia a axios.delete(`http://localhost:3002/categories/delete/${c.id}`, c)
server.delete('/delete/:id', (req,res)=>{
        const id = req.params.id;
        Category.destroy({ where: { id } })
        .then(category => 
        res.status(200).send("se elimino la categoria" + category  ))
        .catch((err) => {
         res.status(400).send(err);
          });
});


// S20 : Crear ruta para Modificar Categoria
// PUT /products/category/:id
// se crea el modelo de ruta modificar categoria, se actualizan los valores  
// se utiliza en el componente updateCategories, para modificar una categoria.
server.put('/update/:id', (req, res) => {
  const {name,description} = req.body
  Category.findOne({
          where: {
              id: req.params.id,
          }
      }).then(c => {
          c.update({
              name:name,
              description:description
          })
      })
      .then(() => {
          return res.send("se modifico categoria")
                 
      })
      .catch(() => {
          return res.status(400).send("Error No se ha podido modificar ");
      })
});




module.exports=(server);