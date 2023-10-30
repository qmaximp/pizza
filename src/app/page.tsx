import Container from '@/components/Container/Container';
import Header from '@/components/Header/Header';
import TopFilter from '@/components/TopFilter/TopFilter';
import React from 'react';

const page = () => {
	return (
		<Container>
			<Header />
			<TopFilter />
		</Container>
	);
};

export default page;