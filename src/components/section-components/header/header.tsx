import React, { FC } from "react";
import "./header.scss";

import LogoSvg from "../../../assests/img/logo-pizza.svg";
import Basket from "../../svg/basket";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={LogoSvg} alt="Pizza logo" />
          <div>
            <h1>Mir Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <div className="button button--cart">
            <span>12 ₽</span>
            <div className="button__delimiter"></div>
            <Basket />
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
