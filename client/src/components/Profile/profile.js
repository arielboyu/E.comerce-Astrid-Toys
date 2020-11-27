import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddToCart from "../Catalogue/AddToCart/addToCart";
import { Link } from "react-router-dom";
import Review from "../Review/review.js";
import style from "./profile.module.css"
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Alert, Row, Col } from "reactstrap";
//Product

export default function Profile() {
  const user = useSelector(state => state.user);
  const [load, setLoad] = useState(false);
  const handlerSubmit = (values) => {
    console.log("values:",values)
    if (values.newpassword === values.repeatpassword){
      axios.put(`${process.env.REACT_APP_API_URL}/users/${user.id}/changepsw`,{password:values.newpassword})
      .then(r=>console.log(r))
      .catch(e=>console.log("error:",e))
    }else{
      alert("Error repeating new password")
    }
    
  }
    return (
      <div className={`firstContainer container justify-content-center align-items-center my-5 mx-auto rounded border shadow`}>
        <div className={`${style.card} d-flex flex-column flex-lg-row mx-auto mb-3`} >
          <h1 className="mx-auto mt-5">Welcome {user.name} !</h1>
        </div>
        <div className="d-flex flex-column flex-lg-row mx-auto p-0">
          <img src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilustr.jpg?ver=6"></img>
          </div>
        <div className="text-center">
          <span>
          </span>
        </div>
        <div>
        <h4>Change Password </h4>
        <Formik initialValues={{password: "" },{newpassword:""},{repeatpassword:""}} onSubmit={(values) => handlerSubmit(values)} >
          <Form >
            <FormGroup>
              <label htmlFor="password">Enter Password</label>
              <Field name="password" type="password" placeholder="Enter your password" className="form-control"/>
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">New Password</label>
              <Field name="newpassword" placeholder="Enter your new password" type="password" className="form-control" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Repeat your New password</label>
              <Field name="repeatpassword" type="password" placeholder="Repeat your new password" className="form-control"/>
            </FormGroup>
            <Row>
              <Col lg={12} md={12}>
                <Button type="submit" value="Log In" color="dark" className="mr-1 mb-2 btn-block">
                  Change Password
                </Button>
              </Col>
            </Row>
          </Form>
        </Formik>
        </div>
        <div className="d-flex col-12 mx-auto justify-content-center m-5">
          <Link to="/products">
          <button className={`${style.btnBack} btn `}>
            BACK
          </button>
          </Link>
        </div>
        <div>
        </div>
      </div>
    );
}
