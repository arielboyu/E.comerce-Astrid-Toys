import React, {Fragment} from 'react';

const Producto = () => {
    return (
        <form>
            <select>
                <option>Cargar producto</option>
                <option>Modificar producto</option>
                <option>Eliminar producto</option>
            </select>
            <button>Realizar</button>
        </form>
    )
}

export default Producto;