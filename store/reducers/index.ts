import { combineReducers } from "redux";
import productReducer from "./productSlice";
// Import other slice reducers here

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
