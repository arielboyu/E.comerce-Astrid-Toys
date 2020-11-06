import { Fragment } from 'react';
import React, Fragment from "react";
const { Product } = require('./api/src/db.js');
 //CONTINUAR   
const CreateForm = ()=> {
    return(
        <Fragment>
            <label for='prodName'>*Product Name:</label>
            <input type='text' id='prodName' name='prodName'></input>
            <label for='prodDescr'>Product Description:</label>
            <input type='text' id='prodDescr' name='prodDescr'></input>
            <label for='prodPrice'>*Product Price:</label>
            <input type='text' id='prodPrice' name='prodPrice'></input>
            <label for='prodStock'>*Product Stock:</label>
            <input type='text' id='prodStock' name='prodStock'></input>
            {/* aca falta meter el imput de la imagen */}
            <label for='prodAct'>Product Active:</label>
            <input type='checkbox' checked='true' id='prodAct' name='prodAct'></input>                         
        </Fragment>

    )
};