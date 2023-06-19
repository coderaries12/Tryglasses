import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';


function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

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
						Logo
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/products" style={{ textDecoration: "none" }}>Eyeglasses</NavLink>
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
					<NavLink exact to= "/shoppingcart">
						<i className="fa-solid fa-cart-shopping fa-lg" />
					</NavLink>
				</li> 
			</ul>
		</div>
		
	</div>
	)
}



export default Navigation;
