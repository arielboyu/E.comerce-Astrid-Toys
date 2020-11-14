import axios from 'axios'

export function addToCart(payload){
    return {
        type: "ADD_CART",
        payload
    }
}
export function removeProductToCart(payload){
    return {
        type: "REMOVE_CART",
        payload
    }
}

export function removeAllProductsToCart(){
    return {
        type: "REMOVE_ALL_CART"
    }
}
