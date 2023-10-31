'use client'
import React, { useState } from 'react';
import css from './PizzaBlock.module.scss'
import styleButton from '../../style/UI/Buttons.module.scss'
import classNames from 'classnames';
import Image from 'next/image';



const PizzaBlock = ({ title, price }) => {


	const [pizzaCount, setPizzaCount] = useState(0);
	const onClickPizzaButton = () => {
		setPizzaCount(pizzaCount + 1);
	}

	return (
		<div className={css.pizzaBlock}>
			<Image
				fill={true}
				className={css.pizzaBlock__image}
				src="https://dodopizza-a.akamaihd.net/static/Img/Products/18dbb12240b041a191c9dc73c9c1f4ef_292x292.webp"
				alt="Pizza"
			/>
			<h4 className={css.pizzaBlock__title}>{title}</h4>
			<div className={css.pizzaBlock__selector}>
				<ul>
					<li className={css.active}>тонкое</li>
					<li>традиционное</li>
				</ul>
				<ul>
					<li className={css.active}>26 см.</li>
					<li>30 см.</li>
					<li>40 см.</li>
				</ul>
			</div>
			<div className={css.pizzaBlock__bottom}>
				<div className={css.pizzaBlock__price}>от {price} ₽</div>
				<button onClick={onClickPizzaButton} className={classNames(styleButton.button, styleButton.button__outline, styleButton.button__add)}>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					<i>{pizzaCount}</i>
				</button>
			</div>
		</div >
	);
};

export default PizzaBlock;