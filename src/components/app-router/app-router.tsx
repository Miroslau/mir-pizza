import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../routes";
import MainLayout from "../../layouts/main-layout";
import HomePage from "../../pages/home-page/home-page";

const NotFound = React.lazy(
  () => import("../../pages/not-found-page/not-found-page")
);

const AppRouter: FC = () => {
  return (
    <div className="app-router">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
          {publicRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<div>Идёт загрузка...</div>}>
                  <Component />
                </Suspense>
              }
            />
          ))}
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
