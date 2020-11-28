import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Alert, Row, Col } from "reactstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../redux/actions/actions";



const alerta = (mensaje, color="danger") => {
  return <Alert className="mt-2" color={color}>{mensaje}</Alert>
}


const formSchema = Yup.object().shape({
  username: Yup.string().required(alerta("Campo requerido")),
  password: Yup.string().required(alerta("Campo requerido")),
});

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const [errLog, setError] = useState(false);
  const user = useSelector((state) => state.user);
  const carrito = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    setRedirect(false);
    setError(false);
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, values, {
        withCredentials: true,
      })
      .then((user) => {
        setRedirect(true);
        dispatch(userLogin(user.data));
        console.log("usuario recien logeado: ", user.data);

        //ESTE CODIGO SETEA EN LA DB LO QUE HAY EN EL CARRITO DEL REDUX
        //PARA SINCRONIZAR REDUX CON DB
        //----------------------------------------------------------------------------
        axios
          .get(`${process.env.REACT_APP_API_URL}/users/${user.data.id}/cart`)
          .then((cart) => {
            if (cart.data) {
              console.log(
                "ya existe una orden pendiente, le voy a agregar lo del redux"
              );
              console.log(cart);
              carrito.forEach((prod) => {
                let prodAlCarro = {
                  quantity: prod.cant,
                  productId: prod.id,
                  orderId: cart.data.id, //el id de la orden pending (osea el carrito)
                };
                axios
                  .put(
                    `${process.env.REACT_APP_API_URL}/users/${user.data.id}/cart`,
                    prodAlCarro
                  )
                  .then((respuesta) => {
                    console.log("producto agregado a la orden pendiente");
                    console.log(respuesta);
                  });
              });
            } else {
              //si tengo datos en el redux seteo en la base de datos
              if (carrito.length !== 0) {
                console.log("tengo datos en redux, seteo en db");
                let prodAlCarro = {
                  quantity: carrito[0].cant,
                  productId: carrito[0].id,
                };
                axios
                  .post(
                    `${process.env.REACT_APP_API_URL}/users/${user.data.id}/cart`,
                    prodAlCarro
                  )
                  .then((ord) => {

                    console.log("nueva orden creada");
                    console.log(ord);
                    console.log("carrito: ",carrito)
                    console.log("ord.data.id: ",ord)
                    carrito.forEach((prod) => {
                      let prodAlCarro = {
                        quantity: prod.cant,
                        productId: prod.id,
                        orderId: ord.data[0].orderId, //el id de la orden pending (osea el carrito)
                      };
                      console.log("body enviado: ", prodAlCarro)
                      axios
                        .put(
                          `${process.env.REACT_APP_API_URL}/users/${user.data.id}/cart`,
                          prodAlCarro
                        )
                        .then((respuesta) => {
                          console.log("producto agregado a la orden pendiente");
                          console.log(respuesta);
                        });
                    });
                  });
              }
            }
          });
        //-----------------------------------------------------------------------------
        
        setTimeout(() => {
          history.goBack();
        }, 1000);
      })
      .catch((e) => setError(true));
  };

    const popup = e => {
      e.preventDefault();
      window.open(`${process.env.REACT_APP_API_URL}/auth/github`, { withCredentials: true } , 'height=500, width=500');
    };

  return (
    <div
      className={`firstContainer container d-flex flex-column col-10 col-md-7 col-lg-5 mx-auto my-5 p-5 border shadow bg-white}`}
    >
      <h2 className="display-3 text-center">Login</h2>
      {redirect ? (
        <div className="alert alert-primary" role="alert">
          Loggin success! Welcome :)
        </div>
      ) : (
        <></>
      )}
      {errLog ? (
        <div className="alert alert-danger" role="alert">
          User or password invalid!
        </div>
      ) : (
        <></>
      )}
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={formSchema}
      >
        <Form>
          <FormGroup>
            <label htmlFor="username">Username</label>
            <Field
              name="username"
              type="text"
              placeholder="Enter your username"
              className="form-control"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              placeholder="Enter your password"
              type="password"
              className="form-control"
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
                type="submit"
                value="Log In"
                color="dark"
                className="mr-1 mb-2 btn-block"
              >
                Log in
              </Button>
            </Col>
            <Col lg={12} md={12}>
              <Link to="/register">
                <Button
                  type="submit"
                  color="primary"
                  className="mr-1 mb-2 btn-block"
                >
                  Register
                </Button>
              </Link>
            </Col>
          </Row>
          <div className="row mt-3 mb-0  d-flex flex-column align-items-center justify-content-center">
            <div className="">
              <p className="text-dark"value="github" id="githubBtn" onClick={popup}>
					      <a href='#'><span style={{fontSize: "25px"}}><i className="fab fa-github"> </i></span></a>
				      </p>
            </div>
            <div className="mt-2">
              <Link> Forgot your password ? </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
