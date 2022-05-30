import React from 'react';
import Logo from './Logo';

import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbarCustomize">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><Logo/>CocoBeer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#'>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;