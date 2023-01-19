import { Container} from "react-bootstrap"
import ImgBrand from '../../image/profile/brand.png';
import ImgUser from '../../image/user/user.png';
import './style.css'
const Header = () => {
    return (
        <Container fluid className="px-5 background">
            <div className="position-relative box-user">
                <img
                    src={ImgBrand}
                    alt='brand-img'
                    className='position-absolute logo-img pt-2 ps-2'
                />
                <div className="bg-white box-img-user rounded-pill position-absolute d-flex justify-content-center align-items-center">
                <img
                    src={ImgUser}
                    alt="img-user"
                    className="img-user"
                />
                </div>
            </div>
        </Container>
    )
}

export default Header;