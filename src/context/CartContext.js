import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.find(producto => producto.id == id);

    const addItem = (producto, cantidad) => {
        const newProducto = {
            ...producto,
            quantity: 0,
        };
        const newCart = [...cart];
        const productoEnCart = isInCart(newProducto.id);

        if (productoEnCart) {
            newCart[newCart.findIndex(prod => prod.id === newProducto.id)].quantity += cantidad;
            setCart(newCart);
            return
        }
        newProducto.quantity = cantidad;
        setCart([...newCart, newProducto]);
    }

    const removeItem = (producto) => {
        const newCart = [...cart];
        const productInCart = isInCart(producto.id);
        if (!productInCart) {
            return
        }
        const deleteProduct = newCart.filter(prod => prod.id !== producto.id);
        console.log(`Se quitó del carrito a "${producto.name}"`);
        setCart(deleteProduct);
    }

    const clearCart = () => {
        setCart([]);
    }

    return <Provider value={{
        cart,
        addItem, 
        removeItem,
        clearCart,
        setCart

    }}>{children}</Provider>
}

export default MyProvider;