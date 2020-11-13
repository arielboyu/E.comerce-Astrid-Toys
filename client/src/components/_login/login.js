import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Alert, Row, Col } from "reactstrap";

const alerta = (mensaje, color="danger") => {
  return <Alert className="mt-2" color={color}>{mensaje}</Alert>
}

const formSchema = Yup.object().shape({
  Username: Yup.string()
    .min(5, alerta("Mínimo 5 caracteres", "warning"))
    .max(25, alerta("Máximo 25 caracteres", "warning"))
    .required( alerta("Campo requerido")),
  Password: Yup.string()
    .required( alerta("Campo requerido"))
    .min(5, alerta("Mínimo 5 caracteres", "warning")),
});

const Login = () => {
  return (
    <div className="container d-flex flex-column col-10 col-md-7 col-lg-5 mx-auto my-5 p-5 border shadow">
      <h2 className="display-3 text-center">Login</h2>

      <Formik
        initialValues={{
          Username: "",
          Password: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <FormGroup>
            <label htmlFor="Username">Username</label>
            <Field
              className="form-control"
              name="Username"
              placeholder="Enter your username"
              type="text"
            />
            
              <ErrorMessage
                name="Username"
                component="div"
                className="field-error text-danger"
              />
            
          </FormGroup>
          <FormGroup>
            <label htmlFor="Password">Password</label>
            <Field
              className="form-control"
              name="Password"
              placeholder="Enter your password"
              type="password"
            />
            <ErrorMessage
              name="Password"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <Row>
            <Col lg={12} md={12}>
              <Button
                color="dark"
                className="mr-1 mb-1 btn-block"
                type="submit"
              >
                Iniciar sesión
              </Button>
            </Col>
            <Col lg={12} md={12}>
              <Link to="/register">
                <Button
                  color="primary"
                  className="mr-1 mb-1 btn-block"
                  type="submit"
                >
                  Registrarse
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
