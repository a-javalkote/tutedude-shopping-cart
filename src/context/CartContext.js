import React, { useReducer, createContext } from 'react';
import cartReducer from './cartReducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
