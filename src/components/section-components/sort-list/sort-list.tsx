import React, { FC, useEffect, useRef, useState } from "react";
import { PopupClick, SortItem, sortList, SortPopupProps } from "./constants";
import "./sort-list.scss";

import ArrowSvg from "../../../assests/img/arrow.svg";
import { useDispatch } from "react-redux";
import { setSort } from "../../../store/slices/filter-slice";

const SortList: FC<SortPopupProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const [isOpenSort, setOpenSort] = useState(false);

  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const myEvent = event as PopupClick;

      if (sortRef.current && !myEvent.path.includes(sortRef.current)) {
        setOpenSort(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const onClickListItem = (item: SortItem) => {
    dispatch(setSort(item));
    setOpenSort(false);
  };

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <img width={10} height={10} src={ArrowSvg} alt="Arrow" />
        <b>Сортировка по:</b>
        <span onClick={setOpenSort.bind(this, !isOpenSort)}>{value.name}</span>
      </div>
      {isOpenSort && (
        <div className="sort__popup">
          <ul>
            {sortList.map(({ id, name, sortProperty }: SortItem) => (
              <li
                key={id}
                className={value.sortProperty === sortProperty ? "active" : ""}
                onClick={onClickListItem.bind(this, { id, name, sortProperty })}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortList;
