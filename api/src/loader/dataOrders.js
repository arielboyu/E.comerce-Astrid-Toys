//ESTE MODULO ES PARA GENERAR DATOS PARA LAS TABLAS Y HACER TEST
const states = ["COMPLETE","CANCELLED"]

function returnRandomState() {
    return states[Math.floor(Math.random() * states.length)];     // returns a random integer from 0 to 99
}

const DataOrders = [{
    state: returnRandomState()
  },
  {
    state: returnRandomState()
  },
  {
    state: returnRandomState()
  },
  {
    state: returnRandomState()
  },
  {
    state: returnRandomState()
  },
  {
    state: returnRandomState()
  },
  {
    state: returnRandomState()
  },
  {
    state: returnRandomState()
  },
  {
    state: returnRandomState()
  },
  {
    state: returnRandomState()
  },
  
];

module.exports = DataOrders;