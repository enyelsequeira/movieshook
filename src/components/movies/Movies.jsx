import React, { useState, useEffect } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import RingLoader from 'react-spinners/RingLoader';
import { useSelector, useDispatch } from 'react-redux';

import Pagination from './Pagination/Pagination';
import Movie from './Movie/Movie';
import { fetchMoviesByGenre, fetchMoviesByCategory, getMovieDetails } from '../../actions';

import styles from './Movies.module.scss';

const Movies = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movies);
  const isLoading = useSelector((state) => state.config.isLoading);
  const currentlySelected = useSelector((state) => state.currentlySelected);
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    if (typeof currentlySelected === 'number') {
      dispatch(fetchMoviesByGenre(currentlySelected, page));
    } else {
      dispatch(fetchMoviesByCategory(currentlySelected, page));
    }
  }, [page, currentlySelected]);

  const handleOpen = (movie) => {
    dispatch(getMovieDetails(movie));
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <RingLoader size={150} color="#123abc" loading={isLoading} />
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
