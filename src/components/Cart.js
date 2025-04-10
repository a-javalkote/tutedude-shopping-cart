import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ModalHeader, ModalBody, ModalFooter, Button, ListGroup } from 'react-bootstrap';

const Cart = ({ onClose }) => {
  const { cartState, dispatch } = useContext(CartContext);

  const removeHandler = id => dispatch({ type: 'REMOVE_ITEM', payload: id });

  return (
    <>
      <ModalHeader closeButton>
        <h5>Your Cart</h5>
      </ModalHeader>
      <ModalBody>
        <ListGroup variant="flush">
          {cartState.items.length === 0 && <div>No items added yet.</div>}
          {cartState.items.map(item => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
              <div>
                <h6>{item.name}</h6>
                <div>${item.price.toFixed(2)} × {item.amount}</div>
              </div>
              <Button variant="danger" size="sm" onClick={() => removeHandler(item.id)}>−</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </ModalBody>
      <ModalFooter>
        <h5>Total: ${cartState.totalAmount.toFixed(2)}</h5>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        <Button variant="success" disabled={cartState.items.length === 0}>Order</Button>
      </ModalFooter>
    </>
  );
};

export default Cart;


// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import {
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   Table,
// } from 'react-bootstrap';

// const Cart = ({ onClose }) => {
//   const { cartState, dispatch } = useContext(CartContext);

//   const removeHandler = (id) => {
//     dispatch({ type: 'REMOVE_ITEM', payload: id });
//   };

//   const addHandler = (item) => {
//     dispatch({
//       type: 'ADD_ITEM',
//       payload: {
//         id: item.id,
//         name: item.name,
//         amount: 1,
//         price: item.price,
//       },
//     });
//   };

//   return (
//     <>
//       <ModalHeader closeButton>
//         <h5>Your Cart</h5>
//       </ModalHeader>
//       <ModalBody>
//         {cartState.items.length === 0 ? (
//           <p>No items added yet.</p>
//         ) : (
//           <Table bordered hover responsive size="sm" className="align-middle">
//             <thead>
//               <tr>
//                 <th>Item</th>
//                 <th className="text-end">Price</th>
//                 <th className="text-center">Quantity</th>
//                 <th className="text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartState.items.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td className="text-end">${item.price.toFixed(2)}</td>
//                   <td className="text-center">{item.amount}</td>
//                   <td className="text-center">
//                     <Button
//                       variant="outline-secondary"
//                       size="sm"
//                       className="me-2"
//                       onClick={() => removeHandler(item.id)}
//                     >
//                       −
//                     </Button>
//                     <Button
//                       variant="outline-secondary"
//                       size="sm"
//                       onClick={() => addHandler(item)}
//                     >
//                       +
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         )}
//       </ModalBody>
//       <ModalFooter className="justify-content-between">
//         <h5 className="mb-0">Total: ${cartState.totalAmount.toFixed(2)}</h5>
//         <div>
//           <Button variant="secondary" onClick={onClose} className="me-2">
//             Close
//           </Button>
//           <Button variant="success" disabled={cartState.items.length === 0}>
//             Order
//           </Button>
//         </div>
//       </ModalFooter>
//     </>
//   );
// };

// export default Cart;
