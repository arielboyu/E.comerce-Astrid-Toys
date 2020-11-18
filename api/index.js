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
const {
  conn,
  Product,
  Category,
  Order,
  OrderDetails,
  User,
} = require("./src/db.js");
const DataProducts = require("./dataProducts.js"); //importo este modulo para cargar las tablas.
const DataCategories = require("./dataCategories.js");
const DataUsers = require("./dataUser.js");
const DataOrders = require("./dataOrders.js");
const { reset } = require("nodemon");

// Syncing all the models at once.
//force = true RESETEA DB force = false NO RESETEA DB
//var resetDB = true;
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3002, () => {
    console.log("%s listening at ", process.env.PORT ); // eslint-disable-line no-console

    /* ------------------------------------------------------- */
    //INSTANCIAMOS MODELOS DE LA TABLA Y SALVAMOS DATOS
    //Hacer un Create es lo mismo que hacer un Build y luego Save de Sequelize.

    // AGREGO LA CREACIÓN DE REGISTROS EN LA TABLA DE USUARIOS
    //// returns a random integer from 0 to limit
    function randomNum(limit) {
      return Math.floor(Math.random() * limit);
      
    }

    var usuarios = [];
    async function cargarUsuarios() {
      for (let i = 0; i < DataUsers.length; i++) {
        var user = await User.create({
          name: DataUsers[i].name,
          username: DataUsers[i].username,
          email: DataUsers[i].email,
          password: DataUsers[i].password,
        });
        usuarios.push(user);
      }
    }
    cargarUsuarios();
    console.log("Usuarios cargados");
    // AGREGO LA CREACIÓN DE REGISTROS EN LA TABLA DE CATEGORIAS
    var categories = [];
    async function cargarCategories() {
      for (let i = 0; i < DataCategories.length; i++) {
        var category = await Category.create({
          name: DataCategories[i].name,
          description: DataCategories[i].description,
        });
        categories.push(category);
      }
    }
    cargarCategories();

    console.log("Categorias cargadas");

    //para testear subcategorias mas adelante
    //esta funcion retorna una subcategoria random
    function getSubCategory() {
      const subCategories = ["Harry Potter", "Avengers"];
      return subCategories[randomNum(subCategories.length)];
    }
    var productsArray = [];
    async function cargarTablaProduct() {
      for (let i = 0; i < DataProducts.length; i++) {
        var product = await Product.create({
          name: DataProducts[i].name,
          description: DataProducts[i].description,
          price: DataProducts[i].price,
          stock: DataProducts[i].stock,
          image: DataProducts[i].image
        });
        //la siguiente linea relaciona el producto que acabo de crear
        //con una categoria random
        product.addCategories(categories[randomNum(categories.length)]);
        productsArray.push(product);
      }
      //Las siguientes lineas HACEN LO MISMO:
      //Para relacionar un producto con una categoria
      //product.addCategories([category])
      //Para relacionar una categoria con un producto
      //category.addCategories([product])
    }
    cargarTablaProduct();
    console.log("tablas product cargada");

    //products[Math.floor(Math.random() * products.length)].addCategories(categories[Math.floor(Math.random() * categories.length)])

    //CARGAR ORDENES
    //las ordenes tienen varios productos
    var Orders = [];
    async function cargarTablaOrder() {
      for (let i = 0; i < DataOrders.length; i++) {
        var order = await Order.create({
          state: DataOrders[i].state,
        });
        order.setUser(usuarios[Math.floor(Math.random() * usuarios.length)]);
        var myProduct = productsArray[randomNum(productsArray.length)];
        order.addProduct(myProduct, {
          through: { price: myProduct.price,
                      quantity: randomNum(100) },
        })
      }
    }
    cargarTablaOrder();
    console.log("ordenes Cargadas");
    /* ------------------------------------------------------- */
  });
});
