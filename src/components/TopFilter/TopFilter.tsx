'use client'
import React, { useEffect, useState } from 'react';
import css from './TopFilter.module.scss'
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import Skeleton from '../UI/Skeleton';
const TopFilter = () => {

	const [pizzaItems, setPizzaItems] = useState([]);
	const [loadingPizza, setLoadingPizza] = useState(true)
	const [idCategories, setIdCategories] = useState(0)
	const [typeSort, setTypeSort] = useState({
		title: "по популярности (asc)", propertySort: 'rating'
	})

	const category = idCategories > 0 ? `category=${idCategories}` : '';
	const sortBy = typeSort.propertySort.replace('-', '');
	const order = typeSort.propertySort.includes('-') ? 'asc' : 'desc';

	useEffect(() => {
		setLoadingPizza(true);
		fetch(`https://6544bc1c5a0b4b04436cdd5a.mockapi.io/itemPizzas?${category}&sortBy=${sortBy}&order=${order}`,
		)
			.then((res) => res.json())
			.then((json) => {
				setPizzaItems(json);
				setLoadingPizza(false);
			});
		window.scrollTo(0, 0)
	}, [idCategories, typeSort]);

	return (
		<div className={css.topFilter}>
			<div className={css.topFilter__top}>
				<Categories value={idCategories} onClickCategory={(id: any) => setIdCategories(id)} />
				<Sort value={typeSort} onClickSort={(id: any) => setTypeSort(id)} />
			</div>
			<h2 className={css.topFilter__title}>Все пиццы</h2>
			<div className={css.topFilter__items}>
				{
					loadingPizza
						? [...new Array(8)].map((i) => <Skeleton key={i} />)
						: pizzaItems.map((obj: any) => (<PizzaBlock key={obj.id} {...obj} />))
				}
			</div>
		</div>
	);
};

export default TopFilter;