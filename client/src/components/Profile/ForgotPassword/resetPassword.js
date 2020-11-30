import React, { useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useHistory } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [ reset, setReset ] = useState(false);
    const location = useLocation().pathname.substring(7);
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            password,
            id: location
        }
        
        axios.post(`${process.env.REACT_APP_API_URL}/auth/reset/`, body, { withCredentials : true })
            .then( () => {
                setReset(true);
                setTimeout( () => history.push("/login"), 2000);
                
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="firstContainer container text-center w-50">

            { reset ? 
            
            <div>
                Su contraseña fue cambiada con éxito.
            </div> 
            
            : 

            <div className="d-flex flex-column mx-auto w-75 mt-5">
                <h1 className="mt-3">RESET PASSWORD</h1>
                <form onSubmit={submitHandler} className="d-flex flex-column mt-3" >
                    <input 
                        className="mt-4 border text-center" 
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

export default ResetPassword;
