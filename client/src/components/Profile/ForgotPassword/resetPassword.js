import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = (props) => {
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            password,
            id: props.match.params.id
        }
        axios.put(`${process.env.REACT_APP_API_URL}/reset/`, body, { withCredentials : true })
            .then( () => {
                props.history.push("/login")
            })
    }

    return (
        <div className="firstContainer container text-center w-50">
            <div className="d-flex flex-column mx-auto w-75 mt-5">
                <h1 className="mt-3">RESET PASSWORD</h1>
                <form onSubmit={submitHandler}>
                    <input 
                        className="mt-4" 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="New password">
                    </input>
                    <button 
                        type="submit"
                        className="mt-4 btn btn-danger">
                        SAVE
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword;
