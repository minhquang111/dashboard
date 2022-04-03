import { randomNumber } from "../utils";
const initialState = {
  list: [],
  singleOrder: {
    firstname: String,
    reference: String,
    amount: Number,
    products: Array,
    orderDate: String,
    shippedDate: String,
    shipAddress: {
      address: String,
      country: String,
      city: String,
      zipcode: String,
    },
    customerId: Number,
    id: Number,
  },
};
const orderReducers = (state = { initialState }, action) => {
  switch (action.type) {
    case "GET_ORDER": {
      if (state.list) return state;
      return { ...state, list: action.payload };
    }

    case "DELETE_ORDER": {
      return {
        ...state,
        list: state.list.filter((order) => order.id !== action.payload.id),
      };
    }
    case "GET_SINGLE_ORDER": {
      return {
        ...state,
        singleOrder: state.list.find((order) => order.id === action.payload),
      };
    }
    case "EDIT_SINGLE_ORDER": {
      return {
        ...state,
        list: state.list.map((order) => {
          if (order.id === action.payload.id) {
            return action.payload;
          }
          return order;
        }),
      };
    }

    default:
      return state;
  }
};

export default orderReducers;
