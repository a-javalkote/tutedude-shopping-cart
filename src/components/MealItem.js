import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';

const MealItem = ({ meal }) => {
  const { addToCartHandler } = useContext(CartContext);

  return (
    <li>
      <h3>{meal.name}</h3>
      <p>{meal.description}</p>
      <span>${meal.price}</span>
      <button onClick={() => addToCartHandler(meal)}>Add to Cart</button>
    </li>
  );
};

export default MealItem;