import React, { FC, useEffect } from "react";
import Categories from "../../components/section-components/categories/categories";
import SortList from "../../components/section-components/sort-list/sort-list";
import { SortPropertyEnum } from "../../components/section-components/sort-list/constants";
import { useSelector } from "react-redux";
import { pizzaSelector } from "../../store/slices/pizza-slice";
import { filterSelector } from "../../store/slices/filter-slice";
import { fetchPizzas } from "../../store/async actions/pizza-actions";
import { useAppDispatch } from "../../store/store";
import PizzaBlock from "../../components/pizza-block";
import Skeleton from "../../components/pizza-block/skeleton";

const HomePage: FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(pizzaSelector);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(filterSelector);

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? String(categoryId) : "";
    const search = searchValue;

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      })
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((item: any) => (
    <PizzaBlock key={item.id} {...item} />
  ));

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={0} onChangeCategory={() => {}} />
        <SortList value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить питсы. Попробуйте повторить попытку
            позже
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
    </div>
  );
};

export default HomePage;
