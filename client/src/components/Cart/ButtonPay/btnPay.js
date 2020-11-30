import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import Spinner from "../../Spinner/spinner"

function ButtonPay() {
  const [userLog, setUserLog] = useState();
  const [buyComplete, setBuyComplete] = useState(false);
  const store = useSelector((state) => state);
  const actions = useDispatch();
  const [orderId, SetOrderId] = useState("");
  const [load, setLoad] = useState(false)

  const handlerClick = (e) => {
    e.preventDefault();
    setUserLog(store.user.id);
    if (userLog === null) {
      return console.log("Usuario no logeado");
    } else {
      Axios.get(`${process.env.REACT_APP_API_URL}/users/${store.user.id}/cart`)
        .then((r) => {
          SetOrderId(r.data.id);
          setModal(true);
        })
        .catch((err) => console.log("User not loggin!"));
    }
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleSubmit = (values) => {
    if (
      !values.country ||
      !values.city ||
      !values.adress ||
      !values.zipCode ||
      !values.email
    ) {
      alert("Required Fields empty");
    } else {
      toggle()
      setLoad(true)
      values.userId = store.user.id;
      Axios.put(`${process.env.REACT_APP_API_URL}/orders/stock/${orderId}`)
        .then((r)=>{
          console.log("Stock descontado")
        })
        .catch((err)=>{
          console.log(err)
        })
      Axios.post(`${process.env.REACT_APP_API_URL}/orders/shipping/${orderId}`, values, { withCredentials : true })
        .then((r) => {
          setLoad(false)
          setBuyComplete(true);
          actions(removeAllProductsToCart());
          setTimeout(window.location.reload(),1500)
        })
        .catch((err) => console.log("Error: ", err));
    }
  };

  const alerta = (mensaje, color = "danger") => {
    return (
      <Alert className="mt-2" color={color}>
        {mensaje}
      </Alert>
    );
  };
  const formSchema = Yup.object().shape({
    country: Yup.string().required(alerta("Required field")),
    city: Yup.string().required(alerta("Required field")),
    adress: Yup.string().required(alerta("Required field")),
    zipCode: Yup.string().required(alerta("Required field")),
    email: Yup.string().email("Invalid email").required("Required field"),
  });

  return (
    <>
      <div className="d-flex justify-content-end mr-5">
        <button onClick={handlerClick} className="btn btn-info p-2">
          <span style={{ fontSize: "20px" }}>CHECKOUT</span>
        </button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>ShippingAdress</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              country: "",
              city: "",
              adress: "",
              zipCode: "",
              email: "",
            }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            onClose={toggle}
            validationSchema={formSchema}
          >
            <Form>
              <FormGroup>
                <label htmlFor="country">Country</label>
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
                <label htmlFor="city">City</label>
                <Field
                  name="city"
                  type="text"
                  placeholder="Enter your city"
                  className="form-control"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="field-error text-danger"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="adress">Adress</label>
                <Field
                  name="adress"
                  type="text"
                  placeholder="Enter your adress"
                  className="form-control"
                />
                <ErrorMessage
                  name="adress"
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
              <Row>
                <Col lg={12} md={12}>
                  <Button
                    type="submit"
                    value="submit"
                    color="primary"
                    className="mr-1 mb-2 btn-block"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
      { load ? <Spinner />  : <></>}
      {userLog === null ? (
        <div className="alert alert-danger my-3" role="alert">
          You're not logged in,
          <Link to="/login">
            <span className="alert-link"> please sign in.</span>
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
