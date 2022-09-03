import React, { FC } from "react";
import Header from "../components/section-components/header/header";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
