// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import { CartProvider } from './context/cart-context';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Meals />
      <Cart />
    </CartProvider>
  );
};

export default App;