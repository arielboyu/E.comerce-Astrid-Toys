import { 
    ADD_CART, REMOVE_CART, REMOVE_ALL_CART, ADD_QUANTITY, SUB_QUANTITY, SET_USER, CLEAR_USER, SET_CART
} from '../constants';

export function addToCart(payload){
    return { type: ADD_CART, payload }
}

export function removeProductToCart(payload){
    return { type: REMOVE_CART, payload } 
}

export function removeAllProductsToCart(){
    return { type: REMOVE_ALL_CART } 
}

export function addQuantity(payload){
    return { type: ADD_QUANTITY, payload }
}

export function subQuantity(payload){
    return { type: SUB_QUANTITY, payload }
}

export function userLogin(payload){
    return { type: SET_USER, payload }
}

export function userLogOut(){
    return { type: CLEAR_USER }
}

export function setCart(payload){
    return {type: SET_CART, payload}
}
