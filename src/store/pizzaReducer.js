const defaultState = {
  pizzas: [],
  currentPizza : null
};

const compareByAlhabetAndCount = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return a.count - b.count;
};
const compareByPrice = (a, b) => {
  return a.price - b.price;
};
const compareByCount = (a, b) => {
  return a.count - b.count;
};

const ADD_ALL_PIZZAS = "ADD_ALL_PIZZAS";
const SORT_BY_PRICE = "SORT_BY_PRICE";
const SORT_BY_COUNT = "SORT_BY_COUNT";
const DELETE_PIZZA = "DELETE_PIZZA";
const ADD_PIZZA = "ADD_PIZZA";
const SET_CURRENT_PIZZA = "SET_CURRENT_PIZZA"

export const pizzaReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALL_PIZZAS:
      action.payload.sort(compareByAlhabetAndCount);
      return { ...state, pizzas: [...action.payload] };
    case SORT_BY_PRICE:
      return { ...state, pizzas: [...action.payload.sort(compareByPrice)] };
    case SORT_BY_COUNT:
      return { ...state, pizzas: [...action.payload.sort(compareByCount)] };
    case DELETE_PIZZA:
      return {
        ...state,
        pizzas: [
          ...state.pizzas.filter((item) => item.id !== action.payload.id),
        ],
      };
    case ADD_PIZZA:
      return { ...state, pizzas: [...state.pizzas, action.payload] };
    case SET_CURRENT_PIZZA:
      return {...state,currentPizza:action.payload}
    default:
      return state;
  }
};
export const addPizzasAction = (payload) => ({ type: ADD_ALL_PIZZAS, payload });
export const sortPyPrice = (payload) => ({ type: SORT_BY_PRICE, payload });
export const sortByCount = (payload) => ({ type: SORT_BY_COUNT, payload });
export const deletePizzaAction = (payload) => ({ type: DELETE_PIZZA, payload });
export const addPizzaAction = (payload) => ({type:ADD_PIZZA,payload})
export const setCurrentPizza = (payload) =>({type:SET_CURRENT_PIZZA,payload})