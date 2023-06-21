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
                
                <div className="product-list-subcontainer">
                
                  <NavLink to={`/products/${product.id}`}>
                  <div className="product-list-heart" style={{position:"relative",bottom:"-45px",zIndex:"10"}}><i className="fa-regular fa-heart fa-xl" /></div>
                  <div>
                    <img
                      className="product-image"
                      src={product.previewImage}
                      alt="products"
                    />
                    </div>
                    <div className="circle-colors" style={{display:"flex", flexdirection:"row", gap:"2rem",flexWrap:"nowrap",justifyContent:"center",marginBottom:"15px"}}>
                      <div style={{display:"flex",border:"solid black",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"black"}}></div>
                      <div style={{display:"flex",border:"solid blue",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"blue"}}></div>
                      <div style={{display:"flex",border:"solid grey",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"grey"}}></div>
                      <div style={{display:"flex",border:"solid white",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"white"}}></div>
                      <div style={{display:"flex",border:"solid purple",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"purple"}}></div>
                    </div>
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
