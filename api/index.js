//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Product, Category, User } = require("./src/db.js");
const DataProducts = require("./dataProducts.js"); //importo este modulo para cargar las tablas.
const DataCategories = require("./dataCategories.js");
const DataUsers = require("./dataUser.js")
const { reset } = require("nodemon");

// Syncing all the models at once.
//force = true RESETEA DB force = false NO RESETEA DB
//var resetDB = true;
conn.sync({ force: true }).then(() => {
  server.listen(3002, () => {
    console.log("%s listening at 3002"); // eslint-disable-line no-console

    /* ------------------------------------------------------- */
    //INSTANCIAMOS MODELOS DE LA TABLA Y SALVAMOS DATOS
    //Hacer un Create es lo mismo que hacer un Build y luego Save de Sequelize.
    
    // AGREGO LA CREACIÓN DE REGISTROS EN LA TABLA DE USUARIOS
    var usuarios = [];
    async function cargarUsuarios() {
      for (let i = 0; i < DataUsers.length; i++) {
        var user = await User.create({
          name: DataUsers[i].name,
          lastname: DataUsers[i].lastname,
          email: DataUsers[i].email,
          password : DataUsers[i].password
        });
        usuarios.push(user)
      }
    }
    cargarUsuarios();

    console.log("Categorias cargadas");

    // AGREGO LA CREACIÓN DE REGISTROS EN LA TABLA DE CATEGORIAS
    var categories = [];
    async function cargarCategories() {
      for (let i = 0; i < DataCategories.length; i++) {
        var category = await Category.create({
          name: DataCategories[i].name,
          description: DataCategories[i].description,
        });
        categories.push(category)
      }
    }
     cargarCategories();
    
    console.log("Categorias cargadas");

    //para testear subcategorias mas adelante
    //esta funcion retorna una subcategoria random
    function getSubCategory() {
      const subCategories = ["Harry Potter", "Avengers"];
      return subCategories[Math.floor(Math.random() * subCategories.length)];
    }

    async function cargarTablas() {
      for (let i = 0; i < DataProducts.length; i++) {
        var product = await Product.create({
          name: DataProducts[i].name,
          description: DataProducts[i].description,
          price: DataProducts[i].price,
          stock: DataProducts[i].stock,
        });
        //la siguiente linea relaciona el producto que acabo de crear
        //con una categoria random
        product.addCategories(categories[Math.floor(Math.random() * categories.length)])
          
      }
      //Las siguientes lineas HACEN LO MISMO:
      //Para relacionar un producto con una categoria
      //product.addCategories([category])
      //Para relacionar una categoria con un producto
      //category.addCategories([product])
    }
    cargarTablas();
    console.log("tablas cargadas");
    
    //products[Math.floor(Math.random() * products.length)].addCategories(categories[Math.floor(Math.random() * categories.length)])
    

    /* ------------------------------------------------------- */
  });
});
