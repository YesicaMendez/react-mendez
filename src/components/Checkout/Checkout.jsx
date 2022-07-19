import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import '../Checkout/Checkout.css';


function Checkout() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [sentOrder, setSentOrder] = useState(false);
    const [orderId, setOrderId] = useState('');

    const db = getFirestore();
    const orderCollection = collection(db, 'pedidos');

    const { cart, getCartTotal, clearCart } = useContext(CartContext);

    function onSubmit(data) {
        const order = {
            buyer: data,
            items: cart,
            fecha: new Date(),
            total: getCartTotal()
        };
        addDoc(orderCollection, order)
            .then(({ id }) => {
                setOrderId(id)
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
                        <Link to="/"><button className="button ms-4"><FontAwesomeIcon icon={faHouse}/> Ir al inicio</button></Link>
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
                        <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8 mt-4">
                            <div className="card text-center p-4 bg-warning bg-gradient bg-opacity-50">
                                <h1 className='fs-2 text'>¡Gracias por tu pedido!</h1>
                                <h2 className='fs-3 text'>¡Tu pedido ha sido enviado!</h2>
                                <p className='my-2'>Nos pondremos en contacto para gestionar el pago y el envío!</p>
                                <div className='offset-2 col-8 bg-light p-3 border border-warning border-3 rounded rounded-4'>
                                    <h2 className='fs-5 text'>Tu número de pedido es:</h2>
                                    <p className="text-danger fw-bold fs-5 text">{orderId}</p>
                                </div>
                                <Link to="/"><button className="button mt-2 fw-bold" onClick={clearCart}><FontAwesomeIcon icon={faHouse}/> Ir al inicio</button></Link>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="row">
                        <div className="offset-1 col-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 mt-4">
                            <div className="card text-center p-4 bg-warning bg-gradient bg-opacity-50">
                                <h1 className='fs-2 text'>¡Gracias por tu pedido!</h1>
                                <h2 className='fs-3 text'>Completá el siguiente formulario</h2>
                                <p>Llená con tu información el formulario para continuar la compra. Nos pondremos en contacto para gestionar el pago y el envío!</p>
                                <div className='row'>
                                    <div className='col-12 offset-sm-1 col-sm-10 offset-md-2 col-md-8'>
                                        <form className='needs-validation' onSubmit={handleSubmit(onSubmit)} >
                                            <input type="text" className='form-control' placeholder="Ingresa tu nombre."
                                                {...register('name', {
                                                    required: true,
                                                })} />
                                            {errors.name?.type === 'required' && <div className='invalidForm'>Debe ingresar un nombre!</div>}
                                            <input type="email" className='form-control mt-2' placeholder="Ingresa tu correo."
                                                {...register('email', {
                                                    required: true,
                                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                                })} />
                                            {errors.email?.type === 'required' && <div className='invalidForm'>Debe ingresar un correo!</div>}
                                            {errors.email?.type === 'pattern' && <div className='invalidForm'>Debe ingresar un correo valido!</div>}
                                            <input type="tel" className='form-control mt-2' placeholder="Ingresa tu teléfono, sin el 0, ni el 15."
                                                {...register('phone', {
                                                    required: true,
                                                    pattern: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
                                                })} />
                                            {errors.phone?.type === 'required' && <div className='invalidForm'>Debe ingresar un teléfono!</div>}
                                            {errors.phone?.type === 'pattern' && <div className='invalidForm'>Debe ingresar un teléfono valido!</div>}
                                            <button type="submit" className="btn btn-success col-md-8 mt-3">Comprar </button>
                                        </form>
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