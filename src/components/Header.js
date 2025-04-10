import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';

const Header = () => {
  const { cartItems, toggleCartHandler } = useContext(CartContext);

  return (
    <header>
      <h1>Meals Shop</h1>
      <button onClick={toggleCartHandler}>
        Cart ({cartItems.length} items)
      </button>
    </header>
  );
};

export default Header;