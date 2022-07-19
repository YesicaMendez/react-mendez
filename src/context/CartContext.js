import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('productos')) ?? []);

    useEffect(() => {
            localStorage.setItem('productos', JSON.stringify(cart));
    }, [cart]);

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
        setCart(deleteProduct);
    }

    const clearCart = () => {
        setCart([]);
    }

    const getCartTotal = () => {
        return cart.reduce((acc, x) => (acc += x.price * x.quantity) , 0);
    }

    const getItemQuantity = () => {
        return cart.reduce((acc, x) => acc += x.quantity , 0);
    }

    return <Provider value={{
        cart,
        addItem, 
        removeItem,
        clearCart,
        setCart,
        getCartTotal,
        getItemQuantity

    }}>{children}</Provider>
}

export default MyProvider;