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
const { conn, Product, Category } = require("./src/db.js");
<<<<<<< HEAD
const DataProducts = require ("./DataProducts.js"); //importo este modulo para cargar las tablas.

=======
const DataProducts = require ("./dataProducts.js"); //importo este modulo para cargar las tablas.
const DataCategories = require("./dataCategories.js");
>>>>>>> S11-RouterApp


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3002, () => {
    console.log("%s listening at 3002"); // eslint-disable-line no-console

    /* ------------------------------------------------------- */
    //INSTANCIAMOS MODELOS DE LA TABLA Y SALVAMOS DATOS
    //Hacer un Create es lo mismo que hacer un Build y luego Save de Sequelize.
    async function cargarTablas() {
      for (let i = 0; i < DataProducts.length; i++) {
        await Product.create({
          name: DataProducts[i].name,
          description: DataProducts[i].description,
          price: DataProducts[i].price,
          stock: DataProducts[i].stock,
        });
      }
      for (let i = 0;i<3;i++){
        var category = await Category.create({
          name: `Category ${i}`,
          description: `Category ${i} Description`
        })
      }
      
    }
    cargarTablas();
    console.log("tablas cargadas");

    async function cargarCategories() {
      for (let i = 0; i < DataCategories.length; i++) {
        await Category.create({
          name: DataCategories[i].name,
          description: DataCategories[i].description,
        });
      }
    }
    cargarCategories();
    console.log("Categorias cargadas");
  /* ------------------------------------------------------- */

    
  });
});
