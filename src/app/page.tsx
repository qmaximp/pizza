'use client'
import React, { createContext, useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import TopFilter from '@/components/TopFilter/TopFilter';
import TemporaryCounter from '@/components/TemporaryCounter/TemporaryCounter';


import store from '../redux/store'
import { Provider } from 'react-redux'



export const myContext = createContext('')

const page = () => {
	const [valueSearch, setValueSearch] = useState('');


	return (
		<>
			<Provider store={store}>
				<myContext.Provider value={{ valueSearch, setValueSearch }}>
					<Header />
					<TopFilter />
					<TemporaryCounter />
				</myContext.Provider>
			</Provider>
		</>
	);
};

export default page;