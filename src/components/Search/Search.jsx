import React from 'react';

import useStyles from './styles';

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <input className={classes.input} type="text" placeholder="Search your interests..." />
    </div>
  );
};

export default Search;
