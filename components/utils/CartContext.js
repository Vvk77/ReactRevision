import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

function addToCart(item) {
  setCart((prev) => [...prev, { ...item, quantity: 1 }]);
}

  function increaseQty (id) {
 setCart((prev) => prev.map((item) => item.id === id ? {...item, quantity: (item.quantity || 1) + 1} : item))
 
}

function decreaseQty(id) {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
}

function removeCart (id) {
    setCart((prev) => prev.filter((item) => item.id !== id ))

}



  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQty ,  decreaseQty ,  removeCart }}>
      {children}
    </CartContext.Provider>
  );
};