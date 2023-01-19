import Navbar from "../../Navbar/Navbar";
import { Row, Container, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import "./style.css";
import Count from "../../../count/Count";
import axios from "axios";

const CartPage = () => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart()
  }, []);

  const getCart = () => {
      var config = {
          method: 'get',
          url: 'http://localhost:8080/api/favorites',
          headers: { 
              "Content-Type": "application/json",
          }
        };
        
        axios(config)
        .then(function (response) {
          console.log("result: ", Object.values(response.data.data).length);
          if(Object.keys(response.data.data).length > 0) {
            setCart(response.data.data)
            console.log(response.data.data)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  return (
    <>
      <Navbar />
      <div className="bg-box">
        <Container fluid className="p-5">
          <Row>
            <h1 className="fs-3 p-0 mb-4">Shopping cart</h1>
            <div className="w-100 p-0 d-flex mb-2">
              <span className="w-50">Product</span>
              <div className="w-50 justify-content-between d-flex">
                <span className="me-5 fw-normal">Price</span>
                <span className="mx-5">Quantity</span>
                <span className="mx-5">Total</span>
              </div>
            </div>
            <hr />
            <>
              {(Object.values(cart).length > 0) ? (
                cart.map((v, index) => (
                  <div key={index}>
                    <div className="mb-3 d-flex bg-grey">
                      <div className="align-items-center w-50 d-flex">
                        <Form.Group
                          className="mb-3 p-0"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" bg="danger" />
                        </Form.Group>
                        <img src={require(`../../../image/shop/product/${v.img_product}`)} alt="img" className="mx-3 w-25" />
                        <div>
                          <h6 className="fs-4">{v.name_product}</h6>
                          <p className="fs-6 text-secondary">{v.type_product}</p>
                        </div>
                      </div>
                      <div className="w-50 justify-content-between d-flex p-0 align-items-center">
                        <span className="me-5 fs-4 text-coral">{v.price_product}</span>
                        <div className="w-50 d-flex justify-content-center align-items-center">
                          <Count />
                        </div>

                        <span className="ms-5 me-2 text-coral fs-3">
                          {v.price_product}
                        </span>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))
              ) : (
                <p>data tidak ada</p>
              )}
            </>
          </Row>
        </Container>
        <div className="d-flex justify-content-between align-items-center py-4 px-5 bg-light">
          <h6 className="fs-5">Total items</h6>
          <div className="align-items-center">
            <span className="me-4 text-coral">$6886</span>
            <Button className="btn-coral px-5 square border-0 rounded-4">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
