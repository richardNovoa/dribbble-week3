import React from 'react';

const NavLink = (props) => {
	return props.type === 'primary' ? (
		<a href={props.href} className='navbar__nav-link navlink--light'>
			{props.children}
		</a>
	) : (
		<a href={props.href} className='navbar__nav-link navlink--dark'>
			{props.children}
		</a>
	);
};

export default NavLink;
