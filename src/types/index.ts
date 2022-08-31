import React from "react";

export type RouteType = {
  path: string;
  Component: React.FC;
};

export type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};
