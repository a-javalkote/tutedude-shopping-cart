import React, { useContext } from 'react';
import { Navbar, Container, Button, Badge } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Header = ({ onShowCart }) => {
  const { cartState } = useContext(CartContext);
  const totalItems = cartState.items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#">ReactMeals</Navbar.Brand>
        <Button variant="outline-light" onClick={onShowCart}>
          Cart <Badge bg="light" text="dark">{totalItems}</Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
