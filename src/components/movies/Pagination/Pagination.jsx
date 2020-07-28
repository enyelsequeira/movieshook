import React from 'react';
import styles from './Pagination.module.scss';
import useStyles from './styles';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <button className={classes.button} type="button" onClick={(currentPage !== 1) ? () => setPage(((prevCurrentPage) => prevCurrentPage - 1)) : null}>Previous</button>
      <h1 className={classes.pageNumber}>{currentPage}</h1>
      <button className={styles.button} type="button" onClick={(currentPage !== totalPages) ? () => setPage(((prevCurrentPage) => prevCurrentPage + 1)) : null}>Next</button>
    </div>
  );
};

export default Pagination;
