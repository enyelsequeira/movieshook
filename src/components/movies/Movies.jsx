import React, { useState, useEffect } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import { Modal, Paper, Grid } from '@material-ui/core';
import RingLoader from 'react-spinners/RingLoader';
import { useSelector, useDispatch } from 'react-redux';
import StarRatings from 'react-star-ratings';
import Pagination from './Pagination/Pagination';
import Movie from './Movie/Movie';
import { fetchMoviesByGenre, fetchMoviesByCategory, getCredits } from '../../actions';

import styles from './Movies.module.scss';

const Movies = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [clickedMovie, setClickedMovie] = useState({});
  const { data } = useSelector((state) => state.movies);
  const isLoading = useSelector((state) => state.config.isLoading);
  const currentlySelected = useSelector((state) => state.currentlySelected);
  const cast = useSelector((state) => state.movie);
  console.log(1, currentlySelected);

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
    dispatch(getCredits(movie));
    // add the movie to the state
    console.log(2, movie);
  };

  // subtitle beneath the title
  // todo rating / number of rates //done
  // language, length, year
  // the genres (clickable)
  // the cast
  // optional:
  // buttons (imdb, trailer)

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
            <img className={styles.posterPath} alt={clickedMovie.title} src={`https://image.tmdb.org/t/p/w500/${clickedMovie.poster_path}`} />
            <div className={styles.overview}>
              <h2>{clickedMovie.title}</h2>
              <StarRatings rating={clickedMovie.vote_average / 2} numberOfStars={5} starDimension="20px" starSpacing="4px" /> <span>Number of Votes</span> <span>{clickedMovie.vote_count}</span>
              <div>
                <p>Release Date: {clickedMovie.release_date}</p>
                <p className={styles.language}>Lang: {clickedMovie.original_language}</p>
              </div>
              <p>Information</p>
              <h6>{clickedMovie.overview}</h6>
              <div className={styles.castContainer}>
                <p className={styles.castName}>Cast</p>
                <ul className={styles.cast}>
                  {cast.map((character, i) => (
                    <li className={styles.castImages} key={i}>
                      <img className={styles.castImage} src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} />
                    </li>
                  ))}
                </ul>
              </div>

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
