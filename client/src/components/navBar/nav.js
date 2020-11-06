import React from 'react';
import SearchBar from './components/SearchBar/searchBar.js';
import './nav.css';

export default function nav({ onSearch}) {
    return (
        <nav class= 'navbar navbar-dark bg-primary'>
            <p className= {style.name}> Astrid Toys</p>
            <p>About</p>
            <p>Categories</p>
            <p>Product</p>
            <p>Cart</p>
            <SearchBar onSearch= {onSearch}/>
        </nav>
    );
};