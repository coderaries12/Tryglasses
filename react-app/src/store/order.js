const GET_ORDERS = "order/GET_ORDERS"
const CREATE_ORDER = "order/CREATE_ORDER"
const EDIT_ORDER = "order/EDIT_ORDER"
const DELETE_ORDER = "order/DELETE_ORDER"
const CREATE_ORDERHISTORY = "order/CREATE_ORDERHISTORY"
const ADD_PRODUCT_ORDER = "session/ADD_PRODUCT_ORDER"


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
const createOrderHistory = (newOrderhistory) => ({
    type:CREATE_ORDERHISTORY,
    newOrderhistory
})
const addProductOrder = (updatedOrder) => ({
	type: ADD_PRODUCT_ORDER,
	updatedOrder
})


export const fetchOrders = () => async (dispatch) => {
    const res = await fetch("/api/orders")
  
    if (res.ok) {
      const { orders } = await res.json()
      dispatch(getOrder(orders))
    }
  }
  

export const thunkNewOrder = (order, currentUserId) => async (dispatch) => {
   
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
// export const thunkNewOrderHistory = (orderId,orderhistory) => async (dispatch) => {
//     // console.log("inside the order thunk", order)
//     const response = await fetch(`/api/orders/${orderId}/history/new`,{
//         method:'POST',
//         headers:{ "Content-Type" : 'application/json' },
//         body: JSON.stringify(orderhistory)
//     })

//     let newOrderObj
//     if(response.ok) {
//         newOrderObj = await response.json();
//         await dispatch(createOrderHistory(newOrderObj.orderhistory))
//     } 
    
//     return newOrderObj?.orderhistory;  
// };

export const thunkProductOrder = (orderId, product_ids) => async (dispatch) => {
	const response = await fetch(`/api/orders/${orderId}/order_products/products`,{
        method:'PUT',
        headers:{ "Content-Type" : 'application/json' },
        body: JSON.stringify(product_ids)
    })
    if(response.ok) {
        const updatedOrder = await response.json();
        dispatch(addProductOrder(updatedOrder))
        return updatedOrder;  
    };
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
        case CREATE_ORDERHISTORY:   
        newState = { ...state }
        newState[action.newOrderhistory.id] = action.newOrderhistory
        return newState
        case ADD_PRODUCT_ORDER:
			  return { ...action.updatedOrder}

        default:
            return state;
        }
    }
    
export default orderReducer
