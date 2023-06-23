import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import FavoriteIcon from "../FavoriteIcon";
import "./FavoritePage.css"

const FavoritePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    if(!sessionUser){
        history.push("/")
    }

    const products = Object.values(useSelector((state) => (state.products)));

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        
        <div className="bodyContainer">
            
            <div className="fav-title">
                <p>My Picks</p>
                <span style={{marginTop:"35px", marginLeft:"20px"}}>{sessionUser?.user_favorites?.length}frames</span>
                <div>
                    
                </div>
            </div>
            
            
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"-5px",justifyContent:"center"}}>
					{ sessionUser.user_favorites?.map((product) => (
						<div key={product.id} style={{display:"flex", flexDirection:"row"}}>
					
							<NavLink to={`/products/${product.id}`} style={{width:"250px"}}>
								
								<img
								className="product-image"
								src={product.previewImage}
								alt="products"
								style={{width:"100%",height:"120px", objectFit:"contain"}}
								/>
								
								<div style={{fontWeight:"400",textAlign:"center", marginBottom:"5px"}}>{product.title}</div>
								<div className="price">$ {product.price.toFixed(2)}</div>
							
							</NavLink>
							
							<div style={{position:"relative",bottom:"-8px",left:"-25px" ,zIndex:"10"}}>
								<FavoriteIcon
									sessionUser={sessionUser}
									product={product}
								/>
							</div>
					
		  				</div>
					))}
				</div>

                <div className="empty-favorite">
              
              <div className={sessionUser?.user_favorites?.length >= 1? "hidden":""}>
                
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                  
                  <p style={{color:"#23aae2",fontSize:"54px",letterSpacing:".08em", marginTop:"2rem" }}>Time to get picky</p>
                  <p style={{color:"#8d8d8d", fontFamily:"cursive",fontSize:"26px", letterSpacing:".08em", marginTop:"1rem" }}>Click 💙 to save your favorite frames</p>
                    <div style={{display:"flex", justifyContent:"center",margin:"60px 0 0", width:"100%", gap:"1.5rem"}}>
								<div><a className="down-button" style={{backgroundColor:"white",color:"#23aae2",border:"3px solid #6cf", borderRadius:"0px"}} to="/eyeglasses" href="eyeglasses">Shop Eyeglasses</a></div>
								<div><a className="down-button" style={{backgroundColor:"white",color:"#23aae2",border:"3px solid #6cf", borderRadius:"0px"}} to="/sunglasses" href="sunglasses">Shop Sunglasses</a></div>
		            </div>  
                  </div>
                
              </div>
            </div>
        </div>
    )}

    export default FavoritePage
