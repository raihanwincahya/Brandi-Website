import { Row, Container, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import axios from "axios";
import Data from './components/shop/data/Data';

import sofa from './components/image/shop/product/sofa.png'

const Tes = () => {

  // counter
  const [counter, setCounter] = useState(1)

  const handleIncrementClick = (e) => {
      setCounter(counter + 1)
  }

  const handleDecrementClick = (e) => {
      setCounter(counter - 1)
  }
  // end counter

  // cors
  const [addCart, getAddCart] = useState([]);

  useEffect(() => {
    carts()
  }, []);

  const carts = () => {
    var config = {
      method: 'get',
      url: 'http://localhost:8080/api/cart',
      headers: { 
        "Content-Type": "application/json",
      }
    };

    axios(config)
    .then(function (response) {
      console.log("result: ", Object.values(response.data.data).length);
      if(Object.keys(response.data.data).length > 0) {
        getAddCart(response.data.data)
        console.log(response.data.data)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (

    <div>
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
            {(Object.values(addCart).length > 0) ? (
              addCart.map((v, index) => (
                <div key={index}>
                  <div className="mb-3 d-flex bg-grey">
                    <div className="align-items-center w-50 d-flex">
                      <Form.Group
                        className="mb-3 p-0"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" bg="danger" />
                      </Form.Group>
                      <img src={v.image} alt="img" className="mx-3 w-25" />
                      <div>
                        <h6 className="fs-4">{v.name_product}</h6>
                        <p className="fs-6 text-secondary">{v.description}</p>
                      </div>
                    </div>
                    <div className="w-50 justify-content-between d-flex p-0 align-items-center">
                      <span className="me-5 fs-4 text-coral">{v.price}</span>
                      <div className="w-25 d-flex justify-content-between align-items-center">
                        <Button variant="light" size='sm' onClick={handleDecrementClick}><IoRemove /></Button>
                          <div className='fs-5 text-center' key={v.id_product}>{v.qty + counter}</div>
                        <Button variant="light" size='sm' onClick={handleIncrementClick}><IoAdd /></Button>
                      </div>
                      <span className="ms-5 me-4 text-coral fs-3">
                        {v.qty *  v.price}
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
      <div className="d-flex justify-content-between align-items-center py-4 px-5 bg-light fixed-bottom">
        <h6 className="fs-5">Total items</h6>
        <div className="align-items-center">
          <span className="me-4 text-coral">12</span>
          <Button className="btn-coral px-5 square border-0 rounded-4">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Tes;