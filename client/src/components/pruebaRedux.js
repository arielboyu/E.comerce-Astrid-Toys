import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from '../redux/actions/actions'


function Reduxxx(){
    const [str, setStr]= useState()

    const carrito= useSelector(state => state.carrito)
    const actions = useDispatch()

    const handlerChange=(e)=>{
        setStr(e.target.value)
    }

    return(
        <>
            {carrito.map((r)=> <p>{r}</p>)}
            <input onChange={handlerChange} type="text" placeholder="Add reducer..."></input>
            <button 
            onClick={()=>actions(addToCart(str))}
            type="button" 
            className="btn btn-primary"
            >
                Add
            </button>
        </>
    )
}
export default Reduxxx;