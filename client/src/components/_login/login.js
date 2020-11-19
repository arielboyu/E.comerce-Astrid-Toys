import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Alert, Row, Col } from "reactstrap";
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import {userLogin} from '../../redux/actions/actions'
import { Redirect } from 'react-router-dom'

const alerta = (mensaje, color="danger") => {
  return <Alert className="mt-2" color={color}>{mensaje}</Alert>
}

const formSchema = Yup.object().shape({
  username: Yup.string()
    .required( alerta("Campo requerido")),
  password: Yup.string()
    .required( alerta("Campo requerido"))
});

const Login = () => {
  const [redirect, setRedirect] = useState(false)
  const [user, setUser] = useState()
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    const { username, password } = values;
    console.log(username, password)
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { username : username, password : password}, { withCredentials: 'true' } )
            .then(user => {
              setRedirect(true)
              console.log(user)
              console.log(user.username)
              console.log(user.data)
              setUser(user.data)
              dispatch(userLogin(user.data))}
            )
            .catch( e => console.log("Log failure") )
    }

  return (
    <div className="container d-flex flex-column col-10 col-md-7 col-lg-5 mx-auto my-5 p-5 border shadow">
      { redirect ? <Redirect to='/dashboard'/> : null }
      <h2 className="display-3 text-center">Login</h2>
      <Formik initialValues={{ username: "", password: "" }} onSubmit={(values) => {handleSubmit(values)}} validationSchema={formSchema} >
        <Form>
          <FormGroup>
            <label htmlFor="username">Username</label>
            <Field name="username" type="text" placeholder="Enter your username" className="form-control"/>
            <ErrorMessage name="username" component="div" className="field-error text-danger"/>
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <Field name="password" placeholder="Enter your password" type="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="field-error text-danger"/>
          </FormGroup>
          <Row>
            <Col lg={12} md={12}>
              <Button type="submit" value="Log In" color="dark" className="mr-1 mb-2 btn-block">
                Log in
              </Button>
            </Col>
            <Col lg={12} md={12}>
              <Link to="/register">
                <Button type="submit" color="primary" className="mr-1 mb-2 btn-block">
                  Register
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
