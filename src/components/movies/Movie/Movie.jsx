import React from 'react';

import { Grid } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import styles from './Movie.module.scss';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 1.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const Movie = ({ movie, i, handleOpen }) => (
  <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" item xs={12} sm={6} md={4} lg={4} spacing={4} onClick={() => handleOpen(movie)} className={styles.movie} key={i}>
    <Link className={styles.links} to="/movie">
      <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <h4>{movie.title}</h4>
      <StarRatings rating={movie.vote_average / 2} numberOfStars={5} starDimension="20px" starSpacing="2px" className={styles.ratings} />
    </Link>
  </motion.div>
);

export default Movie;
