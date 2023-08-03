const GET_ORDERS = "order/GET_ORDERS"
const CREATE_ORDER = "order/CREATE_ORDER"
const EDIT_ORDER = "order/EDIT_ORDER"
const DELETE_ORDER = "order/DELETE_ORDER"


const getOrder = (orders) => ({
    type:GET_ORDERS,
    orders
})
const createOrder = (newOrder) => ({
    type:CREATE_ORDER,
    newOrder
})
const editOrder = (editOrder) => ({
    type: EDIT_ORDER,
    editOrder,
  })
const deleteOrder = (deleteOrder) => ({
    type: DELETE_ORDER,
    deleteOrder,
})

export const fetchOrders = () => async (dispatch) => {
    const res = await fetch("/api/orders")
  
    if (res.ok) {
      const { orders } = await res.json()
      dispatch(getOrder(orders))
    }
  }
  

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

export const thunkDeleteOrder = (orderId) => async (dispatch) => {
    const response = await fetch(`/api/orders/${orderId}`, {
      method: "DELETE",
    })
    let deleteOrderObj
    if (response.ok) {
        deleteOrderObj = await response.json() 
      dispatch(deleteOrder(deleteOrderObj.order))
      return
    }
}

const initialState = {}
const orderReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_ORDERS:
        action.orders.forEach((order) => {
        newState[order.id] = order
        })
      return newState
        case CREATE_ORDER:   
        newState = { ...state }
        newState[action.newOrder.id] = action.newOrder
        return newState
        case EDIT_ORDER:
        newState = { ...state }
        newState[action.editOrder.id] = action.editOrder
        return newState
        case DELETE_ORDER:
        newState = { ...state }
        delete newState[action.deleteOrder.id]
        return newState

        default:
            return state;
        }
    }
    
export default orderReducer
