import React from 'react'

function ButtonPay(){
    return(
        <div className="d-flex justify-content-end mr-5">
            <button className="btn btn-info p-2">
                <span style={{fontSize: "24px"}}>Checkout</span>
            </button>
        </div>
    )
}

export default ButtonPay;