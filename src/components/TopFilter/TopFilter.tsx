import React from 'react';
import css from './TopFilter.module.scss'
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import PizzaBlock from '../PizzaBlock/PizzaBlock';


const TopFilter = () => {
	return (
		<div className={css.topFilter}>
			<div className={css.topFilter__top}>
				<Categories />
				<Sort />
			</div>
			<h2 className={css.topFilter__title}>Все пиццы</h2>
			<div className={css.topFilter__items}>
				<PizzaBlock title={'мясная'} price={111} />
				<PizzaBlock title={'грибная'} price={222} />
				<PizzaBlock title={'4 сыра'} price={333} />
				<PizzaBlock title={'дары моря'} price={444} />
				<PizzaBlock title={'мексиканская'} price={555} />
				<PizzaBlock title={'пеперони'} price={666} />
				<PizzaBlock title={'ветчина и сыр'} price={777} />
				<PizzaBlock title={'карбонара'} price={888} />
			</div>
		</div>
	);
};

export default TopFilter;