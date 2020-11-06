import { Fragment } from 'react';
import React, Fragment from "react";
const { Product } = require('./api/src/db.js');

const CreateForm = ()=> {
    return(
        <Fragment>
            <label for='prodName'>*Product Name:</label>
            <input tyoe='text' id='prodName' name='prodName'></input>
            <label for='prodDescr'>Product Description:</label>
            <input tyoe='text' id='prodDescr' name='prodDescr'></input>
            <label for='prodPrice'>*Product Price:</label>
            <input tyoe='text' id='prodPrice' name='prodPrice'></input>               
        </Fragment>

    )
};