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
				<li><i className="fa-thin fa-wheelchair"></i></li>
				<li>Help</li>
				<li>Welcome, {sessionUser?.username}</li>
			</ul>
		</div>
		<div className='menu-container'>
			<ul className='navigation'>
				<li>
					<NavLink exact to="/" style={{ textDecoration: "none" }}>
						Logo
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/products" style={{ textDecoration: "none" }}>Eyeglasses</NavLink>
				</li>
				<li>
						<form>
							<input type='search' placeholder='Search for anything' ></input>
							
						</form>
				</li>
				<li>
						<NavLink exact to= "" style={{ textDecoration: "none" }}>
							Favorites
						</NavLink>
				</li>
				<li>
						<NavLink exact to= "" style={{ textDecoration: "none" }}>
							Shopping Cart
						</NavLink>
				</li>
				{isLoaded && (
					<li>
						<ProfileButton user={sessionUser} />
					</li>
				)}	 
			</ul>
		</div>
		<div className='promotion-item-container'>
        <img className='main-page-image' src="https://www.usatoday.com/gcdn/presto/2020/09/23/USAT/92bade01-0f1a-4161-90ba-0c82496e3455-43-glassesusa.png"></img>
        </div>
		<div className='navbar-image-below'>
			<p className='text'>Free Shipping & Returns | 
									100% Money Back Guarantee |
									FSA/HSA Eligible |
								    Trustpilot rating |
									Excellent 
			</p>	
		</div>
	</div>
	)
}



export default Navigation;
