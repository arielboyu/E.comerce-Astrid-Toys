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


//DATOS BASURA PARA ELIMINAR: 
//--------------------------------------------------------------------

function returnRandom() {
  return Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
}

const dataProducts = [{
  name: 'Mazie',
  description: 'Specialist',
  price: 43,
  stock: returnRandom(),
},
{
  name: 'Heather',
  description: 'Assistant',
  price: 31,
  stock: returnRandom(),
  
},
{
  name: 'Benton',
  description: 'Assistant',
  price: 31,
  stock: returnRandom(),
  
},
{
  name: 'Alva',
  description: 'Manpricer',
  price: 22,
  stock: returnRandom(),
  
},
{
  name: 'Lonie',
  description: 'Architect',
  price: 57,
  stock: returnRandom(),
  workingAt: 'Cayman Islands',
  likings: { color: 'mpricenta', programmingLanguprice: 'JavaScript' }
},
{
  name: 'Evelyn',
  description: 'Strategist',
  price: 30,
  stock: returnRandom(),
  workingAt: 'Austria',
  likings: { color: 'cyan', programmingLanguprice: 'Swift' }
},
{
  name: 'Dallin',
  description: 'Strategist',
  price: 41,
  stock: returnRandom(),
  workingAt: 'Libyan Arab Jamahiriya',
  likings: { color: 'sky blue', programmingLanguprice: 'PL/SQL' }
},
{
  name: 'Vita',
  description: 'Manpricer',
  price: 61,
  stock: returnRandom(),
  workingAt: 'Canada',
  likings: { color: 'plum', programmingLanguprice: 'C' }
},
{
  name: 'Ronaldo',
  description: 'Orchestrator',
  price: 52,
  stock: returnRandom(),
  workingAt: 'Isle of Man',
  likings: { color: 'maroon', programmingLanguprice: 'MATLAB' }
},
{
  name: 'Leone',
  description: 'Specialist',
  price: 21,
  stock: returnRandom(),
  workingAt: 'Honduras',
  likings: { color: 'violet', programmingLanguprice: 'JavaScript' }
},
{
  name: 'Adaline',
  description: 'Liaison',
  price: 24,
  stock: returnRandom(),
  workingAt: 'Timor-Leste',
  likings: { color: 'grey', programmingLanguprice: 'Python' }
},
{
  name: 'Macey',
  description: 'Strategist',
  price: 58,
  stock: returnRandom(),
  workingAt: 'Namibia',
  likings: { color: 'mpricenta', programmingLanguprice: 'Swift' }
},
{
  name: 'Alysson',
  description: 'Developer',
  price: 49,
  stock: returnRandom(),
  workingAt: 'Japan',
  likings: { color: 'violet', programmingLanguprice: 'R' }
},
{
  name: 'Lazaro',
  description: 'Technician',
  price: 70,
  stock: returnRandom(),
  workingAt: 'Slovenia',
  likings: { color: 'teal', programmingLanguprice: 'Java' }
},
{
  name: 'Dane',
  description: 'Engineer',
  price: 57,
  stock: returnRandom(),
  workingAt: 'Iran',
  likings: { color: 'mpricenta', programmingLanguprice: 'Go' }
},
{
  name: 'Austen',
  description: 'Facilitator',
  price: 48,
  stock: returnRandom(),
  workingAt: 'Swaziland',
  likings: { color: 'sky blue', programmingLanguprice: 'Visual Basic .NET' }
},
{
  name: 'Mabelle',
  description: 'Strategist',
  price: 47,
  stock: returnRandom(),
  workingAt: 'Armenia',
  likings: { color: 'salmon', programmingLanguprice: 'Assembly languprice' }
}];



//--------------------------------------------------------------------
//DATOS BASURA PARA ELIMINAR: 



// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3000, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    /* ------------------------------------------------------- */
    //INSTANCIAMOS MODELOS DE LA TABLA Y SALVAMOS DATOS
    //Hacer un Create es lo mismo que hacer un Build y luego Save de Sequelize.
    async function cargarTablas() {
      for (let i = 0; i < dataProducts.length; i++) {
        var product = await Product.create({
          name: dataProducts[i].name,
          description: dataProducts[i].description,
          price: dataProducts[i].price,
          stock: dataProducts[i].stock,
        });
      }
    }

    cargarTablas();
    console.log("tablas cargadas");

    
  });
});
