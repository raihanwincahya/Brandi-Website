import Navbar from '../Navbar/Navbar';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Logo from '../../image/logo/brand.png';
import './style.css';

const CardScreen = () => {
    return (
        <>
            <Navbar fixed='top' />
            <Container fluid>
                <Row>
                    <Col md={12} lg={6} className='bg-info'>
                        <div className='w-50 mx-auto bg-card'>
                            <img 
                                src={Logo}
                                alt="logo"
                                className='w-50 pt-3 mx-auto'
                            />
                        </div>
                    </Col>
                    <Col md={12} lg={6} className='bg-warning'>
                        world
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CardScreen;