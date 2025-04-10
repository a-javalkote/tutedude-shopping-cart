import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import ReactDOM from 'react-dom';

const Cart = () => {
  const { cartItems, removeFromCartHandler } = useContext(CartContext);

  return ReactDOM.createPortal(
    <div className="cart-modal">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <span>${item.price}</span>
              <button onClick={() => removeFromCartHandler(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>,
    document.getElementById('cart-root') // This is the div where the portal will render
  );
};

export default Cart;