import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { getMoviesSearch } from '../../actions';

import useStyles from './styles';
import styles from './Search.module.scss';

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
    <div className={styles.searchBox}>
      <input
        className={styles.searchInput}
        type="text"
        name=""
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className={styles.searchButton} href="#" type="button">
        <BsSearch />
      </button>
    </div>

  // <div className={classes.searchContainer}>
  //   <input
  //     className={classes.input}
  //     type="text"
  //     placeholder="Search your interests..."
  //     value={query}
  //     onChange={(e) => setQuery(e.target.value)}
  //     onKeyPress={onKeyPress}
  //   />
  // </div>
  );
};

export default Search;
