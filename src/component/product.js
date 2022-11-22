import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

export default function Product({ id, name, imgSrc, price }) {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addToCart({
            name,
            id,
            price
        }))
    }
    return <div className="product" >
        <img src={imgSrc} alt={name} />
        {`$ ${price}`}
        <button onClick={addToCart}>Add to Cart</button>
    </div>
}