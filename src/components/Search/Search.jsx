import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesSearch } from '../../actions';

import useStyles from './styles';

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(getMoviesSearch(query));
    }
  };

  return (
    <div className={classes.searchContainer}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search your interests..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Search;
