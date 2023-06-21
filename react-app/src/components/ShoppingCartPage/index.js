import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products"
import { useHistory } from "react-router-dom";
import OpenModalButton from "../../components/OpenModalButton";
import DeleteShoppingCart from "../DeleteShoppingCart";
import { placeOrderThunk } from "../../store/session";
import "./ShoppingCartPage.css"

// import { placeOrderThunk } from "../../store/session";

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    
    // let title;
    // if (sessionUser) {
    //     title = `${sessionUser.username}'s Shopping Cart`
    // }else {
    //     history.push("/")
    // }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const checkout = () => {
      // history.push("/")
      window.alert("Order Placed!")
      dispatch(placeOrderThunk(sessionUser.id))
    }

    return (
        <div className="bodyContainer">
          <div className="cartpage">
            {sessionUser?.cart_session?.cart.length ?(
              <div style={{display:"flex",gap:"1rem"}}>
                  <h1>Shopping Cart </h1>
                  <div style={{marginTop:"1rem"}}>{sessionUser?.cart_session?.cart.length} ITEM IN CART</div>
              </div>
            ): <></>}
            
          
            <div className="product-in-cartpage">
              {sessionUser?.cart_session?.cart.map((ele) => (
                <div key={ele.product.id} className="item-in-shop" style={{display:"flex", justifyContent:"center",textAlign:"center"}}>
                    {console.log("inside the map", ele)}
                    <NavLink to={`/products/${ele.product.id}`}>
                        <img
                          className="product-image"
                          src={ele.product.previewImage}
                          alt="products"
                        />
                      {/* <div className="price">$ {ele.product.price.toFixed(2)}</div> */}
                    </NavLink>
                    <div className="item-in-shop-info">
                      <div>Product: {ele.product.title}</div>
                      <div>Price: $ {ele.product.price.toFixed(2)}</div>
                      <div>Type: {ele.product.frameType}</div>
                      <div>Size: {ele.product.size}</div>
                      <div>Total: $ {ele.product.price.toFixed(2) * ele.quantity}</div>
                    </div>
                    <div className="delete-item-in-cart-btn">
                      <OpenModalButton
                    buttonText="Delete Item"
                    modalComponent={
                      <DeleteShoppingCart
                        cartId={ele.id}
                        productId={ele.product.id}
                        sessionuserId={sessionUser.id}
                      />
                    }
                    />
                    </div>
                    </div>
                ))}
            </div>
          </div>
            
            <div className="empty-cart">
              
              <div className={sessionUser?.cart_session?.cart.length >= 1? "hidden":""}>
                
                  <div style={{display:"flex",flexDirection:"column",alignContent:"center",gap:"1.8rem",textDecoration:"none"}}>
                  <div style={{display:"flex",justifyContent:"center"}}><i className="fa-solid fa-cart-shopping fa-2xl" /></div>
                  <h2 style={{textDecoration:"none"}}>Shopping Cart is Empty</h2>
                  <p>You have no items in your shopping cart</p>
                  <NavLink exact to="/products" style={{display:"inline-block",border:"solid", width:"7rem",height:"2rem",margin:"0.1px 80px",padding:"1px 1px", textAlign:"center"}}>Shop 🤓</NavLink>
                  </div>
                
              </div >
            </div>
            <button onClick={checkout} 
              className={sessionUser?.cart_session?.cart.length >= 1? "checkout-btn":"checkout-btn hidden"}>
                Proceed to checkout
            </button>
        </div> 
        
    )
}

export default ShoppingCartPage
