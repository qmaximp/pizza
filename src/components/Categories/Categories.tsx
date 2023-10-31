'use client'
import React, { SetStateAction, useEffect, useState } from 'react';
import css from './Categories.module.scss'
const Categories = () => {
	const [indexActive, setIndexActive] = useState([1]);
	const categories = [
		{ title: 'Все', id: 1 },
		{ title: 'Мясные', id: 2 },
		{ title: 'Вегетарианская', id: 3 },
		{ title: 'Гриль', id: 4 },
		{ title: 'Острые', id: 5 },
		{ title: 'Сырная', id: 6 },
		{ title: 'Закрытые', id: 7 },
	]
	const onClickFilter = (index: number) => {
		let newActives = [...indexActive]
		newActives.includes(index) ?
			newActives.length >= 2 ? newActives.splice(newActives.indexOf(index), 1)
				: null
			: newActives.push(index)
		setIndexActive(newActives)
	}
	return (
		<div className={css.categories}>
			<ul>
				{categories.map((value) => (<li key={value.id} onClick={() => onClickFilter(value.id)} className={indexActive.includes(value.id) ? css.active : ''}>{value.title}</li>))}
			</ul>
		</div>
	);
};
export default Categories;