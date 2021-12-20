import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddProductForm from "./ProductForm";
import { useSelector, useDispatch } from "react-redux";
import { deletePizza } from "../store/asyncActions/pizzas";

const DeleteConfirmModal = ({ product, closeModel }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    closeModel(false);
  };
  const onConfirmDelete = () => {
    dispatch(deletePizza(product));
    handleClose();
  };
  const onReturnBack = () => {
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ position: "relative" }}>
          <Button onClick={() => onConfirmDelete()} style={{ marginRight: 40 }}>
            Confirm Delete
          </Button>
          <Button
            style={{ position: "absolute", right: 10 }}
            onClick={() => onReturnBack()}
          >
            Return back
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteConfirmModal;
