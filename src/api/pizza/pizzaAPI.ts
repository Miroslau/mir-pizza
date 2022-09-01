import httpClient from "../index";
import { Pizza, SearchPizzaParams } from "../../store/type-state/pizza";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";

export default {
  getAllPizzas(params: SearchPizzaParams) {
    const { sortBy, order, category, search, currentPage } = params;
    return httpClient.get<Pizza[]>("/pizzas", {
      params: pickBy(
        {
          page: currentPage,
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
