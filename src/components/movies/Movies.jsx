import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';
import RingLoader from 'react-spinners/RingLoader';
import { useSelector, useDispatch } from 'react-redux';

import { useTheme } from '@material-ui/core/styles';
import Pagination from './Pagination/Pagination';
import Movie from './Movie/Movie';
import { fetchMoviesByGenre, fetchMoviesByCategory, getMovieDetails } from '../../actions';

import styles from './Movies.module.scss';

const Movies = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data, hasError } = useSelector((state) => state.movies);
  const isLoading = useSelector((state) => state.config.isLoading);
  const currentlySelected = useSelector((state) => state.currentlySelected);
  const theme = useTheme();

  useEffect(() => {
    if (typeof currentlySelected === 'number') {
      dispatch(fetchMoviesByGenre(currentlySelected, page));
    } else {
      dispatch(fetchMoviesByCategory(currentlySelected, page));
    }

    window.scroll({ top: 0, behavior: 'smooth' });
  }, [page, currentlySelected]);

  // React.useEffect(() => {
  //   window.scroll(0, 0);
  // }, []);

  const handleOpen = (movie) => {
    dispatch(getMovieDetails(movie));
  };

  const isDarkMode = theme.palette.type === 'dark';

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <RingLoader size={150} color={!isDarkMode ? '#123abc' : '#FFF'} loading={isLoading} />
      </div>
    );
  }

  //
  if (hasError) {
    setTimeout(() => { dispatch(fetchMoviesByCategory(currentlySelected, page)); }, 2000);
    return (
      <div className={styles.loadingContainer}>
        Search for another Movie
      </div>
    );
  }

  return (
    <>
      <Grid container className={styles.container}>
        {data.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} handleOpen={handleOpen} />
        ))}
      </Grid>
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </>
  );
};

export default Movies;
