import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
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
        <IconButton type="submit" onClick={() => dispatch(getMoviesSearch(query))} className={classes.iconButton}>
          <SearchIcon />
        </IconButton>
      </Link>

    </Paper>

  );
};

export default Search;

// <div className={styles.searchBox}>

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
