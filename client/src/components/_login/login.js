import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Alert, Row, Col } from "reactstrap";
import axios from "axios"
import { useDispatch, useSelector} from 'react-redux'
import { userLogin } from '../../redux/actions/actions'
// import { Redirect } from 'react-router-dom'

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
  const [errLog, setError] = useState(false)
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (values) => {
    setRedirect(false)
    setError(false)
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, values,{
			withCredentials: true
		})
      .then(user => {
        setRedirect(true)
        dispatch(userLogin(user.data))
        setTimeout(() => {
          history.goBack()
        }, 1000) 
      })
      .catch( e => setError(true))
    }

  return (
    <div className="container d-flex flex-column col-10 col-md-7 col-lg-5 mx-auto my-5 p-5 border shadow">
      <h2 className="display-3 text-center">Login</h2>
      { redirect ? (
        <div className="alert alert-primary" role="alert">
            Loggin success! Welcome :)
        </div>) : <></> }
        { errLog ? (
        <div className="alert alert-danger" role="alert">
            User or password invalid!
        </div>) : <></> }
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
