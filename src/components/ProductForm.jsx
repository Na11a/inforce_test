import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addPizza,getPizza } from "../store/asyncActions/pizzas";
import { useDispatch } from "react-redux";
import { updateProduct } from "../features";
const ProductForm = ({ showModal, product, edit, create }) => {
  const dispatch = useDispatch();
  const submitForm = (event) => {
    let pizza = {};
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      pizza[key] = value;
    }
    if (create) {
      dispatch(addPizza(pizza));
    }
    if (edit) {
      pizza["id"] = product.id;
      updateProduct(pizza).then(dispatch(getPizza(product.id)))
    }
    showModal(false);
  };
  const closeForm = () => {
    showModal(false);
  };
  return (
    <div>
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            required
            defaultValue={product ? product.name : ""}
            type="text"
            placeholder="Name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            required
            defaultValue={product ? product.price : 0}
            type="number"
            placeholder="Price"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Width</Form.Label>
          <Form.Control
            name="width"
            required
            defaultValue={product ? product.size.width : 0}
            type="number"
            placeholder="width"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Height</Form.Label>
          <Form.Control
            name="height"
            required
            defaultValue={product ? product.size.height : 0}
            type="number"
            placeholder="height"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Count</Form.Label>
          <Form.Control
            name="count"
            required
            defaultValue={product ? product.count : 0}
            type="number"
            placeholder="count"
          />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="image_url"
            required
            type="text"
            multiple
            defaultValue={product ? product.image_url : ""}
            size="sm"
          />
        </Form.Group>

        <Button
          style={{
            display: "inline",
          }}
          type="Submit"
        >
          Submit
        </Button>
        <Button
          style={{
            display: "inline",
            marginLeft: "59%",
            background: "red",
          }}
          onClick={() => closeForm()}
        >
          Return back
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
