import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import CarouselComponent from "./Carousel"
import { NavLink } from "react-router-dom";
import FavoriteIcon from "../FavoriteIcon";
import { fetchProducts } from "../../store/products";

import "./HomePage.css"

const HomePage = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state?.session.user);
	const products = Object.values(useSelector((state) => (state.products)));
	let userfavorite
	let recommendProduct
	

	useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

	function getDifference(array1, array2) {
		return array1.filter(object1 => {
		  return !array2.some(object2 => {
			return object1.id === object2.id;
		  });
		});
	  }
	
	  if( sessionUser?.user_favorites?.length > 0) {
		userfavorite= sessionUser.user_favorites
		recommendProduct = getDifference(products,userfavorite)
	}
	if( sessionUser?.user_favorites?.length <= 0) {
		
		recommendProduct = products
	}
	
	  

  
    return (
     <div> 
         <CarouselComponent />
		<div className='bottom-strip-container'>
		
				<ul>
					<li>Free Shipping & Returns</li><div style={{backgroundColor: "#b0bdc5", height: "18px",margin: "0 24px 0 26px", width: "2px"}}></div>
					<li>100% Money Back Guarantee</li><div style={{backgroundColor: "#b0bdc5", height: "18px",margin: "0 24px 0 26px", width: "2px"}}></div>
					<li>FSA/ HSA Eligible</li><div style={{backgroundColor: "#b0bdc5", height: "18px",margin: "0 24px 0 26px", width: "2px"}}></div>
					<li><i class="fa-solid fa-star"></i>  Trustpilot . ❇️ ❇️ ❇️ ❇️ ❇️   Excellent</li>
					{/* <li>❇️ ❇️ ❇️ ❇️ ❇️ Excellent</li>  */}
					
				</ul>
		</div>
        <div className='brand-strip-container'>
			<ul>
				<li style={{fontFamily:"cursive"}}>Ray-Ban</li>
				<li style={{fontFamily:"cursive"}}>Vogue</li>
				<li style={{fontFamily:"cursive"}}>Michael Kors </li>
				<li style={{fontFamily:"cursive"}}>Calvin Klein</li>
				<li style={{fontFamily:"cursive"}}>Nike</li>
                <li style={{fontFamily:"cursive"}}>Prada</li>
				<li style={{fontFamily:"cursive"}}>Burberry </li>
			</ul>
		</div> 
        <div className="homepage-text">
            <p className="p1">We’re all about finding you that perfect pair.</p>
            <p className="p2">As glasses wearers, we know how incredible the right pair can make you feel. Let’s find yours together.</p>
        </div>  

		{sessionUser?.user_favorites?.length ? (
		<div>
			<p style={{textAlign:"center", marginTop:"6rem",fontSize:"20px"}}>Recently viewed and favorites</p>
				<div style={{display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"5px",justifyContent:"center", marginTop:"1rem"}}>
					{sessionUser.user_favorites.length && sessionUser.user_favorites?.slice(-5).map((product) => (
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
				
		</div>):(<div></div>)} 
		
		<div>
			<p style={{textAlign:"center", marginTop:"6rem",fontSize:"20px"}}>Recommended for you</p>
				<div style={{display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"5px",justifyContent:"center", marginTop:"1rem"}}>
				{sessionUser ? (
					<div style={{display:"flex", flexDirection:"row",flexWrap:"wrap",gap:"5px",justifyContent:"center"}}>
								{recommendProduct?.slice(-5).map((product) => (
									<div key={product.id} style={{display:"flex", flexDirection:"row"}}>
								
										<NavLink to={`/products/${product.id}`} style={{width:"250px"}}>
											
											<img
											className="product-image"
											src={product.previewImage}
											alt="products"
											style={{width:"100%",height:"120px", objectFit:"contain", border:"none"}}
											/>
											
											<div style={{fontWeight:"400",textAlign:"center", marginBottom:"5px"}}>{product.title}</div>
											<div className="price">$ {product.price.toFixed(2)}</div>
										
										</NavLink>
										
										<div style={{position:"relative",bottom:"-8px",left:"-29px" ,zIndex:"10"}}>
											<FavoriteIcon
												sessionUser={sessionUser}
												product={product}
											/>
										</div>

									</div>
							
								))}
					</div>
				
				
			 ) : (
			<div style={{display:"flex", flexDirection:"row",flexWrap:"wrap",gap:"5px",justifyContent:"center"}} >
					{ products?.slice(-5).map((product) =>(
					<div key={product.id} style={{display:"flex", flexDirection:"row"}}>
							
						<NavLink to={`/products/${product.id}`} style={{width:"250px"}}>
							
							<img
							className="product-image"
							src={product.previewImage}
							alt="products"
							style={{width:"100%",height:"120px", objectFit:"contain", border:"none"}}
							/>
							
							<div style={{fontWeight:"400",textAlign:"center", marginBottom:"5px"}}>{product.title}</div>
							<div className="price">$ {product.price.toFixed(2)}</div>
						
						</NavLink>
						
						<div style={{position:"relative",bottom:"-8px",left:"-29px" ,zIndex:"10"}}>
							<FavoriteIcon
								sessionUser={sessionUser}
								product={product}
							/>
						</div>

					</div>
					))}
			</div>
		)}
		</div>
		</div>
		<div style={{display:"flex", justifyContent:"center",margin:"60px 0 0", width:"100%", gap:"1.5rem"}}>
								<div><a className="down-button" to="/eyeglasses" href="eyeglasses">Shop Eyeglasses</a></div>
								<div><a className="down-button" to="/sunglasses" href="sunglasses">Shop Sunglasses</a></div>
		</div>
    </div>
    
        
    )
  }
  
  export default HomePage
