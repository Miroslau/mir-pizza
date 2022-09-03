import React from "react";

export type RouteType = {
  path: string;
  Component: React.FC | any;
};

export type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};
