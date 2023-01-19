import { Container, Col, Row } from 'react-bootstrap';
import BgImg from '../../image/home/bg_home.png';
import { IoChevronForward } from "react-icons/io5";
import Line from '../../image/home/line.png';
import './style.css';

function Main() {
    return (
        <Container fluid className='background'>
            <Row>
                <Col>
                    <img
                        src={Line}
                        alt="line"
                        className='ps-5 pt-5 ms-5 mt-5'
                    />
                    <div className='layout-text w-100'>
                        <h1 className="heading">NEWEST & TRENDY</h1>
                        <p className='description text-secondary w-50 mb-5 fs-6'>
                        Choose from a wide range of wall-crafted premium quality wooden furniture.
                        </p>
                        <p className='cta mt-4 fs-6 text-dark'>Learn more <IoChevronForward /> </p>
                    </div>
                </Col>
                <Col>
                    <img
                        src={BgImg}
                        alt="bgimage"
                        height="660"
                        width="660"
                        className='position-absolute'
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Main;