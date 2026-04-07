import { useContext } from "react";
import { CartContext } from "./utils/CartContext";

 export const Cart = () => {
  const { cart, increaseQty , decreaseQty  , removeCart} = useContext(CartContext);

  console.log(cart)

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity || 1),  0);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        <>
          {/* 🧾 ITEMS */}
          {cart.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p> Price- ₹{item.price}</p>
                 <div className="qty-container">
    <button className="qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
    <span className="qty-number">{item.quantity || 1}</span>
    <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>

     <span
    className="delete-icon"
    onClick={() => removeCart(item.id)}
  >
    🗑️
      </span>
  </div>
              </div>
            </div>
          ))}

        
          <div className="cart-total">
            <h2>Total: ₹{totalPrice}</h2>
          </div>
         
        </>

        
      )}
    </div>
  );
};
