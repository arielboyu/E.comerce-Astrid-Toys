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

/*export function calculeAllCart(){
    return {
        type: "CALCULE_ALL_CART"
    }
}*/

export function addQantity(payload){
    return{
        type:'ADD_QANTITY',
        payload
    }
}

export function subQantity(payload){
    return{
        type:'SUB_QANTITY',
        payload
    }
}