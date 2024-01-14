'use client'
import React, { useContext, useEffect, useState } from 'react';
import css from './TopFilter.module.scss'
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import Skeleton from '../UI/Skeleton';
import Pagination from '../Pagination/Pagination';
import { SearchContext } from '@/app/page';



const TopFilter = () => {
	const [pizzaItems, setPizzaItems] = useState([]);
	const [loadingPizza, setLoadingPizza] = useState(true)
	const [idCategories, setIdCategories] = useState(0)
	const [countPage, setCountPage] = useState(1)
	const [typeSort, setTypeSort] = useState({
		title: "по популярности", propertySort: '-rating'
	})
	const { valueSearch, setValueSearch } = useContext(SearchContext)
	const category = idCategories > 0 ? `category=${idCategories}` : '';
	const sortBy = typeSort.propertySort.replace('-', '');
	const order = typeSort.propertySort.includes('-') ? 'asc' : 'desc';
	const search = valueSearch ? `&search=${valueSearch}` : '';
	useEffect(() => {
		setLoadingPizza(true);
		fetch(`https://6544bc1c5a0b4b04436cdd5a.mockapi.io/itemPizzas?page=${countPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`,
		)
			.then((res) => res.json())
			.then((json) => {
				setPizzaItems(json);
				setLoadingPizza(false);
			});
		window.scrollTo(0, 0)
	}, [idCategories, typeSort, valueSearch, countPage]);
	const skeletons = [...new Array(4)].map((i) => <Skeleton key={i} />)
	const pizzas = pizzaItems.map((obj: any) => (<PizzaBlock key={obj.id} {...obj} />))


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
						? skeletons
						: pizzas
				}
			</div>
			<Pagination onChangePage={(value: React.SetStateAction<number>) => setCountPage(value)} />
		</div>
	);
};

export default TopFilter;