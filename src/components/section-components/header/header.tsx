import React, { FC, useEffect, useRef } from "react";
import "./header.scss";

import LogoSvg from "../../../assests/img/logo-pizza.svg";
import Basket from "../../svg/basket";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../store/slices/cart-slice";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const { items, totalPrice } = useSelector(cartSelector);
  const isMounted = useRef(false);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={LogoSvg} alt="Pizza logo" />
            <div>
              <h1>Mir Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <div className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <Basket />
            <span>{totalCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
