import { React,useState } from "react";
import { Card, Button } from "antd";
import Size from "./Size";
import { Link } from "react-router-dom";
import {DeleteConfirmModal} from './index'
const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [showModal,setShowModal] = useState(false)
  const onDeleteProduct = () => {
    setShowModal(true)
  };
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt={`${product.name}`}
            height="200px"
            src={`${product.image_url}`}
          />
        }
      >
        <Meta title={product.name} description={`${product.price}$`} />
        <Link to={`${product.id}`}>
          <Button style={{ marginTop: 20 }} type="primary">
            Show Info
          </Button>
        </Link>
        <Button
          onClick={() => onDeleteProduct()}
          style={{ marginLeft: 20, background: "red" }}
          type="primary"
        >
          {" "}
          Delete
        </Button>
        <Size size={product.size} />
      </Card>
      {
        showModal && <DeleteConfirmModal product={product} closeModel={setShowModal}></DeleteConfirmModal>
      }
    </div>
  );
};

export default ProductCard;
