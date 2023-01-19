import Header from "./header/Header"
import { Container, Row, Col } from "react-bootstrap"
import CardComponent from "./card/CardComponent";
import InfoUser from "./info-user/InfoUser";
import Orders from "./info-order/Orders";
import Promo from "./info-promo/Promo";

const profile = () => {
    return (
        <>
            <Header />
            <Container fluid className="px-5" style={{background: '#F6F5F6', minHeight: '100vh'}}>
                <Row className="px-2 pt-4">
                    <Col sm={3} className='p-0 mt-5'>
                        <CardComponent />
                    </Col>
                    <Col sm={9} className='mt-5'>
                        <InfoUser />
                        <Orders />
                        <Promo />
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default profile;