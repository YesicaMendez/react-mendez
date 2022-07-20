import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2';
import '../ItemDetail/ItemDetail.css';
import { useEffect } from 'react';


function ItemDetail({ product }) {
    let { id, title, price, description, pictureUrl } = product;

    const { cart, addItem } = useContext(CartContext);

    const [stock, setStock] = useState(product.stock);
    const [countCart, setCountCart] = useState(0);

    useEffect(() => {
        const cartLocal = JSON.parse(localStorage.getItem('productos') ?? []);
        let itemFind = cartLocal.find(item => item.id == id);
        if (itemFind) {
            const count = itemFind.quantity;
            itemFind && setStock(stock - count);
        }
    }, []);

    const onAdd = (quantityToAdd) => {
        Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            icon: 'success',
            title: `Se agrego ${quantityToAdd} productos al carrito!.`
        });
        setStock(stock - quantityToAdd);
        setCountCart(quantityToAdd);
        addItem(product, quantityToAdd);
    }

    return (
        <>
            <div className='offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-10 offset-lg-2 col-lg-8 mt-4'>
                <div className="card mb-3 text-center p-1 border-3 border-warning bg-secondary bg-gradient bg-opacity-10">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={pictureUrl} className="card-img-top imgDetail mt-md-4 mb-md-3" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body px-md-5 py-3">
                                <div className='card-title bg-warning titleCard'>
                                    <p className="fw-bolder d-block mb-0 px-1">{title}</p>
                                </div>
                                <div className='card-text descriptionCard'>
                                    <p className='p-0 m-0'>{description}</p>
                                </div>
                                <p className="card-text fw-bolder price">Precio $ {price} - Stock: {stock}</p>
                                {countCart > 0 ? <Link to={`/cart`} className="col-8 fw-bold"><button className='btnCustomize mt-4'>Terminar mi compra</button></Link>
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