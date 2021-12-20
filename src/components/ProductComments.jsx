import { React, useState } from "react";
import { List, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addComment, deleteComment } from "../features/axiosRequests";
import { getPizza } from "../store/asyncActions/pizzas";
const ProductComments = ({ comments }) => {
  const product = useSelector((state) => state.pizzas.currentPizza);
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();
  const handleNewComment = (event) => {
    let input = event.target.value;
    const comment = { product: product.id, description: input };
    addComment(comment)
      .then(() => dispatch(getPizza(product.id)))
      .then(() => setInputValue(""));
  };
  const handleDeleteComment = (item) => {
    deleteComment(item.id).then(() => dispatch(getPizza(product.id)));
  };
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h3> Comments </h3>
      {comments && (
        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button onClick={() => handleDeleteComment(item)}>
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={item.date}
                description={item.description}
              />
            </List.Item>
          )}
        />
      )}
      <h2>New comment</h2>
      <Input
        onChange={handleOnChange}
        value={inputValue}
        allowClear={true}
        style={{ width: 500 }}
        onPressEnter={(event) => handleNewComment(event)}
      />
    </div>
  );
};

export default ProductComments;
