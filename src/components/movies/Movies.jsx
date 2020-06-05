import React, { useState, useEffect } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import { Modal, Paper, Grid } from '@material-ui/core';
import RingLoader from 'react-spinners/RingLoader';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from './Pagination/Pagination';
import Movie from './Movie/Movie';
import { fetchMoviesByGenre, fetchMoviesByCategory } from '../../actions';

import styles from './Movies.module.scss';

const Movies = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [clickedMovie, setClickedMovie] = useState({});
  const { data } = useSelector((state) => state.movies);
  const isLoading = useSelector((state) => state.config.isLoading);
  const currentlySelected = useSelector((state) => state.currentlySelected);

  useEffect(() => {
    if (typeof currentlySelected === 'number') {
      dispatch(fetchMoviesByGenre(currentlySelected, page));
    } else {
      dispatch(fetchMoviesByCategory(currentlySelected, page));
    }
  }, [page, currentlySelected, dispatch]);

  const handleOpen = (movie) => {
    setClickedMovie(movie);
    setOpen(true);
  };

  const handleClose = () => {
    setClickedMovie({});
    setOpen(false);
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
        <Modal open={open} onClose={handleClose} className={styles.modal}>
          <Paper className={styles.paper} elevation={24}>
            <img alt={clickedMovie.title} src={`https://image.tmdb.org/t/p/w500/${clickedMovie.poster_path}`} />
            <div className={styles.overview}>
              <h2>{clickedMovie.title}</h2>
              <h6>{clickedMovie.overview}</h6>
            </div>
          </Paper>
        </Modal>

        {data.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} handleOpen={handleOpen} />
        ))}
      </Grid>
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </>
  );
};

export default Movies;
