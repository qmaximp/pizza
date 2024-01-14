import React from 'react';
import css from './Pagination.module.scss'
import ReactPaginate from 'react-paginate';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const Pagination = ({ onChangePage }) => {
	return (
		<ReactPaginate
			className={css.listPagination}
			breakLabel="..."
			nextLabel={<ArrowCircleRightIcon />}
			onPageChange={(e) => onChangePage(e.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel={<ArrowCircleLeftIcon />}
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;