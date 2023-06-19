import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/products";
import OpenModalButton from "../../components/OpenModalButton";
import PostReviewModal from "../PostReviewModal";
import EditReview from "../EditReview";
import DeleteReview from "../DeleteReview";
import { useParams, useHistory } from "react-router-dom";
// import ImageCarousel from "./ImageCarousel";
import "./productdetail.css"
import { thunkAddToCart, thunkUpdateCart } from "../../store/session";


const ProductDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productId } = useParams();
    const product = useSelector((state) => state.products[productId]);
    const sessionUser = useSelector((state) => state.session.user);

    console.log("product detail component", product?.reviews.length)
    
    const reviewAvg = () => {
        let totalStars = 0;
        product.reviews.forEach((review) => {
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

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

      let value = 1;
      const itemquantity = () => {
        value = document.getElementById("itemquantity").value;
        console.log("value:", value);
      };
    
      const addToCart = async () => {
        let checkproduct;
    
        if (!sessionUser) {
          window.alert("Please log in first");
        } else {
          console.log("checkproduct:", sessionUser);
          checkproduct = sessionUser.cart_session.cart.find(
            (ele) => ele.productId == product.id
          );
    
        if (!checkproduct) {
            await dispatch(thunkAddToCart(sessionUser, product, value))
            history.push("/shoppingcart")
        } else if (checkproduct) {
            value = parseInt(parseInt(value) + checkproduct.quantity);
            let cartId = checkproduct.id;
            console.log("valuesssss:", value);
            dispatch(thunkUpdateCart(sessionUser, cartId, product, value)).then(
              history.push("/shoppingcart")
            );
        }
        }
      };
      

    return (
        <div className="product-single">
            <div className="product-container">
            
            {<div className="pd-rightcontainer">
                <img alt={product?.title} src={product?.previewImage} className="pd-mainimage" />
            </div> }

            <div className="pd-subimage">
            {product?.images.map((image) => (
                
                  <button className="image-button"><img src={image.image} alt={product?.title} /></button>
                
            ) )}
            </div> 
            <div className="bottom-tabs-wrapper">
                <div className="pd-bottom">
                    <button className="bottom-tabs">Description</button>
                    <button className="bottom-tabs">Frame & Measurements</button>
                    <button className="bottom-tabs">Shipping & Returns</button>
                </div>
                <div className="bottom-tabs-info">
                        <div>
                            <h2>Description :</h2>
                            <h4>About {product?.title}</h4>
                            <p>{product?.description}</p>
                        </div>
                        <div className="bottom-tabs-desc">
                                <div className="description-list">
                                    <h2>Frame & Measurements :</h2>
                                    <ul>
                                        <li>Size: {product?.size}</li>
                                        <li>Color: {product?.frameColor}</li>
                                        <li>Material: {product?.frameMaterial}</li>
                                        <li>Shape: {product?.frameShape}</li>
                                        <li>Type: {product?.frameType}</li>
                                    </ul>
                                </div>
                                <div className="frameimage-div">
                                    <img src={product?.previewImage} alt={product?.title} width="200px" height="100px" />
                                </div>        
                        </div>
                        <div className="shipping-returns">
                            <div className="shipping-part1">
                                <h2>Shipping & Returns:</h2>
                                <h4>Enjoy Free Shipping and returns on all orders</h4>
                                <p>For orders in the US & Canada. If, for any reason, you are not completely satisfied with your order, you may return it within the first 14 days for free. *US & Canada orders only. Limitations apply.</p>
                            </div>
                            <div className="shipping-part2">
                                <h4>Please note</h4>
                                <p>Production requires additional time for Single vision - 3 business days, Multifocal - 6 business days.</p>
                            </div>
                        </div>
                </div>    
            </div>
            <div className="total-reviews">
                <div className="reviews-length-star">
                    <div className="star">{product?.reviews.length ? ` ${reviewAvg()}  ⭐` : ""}</div>
                    <div>{reviewsLength()} </div>
                    
                </div>
                <div className="button-post-review">
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
                                    <p>{reviewAvg()}⭐</p>
                                    <p id="username">{r.user?.username} </p>
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
                                <div key={r.id} className={r.reviewImage ? "" : "hidden"}>
                                <img src={r.reviewImage} alt={product?.title} />
                                </div>
                                
                                </ul>
                                </div>
                                </div>
                                <div className="edit-delete-modal">
                                  {sessionUser && r?.userId === sessionUser.id && (
                                <div className="review-btn">
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
                             
                            </div>
                        
                        ))}  
                         
                </div>
                ): (<div>Be the first to post a review!</div>)}
            </div>
          <div className="right-side-container">
            <h1>{product?.title}</h1>
            <div>{reviewExists && reviewAvg()}⭐({reviewsLength()})</div>
            <div>${product?.price}</div>
            <div>Size: {product?.size}</div>
            <div className="right-ship-return"><button>Free shipping & returns</button></div>
            <div className="right-ship-return"><button>100% money-back guarantee</button></div>
        <div className="add-to-cart">
            <div>
              <label>Quantity</label>
            </div>
            <select
              name="quantity"
              placeholder="Quantity"
              id="itemquantity"
              onChange={itemquantity}
            >
              {/* <option value="" disabled selected>Select quantity</option> */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="cart-button">
              <button onClick={addToCart} className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
        </div>
            <div className="cart-button"><button>Add to Favorites</button></div>
            
        </div>
        </div>
        
    )

}
export default ProductDetails;
