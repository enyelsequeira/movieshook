import React from 'react';
import { Card, CardContent, CardActionArea, CardActions, Button, Typography } from '@material-ui/core';
import StarRatings from 'react-star-ratings';

import styles from './Movie.module.scss';

const Movie = ({ movie }) => (
  <Card className={styles.paper}>
    <CardActionArea>
      <img width="100%" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    </CardActionArea>
    <div className={styles.cardDetails}>
      <CardContent className={styles.info}>
        <Typography gutterBottom variant="h5">{movie.title}</Typography>
        <Typography variant="body2" color="textSecondary">{movie.overview}</Typography>
        <Typography gutterBottom variant="subtitle1" color="textSecondary">{movie.release_date.split('-')[0]}</Typography>
        <StarRatings rating={movie.vote_average / 2} numberOfStars={5} starDimension="25px" starSpacing="10px" />
      </CardContent>
      <CardActions className={styles.buttons}>
        <Button href={`https://www.themoviedb.org/movie/${movie.id}`} size="small" color="primary">More Information</Button>
        <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </div>
  </Card>
);

export default Movie;
