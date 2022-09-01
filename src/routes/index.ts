import { FULL_PIZZA_PAGE, NOT_FOUND_PAGE } from "../constants/routes";
import { RouteType } from "../types";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import React from "react";

const FullPizza = React.lazy(
  () => import("../pages/full-pizza-page/full-pizza-page")
);

const publicRoutes: RouteType[] = [
  {
    path: NOT_FOUND_PAGE,
    Component: NotFoundPage,
  },
  {
    path: FULL_PIZZA_PAGE,
    Component: FullPizza,
  },
];

export { publicRoutes };
