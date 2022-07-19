import { faCartPlus, faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import '../ItemCount/ItemCount.css';
import Swal from 'sweetalert2'


function ItemCount({ inicial, stock, onAdd }) {
    const [count, setCount] = useState(1);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const sumar = () => {
        count < stock
            ? setCount(count + 1)
            : Toast.fire({
                icon: 'error',
                title: 'Ups!! No hay mas stock.'
            });
    };

    const restar = () => {
        count > inicial
            ? setCount(count - 1)
            : Toast.fire({
                icon: 'warning',
                title: `La cantidad minima es ${inicial}...!`
            });
    };

    const agregar = () => {
        if (count <= stock) {
            onAdd(count);
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Ups!! No hay suficiente stock del producto.'
            });
            document.getElementById('btnAgregar').disabled = true;
        }
    }

    const reset = () => {
        setCount(inicial);
    }

    return (
        <>
            <div className="row">
                <div className="offset-2 col-8 card text-center p-2">
                    <p className="mb-2 fw-bold">Seleccione Cantidad:</p>
                    <div className="row mb-2">
                        <button className="offset-2 col-2 btn btn-warning btnCount fw-bold" onClick={restar}><FontAwesomeIcon icon={faCircleMinus} /></button>
                        <h4 className="col-4">{count}</h4>
                        <button className="col-2 btn btn-warning btnCount fw-bold" onClick={sumar}><FontAwesomeIcon icon={faCirclePlus} /></button>
                    </div>
                    <div className="row">
                        <button id="btnAgregar" className="offset-2 col-8 btnCart" onClick={() => { agregar(); reset() }}>Agregar al Carrito<FontAwesomeIcon icon={faCartPlus} /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemCount;
