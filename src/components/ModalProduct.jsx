import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import {ProductForm} from "../components"

const ModalProduct = ({ product,closeModel,edit,create }) => {
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
          <ProductForm showModal={handleClose} product={product} edit={edit} create={create}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalProduct;
