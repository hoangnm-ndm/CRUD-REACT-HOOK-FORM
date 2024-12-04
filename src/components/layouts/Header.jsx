import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/shop">Shop</NavLink>
					</li>
					<li>
						<NavLink to="/categories">Categories</NavLink>
					</li>
					<li>
						<NavLink to="/services">Services</NavLink>
					</li>
					<li>
						<NavLink to="/signin">Sign In</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
