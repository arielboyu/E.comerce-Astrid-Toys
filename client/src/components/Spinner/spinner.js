import React from 'react';
import style from './spinner.module.css';


export default function Spinner(){

    return(
        <>
        <h2 style={{marginTop: "30px" }}>Loading...</h2>
        <div style={{marginTop: "30px" }} className={`${style.ldsEllipsis} `}><div></div><div></div><div></div><div></div></div>
        </>
    )
}