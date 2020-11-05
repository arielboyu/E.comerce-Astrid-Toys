/* Este componente define la estructura de un formulario
para CREAR categorias nuevas */

import React from 'react';
//importo el componente Category, puesto que 
//cuando "cargue" una nueva categoria, debo generar ese component
import Category from "./Category/Category.js.js.js" 

export default function CategoryForm(){

function generateCategory (){
    //aun no hace nada
    return null;
}
    return(
        <>
            <form>
                <input placeholder="Nombre"/>
                <input placeholder="Descripcion"/>
                <button onClick={()=>generateCategory()}>Agregar Categoria</button>
            </form>
        </>
    )
}