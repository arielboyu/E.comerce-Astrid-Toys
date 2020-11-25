import {
  ADD_CART,
  REMOVE_CART,
  REMOVE_ALL_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  SET_USER,
  CLEAR_USER,
} from "../constants";
import axios from "axios";


const initialState = {
  carrito: [],
  user: {
    id: null,
    isAdmin: false,
    name: "",
  },
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_CART) {
    //para arreglar lo de las ordenes
    //la logica seria:
    /*
si el usuario esta loggeado entonces:
    si existe orden pendiente agrego producto a la orden
    sino creo orden y agrego producto
    agrego producto al carrito redux
sino
    agrego producto al carrito redux
*/
    console.log("este es mi payload")
    console.log(action.payload)
    if (state.user.id !== null) {
      //busco orden pendiente del user
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/${state.user.id}/cart`)
        .then((cart) => {

          if (cart.data) {
            console.log("ya existe una orden pendiente")
            console.log(cart)
            let prodAlCarro = {
              quantity: action.payload.cant,
              productId: action.payload.id,
              orderId: cart.data.orders[0].id //el id de la orden pending (osea el carrito)
            };
            axios
              .put(
                `${process.env.REACT_APP_API_URL}/users/${state.user.id}/cart`,
                prodAlCarro
              ).then((respuesta)=>{
                console.log("producto agregado a la orden pendiente")
                console.log(respuesta)
              })
          } else {
              console.log("no existe orden pendiente")
            let prodAlCarro = {
              quantity: action.payload.cant,
              productId: action.payload.id,
            };
            axios
              .post(
                `${process.env.REACT_APP_API_URL}/users/${state.user.id}/cart`,
                prodAlCarro
              )
              .then((ord) => {
                  console.log("nueva orden creada")
                  console.log(ord)
              });
          }
        });
        //por ultimo agrego el producto al carrito redux a pesar de que el user esta loggeado
        let esta = false;
        state.carrito.forEach((p) => {
          if (p.id === action.payload.id) {
            esta = true;
          }
        });
        if (!esta) {
          return { ...state, carrito: state.carrito.concat(action.payload) };
        }
    } else {
        //si el user no esta loggeado solo agrego el producto al carrito redux
      let esta = false;
      state.carrito.forEach((p) => {
        if (p.id === action.payload.id) {
          esta = true;
        }
      });
      if (!esta) {
        return { ...state, carrito: state.carrito.concat(action.payload) };
      }
    }
  }
  
  if (action.type === REMOVE_CART) {
    return {
      ...state,
      carrito: state.carrito.filter((e) => e.id !== action.payload.id),
    };
  }
  if (action.type === REMOVE_ALL_CART) {
    return { ...state, carrito: [] };
  }

  if (action.type === ADD_QUANTITY) {
    let array = state.carrito;
    array.forEach((p) => {
      if (p.id === action.payload.id) {
        p.price = p.price + p.price / p.cant;
        p.cant += 1;
        p.stock -= 1;
      }
    });
    return { ...state, carrito: array };
  }

  if (action.type === SUB_QUANTITY) {
    let array = state.carrito;
    let zero = false;
    array.forEach((p) => {
      if (p.id === action.payload.id) {
        p.price = p.price - p.price / p.cant;
        p.cant -= 1;
        p.stock += 1;
        if (p.cant === 0) {
          zero = true;
        }
      }
    });
    if (zero) {
      return {
        ...state,
        carrito: state.carrito.filter((e) => e.id !== action.payload.id),
      };
    } else {
      return { ...state, carrito: array };
    }
  }

  if (action.type === SET_USER) {
    return {
      ...state,
      user: {
        id: action.payload.id,
        isAdmin: action.payload.isAdmin,
        name: action.payload.name,
      },
    };
  }

  if (action.type === CLEAR_USER) {
    return { ...state, user: { id: null, isAdmin: false, name: "" } };
  }

  return state;
}

export default rootReducer;
