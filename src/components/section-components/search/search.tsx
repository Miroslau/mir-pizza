import React, { ChangeEvent, FC, useCallback, useRef } from "react";
import styles from "./Search.module.scss";
import SearchIcon from "../../svg/search-icon";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../store/slices/filter-slice";
import CrossIcon from "../../svg/cross-icon";

const Search: FC = () => {
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = React.useState<string>("");

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div className={styles.root}>
      <SearchIcon styles={styles} />
      <input
        ref={inputRef}
        className={styles.input}
        value={value}
        onChange={onChangeInput}
        placeholder="Поиск пиццы..."
      />
      {value && <CrossIcon onClickClear={onClickClear} styles={styles} />}
    </div>
  );
};

export default Search;
