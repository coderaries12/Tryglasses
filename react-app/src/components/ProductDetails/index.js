import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/products";
import OpenModalButton from "../../components/OpenModalButton";
import PostReviewModal from "../PostReviewModal";
import EditReview from "../EditReview";
import DeleteReview from "../DeleteReview";
import { useParams, useHistory } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import "./productdetail.css"
import { thunkAddToCart} from "../../store/session";
import FavoriteIcon from "../FavoriteIcon";
import ShoppingCartPage from "../ShoppingCartPage";


const ProductDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productId } = useParams();
    const product = useSelector((state) => state.products[productId]);
    const sessionUser = useSelector((state) => state.session.user);
   
    
    
    const reviewAvg = () => {
        let totalStars = 0;
        product?.reviews?.forEach((review) => {
          totalStars += review.stars;
        });
        const average = totalStars / product.reviews.length;
        return average.toFixed(1);
      };
    
      let reviewExists = false;
      if (product?.reviews.length) {
        for (let i = 0; i < product.reviews.length; i++) {
          if (product.reviews[i]?.userId === sessionUser?.id) {
            reviewExists = true;
          }
        }
      }
    
      const reviewsLength = () => {
        if (product?.reviews.length) {
          if (product?.reviews.length === 1) {
            return `${product.reviews.length} customer review`;
          } else if (product?.reviews.length > 1) {
            return `${product.reviews.length} customer reviews`;
          }

        }
        return "New";
      };
      const rightcontainerreviewsLength = () => {
        if (product?.reviews.length) {
          if (product?.reviews.length === 1) {
            return `${product.reviews.length} review`;
          } else if (product?.reviews.length > 1) {
            return `${product.reviews.length} reviews`;
          }

        }
        return "New";
      };



    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

      

      
      let value =1
      const addToCart = async () => {
        let checkproduct;
    
        if (!sessionUser) {
          window.alert("Please log in first");
        } else {
          
          checkproduct = sessionUser.cart_session?.cart.find(
            (ele) => ele.productId == product.id
          );
    
        if (!checkproduct) {
            await dispatch(thunkAddToCart(sessionUser, product, value))
            history.push("/shoppingcart")
        } else if (checkproduct) {
          window.alert("This product is already in your Shopping cart");
            
        }
        }
      };
      

    return (
        <div className="product-single">
            <div className="product-container">
              <div>
                <ImageCarousel />
              </div>
            
        
            <div className="bottom-tabs-wrapper">
                {/* <div className="pd-bottom">
                    <button className="bottom-tabs">Description</button>
                    <button className="bottom-tabs">Frame & Measurements</button>
                    <button className="bottom-tabs">Shipping & Returns</button>
                </div> */}
                <div className="bottom-tabs-info">
                        <div style={{marginTop:"5px"}}>
                            <h2 style={{marginBottom:"5px", marginLeft:"10px", marginTop:"15px"}}>Description :</h2>
                            {/* <h4>About {product?.title}</h4> */}
                            <p style={{marginBottom:"5px", marginLeft:"10px"}}>{product?.description}</p>
                        </div>
                        <div className="bottom-tabs-desc">
                                <div className="description-list">
                                    <h2 style={{marginBottom:"10px", marginLeft:"10px"}}>Frame & Measurements :</h2>
                                    <ul style={{marginBottom:"5px", marginLeft:"10px"}}>
                                        <li style={{marginBottom:"5px", marginLeft:"10px"}}>Size: {product?.size}</li>
                                        <li style={{marginBottom:"5px", marginLeft:"10px"}}>Color: {product?.frameColor}</li>
                                        <li style={{marginBottom:"5px", marginLeft:"10px"}}>Material: {product?.frameMaterial}</li>
                                        <li style={{marginBottom:"5px", marginLeft:"10px"}}>Shape: {product?.frameShape}</li>
                                        <li style={{marginBottom:"5px", marginLeft:"10px"}}>Type: {product?.frameType}</li>
                                    </ul>
                                </div>
                                <div className="frameimage-div" style={{display:"flex"}}>
                                    <img src={product?.previewImage} alt={product?.title}  height="120px" />
                                </div>        
                        </div>
                        <div className="shipping-returns">
                                <h2 style={{marginBottom:"10px", marginLeft:"10px"}}>Shipping & Returns:</h2>
                                <p style={{marginBottom:"20px", marginLeft:"10px"}}>Enjoy Free Shipping and returns on all orders</p>        
                        </div>
                </div>    
            </div>
            <div className="total-reviews">
                <div className="reviews-length-star">
                    <div className="star">{product?.reviews.length ? ` ${reviewAvg()}  ⭐` : ""}</div>
                    <div style={{marginTop:"17px"}}>{reviewsLength()} </div>
                    
                </div>
                <div className="button-post-review" style={{marginLeft:"270px" ,marginTop: "17px"}}>
                    {sessionUser &&
                    sessionUser.id !== product?.userId &&
                    !reviewExists && (
                    <OpenModalButton
                    buttonText="Write a Review"
                    modalComponent={<PostReviewModal product={product} />}
                    />  
                    )}
                </div>
                    
            </div>
            {product?.reviews.length ? (
                <div className="review-map">
                    { product.reviews.map((r) => (
                            <div key={r.id}>
                                <div className="review-information ">
                                <div className="user-info">
                                    <p id="username">{r.user?.username} </p>
                                    <p>{r.stars} ⭐</p>
                                    
                                    <p>{r.createdAt}</p>
                                
                                </div>
                                <div className="user-review">
                                <ul>
                                    <h4>{r.reviewTitle}</h4>
                                    <li>{r.review} </li>
                                    
                                <div className="glasses-style">
                                    <span>Style: {r.style}</span>
                                    <span>Fit: {r.fit}</span>
                                    <span>Quality: {r.quality}</span>
                                </div>
                                <div style={{width:"125px" , height:"125px"}}key={r.id} className={r.reviewImage ? "" : "hidden"}>
                                <img style={{width:"100%", objectFit:"cover"}} src={r.reviewImage} alt={product?.title} />
                                </div>

                                <div className="edit-delete-modal">
                                  {sessionUser && r?.userId === sessionUser.id && (
                                <div className="review-btn" style={{marginBottom:"3rem", marginTop:"5px"}}>
                                        <OpenModalButton
                                        buttonText="Edit Review"
                                        modalComponent={
                                            <EditReview product={product} review={r} />
                                        }
                                        />
                                        <OpenModalButton
                                        buttonText="Delete Review"
                                        
                                        modalComponent={
                                            <DeleteReview
                                            productId={productId}
                                            reviewId={r.id}
                                            />
                                        }
                                        />
                                </div>
                )

                                  }  
                                </div>
      
                                </ul>
                                
                                </div>
                                

                                </div>
                                
                             
                            </div>
                        
                        ))}  
                         
                </div>
                ): (<div>Be the first to post a review!</div>)}
            </div>
            <div className="right-side-container">
            <div>
            <h1>{product?.title}</h1>
            { <p className="star-right-side-container">{product?.reviews.length ? ` ${reviewAvg()}  ⭐ ` : ""}({rightcontainerreviewsLength()})</p> }
            </div>
            <div>
            <p className="price-detail">Price: ${product?.price}</p>
            <p className="size-detail">Size: {product?.size}</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
            <p className="right-ship-return"><button><i class="fa-solid fa-check" />  Free shipping & returns  <i class="fa-regular fa-circle-question" /></button></p>
            <p className="right-ship-return"><button><i class="fa-solid fa-check" />  100% money-back guarantee  <i class="fa-regular fa-circle-question" /></button></p>
            </div>
        <div className="add-to-cart">
            
              { <button onClick={addToCart} className="add-to-cart-button">
                Add to Cart
              </button> }
              
        </div>
        <div id="fav-in-page-detail">
              <FavoriteIcon
                
                sessionUser={sessionUser}
                product={product}
                onpagedetails={"YES"}
              />
        </div>
        </div>
            
            
        </div>
        
        
    )

}
export default ProductDetails;
