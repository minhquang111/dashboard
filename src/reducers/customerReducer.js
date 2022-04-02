import { CUSTOMERS_LOADED_SUCCESS } from "../contexts/constants";

export const customerReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CUSTOMERS_LOADED_SUCCESS:
      return {
        ...state,
        customers: payload,
        customerLoading: false,
      };
    default:
      return state;
  }
};
