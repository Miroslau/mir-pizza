import React, { FC, useEffect, useState } from "react";
import styles from "./Pagination.module.scss";
import { PaginationProps } from "./constants";
import ReactPaginate from "react-paginate";

const Pagination: FC<PaginationProps> = ({
  currentPage,
  onChangePage,
  pageCount,
}) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected)}
    pageRangeDisplayed={4}
    pageCount={pageCount}
    forcePage={currentPage - 1}
  />
);

export default Pagination;
