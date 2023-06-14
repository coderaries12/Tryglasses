const GET_PRODUCTS = "products/GET_PRODUCTS"



//action creator
const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products
})






//Thunk Action Creators
export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products")
    
    if (res.ok) {
        const {products} = await res.json();
        dispatch(getProducts(products));
    }
}

const initialState = {}
const productsReducer = (state = initialState, action) => {
    let newState = {}


switch (action.type) {
    case GET_PRODUCTS:
        action.products.forEach(product => {
            newState[product.id] = product
        })
        return newState
    default:
        return state;
    }
}

export default productsReducer
