import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products"
import { useHistory } from "react-router-dom";
import OpenModalButton from "../../components/OpenModalButton";
import DeleteShoppingCart from "../DeleteShoppingCart";
import { placeOrderThunk } from "../../store/session";
import { thunkAddToCart, thunkUpdateCart } from "../../store/session";
import "./ShoppingCartPage.css"

// import { placeOrderThunk } from "../../store/session";

const ShoppingCartPage = ({product}) => {
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

    let value = 1;
    // let checkproduct = sessionUser.cart_session.cart.find(
    //   (ele) => ele.productId == product.id
    // );
      const itemquantity = (product) => {
        let checkproduct
        checkproduct = sessionUser.cart_session.cart.find(
                (ele) => ele.productId == product.id
                 );
        value = document.getElementById("itemquantity").value;
        
        value = parseInt(parseInt(value) + checkproduct.quantity);
              let cartId = checkproduct.id;
              
              dispatch(thunkUpdateCart(sessionUser, cartId, product, value)).then(
              history.push("/shoppingcart")
            );
        

      };

      

    const checkout = () => {
      // history.push("/")
      window.alert("Order Placed!")
      dispatch(placeOrderThunk(sessionUser.id))
    }

    return (
        <div className="bodyContainer">
          
          <div className="cartpage">
            {sessionUser?.cart_session?.cart.length ?(
              <div className="fav-title">
                  <p>Shopping Cart</p>
                  <span style={{marginTop:"35px", marginLeft:"20px"}}>{sessionUser?.cart_session?.cart.length} ITEM IN CART</span>
                  
              </div>
            
                  
              
            ): <></>}
            
          
            <div className="product-in-cartpage">
              {sessionUser?.cart_session?.cart.map((ele) => (
                <div key={ele.product.id} className="item-in-shop">
                    
                    <NavLink to={`/products/${ele.product.id}`}>
                        <img
                          className="product-image"
                          src={ele.product.previewImage}
                          alt="products"
                        />
                      {/* <div className="price">$ {ele.product.price.toFixed(2)}</div> */}
                    </NavLink>
                    <div className="item-in-shop-info">
                      <span style={{fontSize:"20px",fontWeight:"700"}}>{ele.product.title}</span>
                      <div>
                      <label>Quantity: </label>
            
                      <select
                        name="quantity"
                        placeholder="Quantity"
                        id="itemquantity"
                        onChange={()=> itemquantity(ele.product)}
                      >
                        {/* <option value="" disabled selected>Select quantity</option> */}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      </div>
                      <div>Price: $ {ele.product.price.toFixed(2)}</div>
                      <div>Type: {ele.product.frameType}</div>
                      <div>Size: {ele.product.size}</div>
                      <div>Total: $ {ele.product.price.toFixed(2) * ele.quantity}</div>
                      <div className="delete-div"><OpenModalButton
                          buttonText="Delete Item"
          
                          modalComponent={
                            <DeleteShoppingCart
                              cartId={ele.id}
                              productId={ele.product.id}
                              sessionuserId={sessionUser.id}
                            />
                          }
                    /></div>
                    </div>
                    {/* <div className="delete-item-in-cart-btn" style={{display:"flex"}}>
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
                    </div> */}
                    </div>
                ))}
            </div>
          </div>
            
            <div className="empty-cart">
              
              <div className={sessionUser?.cart_session?.cart.length >= 1? "hidden":""}>
                
                  <div style={{display:"flex",flexDirection:"column",alignContent:"center",gap:"1rem",textDecoration:"none"}}>
                  <div style={{display:"flex",justifyContent:"center"}}><i className="fa-solid fa-cart-shopping fa-2xl" style={{color:"#23aae2"}} /></div>
                  <p style={{color:"#23aae2",fontSize:"54px",letterSpacing:".08em", marginTop:"2rem" }}>Shopping Cart is Empty</p>
                  <p style={{color:"#8d8d8d", fontFamily:"cursive",fontSize:"26px",letterSpacing:".08em", marginTop:"0.5rem", textAlign:"center" }}>You have no items in your shopping cart</p>
                  <div style={{display:"flex",justifyContent:"center"}}><NavLink className="down-button" style={{backgroundColor:"white",color:"#23aae2",border:"3px solid #6cf", borderRadius:"0px", width:"200px", alignItems:"center"}} exact to="/" href="eyeglasses">Shop </NavLink></div>
                  {/* <NavLink exact to="/" style={{display:"inline-block",border:"solid", width:"7rem",height:"2rem",margin:"0.1px 80px",padding:"1px 1px", textAlign:"center"}}>Shop 🤓</NavLink>  */}
                  </div>
                
              </div >
            </div>
            <div style={{display:"block",justifyContent:"center",margin:"60px 0 0", width:"30%", gap:"1.5rem", marginLeft:"32rem"}}>
            <button onClick={checkout} 
              style={{alignItems:"center"}}
              className={sessionUser?.cart_session?.cart.length >= 1? "checkout-btn":"checkout-btn hidden"}>
                Proceed to checkout
            </button>
            </div>
        </div> 
        
    )
}

export default ShoppingCartPage
