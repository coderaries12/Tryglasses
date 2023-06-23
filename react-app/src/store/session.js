// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const ADD_FAV = "session/ADD_FAV"
const DELETE_FAV = "session/DELETE_FAV"
const ADD_CART = "session/ADD_CART"
const UPDATE_CART ="session/UPDATE_CART"
const DELETE_CART_ITEM = "session/DELETE_CART_ITEM"
const DELETE_CART = "session/DELETE_CART"

const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const addFav = (updatedUser) => ({
	type: ADD_FAV,
	updatedUser
})
const deleteFav = (updatedUser) => ({
	type: DELETE_FAV,
	updatedUser
})

const removeUser = () => ({
	type: REMOVE_USER,
});

const addCart = (newCartItem) => ({
	type: ADD_CART,
	newCartItem
})

const updateCart = (updatedCartItem) => ({
	type: UPDATE_CART,
	updatedCartItem
})

const deleteCart = (cartSession) => ({
	type: DELETE_CART,
	cartSession
})

const deleteCartItem = (cartItem) => ({
	type: DELETE_CART_ITEM,
	cartItem
})



export const authenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
};

export const login = (email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(removeUser());
	}
};

export const signUp = (username, email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const thunkAddFav = (productId, userId) => async (dispatch) => {
	const response = await fetch(`/api/users/${userId}/favorites/products/${productId}`,{
        method:'PUT',
        headers:{ "Content-Type" : 'application/json' },
        // body: JSON.stringify(editreview)
    })
    if(response.ok) {
        const updatedUser = await response.json();
        dispatch(addFav(updatedUser))
        return updatedUser;  
    };
}

export const thunkDeleteFav = (productId, userId) => async (dispatch) => {
	const response = await fetch(`/api/users/${userId}/favorites/products/${productId}`,{
        method:'DELETE',
	})
	if(response.ok) {
        const updatedUser = await response.json();
        dispatch(deleteFav(updatedUser))
        return updatedUser;  
    };
}




export const thunkAddToCart = (sessionUser, product, value) => async (dispatch) => {
	const response = await fetch(`/api/users/${sessionUser.id}/cart/products/${product.id}/${value}`,{
        method:'POST',
		headers:{ "Content-Type" : 'application/json' },
		body: JSON.stringify({
			sessionId: sessionUser.id,
			productId: product.id,
			quantity: value
		}),
	})
	if(response.ok) {
		
        const newCartItem = await response.json();
		
        dispatch(addCart(newCartItem.newCartItem))
        return newCartItem
    };
}

export const thunkUpdateCart = (sessionUser, cartId, product, value) => async (dispatch) => {
	
		const response = await fetch(`/api/users/${sessionUser.id}/cart/products/${product.id}/${cartId}/${value}`,{
			method:'PUT',
			headers:{ "Content-Type" : 'application/json' },
			body: JSON.stringify({
				quantity: value
			}),
		})
		if(response.ok) {
			const updatedCartItem = await response.json();
			dispatch(updateCart(updatedCartItem.updatedCartItem))
			return updatedCartItem
		};
	}

	export const thunkDeleteCartItem = (sessionUserId,cartId, productId,) => async (dispatch) => {
		
			const response = await fetch(`/api/users/${sessionUserId}/cart/products/${productId}/${cartId}`,{
				method:'DELETE',
				headers:{ "Content-Type" : 'application/json' }
			})
			if(response.ok) {
				const cartItemObj = await response.json();
				const cartItem = cartItemObj.cartItem
				
				dispatch(deleteCartItem(cartItem))
				return cartItem
			};
		}
	
	export const placeOrderThunk = (userId) => async (dispatch) => {
		const options = {
				method:'DELETE',
				headers: {
					"Content-Type": "application/json"
				}
		}
		const response = await fetch(`/api/users/${userId}/cart`, options)
			
		if(response.ok) {
				const cartSessionObj = await response.json()
				const cartSession = cartSessionObj.cart_session
				dispatch(deleteCart(cartSession))
				return cartSession
		}
		}

//reducer
const initialState = { user: null };
export default function reducer(state = initialState, action) {
	let index
	let newState
	let cartItemId
	let stateCart
	let newUser
	let newCartSession
	let newStateCart
	switch (action.type) {
		case SET_USER:
			return { user: action.payload };
		case REMOVE_USER:
			return { user: null };
		case ADD_FAV:
			return { ...action.updatedUser}
		case DELETE_FAV:
			return { ...action.updatedUser}
		case ADD_CART:
			let newCart = state.user.cart_session.cart
			newCart.push(action.newCartItem)
			return { ...state, user:{...state.user, cart_session:{...state.user.cart_session, cart: newCart}},
					}
		case UPDATE_CART:
			let updatedCart = state.user.cart_session.cart
			index = state.user.cart_session.cart.findIndex(ele=>ele.productId === action.updatedCartItem.productId)
			updatedCart[index] = action.updatedCartItem
			return { ...state, user:{...state.user, cart_session:{...state.user.cart_session, cart: updatedCart}},
					}
		case DELETE_CART_ITEM:
			newState = { ...state }
			cartItemId = action.cartItem.id
			stateCart = state.user.cart_session.cart
			newUser = { ...state.user }
			newCartSession = { ...state.user.cart_session }
			newStateCart = [...stateCart]
			newState.user = newUser
			newState.user.cart_session = newCartSession
			newState.user.cart_session.cart = newStateCart
			index = stateCart.findIndex(cartItem => cartItem.id === cartItemId)
			newStateCart.splice(index, 1)
			return newState
		case DELETE_CART:
			newState = { ...state }
			newUser = { ...state.user }
			newCartSession = { ...state.user.cart_session }
			newStateCart = []
			newState.user = newUser
			newState.user.cart_session = newCartSession
			newState.user.cart_session.cart = newStateCart
			return newState
		default:
			return state;
	}
}
