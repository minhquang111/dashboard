import { combineReducers } from "redux";
import productReducers from "./productReducers";
import categoryReducers from "./categoryRedusers";
import orderReducers from "./orderReducers";

const rootReducer = combineReducers({
  product: productReducers,
  category: categoryReducers,
  order: orderReducers,
});

export default rootReducer;
