import React from 'react';

import { Grid } from '@material-ui/core';
import StarRatings from 'react-star-ratings';

import styles from './Movie.module.scss';

const Movie = ({ movie, i, handleOpen }) => (
  <Grid item xs={12} md={2} onClick={() => handleOpen(movie)} className={styles.movie} key={i}>
    <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
    <h4>{movie.title}</h4>
    <StarRatings rating={movie.vote_average / 2} numberOfStars={5} starDimension="20px" starSpacing="4px" />
  </Grid>
);

export default Movie;
