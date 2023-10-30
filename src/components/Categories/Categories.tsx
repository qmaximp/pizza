import React from 'react';
import css from './Categories.module.scss'
const Categories = () => {
	return (
		<div className={css.categories}>
			<ul>
				<li className={css.active}>Все</li>
				<li>Мясные</li>
				<li>Вегетарианская</li>
				<li>Гриль</li>
				<li>Острые</li>
				<li>Закрытые</li>
			</ul>
		</div>
	);
};

export default Categories;