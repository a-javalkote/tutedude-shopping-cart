// import React, { useContext, useState } from 'react';
// import { Card, Button, Col, InputGroup, FormControl, Row, Alert } from 'react-bootstrap';
// import { CartContext } from '../context/CartContext';

// const MealItem = ({ meal }) => {
//   const { dispatch } = useContext(CartContext);
//   const [amount, setAmount] = useState(1);
//   const [showAlert, setShowAlert] = useState(false);

//   const increment = () => setAmount(prev => prev + 1);
//   const decrement = () => setAmount(prev => (prev > 1 ? prev - 1 : 1));

//   const addToCartHandler = () => {
//     dispatch({
//       type: 'ADD_ITEM',
//       payload: {
//         id: meal.id,
//         name: meal.name,
//         amount,
//         price: meal.price,
//       },
//     });

//     setAmount(1); // reset input
//     setShowAlert(true); // show success alert

//     setTimeout(() => setShowAlert(false), 2000); // auto-close after 2s
//   };

//   return (
//     <Col md={4} className="mb-4">
//       <Card>
//         <Card.Img
//           loading="lazy"
//           variant="top"
//           src={meal.image}
//           alt={meal.name}
//           style={{ height: '200px', objectFit: 'cover' }}
//         />
//         <Card.Body>
//           <Card.Title>{meal.name}</Card.Title>
//           <Card.Text>{meal.description}</Card.Text>
//           <Card.Text><strong>${meal.price.toFixed(2)}</strong></Card.Text>

//           {/* Quantity + Add row */}
//           <Row className="align-items-center">
//             <Col xs="7">
//               <InputGroup>
//                 <Button variant="outline-secondary" onClick={decrement}>−</Button>
//                 <FormControl
//                   value={amount}
//                   readOnly
//                   className="text-center"
//                   style={{ maxWidth: '60px' }}
//                 />
//                 <Button variant="outline-secondary" onClick={increment}>+</Button>
//               </InputGroup>
//             </Col>
//             <Col xs="5" className="text-end">
//               <Button onClick={addToCartHandler} variant="primary">+ Add</Button>
//             </Col>
//           </Row>

//           {/* Alert shown after adding to cart */}
//           {showAlert && (
//             <Alert variant="success" className="mt-3 py-1 text-center">
//               Added to cart!
//             </Alert>
//           )}
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// export default MealItem;


import React, { useContext, useState } from 'react';
import { Card, Button, Col, InputGroup, FormControl, Row, Alert } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { CartContext } from '../context/CartContext';

const MealItem = ({ meal }) => {
  const { dispatch } = useContext(CartContext);
  const [amount, setAmount] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const increment = () => setAmount(prev => prev + 1);
  const decrement = () => setAmount(prev => (prev > 1 ? prev - 1 : 1));

  const addToCartHandler = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: meal.id,
        name: meal.name,
        amount,
        price: meal.price,
      },
    });

    setAmount(1); // reset input
    setShowAlert(true); // show success alert

    setTimeout(() => setShowAlert(false), 2000); // auto-close after 2s
  };

  return (
    <Col md={4} className="mb-4">
      <Card>
        <LazyLoadImage
          alt={meal.name}
          height={200}
          src={meal.image} // use normal <img> attributes as props
          width="100%"
          effect="blur"
          style={{ objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{meal.name}</Card.Title>
          <Card.Text>{meal.description}</Card.Text>
          <Card.Text><strong>${meal.price.toFixed(2)}</strong></Card.Text>

          {/* Quantity + Add row */}
          <Row className="align-items-center">
            <Col xs="7">
              <InputGroup>
                <Button variant="outline-secondary" onClick={decrement}>−</Button>
                <FormControl
                  value={amount}
                  readOnly
                  className="text-center"
                  style={{ maxWidth: '60px' }}
                />
                <Button variant="outline-secondary" onClick={increment}>+</Button>
              </InputGroup>
            </Col>
            <Col xs="5" className="text-end">
              <Button onClick={addToCartHandler} variant="primary">+ Add</Button>
            </Col>
          </Row>

          {/* Alert shown after adding to cart */}
          {showAlert && (
            <Alert variant="success" className="mt-3 py-1 text-center">
              Added to cart!
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MealItem;
