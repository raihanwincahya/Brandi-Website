import { Container, Col, Row } from 'react-bootstrap';
import BgMain from '../../image/home/bg_main.png'
import Line from '../../image/home/hr-line.png';
import './style.css';

function MainContent() {
    return (
        <Container fluid className='background patop'>
            <Row>    
                <Col className='box-content'>
                    <img
                        src={BgMain}
                        alt="bg_main"
                        className='bgMain position-absolute'
                    />
                    <div className='mx-auto box bg-white'>
                        <h1 className='text-dark sub-heading'><span>The beauty</span> of natural wood</h1>
                        <p className='desc-about text-secondary fs-6 w-50'> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <img
                        src={Line}
                        alt="line-hr"
                        className='line w-75'
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default MainContent;