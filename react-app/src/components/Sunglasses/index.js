import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import FavoriteIcon from "../FavoriteIcon";
import "./Sunglasses.css";

const Sunglasses = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const allProducts = Object.values(useSelector((state) => state.products));
    const products = allProducts.filter(product => product.type == "sunglasses");

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

    return (
      <div className="product-list-maincontainer">
        <div style={{display:"flex", flexDirection:"column",gap:"2rem"}}>
        <div style={{}}>
        <img alt="Banner image" src="https://cdn.thewirecutter.com/wp-content/media/2021/07/cheapsunglaasses-2048px-6956.jpg?auto=webp&quality=75&crop=2:1&width=1024" className="bannerImage" />
        </div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",gap:"1rem"}} className="homepage-text">
          <p style={{fontSize:"28px"}}>Get your new summer shades.</p>
          <p style={{fontSize:"20px"}}>Shop designer glasses on sale. Get up to 70% off your perfect pair of discount sunglasses.</p>
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
                      
                      <div style={{display:"flex",border:"solid blue",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"blue"}}></div>
                      <div style={{display:"flex",border:"solid aqua",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"aqua"}}></div>
                      <div style={{display:"flex",border:"solid red",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"red"}}></div>
                      <div style={{display:"flex",border:"solid purple",borderRadius:"50rem",padding:"0.5rem",backgroundColor:"purple"}}></div>
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
export default Sunglasses;
