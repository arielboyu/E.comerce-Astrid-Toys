import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
    const [ email, setEmail ]  = useState("");
    const [ emailSent, setEmailSent ] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log()
        const body = {
            email
        }
        axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot`, body, { withCredentials: true })
            .then(res => setEmailSent(true))
            .catch(err => console.log(err))
    }

    return (
        <div className="firstContainer container text-center w-50">

            {emailSent ? 
            <>
            <div>
                Se envió un mail para reestablecer su contraseña
            </div> 
            <Link to="/login">
            <button className='btn btn-dark mt-5' >
                BACK
            </button>
            </Link>
            </>
            
            : 

            <div className="d-flex flex-column mx-auto w-75 mt-5">
                <h1 className="mt-3">FORGOT PASSWORD</h1>
                <form onSubmit={submitHandler} className="d-flex flex-column mt-3">
                    <input 
                        className="mt-4" 
                        name="email" 
                        type="text" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Ingrese su email">
                    </input>
                    <button 
                        className="my-4 btn btn-danger"
                        type="submit">
                        GET RESET LINK
                    </button>
                </form>
                <Link to="/login">
                    <button className='btn btn-dark mt-5' >
                    
                        BACK
                    </button>
                </Link>
                
            </div>

            }

        </div>
    )
}

export default ForgotPassword;
