import { Col, Container, Row } from "react-bootstrap";
import imgBg from '../../image/about/img-about.png';

const Header = () => {
    return (
        <Container className="pt-5">
            <Row className="d-flex justify-content-between">
                <Col className="p-0">
                    <h1 className="fw-bold pt-5">What is <span className="text-coral fw-extra-bold">Brandi ?</span></h1>
                    <p className="fw-regular text-secondary w-75">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <p className="fw-regular text-secondary w-75">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </Col>
                <Col className="p-0">
                    <img 
                        src={imgBg}
                        alt="img-about"
                    />
                </Col>
            </Row>
        </Container>
    )
} 

export default Header;