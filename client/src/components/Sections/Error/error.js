import React from 'react';
import { Link } from 'react-router-dom';

function Error(){
   return (
        <div className="firstContainer superMt p5 m-5 w-50 d-flex flex-column justify-content-center align-items-center mx-auto ">
            <img height='75%' width='75%' src={ require('./404.jpg') }></img>
            <h1 className="p5 m-5">
                404 -  Not Found !
            </h1>
            <Link to="/products">
                <h2>GO HOME</h2>
            </Link>
        </div>
    )
}

export default Error
