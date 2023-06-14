import React from 'react';
import { NavLink , Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='headerContainer'>
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
	);
}

export default Navigation;
