import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";

function Cart() {
  const { cart, removeItem, clearCart, getCartTotal } = useContext(CartContext);
  const carritoVacio = cart.length === 0;

  return (
    <>
      <div className="row">
        <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8 mt-4">
          <div className="row g-2">
            <div className="offset-1 col-10 offset-md-0 col-md-9">
              <div className="card">
                <div className="card-header text-center">
                  <h2 className="fs-4 text">Carrito</h2>
                </div>
                <div className="card-body">
                  {(carritoVacio && (
                    <div>
                      <h4>No hay productos en el carrito</h4>
                    </div>
                  )) ||
                    cart.map((item) => (
                      <div className="row g-1 align-items-center mb-3 pb-2 border-bottom border-warning">
                        <div className="col-3">
                          <img
                            className="cart-item-img img-responsive"
                            src={item.pictureUrl}
                            alt={item.title}
                          />
                        </div>
                        <div className="col-8">
                          <div className="itemCart-title mb-2">
                            <p className="fw-bold m-0">{item.title}</p>
                          </div>
                          <p className="m-0">Cantidad: {item.quantity}</p>
                          <p className="m-0">Precio $ {item.price}</p>
                          <p className="m-0 fw-bold">Total= $ {item.quantity * item.price}</p>
                        </div>
                        <div className="col-1">
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => removeItem(item)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    ))}
                  {!carritoVacio &&
                    <button className="btn btn-warning float-end" onClick={() => clearCart()}>Vaciar Carrito</button>
                  }
                </div>
              </div>
            </div>
            <div className="offset-1 col-10 offset-md-0 col-md-3 d-flex justify-content-center">
              {carritoVacio ?
                <Link to={`/`}><button className="btn btn-info">Volver al inicio</button></Link>
                :
                <div className="card col-10 border-0 mt-2">
                  <div className="card-header text-center">
                    <p className="fs-5 fw-bold pb-0 mb-0">Resumen</p>
                  </div>
                  <div className="mt-3">
                    <p className="text-center mb-3 fs-6 fw-bold">Total a pagar: $ {getCartTotal()}</p>
                  </div>
                  <div className="text-center">
                    <Link to={`/checkout/`}><button className="btn btn-info">Continuar al Pago</button></Link>
                  </div>
                  <div className="text-center mt-3">
                    <Link to={`/`}><button className="btn btn-success">Seguir comprando</button></Link>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        {/* <div className="card">
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
                </table> */}
        {/* <div className="d-flex justify-content-center">
                  {carritoVacio ?
                    <Link to={`/`}><button className="btn btn-info">Volver al inicio</button></Link>
                    :
                    <div>
                      <h3 className="text-center fs-4 text mb-4">Total Carrito: $ {getCartTotal()}</h3>
                      <Link to={`/`}><button className="btn btn-success">Seguir comprando</button></Link>
                      <Link to={`/checkout/`}><button className="btn btn-info ms-4">Continuar al Pago</button></Link>
                      <button className="btn btn-warning ms-4" onClick={() => clearCart()}>Vaciar Carrito</button>
                    </div>
                  }
                </div> */}
      </div>
      {/* </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Cart;
