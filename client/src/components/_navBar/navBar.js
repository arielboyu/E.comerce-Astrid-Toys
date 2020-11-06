import React from 'react';
import SearchBar from '../_searchBar/searchBar';
import Login from './login';
import Cart from './cart';
import { Link } from 'react-router-dom';



export default function NavBar() {
    const link = {
        listStyle: "none",
        textDecoration: "none",
        margin: "20px",
        paddingTop: "10px",
        color: "black"
    };
    return (
        <nav className= 'navbar navbar-dark bg-warning'>
            <ul className="d-flex flex-direction-row">
                <Link to="/"><li style={link}>Home</li></Link>
                <Link to="/products"><li style={link}>Products</li></Link>
                <Link to="#"><li style={link}>Categories</li></Link>
                <Link to="#"><li style={link}>Dashboard</li></Link>
            </ul>
            <h1> Astrid Toys</h1>
            <div className="d-flex col-sm-12 col-md-3 col-lg-5 justify-content-sm-end">
                <Login/>
                <Cart/>
                <SearchBar/>
            </div>
        </nav>

    );
};