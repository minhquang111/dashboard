import { PRODUCT_LOADED_SUCCESS } from "../contexts/constants";

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_LOADED_SUCCESS:
      return {
        ...state,
        products: payload,
        productLoading: false,
      };
    default:
      return state;
  }
};
