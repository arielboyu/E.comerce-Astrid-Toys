import React from 'react';
import style from './spinner.module.css';


export default function Spinner(){

    return(
        <>
        <h2 style={{marginTop: "100px", marginLeft:"45%"}}>Loading...</h2>
        <div style={{height : "400px"}} className={`${style.ldsEllipsis} `}><div></div><div></div><div></div><div></div></div>
        </>
    )
}