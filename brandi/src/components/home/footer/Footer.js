import { Container, Nav, Col, Row } from 'react-bootstrap';
import Logo from '../../image/logo/logo.png';
import './style.css'

function Footer() {
    return (
        <Container fluid className='py-5 px-5'>
            <Row className='py-5'>
                <Col className='d-flex justify-content-between px-5'>
                    <img src={Logo} alt="logo" className='logo'/>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link eventKey="link-1" className='fs-6 text-dark'>Product</Nav.Link>
                        <Nav.Link eventKey="link-2" className='fs-6 text-dark'>About us</Nav.Link>
                        <Nav.Link eventKey="link-3" className='fs-6 text-dark'>Contact</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link eventKey="link-1" className='fs-6 text-dark'>Swivel chairs</Nav.Link>
                        <Nav.Link eventKey="link-2" className='fs-6 text-dark'>Conference chairs</Nav.Link>
                        <Nav.Link eventKey="link-3" className='fs-6 text-dark'>Soft seating</Nav.Link>
                        <Nav.Link eventKey="link-1" className='fs-6 text-dark'>Bars stools</Nav.Link>
                        <Nav.Link eventKey="link-2" className='fs-6 text-dark'>Tables</Nav.Link>
                        <Nav.Link eventKey="link-3" className='fs-6 text-dark'>Acoustic boots & furniture</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <p className='menu'>Our company</p>
                    <h1 className='fs-4'>ul. Waluiuoaga 31, Raindech </h1>
                </Col>
                <Col>
                    <p className='menu'>Contact us</p>
                    <h1 className='fs-4'>+ 33 31 444 11 35</h1>
                    <p className='footer-name'>Merdiana Leinz</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;