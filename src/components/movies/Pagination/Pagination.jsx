import React from 'react';
import { Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button className={classes.button} variant="contained" color="primary" type="button" onClick={(currentPage !== 1) ? () => setPage(((prevCurrentPage) => prevCurrentPage - 1)) : null}>Previous</Button>
      <Typography variant="h4" className={classes.pageNumber}>{currentPage}</Typography>
      <Button className={classes.button} variant="contained" color="primary" type="button" onClick={(currentPage !== totalPages) ? () => setPage(((prevCurrentPage) => prevCurrentPage + 1)) : null}>Next</Button>
    </div>
  );
};

export default Pagination;
