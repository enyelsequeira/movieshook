import React from 'react';

import { Grid } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

import styles from './Movie.module.scss';

const Movie = ({ movie, i, handleOpen }) => (
  <Grid item xs={12} sm={4} md={2} lg={2} onClick={() => handleOpen(movie)} className={styles.movie} key={i}>
    <Link to="/movie">
      <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <h4>{movie.title}</h4>
      <StarRatings rating={movie.vote_average / 2} numberOfStars={5} starDimension="20px" starSpacing="2px" className={styles.ratings} />
    </Link>
  </Grid>
);

export default Movie;
