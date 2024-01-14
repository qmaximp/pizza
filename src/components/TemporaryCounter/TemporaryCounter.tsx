import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/slices/filterSlice'

const TemporaryCounter = () => {

	const count = useSelector((state: any) => state.filter.value)
	const dispatch = useDispatch()
	const [incrementAmount, setIncrementAmount] = useState('2')


	return (
		<>
		</>
	);
};

export default TemporaryCounter;