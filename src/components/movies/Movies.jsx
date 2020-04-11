import React from 'react';
import { Grid } from '@material-ui/core';

import Movie from '../Movie/Movie';
import styles from './Movies.module.scss';

const Movies = ({ movies }) => (
  <Grid container spacing={10} className={styles.container}>
    {movies.map((movie) => (
      <Grid item xs={12} md={3}>
        <Movie movie={movie} />
      </Grid>
    ))}
  </Grid>
);

export default Movies;

