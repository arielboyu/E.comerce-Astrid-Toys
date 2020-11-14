const initialState = {
    carrito:[],
    user: {
        id: 1,
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