import React, { useContext } from 'react';
import css from './Search.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { myContext } from '@/app/page';

const Search = () => {
	const { valueSearch, setValueSearch } = useContext(myContext)
	return (
		<div className={css.search}>
			<SearchIcon className={css.search__icon} />
			<input value={valueSearch} onChange={e => setValueSearch(e.target.value)} className={css.search__input} type="text" placeholder='Поиск пиццы...' />
			{valueSearch
				? <CloseIcon onClick={() => setValueSearch('')} className={css.search__icon} />
				: ''
			}
		</div>
	);
};

export default Search;