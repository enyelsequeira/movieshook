import React from 'react';

// import { Grid } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Typography, CssBaseline } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles';

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

const Movie = ({ movie, i, handleOpen }) => {
  const classes = useStyles();
  const theme = useTheme();

  const isDarkMode = theme.palette.type === 'dark';

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" item xs={12} sm={6} md={4} lg={4} spacing={4} onClick={() => handleOpen(movie)} className={classes.movie} key={i}>
      <CssBaseline />
      <Link className={classes.links} to="/movie">
        {movie.poster_path ? <img alt={movie.title} className={classes.image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /> : <img alt={movie.title} className={classes.image} src="https://www.fillmurray.com/200/300" />}
        <Typography className={classes.tittle} variant="h5">{movie.title}</Typography>
        <StarRatings starRatedColor={isDarkMode ? '#CBD3E3' : '#6D7A82'} starEmptyColor={!isDarkMode ? '#CBD3E3' : '#6D7A82'} rating={movie.vote_average / 2} numberOfStars={5} starDimension="20px" starSpacing="2px" />
      </Link>
    </motion.div>
  );
};

export default Movie;
