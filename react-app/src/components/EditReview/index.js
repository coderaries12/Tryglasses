import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { thunkEditReview } from "../../store/products"
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import './EditReview.css'

const EditReview = ({product, review}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {closeModal} =  useModal();

const [reviewTitle, setReviewTitle] = useState(review?.reviewTitle);
const [quality, setQuality] = useState(review?.quality);
const [fit, setFit] = useState(review?.fit);
const [style, setStyle] = useState(review?.style);
const [reviews, setReviews] = useState(review?.review);
const [stars, setStars] = useState(review?.stars);
const [reviewImage, setReviewImage] = useState(review?.reviewImage);

const [errors, setErrors] = useState({});


    useEffect(() => {
        const errors = {};
        if (reviews.length > 255 || reviews.length < 10)
              errors.reviews = "Please enter the valid Review "
              
            setErrors(errors);
        
    },[review, stars, reviews])

const handleSubmit = async(e) => {
    e.preventDefault();
    const editreview = {
            ...review,
            reviewTitle,
            quality,
            fit,
            style,
            review:reviews,
            stars,
            reviewImage
    }
    // const errors = {};
    
    // if (stars > 5 || stars < 1) {
    //         errors.stars = "Stars must be between 1 and 5";
    // }
    // if (reviews.length > 255 || reviews.length < 5)
    //       errors.reviews = "Please enter the valid Review "
          
    //     setErrors(errors);
       
    

    let editedReview = await dispatch(thunkEditReview(editreview, product.id))
    if (editedReview){
        history.push(`/products/${product.id}`) 
    }
    closeModal()
}
return (
    <div className="review-modal">
    <h1>Edit a Review</h1>
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
        <select name="quality" id="itemquality" onChange={(e) => setQuality(e.target.value)} value={quality} required>
            <option value=""> Choose Quality </option>
            <option value="low">Low</option>
            <option value="average">Average</option>
            <option value="high">High</option>    
        </select>
        </div>
        <div>
        <label for="itemfit"> Fit:</label>
        <select name="fit" id="itemfit" onChange={(e) => setFit(e.target.value)} value={fit} required>
            <option value=""> Choose Fit </option>
            <option value="loose">Loose</option>
            <option value="truetosize">True to size</option>
            <option value="tight">Tight</option>    
        </select>
        </div>
        <div>
        <label for="itemstyle"> Style:</label>
        <select name="style" id="itemstyle" onChange={(e) => setStyle(e.target.value)} value={style} required>
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
            type="text"
            value={reviewTitle}
            minlength="5"
            maxlength="50"
            placeholder='e.g.Love this Frame'
            
            onChange={(e) => setReviewTitle(e.target.value)} required />
        </div>
        <div>
        <label> Your Review </label>
          <h4 className="formErrors">{errors?.reviews}</h4>
          <textarea
            rows="8"
            cols="40"
            value={reviews}
            minlength="10"
            maxlength="255"
            style={{resize:"none"}}
            placeholder='e.g.I bought this frame two weeks ago and I am so happy'
            onChange={(e) => setReviews(e.target.value)} required />
        </div>
        <div>
        <label> Don't be shy, Upload  edit picture of you in new glasses</label>
          <input
            type="url"
            accept=".png,.jpg,.jpeg,.gif"
            placeholder='Add Photo'
            value={reviewImage}
            onChange={(e) => setReviewImage(e.target.value)}/>
        </div>
    <div>
        <button
          className="createbutton-product"
          type="submit"
          disabled={!!Object.values(errors).length}
        >
          Share your edit thoughts
        </button>
      </div>   
    </form>
  </div>
)

}

export default EditReview
