'use client'
import React, { useState } from 'react';
import css from './Categories.module.scss'
const Categories = () => {
	const [indexActive, setIndexActive] = useState([1]);
	const categories = [
		{ title: 'Все', id: 1 },
		{ title: 'Мясные', id: 2 },
		{ title: 'Вегетарианская', id: 3 },
		{ title: 'Гриль', id: 4 },
		{ title: 'Острые', id: 5 },
		{ title: 'Закрытые', id: 6 },
	]

	return (
		<div className={css.categories}>
			<ul>
				{categories.map((value) => (<li key={value.id} onClick={() => setIndexActive(value.id)} className={indexActive == value.id ? css.active : ''}>{value.title}</li>))}
			</ul>
		</div>
	);
};
export default Categories;