import {CART_PAGE, FULL_PIZZA_PAGE, NOT_FOUND_PAGE} from "../constants/routes";
import { RouteType } from "../types";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import React from "react";
import Loadable from 'react-loadable';

const FullPizza = React.lazy(
  () => import("../pages/full-pizza-page/full-pizza-page")
);

const Cart = Loadable({
  loader: () => import('../pages/cart-page/cart-page'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

const publicRoutes: RouteType[] = [
  {
    path: NOT_FOUND_PAGE,
    Component: NotFoundPage,
  },
  {
    path: FULL_PIZZA_PAGE,
    Component: FullPizza,
  },
  {
    path: CART_PAGE,
    Component: Cart,
  }
];

export { publicRoutes };
