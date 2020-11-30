//ESTE MODULO ES PARA GENERAR DATOS PARA LAS TABLAS Y HACER TEST
function returnRandomPrice() {
    return Math.floor(Math.random() * (50 - 25) ) + 25;  
       // returns a random integer from 0 to 99
}

function returnRandom() {
  return Math.floor(Math.random() * 20)+1;     // returns a random integer from 0 to 99
}

const DataProducts = [{
    name: 'Skywalker',
    description: 'Serie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKKMXQd3oWnON03s5hfknbZ5eWz6G2_OtgSg&usqp=CAU'
  },
  {
    name: 'H. Queen',
    description: 'Serie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: "https://www.cellshop.com/342978-large_default/boneca-harley-quinn-dc-super-heroes-funko-pop-301.jpg"
  },
  {
    name: 'Tony Stark',
    description: 'Serie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWYSTJRd3raeRLk-Fv-dlYe1E40mSkI45esg&usqp=CAU'
  },
  {
    name: 'Rio',
    description: 'Game',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtmse3Es4QgLpxSrH6awGtRMfM1RJUWiI5jw&usqp=CAU'
  },
  {
    name: 'Arrow',
    description: 'Movie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpdMnuMuAqOhteA_f4cN3tV6QQjt9vVBVg_A&usqp=CAU'
  },  
  {
    name: 'Capitan',
    description: 'Serie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz5u-y1O2ulfBDt6jF_Eiup6gw6E3enAp9gw&usqp=CAU'
  },
  {
    name: 'Escarlata',
    description: 'Movie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGH1YT5T6bPPuih-NLZC0us8JAmd8s6UcjNA&usqp=CAU'
  },
  {
    name: 'Harry',
    description: 'Serie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQu4ZuSG5UutwldBtiXfWgqPPvCRRmYy6ymDQ&usqp=CAU'
  },
  {
    name: 'Franco',
    description: 'Serie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://cdn.shopify.com/s/files/1/0122/4969/4272/products/pop-marty-1955-regreso-al-futuro_250x250@2x.jpg?v=1598979675'
  },
  {
    name: 'J. Travolta',
    description: 'Movie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF4IjcRJ4mpoh-ScyCQSmfKsINzsLfARI_Fw&usqp=CAU'
  },
  {
    name: 'Cap. Marvel',
    description: 'Movie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaVrcxmEPR7VYhysExuNPJ45T0cy3YwPl2sA&usqp=CAU'
  },
  {
    name: 'Choriza',
    description: 'Movie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxRrTK1Tr4rzAg1QChXrbMAgYa-uGwfg6V1A&usqp=CAU'
  },
  {
    name: 'Thanos',
    description: 'Movie',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzqp5peGVAfUgPFA27i-F-swYUfjgRGBtpxQ&usqp=CAU'
  },
  {
    name: 'Lisa',
    description: 'Game',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrlbg-001Nh5STaJfFs6oOKUTpjKFSlybfAg&usqp=CAU'
  },
  {
    name: 'Flash',
    description: 'Game',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGEF7HJaXPs5K0YK6sKMa-pbAdDOHFrzK6Dg&usqp=CAU'
  },
  {
    name: 'Joey',
    description: 'Game',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6SC7PBfw8rE7Uia-Hu-DtHZ3nvndN2_vW6A&usqp=CAU'
  },
  {
    name: 'Ant',
    description: 'Game',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVxi8FeiFx4dZ5ubx2WjTk4yflz0_qZJMgWA&usqp=CAU'
  },
  {
    name: 'Fantastic',
    description: 'Game',
    price: returnRandomPrice(),
    stock: returnRandom(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTB85SHIfCUQl-JCqiWbgkfMwbpQbAaOhsLNA&usqp=CAU'
  },
];


module.exports = DataProducts;