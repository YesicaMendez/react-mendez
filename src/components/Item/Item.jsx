import React from 'react';

import '../Item/Item.css';

function Item({ producto }) {

    console.log(producto);
    const { title, price, pictureUrl } = producto;
    // console.log(producto.producto.title);
    return (
        <div className='col'>
            <div className="card mb-3 text-center p-1 border-2 border-warning bg-secondary bg-gradient bg-opacity-10">
                <img src={pictureUrl} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                    <h5 className="card-title bg-warning">{title}</h5>
                    <p className="card-text fw-bolder">Precio $ {price}</p>
                    <p className="card-text"><button className="btn btn-warning fw-bold">Detalle</button></p>
                </div>
            </div>
        </div>
    )
}

export default Item