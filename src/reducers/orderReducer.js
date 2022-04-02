import { ORDER_LOADED_SUCCESS } from "../contexts/constants";

export const orderReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_LOADED_SUCCESS:
      return {
        ...state,
        orders: payload,
        orderLoading: false,
      };
    default:
      return state;
  }
};
