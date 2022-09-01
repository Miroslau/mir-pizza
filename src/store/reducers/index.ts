import { combineReducers } from "@reduxjs/toolkit";
import pizzaReducer from "./pizza-reducer";
import filterReducer from "./filter-reducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  filters: filterReducer,
});

export default rootReducer;
