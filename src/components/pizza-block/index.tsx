import React, { FC, useState } from "react";
import "./pizza-block.scss";
import { PizzaBlockProps, typeNames } from "./constants";
import Plus from "../../components/svg/plus";

import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItemById } from "../../store/slices/cart-slice";
import { CartItem } from "../../store/type-state/cart";

const PizzaBlock: FC<PizzaBlockProps> = ({
  id,
  name,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      name,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

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
                onClick={setActiveType.bind(this, typeId)}
                className={activeType === typeId ? "active" : ""}
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={size}
                onClick={setActiveSize.bind(this, index)}
                className={activeSize === index ? "active" : ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <Plus />
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
