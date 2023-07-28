const CREATE_ORDER = "order/CREATE_ORDER"

const createOrder = (newOrder) => ({
    type:CREATE_ORDER,
    newOrder
})

export const thunkNewOrder = (order, currentUserId) => async (dispatch) => {
    // console.log("inside the order thunk", order)
    const response = await fetch(`/api/orders/new`,{
        method:'POST',
        headers:{ "Content-Type" : 'application/json' },
        body: JSON.stringify(order)
    })

    let newOrderObj
    if(response.ok) {
        newOrderObj = await response.json();
        await dispatch(createOrder(newOrderObj.order))
    } 
    
    return order;  
};

const initialState = {}
const orderReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case CREATE_ORDER:
            
        newState = { ...state }
        newState[action.newOrder.id] = action.newOrder
        return newState

        default:
            return state;
        }
    }
    
export default orderReducer
