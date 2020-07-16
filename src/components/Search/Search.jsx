import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
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

    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        type="text"
        placeholder="Search Movie"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <Link to="/">
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon onClick={() => dispatch(getMoviesSearch(query))} />
        </IconButton>
      </Link>

    </Paper>

  );
};

export default Search;

// <div className={styles.searchBox}>

{ /* <input
        className={styles.searchInput}
        type="text"
        name=""
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <Link to="/">
        <button onClick={() => dispatch(getMoviesSearch(query))} className={styles.searchButton} href="#" type="button">
          <BsSearch />
        </button>
      </Link> */ }
// </div>

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
