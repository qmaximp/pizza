import React from 'react';
import classNames from "classnames";
import Link from 'next/link';
import css from './CartMain.module.scss'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import CartItem from '../CartItem/CartItem';
import CartSvg from '@/svgComponents/CartSvg';
import TrashSvg from '@/svgComponents/TrashSvg';

const CartMain = () => {
	return (
		<div style={{ width: 'calc(100% - 500px)', margin: '25px auto 0 auto' }}>
			<div className={css.cart}>
				<div className={css.cart__top}>
					<h2 className={css.content__title}><CartSvg />Корзина</h2>
					<div className={css.cart__clear}>
						<TrashSvg />
						<span>Очистить корзину</span>
					</div>
				</div>
				<div className={css.content__items}>
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					{/* <% include components/cart-item.ejs %> <% include components/cart-item.ejs %> <%
              include components/cart-item.ejs %> <% include components/cart-item.ejs %> */}
				</div>
				<div className={css.cart__bottom}>
					<div className={css.cart__bottom_details}>
						<span> Всего пицц: <b>3 шт.</b> </span>
						<span> Сумма заказа: <b>900 ₽</b> </span>
					</div>
					<div className={css.cart__bottom_buttons}>
						<Link href={"/"} className={classNames(css.button, css.button__outline, css.button__add, css.go_back_btn)}>
							<ArrowBackIosNewRoundedIcon />
							<span>Вернуться назад</span>
						</Link>
						<div className={classNames(css.button, css.pay_btn)}>
							<span>Оплатить сейчас</span>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default CartMain;