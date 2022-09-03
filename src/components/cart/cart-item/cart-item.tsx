import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {addItem, minusItem, removeItem} from "../../../store/slices/cart-slice";
import AddIcon from "../../svg/add-icon";
import { CartItem as CartItemType } from "../../../store/type-state/cart";

type CartItemProps = {
    id: string;
    title: string;
    type: string;
    size: number;
    price: number;
    count: number;
    imageUrl: string;
};

const CartItem: FC<CartItemProps> = ({
                                         id,
                                         title,
                                         type,
                                         size,
                                         price,
                                         count,
                                         imageUrl,
                                     }) => {
    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            } as CartItemType),
        );
    };

    const onClickMinus = () => dispatch(minusItem(id));

    const onClickRemove = () => {
        if (window.confirm('Ты действительно хочешь удалить товар?')) {
            dispatch(removeItem(id));
        }
    };

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            </div>
            <div className="cart__item-info">
                <h3>{title}</h3>
                <p>
                    {type}, {size} см.
                </p>
            </div>
            <div className="cart__item-count">
                <button disabled={count === 1}
                        className="button button--outline
                                   button--circle cart__item-count-minus"
                        onClick={onClickMinus}
                >
                    <AddIcon />
                </button>
                <b>{count}</b>
                <button onClick={onClickPlus}
                        className="button button--outline button--circle cart__item-count-plus">
                    <AddIcon />
                </button>
            </div>
            <div className="cart__item-price">
                <b>{price * count} ₽</b>
            </div>
            <div className="cart__item-remove">
                <div onClick={onClickRemove} className="button button--outline button--circle">
                    <AddIcon />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
