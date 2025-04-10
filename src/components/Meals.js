// import React, { useEffect, useState } from 'react';
// import { Container, Row } from 'react-bootstrap';
// import MealItem from './MealItem';



// const Meals = () => {

//   const [visibleMeals, setVisibleMeals] = useState([]);
//   const [loadedCount, setLoadedCount] = useState(0);
//   const LOAD_COUNT = 6;

//   useEffect(() => {
//     // Load initial meals
//     loadMoreMeals();

//     const handleScroll = () => {
//       const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
//       if (bottom) loadMoreMeals();
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const loadMoreMeals = () => {
//     const nextMeals = ALL_MEALS.slice(loadedCount, loadedCount + LOAD_COUNT);
//     if (nextMeals.length > 0) {
//       setVisibleMeals(prev => [...prev, ...nextMeals]);
//       setLoadedCount(prev => prev + LOAD_COUNT);
//     }
//   };

//   return (
//     <Container>
//       <h2 className="mb-4">Available Meals</h2>
//       <Row>
//         {visibleMeals.map(meal => (
//           <MealItem key={meal.id} meal={meal} />
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Meals;


import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import MealItem from './MealItem';

const ALL_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    image: '/images/sushi.jpg', // Reference local image
  },
  {
    id: 'm2',
    name: 'Burger',
    description: 'Juicy grilled beef patty',
    price: 8.99,
    image: '/images/burger.jpg',
  },
  {
    id: 'm3',
    name: 'Pasta',
    description: 'Italian-style tomato pasta',
    price: 12.5,
    image: '/images/pasta.jpg',
  },
  {
    id: 'm4',
    name: 'Salad',
    description: 'Fresh and healthy veggies',
    price: 7.0,
    image: '/images/salad.jpg',
  },
  {
    id: 'm5',
    name: 'Pizza',
    description: 'Loaded cheese and toppings',
    price: 10.99,
    image: '/images/pizza.jpg',
  },
  {
    id: 'm6',
    name: 'Tacos',
    description: 'Mexican street-style',
    price: 6.5,
    image: '/images/tacos.jpg',
  },
  {
    id: 'm7',
    name: 'Steak',
    description: 'Perfectly grilled steak',
    price: 24.99,
    image: '/images/steak.jpg',
  },
  {
    id: 'm8',
    name: 'Ramen',
    description: 'Spicy noodle soup',
    price: 9.25,
    image: '/images/ramen.jpg',
  },
  {
    id: 'm9',
    name: 'Fried Rice',
    description: 'Wok-fried Asian classic',
    price: 8.0,
    image: '/images/fried-rice.jpg',
  },
  {
    id: 'm10',
    name: 'Kebab',
    description: 'Middle Eastern meat skewers',
    price: 11.5,
    image: '/images/kebab.jpg',
  },
  {
    id: 'm11',
    name: 'Paneer Tikka',
    description: 'Indian cottage cheese grilled',
    price: 10.0,
    image: '/images/paneer-tikka.jpg',
  },
  {
    id: 'm12',
    name: 'Dim Sum',
    description: 'Chinese steamed dumplings',
    price: 13.25,
    image: '/images/dim-sum.jpg',
  },
  {
    id: 'm13',
    name: 'Falafel Wrap',
    description: 'Vegan Mediterranean wrap',
    price: 7.99,
    image: '/images/falafel-wrap.jpg',
  },
  {
    id: 'm14',
    name: 'Biryani',
    description: 'Spicy rice dish with meat',
    price: 14.5,
    image: '/images/biryani.jpg',
  },
  {
    id: 'm15',
    name: 'Donuts',
    description: 'Sweet and soft dessert',
    price: 4.75,
    image: '/images/donuts.jpg',
  }
];

const Meals = () => {
  const [visibleMeals, setVisibleMeals] = useState(ALL_MEALS.slice(0, 6));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreMeals = () => {
    if (visibleMeals.length >= ALL_MEALS.length) {
      setHasMore(false);
      return;
    }
    // Simulate a fetch delay
    setTimeout(() => {
      setVisibleMeals(prev => [
        ...prev,
        ...ALL_MEALS.slice(prev.length, prev.length + 6),
      ]);
    }, 500);
  };

  return (
    <Container>
      <h2 className="mb-4">Available Meals</h2>
      <InfiniteScroll
        dataLength={visibleMeals.length}
        next={fetchMoreMeals}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more meals to load.</p>}
      >
        <Row>
          {visibleMeals.map(meal => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default Meals;