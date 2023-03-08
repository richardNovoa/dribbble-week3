import React from 'react';

const TextInput = (props) => {
	return (
		<div className='text-input'>
			<p className='paragraph'>{props.placeholder}</p>
			<i className={props.iconRight}></i>
		</div>
	);
};

export default TextInput;
