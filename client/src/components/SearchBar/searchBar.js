import React from 'react';

export default function SearchBar(props) {
    return (
        <div>
            <input placeholder="Buscar..."/>
            <button onClick= {props}> Buscando </button>
        </div>
    )
}