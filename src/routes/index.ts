import { HOME_PAGE, NOT_FOUND_PAGE } from "../constants/routes";
import { RouteType } from "../types";
import HomePage from "../pages/home-page/home-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";

const privateRoutes: RouteType[] = [];

const publicRoutes: RouteType[] = [
  {
    path: HOME_PAGE,
    Component: HomePage,
  },
  {
    path: NOT_FOUND_PAGE,
    Component: NotFoundPage,
  },
];

export { publicRoutes, privateRoutes };
