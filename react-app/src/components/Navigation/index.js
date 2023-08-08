import React, {useEffect, useState, useRef, useContext} from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import OpenModalButton from '../OpenModalButton';
import './Navigation.css';
import { SearchContext } from '../../context/SearchFilter';


function Navigation({ isLoaded }){
	const ulRef = useRef();
	const history = useHistory()

	const sessionUser = useSelector(state => state.session.user);
	const { products, setFilteredProducts, searchQuery, setSearchQuery } =
    useContext(SearchContext)
	const [showMenu, setShowMenu] = useState(false);
	const [searchResults, setSearchResults] = useState([])

	const handleSearchQueryChange = (e) => {
		const query = e.target.value
		setSearchQuery(query)
	
		if (query.trim() === "") {
		  setSearchResults([])
		  setFilteredProducts(products)
		} else {
		  const results = Object.values(products).filter((product) =>
			product.title.toLowerCase().includes(query.toLowerCase())
		  )
		  setSearchResults(results)
		  setFilteredProducts(results)
		}
	  }
	
	  const handleSearchResultClick = (product) => {
		setSearchResults([])
		setFilteredProducts(products)
		setSearchQuery("")
		history.push(`/products/${product.id}`)
	  }
	
	  useEffect(() => {
		history.listen(() => {
		  setSearchResults([])
		  setFilteredProducts(products)
		  setSearchQuery("")
		})
	  }, [history])

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
						<input 
						type='search' 
						placeholder="I'm Searching For..."
						value={searchQuery}
						onChange={handleSearchQueryChange}></input>
						<button disabled={true}>
							<i className="fa-solid fa-magnifying-glass fa-xl" />
						</button>
					</form>
					{searchResults.length > 0 && (
						<ul className="search-results">
							{searchResults.map((product) => (
								<li
								key={product.id}
								onClick={() => handleSearchResultClick(product)}>
								{product.name}
								</li>
							))}
						</ul>
          			)}
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
