import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/products";
import OpenModalButton from "../../components/OpenModalButton";

import { useHistory, Link, useParams } from "react-router-dom";
import "./productdetail.css"

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

    return (
        <div className="product-single">
            <div className="pd-container">
                <img alt={product?.title} src={product?.previewImage} className="pd-mainimage" />
            </div>
            <div className="pd-subimage">
            {product?.images.map((image) => (
                
                  <button className="image-button"><img src={image.image} /></button>
                
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
                                    <img src={product?.previewImage} width="120px" height="100px" />
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
                    // modalComponent={<PostReviewModal productId={productId} />}
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
                                    <li>{r.createdAt}</li>
                                <div>
                                    <li>{r.style}</li>
                                    <li>{r.fit}</li>
                                    <li>{r.quality}</li>
                                </div>
                                <img src={r.reviewImage} />
                                </ul>
                                </div>
                             
                            </div>
                        
                        ))}  
                         
                </div>
                ): (<div>Be the first to post a review!</div>)}
        </div>
        
    )

}
export default ProductDetails;
