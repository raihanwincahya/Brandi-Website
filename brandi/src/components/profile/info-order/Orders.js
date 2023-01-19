import { Button, Badge } from "react-bootstrap";
import { IoStarOutline, IoCubeOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import './style.css'

const Orders = () => {
    return (
        <div className="bg-white d-flex rounded-4 justify-content-between w-100 my-4 p-3">
            <Button variant="outline-danger" className="px-4 fs-5 rounded-4">My orders</Button>
            <div className="d-flex justify-content-between me-3 w-75">
                <div className="d-flex flex-column position-relative">
                    <IoCubeOutline size={22} className='w-100 mb-1' /> <Badge bg="#DE6B6B" pill className='position-absolute bg-coral badges-order'>5</Badge>
                    <span className="text-dark fw-semi-bold">Packed</span>
                </div>
                <div className="d-flex flex-column position-relative">
                    <FiTruck size={22} className='mx-auto w-100 mb-1'/> <Badge bg="#DE6B6B" pill className='position-absolute bg-coral badges-order'>1</Badge>
                    <span className="text-dark fw-semi-bold fs-6">Sent</span>
                </div>
                <div className="d-flex flex-column">
                    <IoStarOutline size={22} className='mx-auto w-100 mb-1' />
                    <span className="text-darkfs-6">Rate</span>
                </div>
            </div>
        </div>
    )
};

export default Orders;