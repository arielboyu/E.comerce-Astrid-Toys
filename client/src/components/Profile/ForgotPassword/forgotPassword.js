import React from 'react';

export default function forgotPassword(id){
    return (
        <div className="firstContainer container text-center w-50">
            <div className="d-flex flex-column mx-auto w-75 mt-5">
                <h1 className="mt-3">FORGOT PASSWORD</h1>
                <input className="mt-4" placeholder="Ingrese su email"></input>
                <button className="mt-4 btn btn-danger">GET RESET LINK</button>
            </div>
        </div>
    )
}
