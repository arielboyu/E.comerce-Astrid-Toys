import Axios from "axios";

const initialState = {
    carrito:[],
    user: {
        id: null,
        isAdmin: false,
        name: ""
    }
};

function rootReducer (state = initialState, action){
    if (action.type === "ADD_CART") {
        let esta = false;
        state.carrito.forEach((p)=>{
            if(p.id === action.payload.id){
                esta = true;
            }
        })
        if(!esta){
            return {
              ...state,
              carrito: state.carrito.concat(action.payload)
            }
        }
    }
    if (action.type === "REMOVE_CART"){
        return{
            ...state,
            carrito: state.carrito.filter((e) => e.id !== action.payload.id)
        }
    }
    if(action.type === "REMOVE_ALL_CART"){
        return{
            ...state,
            carrito: []
        }
    }
  /*if(action.type === "CALCULE_ALL_CART") {  
    return {
        ...state,

    }
}*/
 


    if(action.type === "ADD_QUANTITY"){
        let array= state.carrito
        array.forEach((p)=>{
            if(p.id === action.payload.id){
             p.price = p.price + (p.price / p.cant)
             p.cant += 1;
             p.stock -= 1
            }
        })        
        return{
            ...state,
            carrito: array
        }
    }

    if(action.type === "SUB_QUANTITY"){
        let array= state.carrito
        let zero=false
        array.forEach((p)=>{
            if(p.id === action.payload.id){
                p.price = p.price - (p.price / p.cant)
                p.cant -= 1;
                p.stock += 1
              
             if (p.cant===0){zero=true}  
            }
        })
        if (zero){
            return{
                ...state,
                carrito: state.carrito.filter((e) => e.id !== action.payload.id)
            }
        }else{
            return{
                ...state,
                carrito: array
            }
        }

    }    
    if(action.type === "USER_LOGIN"){
        if(action.payload){
            return{
                ...state,
                user : { id : action.payload.id, isAdmin : action.payload.isAdmin, name: action.payload.name }
            }
        } else {
            return {
                ...state,
                user: { id : null, isAdmin : false, name: ""}
            }
        }
    }
    return state
}

export default rootReducer;

// function rootReducer (state = initialState, action){

//     if (action.type === "GET_POKEMON"){
//         return {
//             ...state,
//             pokemonDetail: action.pokeRequest.name,
//             pokeimg: action.pokeRequest.sprites.front_default,
//             poketype: action.pokeRequest.types[0].type.name
//         }
//     }
//     return state
// }

// export default rootReducer;