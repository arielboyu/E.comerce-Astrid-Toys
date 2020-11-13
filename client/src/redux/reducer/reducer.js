const initialState = {};

function rootReducer(state = initialState, action) {
  return state;
}

export default rootReducer;


/*export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_CART": return {
            ...state,
            cart: [
                ...state.cart,
                action.payload //como id del product?
            ]
        }
    case "DELETE_PRODUCT_CART": return {
            ...state,
            cart: state.cart.filter(product => product.id !==action.payload)
        }
    case "GET_PRODUCT_CART": return {
            ...state,
        }
    case "EDIT_PRODUCT_CART": return {
        ...state,
        }
    case "GET_PRODUCT_DETAIL": return {
        ...state,
        }
    }
    default: return state  
 }
 return state

 //hay que importar cartReducers al store y combinar el carrito con el reducewr en una constate?
*/
