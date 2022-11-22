import React from "react"
import { useSelector } from "react-redux";

export default function Navbar() {
    const cartItem = useSelector((state) => state.cart.itemsList);
    const cartItemCount = cartItem.reduce((count, item) => count + item.quantity, 0);

    return <div className="navbar">
        <div className="app-name">Redux Shopping app</div>
        <div className="cart-count">{`Cart Item: ${cartItemCount}`}</div>
    </div>

}