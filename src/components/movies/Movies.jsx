import React, { useState } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import { Modal, Paper, Grid } from '@material-ui/core';
import StarRatings from 'react-star-ratings';

import styles from './Movies.module.scss';

const Movies = ({ movies }) => {
  const [open, setOpen] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});

  const handleOpen = (movie) => {
    setClickedMovie(movie);
    setOpen(true);
  };

  const handleClose = () => {
    setClickedMovie({});
    setOpen(false);
  };

  return (
    <>
      <Grid container className={styles.container}>
        {movies.map((movie, i) => (
          <Grid item xs={12} md={2} onClick={() => handleOpen(movie)} className={styles.movie} key={i}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.title}</h4>
            <StarRatings rating={movie.vote_average / 2} numberOfStars={5} starDimension="20px" starSpacing="4px" />
          </Grid>
        ))}

        <Modal open={open} onClose={handleClose} className={styles.modal}>
          <Paper className={styles.paper} elevation={24}>
            <img src={`https://image.tmdb.org/t/p/w500/${clickedMovie.poster_path}`} />
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

// <div className={styles.container}>
//   {movies.map((movie, i) => (
//     <div className={styles.movie} key={i}>
//       <img onClick={handleOpen} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
//     </div>
//   ))}
// </div>

export default Movies;
