import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, totalPages, setPage }) => (
  <div className={styles.container}>
    <button className={styles.button} type="button" onClick={(currentPage !== 1) ? () => setPage(((prevCurrentPage) => prevCurrentPage - 1)) : null}>Previous</button>
    <h1 className={styles.pageNumber}>{currentPage}</h1>
    <button className={styles.button} type="button" onClick={(currentPage !== totalPages) ? () => setPage(((prevCurrentPage) => prevCurrentPage + 1)) : null}>Next</button>
  </div>
);
export default Pagination;
