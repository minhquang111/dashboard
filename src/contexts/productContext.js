import { createContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import { database } from "../api/database";
import { PRODUCT_LOADED_SUCCESS } from "./constants";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [productState, dispatch] = useReducer(productReducer, {
    products: [],
    productLoading: true,
  });

  const getProduct = () => {
    try {
      const { products } = database;
      const { categories } = database;
      products.forEach((product) => {
        const [category] = categories.filter(
          (category) => category.id === product.id
        );
        product.category = category;
      });

      if (products) {
        dispatch({
          type: PRODUCT_LOADED_SUCCESS,
          payload: products,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const productContextData = {
    productState,
    getProduct,
  };

  return (
    <ProductContext.Provider value={productContextData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
