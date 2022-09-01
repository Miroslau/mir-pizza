import React, { FC, useCallback, useEffect, useState } from "react";
import Categories from "../../components/section-components/categories/categories";
import SortList from "../../components/section-components/sort-list/sort-list";
import { useSelector } from "react-redux";
import { pizzaSelector } from "../../store/slices/pizza-slice";
import {
  filterSelector,
  setCategoryId,
  setCurrentPage,
} from "../../store/slices/filter-slice";
import { fetchPizzas } from "../../store/async actions/pizza-actions";
import { useAppDispatch } from "../../store/store";
import PizzaBlock from "../../components/pizza-block";
import Skeleton from "../../components/pizza-block/skeleton";
import Pagination from "../../components/section-components/pagination/pagination";
import { Pizza } from "../../store/type-state/pizza";

const LIMIT = 4;

const HomePage: FC = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState<Pizza[] | null>(null);
  const [pageCount, setPageCount] = useState(0);

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

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    const newOffset = (page * LIMIT) % items.length;
    setItemOffset(newOffset);
    dispatch(setCurrentPage(page + 1));
  };

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  useEffect(() => {
    const endOffset = itemOffset + LIMIT;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / LIMIT));
  }, [itemOffset, LIMIT, items]);

  const pizzas = currentItems?.map((item: any) => (
    <PizzaBlock key={item.id} {...item} />
  ));

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
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
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default HomePage;
