import React from 'react';

import classNames from "classnames";
import Link from 'next/link';
import Image from 'next/image';
import css from './CartItem.module.scss'

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CartItem = () => {
	return (
		<div className={css.cart__item}>
			<div className={css.cart__item_img}>
				<Image
					className={css.pizza_block__image}
					width={350}
					height={350}
					src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
					alt="Pizza"
				/>
			</div>
			<div className={css.cart__item_info}>
				<h3>Сырный цыпленок</h3>
				<p>тонкое тесто, 26 см.</p>
			</div>
			<div className={css.cart__item_count}>
				<div className={classNames(css.button, css.button__outline, css.button__circle, css.cart__item_count_minus)}>
					<RemoveCircleOutlineIcon />
				</div>
				<b>2</b>
				<div className={classNames(css.button, css.button__outline, css.button__circle, css.cart__item_count_plus)}>
					<AddCircleOutlineIcon />
				</div>
			</div >
			<div className={css.cart__item_price}>
				<b>770 ₽</b>
			</div>
			<div className={css.cart__item_remove}>
				<div className={classNames(css.button, css.button__outline, css.button__circle)}>
					<CancelOutlinedIcon />
				</div>
			</div >
		</div >

	);
};

export default CartItem;