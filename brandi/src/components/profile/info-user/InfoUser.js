import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Button, Badge } from "react-bootstrap";
import './style.css'

const InfoUser = () => {
    return (
        <div className="d-flex justify-content-between">
            <div>
                <h1 className="text-dark fw-extra-bold mb-0">Arnilla Maac</h1>
                <p className='fw-bold text-secondary fs-3'>Member silver</p>
                <p className="fw-medium text-secondary fs-7 w-75">Hi! Hello, I really like things that are simple, luxurious and aesthetic.</p>
            </div>
            <div className="d-flex flex-column align-self-center">
                <Button className='position-relative mb-4 bg-white border-0 square rounded-9'>
                    <IoCartOutline color='#373737' size={22} /> <Badge bg="#DE6B6B" pill className='notif position-absolute'>1</Badge>
                </Button>
                <Button className='position-relative bg-white border-0 square rounded-9'>
                    <IoHeartOutline color='#373737' size={22} /> <Badge bg="#DE6B6B" pill className='notif position-absolute'>7</Badge>
                </Button>
            </div>
        </div>
    )
}

export default InfoUser;