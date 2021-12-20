import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {ModalProduct} from '../components'
import ListGroup from "react-bootstrap/ListGroup";
import { Size } from "../components";

const ProductInfo = ({ product }) => {
  const [showEditModal,setShowEditModal] = useState(false) 
  const onEditClick = () =>{
    setShowEditModal(true)
  }
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={`${product.image_url}`} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>price={product.price}</ListGroup.Item>
          <ListGroup.Item>
            {product.size && <Size size={product.size} />}
          </ListGroup.Item>
          <ListGroup.Item>count = {product.count}</ListGroup.Item>
        </ListGroup>
        <Card.Footer
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button onClick={()=>onEditClick()}>Edit</Button>
        </Card.Footer>
      </Card>
      {showEditModal && <ModalProduct product={product} closeModel={setShowEditModal} edit/>}
    </div>
  );
};

export default ProductInfo;
