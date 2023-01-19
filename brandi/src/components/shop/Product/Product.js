import { Container, Row, Card, Button } from 'react-bootstrap';
import { IoCartOutline } from "react-icons/io5";
import './style.css'
import Favourite from '../../favourite/Favourite';
import { useState, useEffect } from 'react';
import axios from "axios";

const Product = () => {

    useEffect(() => {
        getListProduct()
      }, []);

    const getListProduct = () => {
        var config = {
            method: 'get',
            url: 'http://localhost:8080/api/product',
            headers: { 
                "Content-Type": "application/json",
            }
          };
          
          axios(config)
          .then(function (response) {
            console.log("result: ", Object.values(response.data.data).length);
            if(Object.keys(response.data.data).length > 0) {
                setListProduct(response.data.data)
                console.log(response.data.data)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const [listProduct, setListProduct] = useState([]);
    return (
        <div className='bg-box pt-4'>
            <Container>
                <Row className='justify-content-between'>
                {(Object.values(listProduct).length > 0) ? (
                    listProduct.map((v, index) => (
                        <Card className='cursor-pointer mx-3 square rounded-5 p-0 border-0' key={index} style={{ width: '14.5rem', marginBottom: '20px' }}>
                            <div className='d-flex justify-content-end pt-3 pe-3'>
                                <Button className='border-0 bg-ash rounded-circle me-3'> <IoCartOutline color='#373737' size={18}/> </Button>
                                <Button className='border-0 bg-ash rounded-circle'>
                                    <Favourite />
                                </Button>
                            </div>
                            <Card.Img className='img-product px-4 h-50' src={require(`../../image/shop/product/${v.img_product}`)} />
                            <Card.Body>
                                <Card.Title className='title-product fs-6 h-50'>{v.name_product}</Card.Title>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <span className='text-type text-secondary'>{v.type_product}</span>
                                    <span className='text-price'>${v.price_product}</span>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                    ) : (
                      <p>data tidak ada</p>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default Product;