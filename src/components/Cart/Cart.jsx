import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Cart/Cart.css';

function Cart() {
  const { cart, removeItem, clearCart, getCartTotal } = useContext(CartContext);
  const carritoVacio = cart.length === 0;

  return (
    <>
      <div className="row">
        <div className="offset-md-1 col-md-10 mt-4">
          <div className="card">
            <div className="card-header text-center">
              <h2 className="fs-4 text">Carrito</h2>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead>
                    <tr className="text-center">
                      <th scope="col"></th>
                      <th scope="col">Producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio Unitario</th>
                      <th scope="col">Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {(carritoVacio &&
                      <tr>
                        <td colSpan="6" className="text-center fw-bold bg-warning bg-gradient bg-opacity-50">
                          <h4>No hay productos en el carrito</h4>
                        </td>
                      </tr>
                    ) ||
                      cart.map(item => (
                        <tr key={item.id}>
                          <td >
                            <img className="cart-item-img" src={item.pictureUrl} alt={item.title} />
                          </td>
                          <td className="fw-bold">{item.title}</td>
                          <td className="text-center">{item.quantity}</td>
                          <td className="text-center">$ {item.price}</td>
                          <td className="text-center">
                            $ {item.quantity * item.price}
                          </td>
                          <td>
                            <button type="button" className="btn btn-danger btn-sm" onClick={() => removeItem(item)}>
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-center">
                  {carritoVacio ?
                    <Link to={`/`}><button className="btn btn-info">Volver al inicio</button></Link>
                    :
                    <div>
                      <h3 className="text-center fs-4 text mb-4">Total Carrito: $ {getCartTotal()}</h3>
                      <Link to={`/`}><button className="btn btn-success">Seguir comprando</button></Link>
                      <Link to={`/cart`}><button className="btn btn-info ms-4">Continuar al Pago</button></Link>
                      <button className="btn btn-warning ms-4" onClick={() => clearCart()}>Vaciar Carrito</button>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
