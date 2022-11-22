import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./cartItem";

export default function Cart() {
    const cartItem = useSelector((state) => state.cart.itemsList);
    const total = cartItem.reduce((sum, item) => sum + item.totalPrice, 0);

    return <div className="cart">
        <div className="header">Cart</div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>totalPrice</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {cartItem?.map((item, i) => {
                    return <CartItem id={item.id} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice} name={item.name} key={`cart-${item.id}`} />
                })}
                <tr className="total">
                    <td colSpan="5">Total</td>
                    <td>{`$ ${total}`}</td>
                </tr>
            </tbody>
        </table>
    </div>
}