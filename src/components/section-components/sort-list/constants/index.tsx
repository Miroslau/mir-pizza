export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  TITLE_DESC = "title",
  TITLE_ASC = "-title",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}

export type SortItem = {
  id: number;
  name: string;
  sortProperty: SortPropertyEnum;
};

export type PopupClick = MouseEvent & {
  path: Node[];
};

export type SortPopupProps = {
  value: Sort;
};

export const sortList: SortItem[] = [
  {
    id: 0,
    name: "популярности (DESC)",
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
  {
    id: 1,
    name: "популярности (ASC)",
    sortProperty: SortPropertyEnum.RATING_ASC,
  },
  { id: 2, name: "цене (DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { id: 3, name: "цене (ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { id: 4, name: "алфавиту (DESC)", sortProperty: SortPropertyEnum.TITLE_DESC },
  { id: 5, name: "алфавиту (ASC)", sortProperty: SortPropertyEnum.TITLE_ASC },
];
