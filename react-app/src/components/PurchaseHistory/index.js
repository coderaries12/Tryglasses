import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink, useHistory} from "react-router-dom";
import { fetchOrders } from "../../store/order";
import { placeOrderThunk } from "../../store/session";
import OpenModalButton from "../../components/OpenModalButton";
import DeleteOrder from "../DeleteOrder";
import "./PurchaseHistory.css";

const PurchaseHistory = ({orderId}) => {
    const history = useHistory();
    // const {orderId} = useParams()
    console.log("inside the purchse history", orderId)
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const allOrders = Object.values(useSelector((state) => state.order));
    const orders = allOrders.filter(order => order.userId == sessionUser.id);
    

    useEffect(() => {
        dispatch(fetchOrders());
      }, [dispatch]);

      const checkout = () => {
        history.push("/")
        
         dispatch(placeOrderThunk(sessionUser.id))
        }

    
    orders.sort(function(a,b){
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
    
    orders.forEach(order =>{
        const daysAgo = ~~((new Date().getTime() - new Date(order.createdAt).getTime()) / 1000 / 60 / 60 / 24)
        console.log("inside status function",daysAgo)
        if(daysAgo <= 1) order.status= 'Preparing'
        else if(daysAgo > 1 && daysAgo <= 3) order.status= 'Shipped'
        else order.status= 'Delivered'
    })
    

    return (
        <div style={{minHeight:"62.7vh",marginLeft:"2rem"}}>
           <div className="cartpage-heading">
           <div className="fav-title">
            {/* <p>Hello, {sessionUser.username}</p> */}
        
            </div>
           <div style={{fontSize:"26px",letterSpacing:".08em", marginBottom:"0.5rem" }}>Your order history</div>
            <div style={{color:"#8d8d8d", font:"italic 16px/1 Georgia"}}>You can cancel items on preparing.</div>
           </div> 
            {
                !orders.length ? 
                <div>
                <div style={{color:"#23aae2",fontSize:"54px",letterSpacing:".08em", marginTop:"3rem", textAlign:"center", marginBottom:"2rem" }}>No order placed yet</div> 
                <div style={{display:"flex",justifyContent:"center"}}><NavLink className="down-button" style={{backgroundColor:"white",color:"#23aae2",border:"3px solid #6cf", borderRadius:"0px", width:"200px", alignItems:"center"}} exact to="/" href="eyeglasses">Shop </NavLink></div>
                </div>:
                
                   orders?.map((order) => (
                    <div>
                    <div style={{display:"flex", flexDirection:"row", gap:"10rem", marginTop:"3rem"}}>
                        <div style={{fontWeight:"bolder",fontSize:"20px",marginRight:"-150px"}}>Order# </div><span style={{fontSize:"20px"}}>{order.id} </span>
                        <div style={{fontWeight:"bolder",fontSize:"20px",marginRight:"-150px"}}>
                            Order Date:</div><span style={{fontSize:"20px"}}>{order.createdAt}</span>
                        
                        <div style={{fontWeight:"bolder",fontSize:"20px",marginRight:"-150px"}}>
                            
                            Current Status:</div><span style={{fontSize:"20px"}}>{order.status}</span>
                        
                        <div>
                            {order.status ==="Preparing" && 
                            <div className="delete-div-order"><OpenModalButton
                            buttonText="Cancel Order"
                            
                            modalComponent={
                            <DeleteOrder  
                            orderId={order.id}
                            />
                            }
                            
                            />
                        </div>
                            }
                    </div>
                    </div>
                    <div style={{borderBottom:"solid 1px"}}>
                    <div className={order.user?.cart_session?.cart.length === 0 ? "hidden":"product-in-order"}>
                    
                    { order.user?.cart_session?.cart.map((ele, index) => (
                    <div key={ele.product.id} style={{display:"flex",flexDirection:"row", gap:"1rem"}}>
                    
                    <div style={{display:"flex",flexDirection:"row"}}>
                       <img
                          className="shopping-cart-image"
                          src={ele.product.previewImage}
                          alt="products"
                        /> 
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <div style={{fontSize:"18px",display:"flex",flexDirection:"row"}}>Title: {ele.product.title}</div>
                        <div style={{fontSize:"18px"}}>Qty: {ele.quantity}</div>
                    </div>
                    </div>
                    ))}
                    </div>
                    
                    
                    
                    </div>
                    </div>
                   )) 
                
            }
            <div className="delete-div-order" style={{display:"block",justifyContent:"center",margin:"60px 0 0", width:"30%", gap:"1.5rem", marginLeft:"32rem"}}>
            <button onClick={checkout} 
              style={{alignItems:"center"}}
              className={sessionUser?.cart_session?.cart.length >= 1? "checkout-btn":"checkout-btn hidden"}>
                Continue Shopping
            </button>
            </div>
        </div>


    )
}

export default PurchaseHistory
