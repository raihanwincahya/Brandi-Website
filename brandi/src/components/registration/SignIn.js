import { Container, Row, Col, Card } from "react-bootstrap";
import './style.css';
import FormSignIn from './FormSignIn';

const SignIn = () => {

    return (
        <Container fluid className="bg-regis ">
            <Row>
                <Col md={12} lg={6} className="p-0">
                    <Card className="img-login border-0 rounded-0" />
                </Col>
                <Col md={12} lg={6} className='bg-white-ash'>
                    <FormSignIn />
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn;