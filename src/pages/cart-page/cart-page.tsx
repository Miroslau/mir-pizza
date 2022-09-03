import React, {FC} from 'react';
import Basket from "../../components/svg/basket";
import Clear from "../../components/svg/clear";
import CartItem from "../../components/cart/cart-item/cart-item";
import {useDispatch, useSelector} from "react-redux";
import {cartSelector, clearItems} from "../../store/slices/cart-slice";
import {Link} from "react-router-dom";
import ArrowLeftIcon from "../../components/svg/arrow-left-icon";
import CartEmpty from "../../components/cart/cart-empty/cart-empty";

const CartPage: FC = () => {
    const dispatch = useDispatch();
    const { totalPrice, items } = useSelector(cartSelector);

    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

    const onClickClear = () => {
        if (window.confirm('Очистить корзину?')) {
            dispatch(clearItems());
        }
    };

    if (!totalPrice) {
        return <CartEmpty />;
    }

    return (
        <div className="container container--cart">
            <div className="cart">
                <div className="cart__top">
                    <h2 className="content__title">
                        <Basket />
                        Корзина
                    </h2>
                    <div onClick={onClickClear} className="cart__clear">
                       <Clear />
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="content__items">
                    {items.map((item: any) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span>
                            {' '}
                            Всего пицц: <b>{totalCount} шт.</b>{' '}
                        </span>
                        <span>
                            {' '}
                            Сумма заказа: <b>{totalPrice} ₽</b>{' '}
                        </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        <Link to="/" className="button button--outline button--add go-back-btn">
                            <ArrowLeftIcon />
                            <span>Вернуться назад</span>
                        </Link>
                        <div className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
