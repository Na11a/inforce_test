import {
  getProducts,
  deleteProduct,
  addProduct,
  getProduct,
} from "../../features/axiosRequests";
import {
  addPizzasAction,
  deletePizzaAction,
  addPizzaAction,
  setCurrentPizza,
} from "../pizzaReducer";

export const fetchPizzas = () => {
  return function (dispatch) {
    getProducts().then((data) => dispatch(addPizzasAction(data)));
  };
};
export const deletePizza = (pizza) => {
  return function (dispatch) {
    deleteProduct(pizza).then((_) => dispatch(deletePizzaAction(pizza)));
  };
};
export const addPizza = (pizza) => {
  return function (dispatch) {
    addProduct(pizza).then((product) => {
      dispatch(addPizzaAction(product));
    });
  };
};
export const getPizza = (id) => {
  return function (dispatch) {
    getProduct(id).then((pizza) => {
      dispatch(setCurrentPizza(pizza));
    });
  };
};
