import React from 'react'

function ItemDetail({ productDetail }) {
    let { id, title, price, stock, description, pictureUrl } = productDetail;
    return (
        <>
            <div className='offset-4 col-4'>
                <h4>Descripción Producto Id= {id}</h4>
                <div className="card mb-3 text-center p-1 border-2 border-warning bg-secondary bg-gradient bg-opacity-10">
                    <img src={pictureUrl} className="card-img-top imgCard" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title bg-warning">{title}</h5>
                        <p>{description}</p>
                        <p className="card-text fw-bolder">Precio $ {price} - Stock: {stock}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail