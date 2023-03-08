import React from 'react';

const NavLink = (props) => {
	return props.type === 'primary' ? (
		<a href={props.href} className='navbar__nav-link navlink--light'>
			{props.label}
		</a>
	) : (
		<a href={props.href} className='navbar__nav-link navlink--dark'>
			{props.label}
		</a>
	);
};

export default NavLink;
