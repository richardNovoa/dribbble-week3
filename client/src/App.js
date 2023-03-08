import NavBar from './lib/components/NavBar';
import React from 'react';
import Main from './screenshot.png';

function App() {
	return (
		<div className='App'>
			<NavBar type='primary' />
			<NavBar type='secondary' />
			<div className='position-center'>
				<img src={Main} className='screenshot' />
			</div>
		</div>
	);
}

export default App;
