import React from 'react';
import SearchBar from './components/SearchBar/searchBar.js';
import './components/navBar/Nav.css';

export default function Nav({ onSearch}) {
    return (
        <div>
            <nav class= 'navbar navbar-dark bg-primary'>
            <p> Astrid Toys</p>
            <SearchBar onSearch= {onSearch}/>
            </nav>
        </div>
    );
};