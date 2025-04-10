import React, { createContext, useReducer, useState } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.item];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCartHandler = item => {
    dispatch({ type: 'ADD_TO_CART', item });
  };

  const removeFromCartHandler = id => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  const toggleCartHandler = () => {
    setCartVisible(prevState => !prevState);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCartHandler,
        removeFromCartHandler,
        toggleCartHandler,
        cartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };