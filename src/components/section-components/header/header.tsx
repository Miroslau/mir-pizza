import React, { FC } from "react";
import "./header.scss";

import LogoSvg from "../../../assests/img/logo-pizza.svg";
import BasketSvg from "../../../assests/img/basket.svg";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={LogoSvg} alt="Pizza logo" />
          <div>
            <h1>Mir Pizza</h1>
            <p>The tastiest pizza in the universe</p>
          </div>
        </div>
        <div className="header__cart">
          <div className="button button--cart">
            <span>12 BYN</span>
            <div className="button__delimiter"></div>
            <img width="18" height="18" src={BasketSvg} alt="Basket" />
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
