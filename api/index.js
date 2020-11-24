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

const Loader = require ("./src/loader/indexLoader");

const { reset } = require("nodemon");

// Syncing all the models at once.
//force = true RESETEA DB force = false NO RESETEA DB
//var resetDB = true;
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3002, () => {
    console.log("Server Listening at - PORT: ", process.env.PORT ); // eslint-disable-line no-console

    //El Loader carga la base con datos preestablecidos
    Loader();

  });
});
