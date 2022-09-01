import { Pizza } from "../../../../store/type-state/pizza";

export type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
  pageCount: number;
};
