import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import "./product_list.css";

const ProductList = () => {
    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    const products = Object.values(useSelector((state) => state.products));
    

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

    return (
      <div className="product-list-maincontainer">
        
        {products?.map((product) => (
          
              <div className="tooltip-container" key={product.id}>
                <div className="product-list-heart"><i className="fa-regular fa-heart fa-xl" /></div>
                <div className="product-list-subcontainer">
                  <NavLink to={`/products/${product.id}`}>
                    <img
                      className="product-image"
                      src={product.previewImage}
                      alt="products"
                    />
                    <div className="title">{product.title}</div>
                    <div className="price">${product.price.toFixed(2)} Including lenses</div>
                  </NavLink>
                  
                </div>
              <div className="tooltip-div"><Link to={`/products/${product.id}`} className="tool-tip" >See Frame</Link></div>
              </div>
            ))}
      </div>
    ) 
}  
export default ProductList;
