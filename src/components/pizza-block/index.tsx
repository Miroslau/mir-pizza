import React, { FC, useState } from "react";
import "./pizza-block.scss";
import { PizzaBlockProps, typeNames } from "./constants";
import Plus from "../../components/svg/plus";

import plusSvg from "../../assests/img/plus.svg";

const PizzaBlock: FC<PizzaBlockProps> = ({
  id,
  name,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{name}</h4>
        </>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                className={activeType === typeId ? "active" : ""}
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li key={size} className={activeSize === index ? "active" : ""}>
                {size} sm.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button className="button button--outline button--add">
            <Plus />
            <span>Добавить</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
