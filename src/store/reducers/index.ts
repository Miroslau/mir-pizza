import { combineReducers } from "@reduxjs/toolkit";
import pizzaReducer from "./pizza-reducer";
import filterReducer from "./filter-reducer";
import cartReducer from "./cart-reducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  filters: filterReducer,
  cart: cartReducer,
});

export default rootReducer;
