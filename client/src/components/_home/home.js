import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const Home = ({navShow}) => {
    const styleImg = {
        height : "613px",
    }

    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <Link to ="/products"><button className="btn btn-outline-dark btn-lg my-5"> INGRESAR A LA TIENDA</button></Link>
        </div>
    ) 
}

export default Home;