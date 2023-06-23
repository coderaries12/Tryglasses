import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkNewReview } from "../../store/products";
import { useModal } from "../../context/Modal";
import "./PostReview.css";

const PostReviewModal = ({ product }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const sessionUser = useSelector((state) => state.session.user);

  const [reviewTitle, setReviewTitle] = useState("");
  const [quality, setQuality] = useState("");
  const [fit, setFit] = useState("");
  const [style, setStyle] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(1);
  const [reviewImage, setReviewImage] = useState("");

  const [errors, setErrors] = useState({});

  
  useEffect(() => {
    const errors = {};
    if (stars > 5 || stars < 1) {
        errors.stars = "Stars must be between 1 and 5";
      }
    if (review.length > 255 || review.length < 5)
      errors.review = "Please enter the Review "
    setErrors(errors);
    
  }, [reviewTitle, quality, fit, style, review, stars, reviewImage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newreview = {
      productId: product.id,
      userId: sessionUser.id,
      reviewTitle,
      quality,
      fit,
      style,
      review,
      stars,
      reviewImage
    };
    
      
    let editedReview = await dispatch(thunkNewReview(newreview, product.id));
    closeModal();
 }

  return(
  <div className="review-modal">
    <h1>Add a Review</h1>
    <div>
        <div>
            <h3>{product.title} {product.color}</h3>
            <img src={product.previewImage} alt={product?.title} width="100px" height="80px"></img>
        </div>
    </div>
    <form onSubmit={handleSubmit}>
        <div className="review-stars">
                <h4> How would you rate your glasses? </h4>
                <h4 className="formErrors">{errors?.stars}</h4>
                <div className="stars">
                            <i
                            className={
                                stars >= 1
                                ? "fa-sharp fa-solid fa-star"
                                : "fa-regular fa-star fa-lg"
                            }
                            style={stars >= 1 ? { color: "#FCE79A" } : {}}
                            onClick={() => {
                                setStars(1);
                            }}
                            ></i>
                            <i
                            className={
                                stars >= 2
                                ? "fa-sharp fa-solid fa-star"
                                : "fa-regular fa-star fa-lg"
                            }
                            style={stars >= 2 ? { color: "#FCE79A" } : {}}
                            onClick={() => {
                                setStars(2);
                            }}
                            ></i>
                            <i
                            className={
                                stars >= 3
                                ? "fa-sharp fa-solid fa-star"
                                : "fa-regular fa-star fa-lg"
                            }
                            style={stars >= 3 ? { color: "#FCE79A" } : {}}
                            
                            onClick={() => {
                                setStars(3);
                            }}
                            ></i>
                            <i
                            className={
                                stars >= 4
                                ? "fa-sharp fa-solid fa-star"
                                : "fa-regular fa-star fa-lg"
                            }
                            
                            style={stars >= 4 ? { color: "#FCE79A" } : {}}
                            onClick={() => {
                                setStars(4);
                            }}
                            ></i>
                            <i
                            className={
                                stars >= 5
                                ? "fa-sharp fa-solid fa-star"
                                : "fa-regular fa-star fa-lg"
                            }
                            
                            style={stars >= 5 ? { color: "#FCE79A" } : {}}
                            onClick={() => {
                                setStars(5);
                            }}
                            ></i>    
                </div>  
        </div> 
        <div className="quality-fit-style-div">
        <div>
        <label for="itemquality">Quality:</label>
        <h4 className="formErrors">{errors?.quality}</h4>
        <select name="quality" id="itemquality" onChange={(e) => setQuality(e.target.value)} required>
            <option value=""> Choose Quality </option>
            <option value="low">Low</option>
            <option value="average">Average</option>
            <option value="high">High</option>    
        </select>
        </div>
        <div>
        <label for="itemfit"> Fit:</label>
        <h4 className="formErrors">{errors?.fit}</h4>
        <select name="fit" id="itemfit" onChange={(e) => setFit(e.target.value)} required>
            <option value=""> Choose Fit </option>
            <option value="loose">Loose</option>
            <option value="truetosize">True to size</option>
            <option value="tight">Tight</option>    
        </select>
        </div>
        <div>
        <label for="itemstyle"> Style:</label>
        <h4 className="formErrors">{errors?.style}</h4>
        <select name="style" id="itemstyle" onChange={(e) => setStyle(e.target.value)} required>
            <option value=""> Choose Style </option>
            <option value="chic">Chic</option>
            <option value="vintage">Vintage</option>
            <option value="classic">Classic</option>    
        </select>
        </div>
        </div>
        <div>
        <label>Give your review a title </label>
          <h4 className="formErrors">{errors?.reviewTitle}</h4>
          <input
            placeholder='e.g.Love this Frame'
            type="text"
            value={reviewTitle}
            minlength="5"
            maxlength="50"
            onChange={(e) => setReviewTitle(e.target.value)} required />
        </div>
        <div>
        <label> Your Review </label>
          <h4 className="formErrors">{errors?.review}</h4>
          <textarea
            type="text"
            rows="8"
            cols="45"
            value={review}
            minlength="10"
            maxlength="255"
            style={{resize:"none"}}
            placeholder='e.g.I bought this frame two weeks ago and I am so happy'
            onChange={(e) => setReview(e.target.value)} required />
        </div>
        <div>
        <label> Don't be shy, share Upload picture of you in your new glasses</label>
          <input
            type="url"
            accept=".png,.jpg,.jpeg,.gif"
            placeholder='Add Photo'
            value={reviewImage}
            onChange={(e) => setReviewImage(e.target.value)} />
            </div>
    <div>
        <button
          className="createbutton-product" type="submit"  disabled={!!Object.values(errors).length}>
          Share your thoughts
        </button>
      </div>   
    </form>
  </div>
  )
}
export default PostReviewModal;
