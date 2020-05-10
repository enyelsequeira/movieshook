import React, { useState } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import { Modal, Paper, Grid } from '@material-ui/core';
import RingLoader from 'react-spinners/RingLoader';
import { useSelector } from 'react-redux';
import { Movie } from '..';

import styles from './Movies.module.scss';

const Movies = ({ movies }) => {
  const [open, setOpen] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const isLoading = useSelector((state) => state.config.isLoading);

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
        {movies.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} handleOpen={handleOpen} />
        ))}

        <Modal open={open} onClose={handleClose} className={styles.modal}>
          <Paper className={styles.paper} elevation={24}>
            <img alt={clickedMovie.title} src={`https://image.tmdb.org/t/p/w500/${clickedMovie.poster_path}`} />
            <div className={styles.overview}>
              <h2>{clickedMovie.title}</h2>
              <h6>{clickedMovie.overview}</h6>
            </div>
          </Paper>
        </Modal>
      </Grid>
    </>
  );
};

export default Movies;
