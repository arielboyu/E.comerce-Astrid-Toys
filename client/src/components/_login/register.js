import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Row, Col } from "reactstrap";

const formSchema = Yup.object().shape({
  Name: Yup.string()
    .required("Campo requerido")
    .max(30, "Máximo 30 caracteres"),
  Email: Yup.string()
    .required("Campo requerido")
    .email("Correo electrónico inválido")
    .max(255, "Máximo 255 caracteres"),
  Username: Yup.string()
    .min(5, "Mínimo 5 caracteres")
    .max(25, "Máximo 25 caracteres")
    .required("Campo requerido"),
  Password: Yup.string()
    .required("Campo requerido")
    .min(5, "Mínimo 5 caracteres"),
});

const Register = () => {
  return (
    <div className="container d-flex flex-column col-10 col-md-7 col-lg-5 mx-auto my-5 p-5 border shadow">
      <h2 className="display-3 text-center">Register</h2>
      <Formik
        initialValues={{
          Name: "",
          Email: "",
          Username: "",
          Password: "",
        }}
        validationSchema={formSchema}
        onSubmit={values => console.log(values)}
      >
        <Form>
          <FormGroup>
            <label htmlFor="Name">Name</label>
            <Field
              className="form-control"
              name="Name"
              placeholder="Enter your name"
              type="text"
            />
            <ErrorMessage
              name="Name"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="Username">Username</label>
            <Field
              className="form-control"
              name="Username"
              placeholder="Create your username"
              type="text"
            />
            <ErrorMessage
              name="Username"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="Email">E-mail</label>
            <Field
              className="form-control"
              name="Email"
              placeholder="Enter your e-mail"
              type="email"
            />
            <ErrorMessage
              name="Email"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="Password">Password</label>
            <Field
              className="form-control"
              name="Password"
              placeholder="Create your Password"
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
                Create new user
              </Button>
            </Col>
            <Col lg={12} md={12}>
              <Link to="/login">
                <Button
                  color="danger"
                  className="mr-1 mb-1 btn-block"
                  type="submit"
                >
                  Go back
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