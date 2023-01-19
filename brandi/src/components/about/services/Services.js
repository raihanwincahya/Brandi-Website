import { Card, Container, Row } from "react-bootstrap";
import Data from './Data';

const Services = () => {
    return (
        <Container>
            <h3 className="fw-bold my-3 pt-5">Our services</h3>
            <Row className="mx-auto w-100 justify-content-center">
                {Data.map((v, index) => (
                    <Card style={{width: '19rem'}} className='py-3 mx-3 my-3 rounded-4 cursor-pointer' key={index}>
                        <Card.Img src={require(`../../image/about/${v.img}`)} className='w-25 mx-auto py-3' />
                        <Card.Body>
                            <Card.Title className="fw-bold text-center">{v.title}</Card.Title>
                            <Card.Text className="text-center text-secondary fw-regular">
                            {v.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    )
}

export default Services;