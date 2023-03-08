import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavLink from 'dribbble-ds-wf/dist/components/NavLink';
import NavBar from 'dribbble-ds-wf/dist/components/NavBar';

function App() {
	return (
		<div className='App'>
			<NavBar type='primary' />
			<NavBar type='secondary' />
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
