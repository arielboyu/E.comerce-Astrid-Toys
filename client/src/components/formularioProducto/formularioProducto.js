import React, {Fragment} from 'react';

const Producto = () => {
    
    return (
        <>
            <select value=''>
                <option value=''>Seleccione una acción</option>
                <option value=''>Cargar producto</option>
                <option value=''>Modificar producto</option>
                <option value=''>Eliminar producto</option>
            </select>
            <form>
                
            <button>Realizar</button>
            </form>
        </>
    )
}

export default Producto;