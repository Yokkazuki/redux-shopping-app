import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

export default function CartItem({ id, name, price, quantity, totalPrice }) {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addToCart({
            name,
            id,
            price
        }))
    }
    const reduceFromcart = () => {
        dispatch(cartActions.reduceFromcart(id))
    }
    return <tr className="cart-item">
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{totalPrice}</td>
        <td className="action-td">
            <button onClick={reduceFromcart}>-</button>
            <button onClick={addToCart}>+</button>
        </td>
    </tr>
}