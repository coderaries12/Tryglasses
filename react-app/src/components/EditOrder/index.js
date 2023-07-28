import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import './EditOrder.css'

const EditOrder = ({neworder}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();
    const sessionUser = useSelector((state) => state.session.user);
  
    const [fullName, setFullName] = useState(neworder?.fullName);
    const [email, setEmail] = useState(neworder?.email);
    const [phone, setPhone] = useState(neworder?.phone);
    const [address, setAddress] = useState(neworder?.address);
    const [city, setCity] = useState(neworder?.city);
    const [state, setState] = useState(neworder?.state);
    const [errors, setErrors] = useState({});
    console.log("inside the order edit form", neworder)
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
      
    //   if (address.length > 255 || address.length < 5)
    //   errors.review = "Please enter the valid address "
    //   setErrors(errors);
      
    }, [fullName, email, phone, address, city, state]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const editorder = {
        ...neworder,
        fullName,
        email,
        phone,
        address,
        city,
        state,
        
      };
      
        
      // let editedReview = await dispatch(thunkNewReview(newreview, product.id));
      history.push("/purchasehistory")
      closeModal();
   }
  
      return(
       <div className="review-modal">
          <h1>Edit Shipping address</h1>
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
          
        <div> 
        <button
          className="createbutton-product" type="submit"  disabled={!!Object.values(errors).length}>
          Submit
        </button>
      </div> 
      </form>
      </div>
    )
  }
  export default EditOrder;
  
