const DataProducts = require("./dataProducts.js"); //importo este modulo para cargar las tablas.
const DataCategories = require("./dataCategories.js");
const DataUsers = require("./dataUser.js");
const DataOrders = require("./dataOrders.js");
const { Product, Category, Order, User } = require("../db.js");

/* ------------------------------------------------------- */
//INSTANCIAMOS MODELOS DE LA TABLA Y SALVAMOS DATOS

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
      isAdmin: DataUsers[i].isAdmin
    });
    usuarios.push(user);
  }
}

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

var productsArray = [];
async function cargarTablaProduct() {
  for (let i = 0; i < DataProducts.length; i++) {
    var product = await Product.create({
      name: DataProducts[i].name,
      description: DataProducts[i].description,
      price: DataProducts[i].price,
      stock: DataProducts[i].stock,
      image: DataProducts[i].image,
    });
    //la siguiente linea relaciona el producto que acabo de crear
    //con una categoria random
    product.addCategories(categories[randomNum(categories.length)]);
    productsArray.push(product);
  }

}

//CARGAR ORDENES
//las ordenes tienen varios productos
var Orders = [];
async function cargarTablaOrder() {
  for (let i = 0; i < DataOrders.length; i++) {
    var order = await Order.create({
      state: DataOrders[i].state,
    });
    //0 - 6
    let aleatorio = Math.floor(Math.random() * (usuarios.length))
    aleatorio = Math.floor(Math.random() * (usuarios.length))
    order.setUser(usuarios[aleatorio]);
    var myProduct1 = productsArray[randomNum(productsArray.length)];
    var myProduct2 = productsArray[randomNum(productsArray.length)];
    order.addProduct(myProduct1, {
      through: { price: myProduct1.price,
                  quantity: randomNum(5) },
    })
    if( myProduct1.id !== myProduct2.id){
      order.addProduct(myProduct2, {
        through: { price: myProduct2.price,
                    quantity: randomNum(5) },
      })
    }

  }

  //FIX ORDERS CON USER NULL
  Order.findAll({where: {userId: null}}).then((fixOrders)=>{
    fixOrders.forEach(element => {
      User.findOne({where:{id:1}}).then((us)=>{
        element.setUser(us)
      })
    });
  })
}

/* ------------------------------------------------------- */
const Loader = function () {
  cargarUsuarios();
  console.log("Users Loaded");
  cargarCategories();
  console.log("Category Loaded");
  cargarTablaProduct();
  console.log("Products Loaded");
  cargarTablaOrder();
  console.log("Orders Loaded");
};

module.exports = Loader;
