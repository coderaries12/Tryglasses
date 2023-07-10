import React, {useEffect, useState, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import OpenModalButton from '../OpenModalButton';
import './Navigation.css';


function Navigation({ isLoaded }){
	const ulRef = useRef();
	const sessionUser = useSelector(state => state.session.user);

	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		if (!showMenu) return;
	
		const closeMenu = (e) => {
		  if (!ulRef.current.contains(e.target)) {
			setShowMenu(false);
		  }
		};
	
		document.addEventListener("click", closeMenu);
	
		return () => document.removeEventListener("click", closeMenu);
	  }, [showMenu]);
	
	  const closeMenu = () => setShowMenu(false);

	return (
	<div className='headerContainer'>
		<div className='top-strip-container'>
			<ul>
				<li>100% Money-Back Guarantee + 365 Day Warranty</li>
				<li>1-844-244-1186</li>
				<li>Every day 7am - midnight ET</li>
				<li><i class="fa-solid fa-wheelchair fa-xl"></i></li>
				<li>Help</li>
				<li>Welcome, {sessionUser?.username}</li>
			</ul>
		</div>
		<div className='menu-container'>
			<ul className={sessionUser? 'navigation': 'navigation nologin'}>
				<li id="logo">
					<NavLink exact to="/" style={{ textDecoration: "none" }}>
				<div style={{width:"5rem"}}><img className='logo-image' src="https://res.cloudinary.com/dxrhf8ah9/image/upload/v1687732825/logo_ih6jnm.png" alt='logo' style={{display:"inline-block",height:"75px",objectFit:"contain"}} /> </div>
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/eyeglasses" style={{ textDecoration: "none" }}>Eyeglasses</NavLink>
				</li>
				<li>
					<NavLink exact to="/sunglasses" style={{ textDecoration: "none" }}>Sunglasses</NavLink>
				</li>

				<li>
					<form>
						<input type='search' placeholder="I'm Searching For..." ></input>
						<button disabled="True">
							<i className="fa-solid fa-magnifying-glass fa-xl" />
						</button>
					</form>
				</li>
				<li className={sessionUser? '':'hidden'}>
					<NavLink exact to= "/favorites">
        				<i className="fa-regular fa-heart fa-xl" />
      				</NavLink>
				</li>
				{isLoaded && (
					<li>
						<ProfileButton user={sessionUser} />
					</li>
				)}	
				<li>
				{!sessionUser ? (
            <OpenModalButton
              buttonText={
                  <i className="fa-solid fa-cart-shopping fa-lg" />
              }
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
           ) : (
					<NavLink exact to= "/shoppingcart">
						<i className="fa-solid fa-cart-shopping fa-lg" />
					</NavLink>
		   )}
				</li> 
			</ul>
		</div>
		
	</div>
	)
}



export default Navigation;
