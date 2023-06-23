const GET_PRODUCTS = "products/GET_PRODUCTS"
const CREATE_REVIEW = "products/CREATE_REVIEW"
const EDIT_REVIEW = "products/EDIT_REVIEW"
const DELETE_REVIEW ="products/DELETE_REVIEW"


//action creator
const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products
})
const createReview = (newReview) => ({
    type: CREATE_REVIEW,
    newReview
})
const editReview = (review) => ({
    type: EDIT_REVIEW,
    review
})
const deleteReivew = (review) => ({
    type: DELETE_REVIEW,
    review
})







//Thunk Action Creators
export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products")
    
    if (res.ok) {
        const {products} = await res.json();
        dispatch(getProducts(products));
    }
}

//Reviews Thunk
export const thunkNewReview = (review,productId) => async (dispatch) => {
    
    const response = await fetch(`/api/products/${productId}/reviews`,{
        method:'POST',
        headers:{ "Content-Type" : 'application/json' },
        body: JSON.stringify(review)
    })

    let newReviewObj
    if(response.ok) {
        newReviewObj = await response.json();
        await dispatch(createReview(newReviewObj.review))
    } 
    
    return review;  
};

export const thunkEditReview = (editreview, productId) => async (dispatch) => {
    
    const response = await fetch(`/api/products/${productId}/reviews/${editreview.id}`,{
        method:'PUT',
        headers:{ "Content-Type" : 'application/json' },
        body: JSON.stringify(editreview)
    })
    if(response.ok) {
        const reviewEditObj = await response.json();
        dispatch(editReview(reviewEditObj.review))
        return reviewEditObj.review;  
    };
  }

  export const thunkDeleteReview = (productId, reviewId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/reviews/${reviewId}`,{
        method:'DELETE'
    })

    if(response.ok) {
      const reviewObj = await response.json();
      dispatch(deleteReivew(reviewObj.review))
    }
  }


const initialState = {}
const productsReducer = (state = initialState, action) => {
    let newState = {}
    let productId
    let product
    let newProduct
    let index

switch (action.type) {
    case GET_PRODUCTS:
        action.products.forEach(product => {
            newState[product.id] = product
        })
        return newState
    case CREATE_REVIEW:
        newState = { ...state }
        productId = action.newReview.productId
        product = state[productId]
        newProduct = { ...product }
        newState[productId] = newProduct
        newProduct.reviews = [...product.reviews, action.newReview]
        return newState
    case EDIT_REVIEW:
        newState = { ...state}
        productId = action.review.productId
        product = state[productId]
        newProduct = { ...product }
        newState[productId] = newProduct
        index = product.reviews.findIndex(review => review.id === action.review.id)
        newProduct.reviews = [...product.reviews]
        newProduct.reviews[index] = action.review
        return newState
    case DELETE_REVIEW:
        newState = { ...state}
        productId = action.review.productId
        product = state[productId]
        newProduct = { ...product }
        newState[productId] = newProduct
        index = product.reviews.findIndex(review => review.id === action.review.id)
        newProduct.reviews = [...product.reviews]
        newProduct.reviews.splice(index, 1)
        return newState
    default:
        return state;
    }
}

export default productsReducer
