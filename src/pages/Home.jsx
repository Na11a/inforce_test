import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchPizzas } from "../store/asyncActions/pizzas";
import ModalProduct from "../components/ModalProduct";
import { List, Button } from "antd";
import { Link } from "react-router-dom";
import {DropDownSort} from '../components'

const Home = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const showModalForm = () => {
    setShowModal(true);
  };
  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);
  const products = useSelector((state) => state.pizzas.pizzas);
  return (
    <div>
      <DropDownSort products={products} />
      {products && (
        <List
          bordered
          grid={{
            gutter: 18,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 8,
            xl: 6,
            xxl: 6,
          }}
          dataSource={products}
          renderItem={(product) => (
              <List.Item>
                <ProductCard product={product}>Card content</ProductCard>
              </List.Item>
          )}
        />
      )}

      <Button onClick={() => showModalForm()}>Add new Pizza </Button>
      {showModal && <ModalProduct closeModel={setShowModal} create/>}
    </div>
  );
};

export default Home;
