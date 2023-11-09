'use client'
import React, { useState } from 'react';
import css from './Sort.module.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Sort = ({ value, onClickSort }) => {
	const [openPopup, setOpenPopup] = useState(false);
	const [selected, setSelected] = useState(0);
	const popupList = [
		{ title: "по популярности (desc)", propertySort: 'rating' },
		{ title: "по популярности (asc)", propertySort: '-rating' },
		{ title: "по цене (desc)", propertySort: 'price' },
		{ title: "по цене (asc)", propertySort: '-price' },
		{ title: "по алфавиту (desc)", propertySort: 'title' },
		{ title: "по алфавиту (asc)", propertySort: '-title' }
	];
	const onClickListItem = (i: number) => {
		onClickSort(i)
		setOpenPopup(false)
	};
	return (
		<div className={css.sort}>
			<div className={css.sort__label} >
				<svg
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
						fill="#2C2C2C"
					/>
				</svg>
				<b>Сортировка по:</b>
				<span onClick={() => setOpenPopup(!openPopup)}>{value.title}</span>
			</div>
			{openPopup ? (
				<div className={css.sort__popup}>
					<ul>
						{popupList.map((name, i) => (<li key={i} onClick={() => onClickListItem(name)} className={value.propertySort == name.propertySort ? css.active : ''} >{name.title}</li>))}
					</ul>
				</div>)
				: null
			}
		</div >
	);
};

export default Sort;