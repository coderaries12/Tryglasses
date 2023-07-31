const CREATE_ORDER = "order/CREATE_ORDER"
const EDIT_ORDER = "order/EDIT_ORDER"

const createOrder = (newOrder) => ({
    type:CREATE_ORDER,
    newOrder
})
const editOrder = (editOrder) => ({
    type: EDIT_ORDER,
    editOrder,
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
    
    return newOrderObj.order;  
};

export const thunkEditOrder = (editorder, editorderId) => async (dispatch) => {
    console.log("inside the edit thunk", editorder, editorderId)
    const response = await fetch(`/api/orders/${editorderId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editorder),
    })
    
    let editOrderObj;
    if (response.ok) {
      editOrderObj = await response.json()
      dispatch(editOrder(editOrderObj.order))
      return editOrderObj.order
    }
  }

const initialState = {}
const orderReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case CREATE_ORDER:
            
        newState = { ...state }
        newState[action.newOrder.id] = action.newOrder
        return newState

        case EDIT_ORDER:
        newState = { ...state }
        newState[action.editOrder.id] = action.editOrder
        return newState

        default:
            return state;
        }
    }
    
export default orderReducer
