import React, { useState } from "react";

function ItemCount({ inicial, stock, onAdd }) {
    const [count, setCount] = useState(inicial);

    const sumar = () => {
        count < stock
            ? setCount(count + 1)
            : alert("No hay mas stock.");
    };

    const restar = () => {
        count > inicial
            ? setCount(count - 1)
            : alert(`La cantidad minima es ${inicial}`);
    };

    const agregar = () => {
        if (count <= stock){
            onAdd(count);
            reset();
        } else {
            alert('No hay suficiente stock del producto.');
            document.getElementById('btnAgregar').disabled= true;
        }
    }
    const reset = () => {
        setCount(inicial);
    }

    return (
        <>
            <div className="row">
                <div className="offset-md-4 col-md-4 card text-center p-3 bg-secondary bg-gradient bg-opacity-10">
                    <h3 className="card-title">Agregando Items</h3>
                    <div className="row my-2">
                        <button className="offset-2 col-2 btn btn-warning fw-bold" onClick={restar}>-</button>
                        <h4 className="col-4">{count}</h4>
                        <button className="col-2 btn btn-warning fw-bold" onClick={sumar}>+</button>
                    </div>
                    <div className="row">
                        <button id="btnAgregar" className="offset-2 col-8 btn btn-info" onClick={() => { agregar(); reset() }}>Agregar carrito</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemCount;
