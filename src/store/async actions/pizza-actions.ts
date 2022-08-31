import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchPizzaParams, Pizza } from "../typeState/pizza";
import pizzaAPI from "../../api/pizza/pizzaAPI";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params, thunkAPI) => {
    try {
      console.log(params, 4444);
      const { status, data } = await pizzaAPI.getAllPizzas(params);

      if (status !== 200) {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
