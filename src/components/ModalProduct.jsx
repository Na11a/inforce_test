import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddProductForm from "./AddProductForm"

const ModalProduct = ({ product,closeModel }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false)
    closeModel(false)
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>AddProduct</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProductForm showModal={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalProduct;
