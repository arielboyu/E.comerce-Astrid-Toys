import React from 'react';
import { Link } from 'react-router-dom';
// import path from 'path';
function Error(){
   return (
        <div className="text-center p5 m-5">
            <img alt="error" height='75%' width='75%' src={ require('./404.jpg') }></img>
            <h1 className="p5 m-5">
                404 - Not Found!
            </h1>
            <Link to="/">
                <h2>GO HOME</h2>
            </Link>
        </div>
    )
}

export default Error
