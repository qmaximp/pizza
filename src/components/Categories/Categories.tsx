'use client'
import React, { useState } from 'react';
import css from './Categories.module.scss'
const Categories = ({ value, onClickCategory }) => {
	const categories = [
		{ title: 'Все', id: 0 },
		{ title: 'Мясные', id: 1 },
		{ title: 'Вегетарианская', id: 2 },
		{ title: 'Гриль', id: 3 },
		{ title: 'Острые', id: 4 },
		{ title: 'Закрытые', id: 5 },
	]

	return (
		<div className={css.categories}>
			<ul>
				{categories.map((categoryName: any) => (
					<li
						key={categoryName.id}
						onClick={() => onClickCategory(categoryName.id)}
						className={value == categoryName.id ? css.active : ''}>
						{categoryName.title}
					</li>

				))}
			</ul>
		</div>
	);
};

export default Categories;