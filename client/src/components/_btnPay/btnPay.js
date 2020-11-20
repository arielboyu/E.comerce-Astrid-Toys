import Axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
// import {addToCart} from '../redux/actions/actions'

function ButtonPay(){

    const store = useSelector(state => state)

    const handlerClick = (e) =>{
        e.preventDefault()
        console.log(store)
        Axios.post("http://localhost:3002/users/cart/products", store)
        .then(r => console.log(r))
    }

    return(
        <div className="d-flex justify-content-end mr-5">
            <button onClick={handlerClick} className="btn btn-info p-2">
                <span style={{fontSize: "20px"}}>CHECKOUT</span>
            </button>
        </div>
    )
}

export default ButtonPay;