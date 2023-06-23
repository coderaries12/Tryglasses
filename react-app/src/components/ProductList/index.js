import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import FavoriteIcon from "../FavoriteIcon";
import "./product_list.css";

const ProductList = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const allProducts = Object.values(useSelector((state) => state.products));
    const products = allProducts.filter(product => product.type == "eyeglasses");


    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

    return (
      <div className="product-list-maincontainer">
        <div style={{display:"flex", flexDirection:"column",gap:"2rem"}}>
        <img alt="Banner image" src="https://images.squarespace-cdn.com/content/v1/5b840c22b10598702dd21b3a/1585414034148-F3T2DVEZHS7MX9K7ZF9R/CMS_Peaker_0C8A7705-Edit+%281%29.jpg?format=2500w" className="bannerImage" />
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",gap:"1rem"}} className="homepage-text">
          <p style={{fontSize:"28px"}}>A pair for every need.</p>
          <p style={{fontSize:"20px"}}>Discover great glasses for both your day-to-day and the extraordinary.</p>
        </div>
        </div>
        {products?.map((product) => (
          
              <div className="tooltip-container" key={product.id}>
                
                <div className="product-list-subcontainer">
                
                  <NavLink to={`/products/${product.id}`}>
                  {/* <div className="product-list-heart" style={{position:"relative",bottom:"-45px",zIndex:"10"}}><i className="fa-regular fa-heart fa-xl" /></div> */}
                  <div>
                    <img
                      className="product-image"
                      src={product.previewImage}
                      alt="products"
                    />
                    </div>
                    <div className="circle-colors" style={{display:"flex", flexdirection:"row", gap:"0.5rem",flexWrap:"nowrap",justifyContent:"center",marginBottom:"15px"}}>
                      <div style={{display:"flex",border:"solid black",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"black"}}></div>
                      <div style={{display:"flex",border:"solid cornsilk",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"cornsilk"}}></div>
                      <div style={{display:"flex",border:"solid darkgrey",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"darkgrey"}}></div>
                      <div style={{display:"flex",border:"solid brown",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"brown"}}></div>
                      
                    </div>
                    <div className="title">{product.title}</div>
                    <div className="price">${product.price.toFixed(2)} Including lenses</div>
                  </NavLink>
                  <div className="eyeglasses-heart" style={{position:"relative",bottom:"-15px",left:"-29px" ,zIndex:"10"}}>
                  <FavoriteIcon
                        sessionUser={sessionUser}
                        product={product}
                      />  
                  </div>
                </div>
              <div className="tooltip-div"><Link to={`/products/${product.id}`} className="tool-tip" >See Frame</Link></div>
              </div>
            ))}
      </div>
    ) 
}  
export default ProductList;
