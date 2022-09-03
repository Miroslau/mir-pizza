import React, { FC } from "react";
import { CategoriesProps } from "../../../types";

import "./categories.scss";
import { categories } from "./constants/constants";

const Categories: FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, index) => (
            <li
              key={index}
              onClick={onChangeCategory.bind(this, index)}
              className={value === index ? "active" : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
