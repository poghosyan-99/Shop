import { Link } from 'react-router-dom';
import './style.css';

const Menu = ({index, cart}) => {

    return(
        <div className="Menu">
            <nav className='Menu-nav'>
                <Link to="/" className='product'>
                    <h1>Product</h1>
                </Link>
                <Link to="/CartPage" className='cart'>
                <span className='index'>
                    {cart.length > 0 ? cart.reduce((index, product) => index + product.count, 0) : ""}
                </span>
                    <i className="fa-solid fa-basket-shopping"></i>
                </Link>
            </nav>
        </div>
    )
}

export default Menu;