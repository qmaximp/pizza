import React from 'react';

const Container = ({ children }) => {
	return (
		<div style={{ width: 'calc(100% - 100px)', margin: '0 auto' }}>
			{children}
		</div>
	);
};

export default Container;