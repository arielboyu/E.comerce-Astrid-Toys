import React from 'react';

export default function ResetPassword(){
    return (
        <div className="firstContainer container text-center w-50">
            <div className="d-flex flex-column mx-auto w-75 mt-5">
                <h1 className="mt-3">RESET PASSWORD</h1>
                <input className="mt-4" type="password" placeholder="New password"></input>
                <button className="mt-4 btn btn-danger">SAVE</button>
            </div>
        </div>
    )
}

