import React from "react";
import { productListData } from "../data/productListData";
import Product from "./product";

export default function productList() {

    return <div className="product-list">
        {productListData?.map((product, i) => {
            return <Product id={product.id} name={product.name} imgSrc={product.imgSrc} price={product.price} key={`product-${product.id}`} />
        })}
    </div>
}
