const initialState = {
    carrito:["harry","hulk", "ironMan"],
    user: {
        id: 1,
    }
};

function rootReducer (state = initialState, action){
    if (action.type === "ADD_CART") {
        return {
          ...state,
          carrito: state.carrito.concat(action.payload)
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