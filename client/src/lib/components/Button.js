import React from 'react';

const Button = (props) => {
	return props.type === 'primary' ? (
		<div className='btn--primary' style={props.style}>
			{props.children}
		</div>
	) : (
		<div className='btn--secondary' style={props.style}>
			{props.children}
		</div>
	);
};

export default Button;
