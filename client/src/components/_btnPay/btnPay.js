import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {removeAllProductsToCart} from '../../redux/actions/actions'

function ButtonPay(){
    const [userLog, setUserLog] = useState()
    const [buyComplete, setBuyComplete] = useState(false)
    const store = useSelector(state => state)
    const actions = useDispatch()

    const handlerClick = (e) =>{
        e.preventDefault()
        setUserLog(store.user.id)
        if(userLog === null){
            return console.log("Usuario no logeado")
        } else {
            Axios.post(`${process.env.REACT_APP_API_URL}/users/cart/products`, store)
            .then(r => {
                console.log(r);
                setBuyComplete(true)
               actions(removeAllProductsToCart())
            })
            .catch(err => console.log("User not loggin!"))
        }
    }

    return(
        <>
            <div className="d-flex justify-content-end mr-5">
                <button onClick={handlerClick} className="btn btn-info p-2">
                    <span style={{fontSize: "20px"}}>CHECKOUT</span>
                </button>
            </div>
            { userLog === null ? (
                <div className="alert alert-danger my-3" role="alert">
                    You're not loggin, 
                    <Link to="/login">
                        <span className="alert-link"> please sigup.</span>
                    </Link>  
                </div>) : <></>}
            {buyComplete? (
                <div className="alert alert-info my-3" role="alert">
                    Successful purchase, 
                    <Link to={`/myshop/${userLog}`}>
                        <span className="alert-link"> My shop.</span>
                    </Link>  
                </div>) : <></>}
        </>
    )
}

export default ButtonPay;