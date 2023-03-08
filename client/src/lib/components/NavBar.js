import React from 'react';
import '../assets/style.css';
import wfLogo from '../assets/wfLogo.svg';
import NavLink from './NavLink';
import TextInput from './TextInput';

const NavBar = (props) => {
	return props.type === 'primary' ? (
		<nav className='navbar--primary'>
			<div className='navbar--container container--between'>
				<img className='navbar__logo' src={wfLogo} alt='wells fargo' />
				<div className='navbar__wrapper'>
					<NavLink href='#' label='Sign On' type='primary' />
					<NavLink href='#' label='Contact Us' type='primary' />
					<NavLink href='#' label='Open an Account' type='primary' />
					<TextInput
						placeholder='Search'
						iconRight='fa-solid fa-magnifying-glass'
					/>
				</div>
			</div>
		</nav>
	) : (
		<nav className='navbar--secondary'>
			<div className='navbar--container container--start'>
				<div className='navbar__wrapper'>
					<div className='wrapper'>
						<div className='header'>Wells Fargo Advisors</div>
						<div className='divider'></div>
					</div>
					<NavLink href='#' label='Why Invest With Us' type='secondary' />
					<NavLink href='#' label='Ways to Work With Us' type='secondary' />
					<NavLink href='#' label='Planning For Life' type='secondary' />
					<NavLink href='#' label='Our Insights' type='secondary' />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
