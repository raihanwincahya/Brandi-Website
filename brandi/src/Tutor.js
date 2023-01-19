import { useEffect, useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { Row, Container, Form, Button } from "react-bootstrap";

const TodoList = () => {

    // counter
  const [counter, setCounter] = useState(1)

  const handleIncrementClick = () => {
      setCounter(counter + 1)
  }

  const handleDecrementClick = () => {
      setCounter(counter - 1)
  }
  // end counter

    const [cart, setCart] = useState([]);

    useEffect(() => {
        carts();
    }, []);

    const carts = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        // store data
        setCart(await responce.json());
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
            {cart.map((list) => (
              <div key={list.id}>
                <div className="mb-3 d-flex bg-grey">
                  <div className="align-items-center w-50 d-flex">
                    <Form.Group
                      className="mb-3 p-0"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check type="checkbox" bg="danger" />
                    </Form.Group>
                    <img src={cart.img} alt="img" className="mx-3 w-25" />
                    <div>
                      <h6 className="fs-4">{list.name}</h6>
                      <p className="fs-6 text-secondary">{list.username}</p>
                    </div>
                  </div>
                  <div className="w-50 justify-content-between d-flex p-0 align-items-center">
                    <span className="me-5 fs-4 text-coral">{list.email}</span>
                    <div className="w-50 d-flex justify-content-center align-items-center">
                      <div className="align-items-center w-50 d-flex justify-content-between">
                          <Button variant="light" size='sm' onClick={handleDecrementClick}><IoRemove /></Button>
                              <div className='fs-5 text-center'>{list.id}</div>
                          <Button variant="light" size='sm' onClick={handleIncrementClick}><IoAdd /></Button>
                      </div>
                    </div>

                    <span className="ms-5 me-2 text-coral fs-3">
                      {list.website}
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            ))}
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
  );
};

export default TodoList;