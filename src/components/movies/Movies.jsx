import React, { useState, useEffect } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import { Modal, Paper, Grid } from '@material-ui/core';
import RingLoader from 'react-spinners/RingLoader';
import { useSelector, useDispatch } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { FaImdb } from 'react-icons/fa';
import { BsPlay } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
import Pagination from './Pagination/Pagination';
import Movie from './Movie/Movie';
import { fetchMoviesByGenre, fetchMoviesByCategory, getMovieDetails } from '../../actions';

import styles from './Movies.module.scss';

const Movies = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [clickedMovie, setClickedMovie] = useState({});
  const { data } = useSelector((state) => state.movies);
  const isLoading = useSelector((state) => state.config.isLoading);
  const currentlySelected = useSelector((state) => state.currentlySelected);
  const movie = useSelector((state) => state.movie);

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
    dispatch(getMovieDetails(movie));
    // dispatch(externalBtn(movie));
    // add the movie to the state
    // console.log(movie);
  };

  // subtitle beneath the title
  // length ?
  // the genres (clickable)
  // optional:
  // buttons (imdb, trailer)

  const handleClose = () => {
    setClickedMovie({});
    // clear movie dispatch action
    setOpen(false);
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <RingLoader size={150} color="#123abc" loading={isLoading} />
      </div>
    );
  }

  console.log('MOVIE', movie);

  return (
    <>
      <Grid container className={styles.container}>
        { movie.title ? (
          <Modal open={open} onClose={handleClose} className={styles.modal}>
            <Paper className={styles.paper} elevation={24}>
              <img className={styles.posterPath} alt={clickedMovie.title} src={`https://image.tmdb.org/t/p/w500/${clickedMovie.poster_path}`} />
              <div className={styles.overview}>
                <h2>{clickedMovie.title}</h2>
                <p className={styles.subtitle}>{movie.tagline}</p>
                <StarRatings rating={clickedMovie.vote_average / 2} numberOfStars={5} starDimension="20px" starSpacing="4px" />
                <p>Number of Votes: {clickedMovie.vote_count}</p>
                <div>
                  <p>Release Date: {movie.release_date}</p>
                  {/* <p className={styles.language}>Lang:</p> */}
                  <p>Runtime: {movie.runtime} Mins</p>

                  <ul>
                    {movie.spoken_languages.map((lan, i) => (
                      <li key={i}>
                        Language: {lan.name}
                      </li>
                    ))}
                  </ul>

                  {/* <p>Lang: {movie.spoken_languages.map((language, i) => (
                    { language.name }
                  ))}
                  </p> */}
                </div>
                <p>Information</p>
                <h6>{clickedMovie.overview}</h6>
                <div>
                  <ul>
                    {movie.genres.map((genre, i) => (
                      <li key={i}>
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.castContainer}>
                  <p className={styles.castName}>Cast</p>
                  <ul className={styles.cast}>
                    {movie.cast.map((character, i) => (
                      <li className={styles.castImages} key={i}>
                        {/* todo maybe */}
                        {/* <p className={styles.characternames}>{character.name}</p> */}
                        <img className={styles.castImage} src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.name} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.buttons}>
                  <a className={styles.button} href={`https://www.imdb.com/title/${movie.imdb_id}`}> IMDB  <FaImdb className={styles.icon} /></a>
                  <a className={styles.button} href={`https://api.themoviedb.org/3/movie/${movie.videos}`}> Trailer <BsPlay className={styles.icon} /> </a>
                  <a className={styles.button} href={`${movie.homepage}`}>Website <FiLink className={styles.icon} /> </a>
                  {/* {movie.homepage === '' ? alert('No Website Found') : <a className={styles.button} href={`${movie.homepage}`}>Website <FiLink className={styles.icon} /> </a> } */}
                </div>
                <button className={styles.closeBtn} onClick={handleClose}>Close</button>
              </div>
            </Paper>
          </Modal>
        ) : null}

        {data.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} handleOpen={handleOpen} />
        ))}
      </Grid>
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </>
  );
};

export default Movies;
