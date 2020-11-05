//estructura:;
/* {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  } */
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
    descripcion: 'Assistant',
    price: 31,
    stock: returnRandom(),
    
},
{
    name: 'Benton',
    descripcion: 'Assistant',
    price: 31,
    stock: returnRandom(),
    
},
{
    name: 'Alva',
    descripcion: 'Manpricer',
    price: 22,
    stock: returnRandom(),
    
},
{
    name: 'Lonie',
    descripcion: 'Architect',
    price: 57,
    stock: returnRandom(),
    workingAt: 'Cayman Islands',
    likings: { color: 'mpricenta', programmingLanguprice: 'JavaScript' }
},
{
    name: 'Evelyn',
    descripcion: 'Strategist',
    price: 30,
    stock: returnRandom(),
    workingAt: 'Austria',
    likings: { color: 'cyan', programmingLanguprice: 'Swift' }
},
{
    name: 'Dallin',
    descripcion: 'Strategist',
    price: 41,
    stock: returnRandom(),
    workingAt: 'Libyan Arab Jamahiriya',
    likings: { color: 'sky blue', programmingLanguprice: 'PL/SQL' }
},
{
    name: 'Vita',
    descripcion: 'Manpricer',
    price: 61,
    stock: returnRandom(),
    workingAt: 'Canada',
    likings: { color: 'plum', programmingLanguprice: 'C' }
},
{
    name: 'Ronaldo',
    descripcion: 'Orchestrator',
    price: 52,
    stock: returnRandom(),
    workingAt: 'Isle of Man',
    likings: { color: 'maroon', programmingLanguprice: 'MATLAB' }
},
{
    name: 'Leone',
    descripcion: 'Specialist',
    price: 21,
    stock: returnRandom(),
    workingAt: 'Honduras',
    likings: { color: 'violet', programmingLanguprice: 'JavaScript' }
},
{
    name: 'Adaline',
    descripcion: 'Liaison',
    price: 24,
    stock: returnRandom(),
    workingAt: 'Timor-Leste',
    likings: { color: 'grey', programmingLanguprice: 'Python' }
},
{
    name: 'Macey',
    descripcion: 'Strategist',
    price: 58,
    stock: returnRandom(),
    workingAt: 'Namibia',
    likings: { color: 'mpricenta', programmingLanguprice: 'Swift' }
},
{
    name: 'Alysson',
    descripcion: 'Developer',
    price: 49,
    stock: returnRandom(),
    workingAt: 'Japan',
    likings: { color: 'violet', programmingLanguprice: 'R' }
},
{
    name: 'Lazaro',
    descripcion: 'Technician',
    price: 70,
    stock: returnRandom(),
    workingAt: 'Slovenia',
    likings: { color: 'teal', programmingLanguprice: 'Java' }
},
{
    name: 'Dane',
    descripcion: 'Engineer',
    price: 57,
    stock: returnRandom(),
    workingAt: 'Iran',
    likings: { color: 'mpricenta', programmingLanguprice: 'Go' }
},
{
    name: 'Austen',
    descripcion: 'Facilitator',
    price: 48,
    stock: returnRandom(),
    workingAt: 'Swaziland',
    likings: { color: 'sky blue', programmingLanguprice: 'Visual Basic .NET' }
},
{
    name: 'Mabelle',
    descripcion: 'Strategist',
    price: 47,
    stock: returnRandom(),
    workingAt: 'Armenia',
    likings: { color: 'salmon', programmingLanguprice: 'Assembly languprice' }
}];


module.exports = dataProducts;