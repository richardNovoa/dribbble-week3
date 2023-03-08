import NavBar from './lib/components/NavBar';
import React from 'react';
import Main from './screenshot.png';
import NavLink from './lib/components/NavLink';
import TextInput from './lib/components/TextInput';
import Box from './lib/components/Box';
import Button from './lib/components/Button';

function App() {
	return (
		<div className='App'>
			<NavBar type='primary'>
				<NavLink href='#' type='primary'>
					Sign On
				</NavLink>
				<NavLink href='#' type='primary'>
					Contact Us
				</NavLink>
				<NavLink href='#' type='primary'>
					Open an Account
				</NavLink>
				<TextInput
					placeholder='Search'
					iconRight='fa-solid fa-magnifying-glass'
				/>
			</NavBar>
			<NavBar type='secondary'>
				<Box>
					<div className='header'>Wells Fargo Advisors</div>
					<div className='divider'></div>
				</Box>
				<NavLink href='#' type='secondary'>
					Why Invest With Us
				</NavLink>
				<NavLink href='#' type='secondary'>
					Ways to Work With Us
				</NavLink>
				<NavLink href='#' type='secondary'>
					Planning For Life
				</NavLink>
				<NavLink href='#' type='secondary'>
					Our Insights
				</NavLink>
			</NavBar>
			<div className='position-center'>
				<img src={Main} className='screenshot' />
				<div className='some-div' style={{ top: 365, left: 405 }}>
					<Button type='primary'>Sign On</Button>
				</div>
				<div
					className='some-div'
					style={{
						top: 423,
						right: 215,
						gap: 16
					}}>
					<Button type='primary'>See the Difference</Button>
					<Button type='secondary'> Find an Advisor</Button>
				</div>
			</div>
		</div>
	);
}

export default App;
