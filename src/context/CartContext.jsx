import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                              CREAMOS CONTEXTO                              */
/* -------------------------------------------------------------------------- */
const CartContext = createContext();

/* -------------------------------------------------------------------------- */
/*                                 CUSTOM HOOK                                */
/* -------------------------------------------------------------------------- */
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

/* -------------------------------------------------------------------------- */
/*                                  PROVIDER                                  */
/* -------------------------------------------------------------------------- */
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // isInCart evalúa existencia y retorna un booleano
  const isInCart = (item) => {
    const inCart = cart.some((element) => element.id === item.id);
    return inCart;
  };

  // Agregar al Carrito
  const addItem = (item) => {
    if (isInCart(item)) {
      alert("El producto ya existe en el carrito");
      return;
    }
    setCart([...cart, item]);
    alert("Producto agregado al carrito👌");
  };

  // Eliminar del Carrito
  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
    alert("Producto eliminado✅");
  };

  // Vaciar el Carrito
  const clearCart = () => {
    setCart([]);
  };

  // Total de items distintos en Carrito (Valido para este caso en que no se puede agregar más de una unidad por pcto. De lo contrario debemos trabajar con un componente contador y considerar quantity)
  const getTotalItems = () => {
    return cart.length;
  };

  // Total a pagar
  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
  };

  //Checkout
  const checkout = () => {
    alert("Su compra ha sido realizada con éxito 🎉");
    clearCart();
    navigate("/"); //Navega a la ruta main
  };

  const values = {
    cart,
    addItem,
    removeItem,
    getTotalItems,
    getCartTotal,
    clearCart,
    checkout,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
