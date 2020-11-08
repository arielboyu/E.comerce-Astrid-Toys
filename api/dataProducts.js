//ESTE MODULO ES PARA GENERAR DATOS PARA LAS TABLAS Y HACER TEST
function returnRandom() {
    return Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
}

const DataProducts = [{
    name: 'Mazie',
    description: 'Serie',
    price: 1,
    stock: returnRandom(),
  },
  {
    name: 'Heather',
    description: 'Serie',
    price: 31,
    stock: returnRandom(),
    
  },
  {
    name: 'Benton',
    description: 'Serie',
    price: 31,
    stock: returnRandom(),
    
  },
  {
    name: 'Alva',
    description: 'Serie',
    price: 22,
    stock: returnRandom(),
    
  },
  {
    name: 'Bart',
    description: 'Serie',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Capitan',
    description: 'Serie',
    price: 30,
    stock: returnRandom(),
  },
  {
    name: 'Legolas',
    description: 'Movie',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Harry',
    description: 'Movie',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Lisandra',
    description: 'Movie',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Antonia',
    description: 'Movie',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Liliana',
    description: 'Movie',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Julia',
    description: 'Movie',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Lisa',
    description: 'Game',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Rita',
    description: 'Game',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Lenny',
    description: 'Game',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Juani',
    description: 'Game',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Tito',
    description: 'Game',
    price: 57,
    stock: returnRandom(),
  },
  {
    name: 'Charlie',
    description: 'Game',
    price: 57,
    stock: returnRandom(),
  },
];

module.exports = DataProducts;