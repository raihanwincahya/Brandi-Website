import { Container, Nav, Navbar, Form, Badge, Button, Modal, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoHeart, IoHeartOutline, IoCartOutline, IoSearchOutline } from "react-icons/io5";
import ModalImg from '../../image/shop/bg-header/featured icon.png';
import User from '../../image/user/user.png';
import './style.css';
import axios from "axios";
import CartPage from '../Header/cart/CartPage';

const ShopNavbar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getFavorites()
      }, []);

    const getFavorites = () => {
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
                setFavorites(response.data.data)
                console.log(response.data.data)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <>
            <Navbar expand="lg" className='py-3 bg-white' sticky='top'>
                <Container fluid className='mx-5'>
                    <NavLink to='/profile' className='text-decoration-none'>
                        <img
                            src={User}
                            alt="user-img"
                            className='img-user-navbar'
                            width='36'
                            height='36'
                        />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-5">
                            <NavLink to='/home' className='me-5 link text-decoration-none'>Home</NavLink>
                            <NavLink to='/about' className='me-5 link text-decoration-none'>About</NavLink>
                            <NavLink to='/shop' className='link text-decoration-none'>Shop</NavLink>
                        </Nav>
                        <Form className="me-3 w-25 position-relative">
                            <Badge bg='#D4CDCD' className='box-search-icon position-absolute'> <IoSearchOutline size={14}/> </Badge>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                className='position-relative form'
                            />
                        </Form>
                        <Button variant="light" className='position-relative me-3' onClick={handleShow}>
                            <IoHeartOutline color='#373737' size={22} /> <Badge pill bg="#DE6B6B" className='icon position-absolute'>7</Badge>
                        </Button>
                        <NavLink to='/cart' className='text-decoration-none'>
                            <Button variant="light" className='position-relative' onClick={CartPage}>
                                <IoCartOutline color='#373737' size={22} /> <Badge pill bg="#DE6B6B" className='icon position-absolute'>1</Badge>
                            </Button>
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose} className='box-modal w-50'>
                <Modal.Header closeButton className='modal-header border-0'>
                    <img
                        src={ModalImg}
                        alt="modal-img"
                    />
                    <Modal.Title className='w-100 text-center'>Favorites</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body border-0'>
                    <Form className="me-3 w-100 position-relative">
                        <Badge bg='#D4CDCD' className='box-search-icon position-absolute'> <IoSearchOutline size={14}/> </Badge>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            className='position-relative form-modal border-0 fs-6 rounded-5 mb-4'
                        />
                    </Form>
                    <Row>
                        {(Object.values(favorites).length > 0) ? (
                            favorites.map((v, index) => (
                                <div className='card-favourite rounded-4 bg-light mx-3 mb-3' key={index}>
                                <div className='d-flex justify-content-between'>
                                    <img
                                        src={require(`../../image/shop/product/${v.img_product}`)}
                                        alt="sofa beige"
                                        className='img-favourite w-25'
                                    />
                                    <div className='box-text px-3 pt-4 w-100'>
                                        <h1 className='text-dark fs-6'>{v.name_product}</h1>
                                        <p className='text-secondary'>{v.type_product}</p>
                                    </div>
                                    <div className='position-relative'>
                                        <div className='d-flex'>
                                            <Button className='bg-ash border-0 rounded-circle me-2'> <IoCartOutline color='#373737' size={16}/> </Button>
                                            <Button className='bg-ash rounded-circle border-0'> <IoHeart color='#DE6B6B' size={16}/> </Button>
                                        </div>
                                        <p className='price-text fs-6 position-absolute'>${v.price_product}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        ) : (
                            <p>data tidak ada</p>
                        )}
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ShopNavbar;