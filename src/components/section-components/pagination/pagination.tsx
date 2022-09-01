import React, { FC } from "react";
import styles from "./Pagination.module.scss";
import { PaginationProps } from "./constants";
import ReactPaginate from "react-paginate";

const Pagination: FC<PaginationProps> = ({ currentPage, onChangePage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={currentPage - 1}
  />
);

export default Pagination;
