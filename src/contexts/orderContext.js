import { createContext, useReducer } from "react";
import { orderReducer } from "../reducers/orderReducer";
import { database } from "../api/database";
import { ORDER_LOADED_SUCCESS } from "./constants";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [orderState, dispatch] = useReducer(orderReducer, {
    orders: [],
    orderLoading: true,
  });

  const getOrder = () => {
    try {
      const { orders } = database;
      if (orders) {
        dispatch({
          type: ORDER_LOADED_SUCCESS,
          payload: orders,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const orderContextData = {
    orderState,
    getOrder,
  };

  return (
    <OrderContext.Provider value={orderContextData}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
