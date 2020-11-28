import {
  ADD_CART,
  REMOVE_CART,
  REMOVE_ALL_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  SET_USER,
  CLEAR_USER,
  SET_CART,
} from "../constants";

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
        // p.price = p.price + p.price / p.cant;
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
        // p.price = p.price - p.price / p.cant;
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

  if (action.type === SET_CART) {
    return { ...state, carrito: action.payload };
  }
  return state;
}

export default rootReducer;
