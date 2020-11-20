import React from 'react';
import style from './spinner.module.css';


export default function Spinner(){

    return(
        <div style={{height : "400px"}} className={`${style.ldsEllipsis} `}><div></div><div></div><div></div><div></div></div>
    )
}