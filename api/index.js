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
const { conn, Product } = require("./src/db.js");
const DataProducts = require ("./DataProducts.js") //importo este modulo para cargar las tablas.


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3000, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console

    /* ------------------------------------------------------- */
    //INSTANCIAMOS MODELOS DE LA TABLA Y SALVAMOS DATOS
    //Hacer un Create es lo mismo que hacer un Build y luego Save de Sequelize.
    async function cargarTablas() {
      for (let i = 0; i < DataProducts.length; i++) {
        var product = await Product.create({
          name: DataProducts[i].name,
          description: DataProducts[i].description,
          price: DataProducts[i].price,
          stock: DataProducts[i].stock,
        });
      }
    }
    cargarTablas();
    console.log("tablas cargadas");
  /* ------------------------------------------------------- */

    
  });
});
