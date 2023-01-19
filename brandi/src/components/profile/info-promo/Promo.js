import { IoTicketOutline, IoSettingsOutline, IoChevronForward } from "react-icons/io5";
import { FiClock } from "react-icons/fi";

const Promo = () => {
    return (
        <div className="mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <IoTicketOutline size={26} color='#DE6B6B' />
                    <span className="ms-3 text-dark">My voucher</span>
                </div>
                <IoChevronForward size={18} color="#DE6B6B" />
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <IoSettingsOutline size={26} color='#DE6B6B' />
                    <span className="ms-3 text-dark">Last view</span>
                </div>
                <IoChevronForward size={18} color="#DE6B6B" />
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <FiClock size={26} color='#DE6B6B' />
                    <span className="ms-3 text-dark">Settings account</span>
                </div>
                <IoChevronForward size={18} color="#DE6B6B" />
            </div>
            <hr />
        </div>
    )
}

export default Promo;