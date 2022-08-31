import httpClient from "../index";
import { Pizza, SearchPizzaParams } from "../../store/typeState/pizza";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";

export default {
  getAllPizzas(params: SearchPizzaParams) {
    const { sortBy, order, category, search, currentPage } = params;
    return httpClient.get<Pizza[]>("/pizzas", {
      params: pickBy(
        {
          page: currentPage,
          limit: 4,
          category,
          sortBy,
          order,
          search,
        },
        identity
      ),
    });
  },
};
