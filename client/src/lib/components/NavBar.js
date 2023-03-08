import React from 'react';
import '../assets/style.css';
import wfLogo from '../assets/wfLogo.svg';
import Box from './Box';

const NavBar = (props) => {
	return props.type === 'primary' ? (
		<nav className='navbar--primary'>
			<div className='navbar--container container--between'>
				<img className='navbar__logo' src={wfLogo} alt='wells fargo' />
				<Box>{props.children}</Box>
			</div>
		</nav>
	) : (
		<nav className='navbar--secondary'>
			<div className='navbar--container container--start'>
				<Box>{props.children}</Box>
			</div>
		</nav>
	);
};

export default NavBar;
