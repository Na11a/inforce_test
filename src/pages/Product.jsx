import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { getPizza } from "../store/asyncActions/pizzas";
import { ProductInfo, ProductComments } from "../components";

const Product = (props) => {
  const [showEditModal,setShowEditModal] = useState(false)
  const dispatch = useDispatch() 
  const onEditClick = () =>{
    setShowEditModal(true)
  }
  const { id } = useParams();
  useEffect(()=>{
    dispatch(getPizza(id))
  },[])
  const product = useSelector(state => state.pizzas.currentPizza)
  return (
    <div>
      {product && (
        <div>
          <ProductInfo product={product} />
          <ProductComments comments={product.comments} />
        </div>
      )}
    </div>
  );
};

export default Product;
