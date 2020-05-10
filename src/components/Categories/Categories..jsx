import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Categories.module.scss';

const Categories = ({ movies }) => {
  const categories = ['Top Rated', 'Upcoming', 'Series'];

  return (
    <Grid container className={styles.container}>
      {movies.filter((movie) => movie.backdrop_path).slice(2, 5).map((movie, i) => (
        <Grid key={i} item xs={12} md={4} className={styles.imageContainer}>
          <h1 className={styles.text}>{categories[i]}</h1>
          <img alt={categories[i]} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
