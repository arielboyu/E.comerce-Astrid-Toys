import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios'
import { Redirect } from 'react-router-dom'



const Dashboard = () => {
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        const validation = () => {
            axios.get(`${process.env.REACT_APP_API_URL}/auth/me`)
                .then(r => {console.log("Estas logueado!"); console.log(r.data)})
                .catch(err => { console.log("no podemos entrar"); setRedirect(true) } )
        }
        validation();
      }, []);


    return (
        <>
        {redirect ? <Redirect to='/products'/> : null}
        <div className="container d-flex flex-column text-center mx-auto my-5 p-5 border shadow">
            <div className="">
                <h1 className="display-3 text-center">Dashboard</h1>
                <p className="lead d-none d-sm-block">The admin reservated section</p>
                <hr className="my-2" />
                <div className="d-flex justify-content-around px-5 mt-5">
                <Link to="/dashboard/product/update">
                    <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
                    <ion-icon style={{fontSize:"24px"}} name="add-circle-outline"></ion-icon>{" "} Product
                    </button>
                </Link>
                <Link to="/dashboard/category/list">
                    <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
                    <ion-icon style={{fontSize:"24px"}} name="add-circle-outline"></ion-icon>{" "} Category 
                    </button>
                </Link>
                <Link to="/dashboard/users/list">
                    <button className="btn btn-danger btn-lg d-flex align-items-center mx-auto mt-3">
                    <ion-icon style={{fontSize:"24px"}} name="add-circle-outline"></ion-icon>{" "} Orders 
                    </button>
                </Link>
                </div>
            </div>
        </div>
        </>)
}

export default Dashboard;