import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';

const CartModal = ({ show, onHide, children }) => {
  return ReactDOM.createPortal(
    <Modal show={show} onHide={onHide} centered>
      {children}
    </Modal>,
    document.getElementById('modal-root')
  );
};

export default CartModal;
