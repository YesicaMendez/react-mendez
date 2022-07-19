import React from 'react';
import { Link } from 'react-router-dom';

import '../Item/Item.css';

function Item({ producto }) {

    const { id, title, price, pictureUrl } = producto;
    return (
        <div className='col'>
            <div className="card mb-3 text-center p-2 border-3 border-warning bg-secondary bg-gradient bg-opacity-10 itemCard">
                <img src={pictureUrl} className="card-img-top imgCard" alt="..." />
                <div className="card-body px-1">
                    <div className='card-title bg-warning titleCard'>
                        <p className="fs-6 fw-bolder d-block mb-0 px-1">{title}</p>
                    </div>
                    <p className="card-text fw-bolder price">Precio $ {price}</p>
                    <p className="card-text"><Link to={`/item/${id}`}><button className="fw-bold btnDetail">Detalle</button></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Item