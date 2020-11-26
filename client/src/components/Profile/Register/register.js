import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Alert, Row, Col } from "reactstrap";
import axios from "axios";
import {userExist} from './controller'

const alerta = (mensaje, color = "danger") => {
  return (
    <Alert className="mt-2" color={color}>
      {mensaje}
    </Alert>
  );
};

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required(alerta("Campo requerido"))
    .max(30, alerta("Máximo 30 caracteres", "warning")),
  email: Yup.string()
    .required(alerta("Campo requerido"))
    .email(alerta("Correo electrónico inválido", "warning"))
    .max(255, alerta("Máximo 255 caracteres", "info")),
  username: Yup.string()
    .min(5, alerta("Mínimo 5 caracteres", "warning"))
    .max(25, alerta("Máximo 25 caracteres", "info"))
    .required(alerta("Campo requerido")),
  password: Yup.string()
    .required(alerta("Campo requerido"))
    .min(5, alerta("Mínimo 5 caracteres", "warning")),
});

const Register = () => {
  const history = useHistory()
  const [regOk, setRegOk] = useState(false)
  

  const handlerRegister=(values)=>{
    if(userExist(values.username)){console.log("Son iguales")}
    setRegOk(false)
    axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, values)
    .then(r => {
      setRegOk(true)
      setTimeout(() => {
        history.goBack()
      }, 1000)
    })
    .catch( e => console.log(e))
    axios.post(`${process.env.REACT_APP_API_URL}/auth/send/register`, values)
    .then(r =>{
      console.log(r)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="container d-flex flex-column col-10 col-md-7 col-lg-5 mx-auto my-5 p-5 border shadow">
      <h2 className="display-3 text-center">Register</h2>
      { regOk ? (
        <div className="alert alert-primary" role="alert">
            Register success! Welcome :)
        </div>) : <></> }
      <Formik
        initialValues={{
          name: "",
          email: "",
          username: "",
          password: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => handlerRegister(values)}
      >
        <Form>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <Field
              className="form-control"
              name="name"
              placeholder="Enter your name"
              type="text"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="username">Username</label>
            <Field
              className="form-control"
              name="username"
              placeholder="Create your username"
              type="text"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="Email">E-mail</label>
            <Field
              className="form-control"
              name="email"
              placeholder="Enter your e-mail"
              type="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <Field
              className="form-control"
              name="password"
              placeholder="Create your Password"
              type="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <Row>
            <Col lg={12} md={12}>
              <Button
                color="dark"
                className="mr-2 mb-2 btn-block"
                type="submit"
              >
                Create
              </Button>
            </Col>
            <Col lg={12} md={12}>
              <Link to="/login">
                <Button
                  color="danger"
                  className="mr-2 mb-2 btn-block"
                  type="submit"
                >
                  Back
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
