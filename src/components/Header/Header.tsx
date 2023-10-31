import React from 'react';
import css from './header.module.scss'
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import Image from 'next/image';

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.container}>
				<div className={css.header__logo}>
					<Image width="45" height='45' src="/pizza-logo.svg" alt="Pizza logo" />
					<div>
						<h1>Delicious Pizza</h1>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</div>
				<div className={css.header__cart}>
					<ButtonHeader />
				</div>
			</div>
		</header >
	);
};

export default Header;