import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import OpenModalButton from "../../components/OpenModalButton";
import { useModal } from "../../context/Modal";
import { thunkNewOrder } from "../../store/order";
import EditOrder from "../EditOrder";
import PurchaseHistory from "../OrderReview";
import "./Order.css";

const Order = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const { closeModal } = useModal();
  const sessionUser = useSelector((state) => state.session.user);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [errors, setErrors] = useState({});

  const STATES = {
    AK: 'Alaska',
    AL: 'Alabama',
    AR: 'Arkansas',
    AZ: 'Arizona',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawaii',
    IA: 'Iowa',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    MA: 'Massachusetts',
    MD: 'Maryland',
    ME: 'Maine',
    MI: 'Michigan',
    MN: 'Minnesota',
    MO: 'Missouri',
    MT: 'Montana',
    NC: 'North Carolina',
    ND: 'North Dakota',
    NE: 'Nebraska',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NV: 'Nevada',
    NY: 'New York',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VA: 'Virginia',
    VT: 'Vermont',
    VI: 'Virgin Islands',
    WA: 'Washington',
    WI: 'Wisconsin',
    WV: 'West Virginia',
    WY: 'Wyoming',
}

  useEffect(() => {
    const errors = {};
    
    if (address.length > 255 || address.length < 5)
    errors.review = "Please enter the valid address "
    setErrors(errors);
    
  }, [fullName, email, phone, address, city, state]);
 let neworder
  const handleSubmit = async (e) => {
    e.preventDefault();
    neworder = {
      
      fullName,
      email,
      phone,
      address,
      city,
      state,
      
    };
    
    // console.log("inside the order comp", neworder)  
    const neworderresult = await dispatch(thunkNewOrder(neworder,sessionUser.id ));
    console.log("inside the order function", neworderresult)
    // history.push("/purchasehistory")
    if (neworderresult) {
        history.push(`/orders/${neworderresult.id}`)
      }
    closeModal();
 }
 

    return(
     <div className="review-modal">
        <h1>Shipping address</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Full Name </label>
            <h4 className="formErrors">{errors?.fullName}</h4>
            <input
                
                type="text"
                value={fullName}
                minlength="1"
                maxlength="100"
                onChange={(e) => setFullName(e.target.value)} required 
            />
        
        
            <label>Email </label>
            <h4 className="formErrors">{errors?.email}</h4>
            <input
                
                type="email"
                value={email}
                
                onChange={(e) => setEmail(e.target.value)} required 
            />
        </div>
        <div>
            <label>Phone </label>
            <h4 className="formErrors">{errors?.phone}</h4>
            <input
                
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={phone}
                
                onChange={(e) => setPhone(e.target.value)} required 
            />
            <small>Format: 123-456-7890</small>
        </div>
        <div>
            <label>Address </label>
            <h4 className="formErrors">{errors?.address}</h4>
            <input
                
                type="text"
                minlength="10"
                maxlength="255"
                value={address}
                
                onChange={(e) => setAddress(e.target.value)} required 
            />
        </div>
        <div>
            <label>City </label>
            <h4 className="formErrors">{errors?.city}</h4>
            <input
                
                type="text"
                minlength="4"
                maxlength="100"
                value={city}
                
                onChange={(e) => setCity(e.target.value)} required 
            />
        </div>
        <div>
        <label for="state">State</label>
        <h4 className="formErrors">{errors?.state}</h4>
        <select name="state" id="state" defaultValue={state} onChange={(e) => setState(e.target.value)} required>
        <option value='' disabled>Select state</option>
                    {Object.keys(STATES).map(key =>
                        <option value={key} key={key}>{STATES[key]}</option>
                    )}  
        </select>
        </div>

        {/* <div>
        <button
          className="createbutton-product" type="submit"  disabled={!!Object.values(errors).length}>
          Edit Shipping Address
        </button> 
        </div> */}
        {/* <div className="createbutton-product"><OpenModalButton
            buttonText="Edit Shipping Address"
            
            modalComponent={
              <EditOrder  
              order={neworderresult}
              />
            }
            />
        </div>  */}
        {/* <div><a className="down-button" style={{backgroundColor:"#0097fb",color:"white",borderRadius:"5px 5px", marginTop:"1rem"}} to="/purchasehistory" href="purchasehistory">Review Order</a></div> */}
        
        <button
          className="createbutton-product" type="submit"  disabled={!!Object.values(errors).length}>
          Review Order
        </button>
        {/* <div className="createbutton-product"><OpenModalButton
            buttonText="Review Order"
            
            modalComponent={
              <PurchaseHistory  
              order={neworder}
              />
            }
            />
        </div>  */}
      
    </form>
    </div>
  )
}
export default Order;
