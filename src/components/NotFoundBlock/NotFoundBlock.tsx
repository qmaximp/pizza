import Link from 'next/link';
import React from 'react';
import css from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
	return (
		<div className={css.notFoundBlock}>
			<h1 className={css.notFoundBlock__heading}>
				Ничего не найдено 😭😭
			</h1>
			<Link className={css.notFoundBlock__link} href={'/'}>
				На главную к пиццам
			</Link>
		</div >
	);
};

export default NotFoundBlock;