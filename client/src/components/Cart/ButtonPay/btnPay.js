import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeAllProductsToCart } from "../../../redux/actions/actions";
// import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Alert,
  Row,
  Col,
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function ButtonPay() {
  const [userLog, setUserLog] = useState();
  const [buyComplete, setBuyComplete] = useState(false);
  const store = useSelector((state) => state);
  const actions = useDispatch();

  const handlerClick = (e) => {
    e.preventDefault();
    setUserLog(store.user.id);
    if (userLog === null) {
      return console.log("Usuario no logeado");
    } else {
      setModal(true);
      Axios.post(`${process.env.REACT_APP_API_URL}/users/cart/products`, store)
        .then((r) => {
          console.log(r);
          setBuyComplete(true);
          actions(removeAllProductsToCart());
        })
        .catch((err) => console.log("User not loggin!"));
    }
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [country,setCountry] = useState('');
  const handleSubmit = () => {}; //LLENAR ACA CON LA PARTE DE BACK
  
  const alerta = (mensaje, color = "danger") => {
    return (
      <Alert className="mt-2" color={color}>
        {mensaje}
      </Alert>
    );
  };
  const formSchema = Yup.object().shape({
    street: Yup.string().required(alerta("Campo requerido")),
    number: Yup.string().required(alerta("Campo requerido")),
    email: Yup.string().required(alerta("Campo requerido"))
  });


  return (
    <>
      <div className="d-flex justify-content-end mr-5">
        <button
          onClick={handlerClick}
          className="btn btn-info p-2"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <span style={{ fontSize: "20px" }}>CHECKOUT</span>
        </button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>ShippingAdress</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{country: "", state: "", street: "", number: "", zipCode: "", email: ""}}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            validationSchema={formSchema}
          >
            <Form>
              <FormGroup>
                <label htmlFor="street">Country</label>
                {/* <CountryDropdown name="country" onchange ={country =>setCountry(country)}/> */}
                <Field
                  name="country"
                  type="text"
                  placeholder="Enter your country"
                  className="form-control"
                />                
                <ErrorMessage
                  name="country"
                  component="div"
                  className="field-error text-danger"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="street">State</label>
                {/* <RegionDropdown name="state" 
	                country={country} /> */}
                <Field
                  name="state"
                  type="text"
                  placeholder="Enter your state"
                  className="form-control"
                />    
                <ErrorMessage
                  name="state"
                  component="div"
                  className="field-error text-danger"
                />
              </FormGroup>              
              <FormGroup>
                <label htmlFor="street">Street</label>
                <Field
                  name="street"
                  type="text"
                  placeholder="Enter your street"
                  className="form-control"
                />
                <ErrorMessage
                  name="street"
                  component="div"
                  className="field-error text-danger"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="number">Number</label>
                <Field
                  name="number"
                  placeholder="Enter your number"
                  type="number"
                  className="form-control"
                />
                <ErrorMessage
                  name="number"
                  component="div"
                  className="field-error text-danger"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="zipCode">ZIP Code</label>
                <Field
                  name="zipCode"
                  placeholder="Enter your ZIP Code"
                  type="number"
                  className="form-control"
                />
                <ErrorMessage
                  name="zipCode"
                  component="div"
                  className="field-error text-danger"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  placeholder="Enter your email"
                  type="text"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="field-error text-danger"
                />
              </FormGroup>              
            </Form>
          </Formik>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {userLog === null ? (
        <div className="alert alert-danger my-3" role="alert">
          You're not loggin,
          <Link to="/login">
            <span className="alert-link"> please sigup.</span>
          </Link>
        </div>
      ) : (
        <></>
      )}
      {buyComplete ? (
        <div className="alert alert-info my-3" role="alert">
          Successful purchase,
          <Link to={`/myshop/${userLog}`}>
            <span className="alert-link"> My shop.</span>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ButtonPay;
