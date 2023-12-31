import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../../components/OpenModalButton";
import { useParams, NavLink, useHistory } from "react-router-dom"
import EditOrder from "../EditOrder";
import FreeShippingReturn from "../FreeShipping&Return";
import MoneyBackGuarantee from "../MoneyBackGuarantee";


import { fetchOrders, thunkProductOrder } from "../../store/order";
import "./OrderReview.css";


const OrderReview = ({cart}) => {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const { orderId } = useParams()
    const sessionUser = useSelector((state) => state.session.user);
    const cart_array =  useSelector((state) => state.session.user?.cart_session?.cart);
    
    const order = useSelector((state)=> state.order[orderId])
    
    

    useEffect(() => {
        dispatch(fetchOrders());
      }, [dispatch]);

    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let product_ids=[]
        for(cart of cart_array){
          product_ids.push(cart.productId)
        }
        await dispatch(thunkProductOrder(orderId,product_ids))
       
            
        history.push('/purchase-history')
    }
    
    const calculateTotal = (price, quantity) => {
        return (price * quantity).toFixed(2);
      };

    const calculateOverallTotal = () => {
        return sessionUser?.cart_session?.cart
          .reduce((total, ele, index) => {
            const itemTotal = calculateTotal(ele.product.price, ele.quantity);
            return total + parseInt(itemTotal);
          }, 0)
          .toFixed(2);
      };
    
      const calculateTotalItems = () => {
        return sessionUser?.cart_session?.cart.length;
      }; 
  

    return(
    <div style={{minHeight:"62.7vh", background:"#f6f6f6", marginLeft:"0.5rem"}}>
        <div>
        <div className="fav-title">
            <p>Review your Order</p>
        </div>
        <div>
            <div style={{fontSize:"26px",letterSpacing:".08em", marginTop:"2rem", marginBottom:"0.5rem" }}>Shipping Address</div>
            <div>{order?.fullName} - {order?.address}</div>     
        </div>
        </div>
        
        <div className="cartpage">
            <div className={sessionUser?.cart_session?.cart.length === 0 ? "hidden":"product-in-cartpage"}>
              {sessionUser?.cart_session?.cart.map((ele, index) => (
                <div key={ele.product.id} className="item-in-shop">
                    
                    <NavLink to={`/products/${ele.product.id}`}>
                        <img
                          className="product-image"
                          src={ele.product.previewImage}
                          alt="products"
                        />
                      
                    </NavLink>
                    <div className="item-in-shop-info" style={{minWidth: "200px"}}>
                      <span style={{fontSize:"20px",fontWeight:"700"}}>{ele.product.title}</span>
                      <div>Price: $ {ele.product.price.toFixed(2)}</div>
                      <div>Quantity: {ele.quantity}</div>
                      <div>Total: $ {calculateTotal(ele.product.price, ele.quantity)}</div>
                      
                      

                    </div>
                </div>
                    
                    
                ))}
                    
            
            </div>
            <div className="overall-total" style={{backgroundColor:"white", borderRadius:"8px", padding:"5rem"}}>
              <div style={{display:"flex", flexDirection:"row", gap:"4.5rem", padding:"0px"}}>
                <div>Subtotal ({calculateTotalItems()} item)</div>
                <div> ${calculateOverallTotal()} </div> 
              </div>
              <div style={{display:"flex", flexDirection:"row", gap:"7.8rem", padding:"0px"}}>
                <div style={{color:"rgb(35, 170, 226)"}}>Discount</div>
                <div style={{color:"rgb(35, 170, 226)"}}> -$10 </div> 
              </div>
              <div style={{display:"flex", flexDirection:"row", gap:"3rem", padding:"0px", borderBottom:"solid black 1px", borderRadius:"0px", paddingBottom:"1rem"}}>
                <div>Shipping & handling </div>
                <div>$0</div> 
              </div>
            
              <div style={{display:"flex", flexDirection:"row", gap:"6.8rem", padding:"0px", marginTop:"0.5rem", paddingBottom:"2rem"}}>
                <div>Grand total:</div>
                <div>${calculateOverallTotal()-10} </div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
              <div className="right-ship-return">
              <i class="fa-solid fa-check" style={{color:"#00b16a",marginRight:"0.4rem"}} />
              <OpenModalButton
                          buttonText="Free shipping & returns"
                          modalComponent={
                            <FreeShippingReturn
                            
                            />
                        }
          
                          
                    />
                  <i class="fa-regular fa-circle-question" style={{color:"#00b16a",marginLeft:"0.4rem"}}/>
            </div>
            <div className="right-ship-return">
              <i class="fa-solid fa-check" style={{color:"#00b16a",marginRight:"0.4rem"}} />
              <OpenModalButton
                          buttonText="100% money-back guarantee"
                          modalComponent={
                            <MoneyBackGuarantee
                            
                            />
                        }
          
                          
                    />
                  <i class="fa-regular fa-circle-question" style={{color:"#00b16a",marginLeft:"0.4rem"}}/>
            </div>
              </div>
              
               <div className="order-div"><OpenModalButton
                          buttonText="Edit Shipping Address"
                          modalComponent={
                            <EditOrder  
                            order={order}
                            />
                          }
                          
                            />
                </div>
            <div className="order-div">
              <button
                type="submit" onClick={handleSubmit} orderId={orderId}>
                Place Order
              </button> 
            </div>
              
          </div> 
            
    </div> 
      
    </div>
    )
}

export default OrderReview
