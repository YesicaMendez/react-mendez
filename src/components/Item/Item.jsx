import React from 'react';
import { Link } from 'react-router-dom';

import '../Item/Item.css';

function Item({ producto }) {

    const {id, title, price, pictureUrl } = producto;
    return (
        <div className='col'>
            <div className="card mb-3 text-center p-1 border-2 border-warning bg-secondary bg-gradient bg-opacity-10 itemCard">
                <img src={pictureUrl} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                    <p className="card-title fs-6 fw-bolder bg-warning">{title}</p>
                    <p className="card-text fw-bolder">Precio $ {price}</p>
                    <p className="card-text"><Link to={`/item/${id}`}><button className="btn btn-warning fw-bold">Detalle</button></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Item