import { Container, Col, Row, Card, Nav, Form, Badge, Button } from 'react-bootstrap';
import { IoFunnelOutline, IoCartOutline } from "react-icons/io5";
import './style.css'
import Favourite from '../../favourite/Favourite'

const Header = () =>  {
    return (
        <div className='bg-box'>
            <Container fluid className='px-5'>
                <Row className='py-4 mx-3'>
                    <Col className='p-0 m-0 d-flex justify-content-between'>
                        <Nav
                            activeKey="/home"
                            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                            >
                            <Nav.Item>
                                <Nav.Link eventKey="sofa" className='linked linked-active'>All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sofa" className='linked text-secondary'>Sofa</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="chair" className='linked text-secondary'>Chair</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="other" className='linked text-secondary'>
                                Other
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Form className='position-relative'>
                            <Form.Control
                            type="search"
                            placeholder="Sort by"
                            bg="#FFFFFF"
                            className="me-2 box-search py-2 px-3 bg-white square rounded-5 fs-6 border-0"
                            aria-label="Search"
                            />
                            <IoFunnelOutline className='position-absolute text-secondary icon-filter'/>
                        </Form>
                    </Col>
                </Row>
                <Row className='mx-3'>
                    <Col className='p-0 m-0 d-flex justify-content-between layout-box'>
                        <Card className='hero-card-left square rounded-4 border-0'>
                            <Card.Body>
                                <div className='d-flex justify-content-between'>
                                    <Badge bg='#FFFFFF' className='ms-3 align-self-center badges bg-white square rounded-5 px-3 py-2 fs-6'>$ 221</Badge>
                                    <div className='d-flex justify-content-end'>
                                        <Button bg='#FFFFFF' className='border-0 bg-white rounded-circle me-2'> <IoCartOutline color='#373737' size={18}/> </Button>
                                        <Button bg='#FFFFFF' className='border-0 bg-white rounded-circle'> 
                                            <Favourite />
                                        </Button>
                                    </div>
                                </div>
                                <Card.Title className='title text-white ms-3'>TV table and accesories</Card.Title>
                                <Card.Text className='descrip text-white fs-6 ms-3'>Modern classic</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='hero-card-right square rounded-4'>
                            <Card.Body>
                                <div className='d-flex justify-content-between'>
                                    <Badge bg='#FFFFFF' className='ms-3 align-self-center badges bg-white square rounded-5 px-3 py-2 fs-6'>$ 221</Badge>
                                    <div className='d-flex justify-content-end'>
                                        <Button bg='#FFFFFF' className='border-0 bg-white rounded-circle me-2'> <IoCartOutline color='#373737' size={18}/> </Button>
                                        <Button bg='#FFFFFF' className='border-0 bg-white rounded-circle'> 
                                            <Favourite /> 
                                        </Button>
                                    </div>
                                </div>
                                <Card.Title className='title text-white ms-3'>Black vilour chair</Card.Title>
                                <Card.Text className='descrip text-white fs-6 ms-3'>Modern classic</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default Header;