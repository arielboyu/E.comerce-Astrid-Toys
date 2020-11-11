//ESTE MODULO ES PARA GENERAR DATOS PARA LAS TABLAS Y HACER TEST
function returnRandom() {
    return Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
}

const DataProducts = [{
    name: 'Hermione',
    description: 'Serie',
    price: returnRandom(),
    stock: returnRandom(),

  },
  {
    name: 'Spiderman',
    description: 'Serie',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Hulk',
    description: 'Serie',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Tai',
    description: 'Serie',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Bart',
    description: 'Serie',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Capitan',
    description: 'Serie',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Legolas',
    description: 'Movie',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Harry',
    description: 'Movie',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Lisandra',
    description: 'Movie',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Antonia',
    description: 'Movie',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Liliana',
    description: 'Movie',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Julia',
    description: 'Movie',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Lisa',
    description: 'Game',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Rita',
    description: 'Game',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Lenny',
    description: 'Game',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Juani',
    description: 'Game',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Tito',
    description: 'Game',
    price: returnRandom(),
    stock: returnRandom(),
  },
  {
    name: 'Maxwell',
    description: 'Game',
    price: returnRandom(),
    stock: returnRandom(),
  },
];


module.exports = DataProducts;