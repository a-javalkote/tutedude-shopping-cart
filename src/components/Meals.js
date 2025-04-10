import React from 'react';
import MealItem from './MealItem';

const meals = [
  { id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99 },
  { id: 'm2', name: 'Burger', description: 'Tasty beef burger', price: 14.99 },
  // Add more meals here
];

const Meals = () => {
  return (
    <section>
      <h2>Available Meals</h2>
      <ul>
        {meals.map(meal => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </section>
  );
};

export default Meals;