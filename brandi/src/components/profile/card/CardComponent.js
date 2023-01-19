import { Card} from "react-bootstrap";
import { IoCardOutline, IoWalletOutline, IoChevronForward } from "react-icons/io5";
import './style.css'

const CardComponent = () => {
    return (
        <Card style={{ width: '18rem', border: 'none', borderRadius: '20px' }}>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center pt-3 mb-3">
                    <div className="d-flex align-items-center">
                        <IoWalletOutline color='#DE6B6B' size={20} />
                        <span className="ms-2 fw-medium text-dark fs-6">Dpay</span>
                    </div>
                    <span className="fs-6 fw-bold text-coral">Activate</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center">
                        <IoCardOutline color='#52BA88' size={20} />
                        <span className="ms-2 fw-medium text-dark fs-6">Balance</span>
                    </div>
                    <span className="fs-6 fw-medium text-dark">$2000</span>
                </div>
                <hr />

                <h6 className="fw-bold pt-2">Purchase</h6>
                <div className="d-flex justify-content-between align-items-center pt-3 mb-3">
                    <span className="fs-6 fw-medium text-dark">Waiting for payment</span>
                    <IoChevronForward color='#DE6B6B' size={20} />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <span className="fs-6 fw-medium text-dark">Transaction list</span>
                    <IoChevronForward color='#DE6B6B' size={20} />
                </div>
                <hr />

                <h6 className="fw-bold pt-2">Inbox</h6>
                <div className="d-flex justify-content-between align-items-center pt-3 mb-3">
                    <span className="fs-6 fw-medium text-dark">Chat</span>
                    <IoChevronForward color='#DE6B6B' size={20} />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fs-6 fw-medium text-dark">Rating</span>
                    <IoChevronForward color='#DE6B6B' size={20} />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fs-6 fw-medium text-dark">Help message</span>
                    <IoChevronForward color='#DE6B6B' size={20} />
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;