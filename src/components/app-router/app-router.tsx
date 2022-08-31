import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../routes";
import MainLayout from "../../layouts/main-layout";

const NotFound = React.lazy(
  () => import("../../pages/not-found-page/not-found-page")
);

const AppRouter: FC = () => {
  return (
    <div className="app-router">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {publicRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <Component />
                </Suspense>
              }
            />
          ))}
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading</div>}>
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
