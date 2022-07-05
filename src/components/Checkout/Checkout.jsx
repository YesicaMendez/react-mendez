import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


function Checkout() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [sentOrder, setSentOrder] = useState(false);
    const [orderId, setOrderId] = useState('');


    const db = getFirestore();
    const orderCollection = collection(db, 'pedidos');


    const { cart, getCartTotal, clearCart } = useContext(CartContext);


    function handleClick() {
        const order = {
            buyer: { name, email, phone },
            items: cart,
            fecha: new Date(),
            total: getCartTotal()
        };
        console.log(order);
        addDoc(orderCollection, order)
            .then(({ id }) => {
                setOrderId(id)
                console.log(id)
            })
            .catch(error => {
                console.log(error);
            });
        setSentOrder(true);
    }

    if (cart.length === 0) {
        return (
            <div className="row">
                <div className="offset-md-3 col-md-6 mt-4">
                    <div className="card text-center p-4">
                        <h1>Su carrito está vacío</h1>
                        <Link to="/"><button className="btn btn-info ms-4">Volver al inicio</button></Link>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            {sentOrder ?
                <>
                    <div className="row">
                        <div className="offset-md-2 col-md-8 mt-4">
                            <div className="card text-center p-4 bg-warning bg-gradient bg-opacity-50">
                                <h1 className='fs-2 text'>¡Gracias por tu pedido!</h1>
                                <h2 className='fs-3 text'>¡Tu pedido ha sido enviado!</h2>
                                <p className='my-2'>Nos pondremos en contacto para gestionar el pago y el envío!</p>
                                <div className='offset-2 col-8 bg-light p-3 border border-warning border-3 rounded rounded-4'>
                                    <h2 className='fs-4 text'>Tu número de pedido es:</h2>
                                    <p className="text-danger fw-bold fs-4 text">{orderId}</p>
                                </div>
                                <Link to="/"><button className="btn btn-primary bg-opacity-75 mt-2 fw-bold" onClick={clearCart}>Volver al inicio</button></Link>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="row">
                        <div className="offset-md-2 col-md-8 mt-4">
                            <div className="card text-center p-4 bg-warning bg-gradient bg-opacity-50">
                                <h1 className='fs-2 text'>¡Gracias por tu pedido!</h1>
                                <h2 className='fs-3 text'>Completá el siguiente formulario</h2>
                                <p>Llená con tu información el formulario para continuar la compra. Nos pondremos en contacto para gestionar el pago y el envío!</p>
                                <div className='row'>
                                    <div className='offset-2 col-md-8 '>
                                        <input type="text" className='col-md-8' value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre..." />
                                        <input type="email" className='col-md-8 my-2' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu email..." />
                                        <input type="tel" className='col-md-8' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Tu teléfono..." />
                                        <button onClick={handleClick} className="btn btn-success col-md-8 mt-3">Comprar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Checkout