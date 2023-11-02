
import React from 'react';
import css from './TopFilter.module.scss'
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import pizzas from './pizza.mockData'

const TopFilter = () => {


	return (
		<div className={css.topFilter}>
			<div className={css.topFilter__top}>
				<Categories />
				<Sort />
			</div>
			<h2 className={css.topFilter__title}>Все пиццы</h2>
			<div className={css.topFilter__items}>
				{pizzas.map((obj) => (<PizzaBlock key={obj.id} {...obj} />))}
			</div>
		</div>
	);
};

export default TopFilter;