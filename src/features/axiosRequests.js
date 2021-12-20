import axios from "axios";

const getProducts = () => {
  return axios
    .get("http://localhost:8000/products/")
    .then((response) => response.data.products);
};
const addProduct = (product) => {
  return axios.post("http://localhost:8000/products/", product)
  .then(response => response.data)
};
const getProduct = (id) =>{
  return axios
  .get(`http://localhost:8000/product/${id}/`)
  .then(response => response.data)
}

const deleteProduct = (product) =>{
  return axios.delete(`http://localhost:8000/product/${product.id}/`)
}
const updateProduct = (product) =>{
  return axios.put(`http://localhost:8000/product/${product.id}/`,product)
}
const addComment = (comment) =>{
  return axios.post('http://localhost:8000/comment/',comment)
}
const deleteComment = (id) =>{
  return axios.delete(`http://localhost:8000/comment/${id}/`)
}

export { addProduct, getProducts,getProduct,deleteProduct,updateProduct,addComment,deleteComment };
