import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import "./product_list.css";

const ProductList = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const products = Object.values(useSelector((state) => state.products));
    console.log(products)

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

    return (
      <div className="product-list-maincontainer">
        {products?.map((product) => (
              <div key={product.id}>
                <div className="product-list-subcontainer">
                  <NavLink to={`/products/${product.id}`}>
                    <img
                      className="product-image"
                      src={product.previewImage}
                      alt="products"
                    />
                    <div className="title">{product.title}</div>
                    <div className="price">$ {product.price.toFixed(2)}</div>
                  </NavLink>
                  
                </div>
              </div>
            ))}
      </div>
    ) 
}  
export default ProductList;
