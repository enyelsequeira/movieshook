import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper } from '@material-ui/core';
import { Redirect, Link } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';
import Modal from '@material-ui/core/Modal';

import StarRatings from 'react-star-ratings';
import { FaImdb } from 'react-icons/fa';
import { BsPlay } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
import { RiSendPlaneLine } from 'react-icons/ri';
import { selectGenre, selectCategory, getGenres } from '../../../actions';
import styles from './MovieInformation.module.scss';

function MovieInformation() {
  const { movie, isLoading, error } = useSelector((state) => state.movie);
  const { data } = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.loading);
  const genres = useSelector((state) => state.config.genres);

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <RingLoader size={150} color="#123abc" loading />
      </div>
    );
  }

  return (
    movie ? (
      <div className={styles.container}>
        <div className={styles.movieContainer}>
          <img className={styles.posterPath} alt={movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <div className={styles.movieInformation}>
            <div className={styles.movieTop}>
              <h2 className={styles.title}>{movie.title}</h2>
              <p className={styles.subtitle}>{movie.tagline}</p>
              <StarRatings rating={movie.vote_average / 2} numberOfStars={5} starDimension="20px" starSpacing="4px" />
              <p><span className={styles.titles}>Number of Votes:</span> {movie.vote_count}</p>
              <p className={styles.information}> <span className={styles.titles}>Release Date: </span> {movie.release_date}</p>
              <p className={styles.information}>  <span className={styles.titles}>Runtime: </span>{movie.runtime} Mins</p>
              <p className={styles.synopsis}><span className={styles.titles}>Information:</span> <h6 className={styles.textSummary}>{movie.overview}</h6></p>
            </div>
            <div className={styles.movieMiddle}>
              <div className={styles.genres}>
                <h5 className={styles.genreTitle}>Genres</h5>
                <ul className={styles.genreList}>
                  {movie.genres.map((genre, i) => (
                    <Link className={styles.links} to="/" onClick={() => dispatch(selectGenre(genre.id, 1))} key={i}> {genre.name} <RiSendPlaneLine />  </Link>
                  ))}
                </ul>
              </div>
              <div className={styles.languages}>
                <h5 className={styles.langTitle}>Languages</h5>
                <ul className={styles.genreList}>
                  {movie.spoken_languages.map((lan, i) => (
                    <p className={styles.lang} key={i}>{lan.name}</p>
                  ))}
                </ul>
              </div>
              <div className={styles.cast}>
                <h5 className={styles.castTitle}>Cast</h5>
                <ul className={styles.castList}>
                  {movie.cast.map((character, i) => (
                    <img key={i} className={styles.castImage} src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.name} />
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.left}>
                <a className={styles.button} href={`https://www.imdb.com/title/${movie.imdb_id}`}> IMDB  <FaImdb className={styles.icon} /></a>
                <button type="button" className={styles.button} onClick={handleOpen}>
                  Trailer
                  <BsPlay className={styles.icon} />
                </button>
                <a className={styles.button} href={`${movie.homepage}`}>Website <FiLink className={styles.icon} /> </a>
              </div>
              <button type="button" className={styles.right}>Back</button>
            </div>
          </div>
        </div>
        <Modal open={open} onClose={handleClose}>
          {
            movie.videos.results
              ? <iframe frameBorder="0" height="50%" width="70%" title="Video Player" src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`} />
              : null
          }
        </Modal>
      </div>
    ) : <Redirect to="/" />
  );
}

export default MovieInformation;
