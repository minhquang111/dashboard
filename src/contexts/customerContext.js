import { createContext, useReducer } from "react";
import { customerReducer } from "../reducers/customerReducer";
import { database } from "../api/database";
import { CUSTOMERS_LOADED_SUCCESS } from "./constants";

export const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  const [customerState, dispatch] = useReducer(customerReducer, {
    customers: [],
    customerLoading: true,
  });

  const getCustomer = () => {
    try {
      const { customers } = database;
      if (customers) {
        dispatch({
          type: CUSTOMERS_LOADED_SUCCESS,
          payload: customers,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const customerContextData = {
    customerState,
    getCustomer,
  };

  return (
    <CustomerContext.Provider value={customerContextData}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
