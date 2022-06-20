import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';


function ItemDetail({ product }) {
    let { id, title, price, description, pictureUrl } = product;
    
    const [stock, setStock] = useState(product.stock);
    const [countCart, setCountCart] = useState(0);


    const onAdd = (quantityToAdd) => {
        alert(`Se suma ${quantityToAdd} productos al carrito.`);
        setStock(stock-quantityToAdd);
        setCountCart(quantityToAdd);
    }

    return (
        <>
            <div className='offset-1 offset-md-2 col-10 col-md-8 mt-4'>
                <div className="card mb-3 text-center p-1 border-2 border-warning bg-secondary bg-gradient bg-opacity-10">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={pictureUrl} className="card-img-top imgDetail" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body px-md-5 py-3">
                                <h5 className="card-title bg-warning">{title}</h5>
                                <p>{description}</p>
                                <p className="card-text fw-bolder">Precio $ {price} - Stock: {stock}</p>
                                {countCart > 0 ? <Link to={`/cart`} className="col-8 btn btn-info mt-4 fw-bold">Terminar mi compra</Link>
                                    : <ItemCount inicial={1} stock={stock} onAdd={onAdd} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail