import { Container, Row, Col, Card } from "react-bootstrap";
import './style.css'
import FormSignUp from "./FormSignUp";

const SignUp = () => {
    return (
        <Container fluid className="bg-regis">
            <Row>
                <Col md={12} lg={6}>
                    <FormSignUp />
                </Col>
                <Col md={12} lg={6} className="p-0">
                    <Card className="img-register border-0 rounded-0" />
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;