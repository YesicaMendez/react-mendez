import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { Link } from 'react-router-dom';

import './NavBar.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function NavBar() {
    const { getItemQuantity } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbarCustomize">
            <div className="container-fluid">
                <Link className='navbar-brand' to={`/`}><Logo /> Coco Pets Shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link active' aria-current="page" to={`/`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to={`/category/alimento`}>Alimentos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to={`/category/juguete`}>Juguetes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to={`/category/cama`}>Camas</Link>
                        </li>
                    </ul>
                </div>
                <Link to={`/cart`} className="cart">
                    {getItemQuantity() > 0
                        ? <span className='fw-bolder'>{getItemQuantity()} <CartWidget /></span>
                        : null
                    }
                </Link>
            </div>
        </nav>
    )
};

export default NavBar;