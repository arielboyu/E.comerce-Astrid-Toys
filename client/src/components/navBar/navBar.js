import React from 'react';
import SearchBar from '../searchBar/searchBar';
import Login from './login';
import Cart from './cart';


export default function NavBar() {
    return (
        <nav class= 'navbar navbar-dark'>
            <ul>
                <li>Products</li>
                <li>Categories</li>
                <li>Dashboard</li>
            </ul>
            <p> Astrid Toys</p>
            <div>
                <Login/>
                <Cart/>
                <SearchBar/>
            </div>
        </nav>

    );
};