import React from 'react';
import { Link } from 'react-router-dom';

function Error(){
   return (
        <div className="firstContainer superMt p5 m-5 w-50 d-flex flex-column justify-content-center align-items-center mx-auto ">
            <img height='75%' width='75%' src={ require('./404.jpg') }></img>
            <h1 className="d-none d-md-block p-5 my-5 text-center">
                404 -  Not Found !
            </h1>
            <h3 className="d-md-none p-5 my-5 text-center">
                404 -  Not Found !
            </h3>
            <Link to="/products">
                <h2>GO HOME</h2>
            </Link>
        </div>
    )
}

export default Error
