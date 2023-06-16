import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/products";
import OpenModalButton from "../../components/OpenModalButton";
import PostReviewModal from "../PostReviewModal";
import EditReview from "../EditReview";
import DeleteReview from "../DeleteReview";
import { useParams, useHistory } from "react-router-dom";
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
            <div className="pd-rightcontainer">
                <img alt={product?.title} src={product?.previewImage} className="pd-mainimage" />
            </div>
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
                            <h3>About {product?.title}</h3>
                            <p>{product?.description}</p>
                        </div>
                        <div className="bottom-tabs-desc">
                                <div className="description-list">
                                    <ul>
                                        <li>Size:{product?.size}</li>
                                        <li>Color:{product?.frameColor}</li>
                                        <li>Material:{product?.frameMaterial}</li>
                                        <li>Shape:{product?.frameShape}</li>
                                        <li>Type:{product?.frameType}</li>
                                    </ul>
                                </div>
                                <div>
                                    <img src={product?.previewImage} alt={product?.title} width="120px" height="100px" />
                                </div>
                        </div>
                </div>    
            </div>
            <div className="total-reviews">
                <div>
                    {product?.reviews.length ? ` ${reviewAvg()}  ⭐` : ""}
                    {reviewsLength()} 
                </div>
                <div className="create-review-button">
                    {sessionUser &&
                    sessionUser.id !== product?.userId &&
                    !reviewExists && (
                    <OpenModalButton
                    buttonText="Post Review"
                    modalComponent={<PostReviewModal product={product} />}
                    />  
                    )}
                </div>    
            </div>
            {product?.reviews.length ? (
                <div className="review-map">
                    { product.reviews.map((r) => (
                            <div key={r.id}>
                                <div>
                                <ul>
                                    <li>{reviewAvg()}</li>
                                    <li>{r.user?.username} </li>
                                    <li>{r.createdAt}</li>
                                </ul>
                                </div>
                                <div>
                                <ul>
                                    <li>{r.reviewTitle}</li>
                                    <li>{r.review} </li>
                                    
                                <div>
                                    <span>{r.style}</span>
                                    <span>{r.fit}</span>
                                    <span>{r.quality}</span>
                                </div>
                                <div key={r.id} className={r.reviewImage ? "" : "hidden"}>
                                <img src={r.reviewImage} alt={product?.title} />
                                </div>
                                
                                </ul>
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
            <div><button>Free shipping & returns</button></div>
            <div><button>100% money-back guarantee</button></div>
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
            <div><button>Add to Favorites</button></div>
            
          </div>
        </div>
        
    )

}
export default ProductDetails;
