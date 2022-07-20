import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import Logo from '../Logo';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './NavBar.css';

function NavBar() {
    const { getItemQuantity } = useContext(CartContext);

    const navButton = useRef(null);
    const linksContainerRef = useRef(null);

    function collapseNav() {
        navButton.current.classList.add("collapsed");
        linksContainerRef.current.classList.remove("show");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbarCustomize">
            <div className="container-fluid">
                <Link onClick={collapseNav} className='navbar-brand' to={`/`}><Logo /> Coco Pets Shop</Link>
                <button ref={navButton} className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div ref={linksContainerRef} className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link onClick={collapseNav} className='nav-link active' aria-current="page" to={`/`}><FontAwesomeIcon icon={faHouse}/> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={collapseNav} className='nav-link' to={`/category/alimento`}>Alimentos</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={collapseNav} className='nav-link' to={`/category/juguete`}>Juguetes</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={collapseNav} className='nav-link' to={`/category/cama`}>Camas</Link>
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