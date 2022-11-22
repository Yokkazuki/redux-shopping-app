import React from "react"
import Cart from "./cart"
import ProductList from "./productList"

export default function Container() {

    return <div className="container">
        <ProductList />
        <Cart />
    </div>

}