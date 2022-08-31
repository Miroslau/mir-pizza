import React, { FC } from "react";
import Categories from "../../components/section-components/categories/categories";
import SortList from "../../components/section-components/sort-list/sort-list";
import { SortPropertyEnum } from "../../components/section-components/sort-list/constants";

const mock = {
  name: "popularity",
  sortProperty: SortPropertyEnum.RATING_DESC,
};

console.log(process.env);

const HomePage: FC = () => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={0} onChangeCategory={() => {}} />
        <SortList value={mock} />
      </div>
      <h2 className="content__title">All pizzas</h2>
    </div>
  );
};

export default HomePage;
