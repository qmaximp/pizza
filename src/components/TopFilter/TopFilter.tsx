'use client'
import React, { useContext, useEffect, useState } from 'react';
import css from './TopFilter.module.scss'
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import Skeleton from '../UI/Skeleton';

const TopFilter = () => {



	const [pizzaItems, setPizzaItems] = useState([]);
	const [loadingPizza, setLoadingPizza] = useState(false)

	useEffect(() => {

		fetch('https://6544bc1c5a0b4b04436cdd5a.mockapi.io/itemPizzas')
			.then((res) => res.json())
			.then((json) => {
				setPizzaItems(json);
				setLoadingPizza(true);
			});
	}, []);

	return (
		<div className={css.topFilter}>
			<div className={css.topFilter__top}>
				<Categories />
				<Sort />
			</div>
			<h2 className={css.topFilter__title}>Все пиццы</h2>
			<div className={css.topFilter__items}>
				{/* {pizzaItems.map((obj) => (<PizzaBlock key={obj.id} {...obj} />))}
				{pizzaItems.map((obj) => (<Skeleton key={obj.id} {...obj} />))} */}
				{
					loadingPizza
						? pizzaItems.map((obj) => (<PizzaBlock key={obj.id} {...obj} />))
						: [...new Array(8)].map((i) => <Skeleton key={i} />)
				}
			</div>
		</div>
	);
};

export default TopFilter;