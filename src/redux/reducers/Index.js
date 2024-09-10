import { combineReducers } from "redux";
import { productReducers, selectedProductReducers } from "./ProductReducer";

const rootReducer = combineReducers({
  allProducts: productReducers,
  product: selectedProductReducers
});

export default rootReducer;