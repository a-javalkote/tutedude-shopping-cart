import React, { useState } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import CartModal from './components/CartModal';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <CartProvider>
      <Header onShowCart={() => setCartVisible(true)} />
      <Meals />
      {cartVisible && (
        <CartModal show={cartVisible} onHide={() => setCartVisible(false)}>
          <Cart onClose={() => setCartVisible(false)} />
        </CartModal>
      )}
    </CartProvider>
  );
}

export default App;
