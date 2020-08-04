import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';
import { Modal, Typography } from '@material-ui/core';

import StarRatings from 'react-star-ratings';
import { FaImdb } from 'react-icons/fa';
import { BsPlay } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
import { RiSendPlaneLine } from 'react-icons/ri';
import Backdrop from '@material-ui/core/Backdrop';
import { useTheme } from '@material-ui/core/styles';
import { selectGenre } from '../../../actions';
import styles from './MovieInformation.module.scss';

function MovieInformation() {
  const theme = useTheme();
  const { movie } = useSelector((state) => state.movie);
  const isDarkMode = theme.palette.type === 'dark';
  const loading = useSelector((state) => state.loading);

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
        <RingLoader size={150} color={!isDarkMode ? '#123abc' : '#FFF'} loading />
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
              <div className={styles.ratingSection}>
                <StarRatings rating={movie.vote_average / 2} numberOfStars={5} starDimension="22px" starSpacing="2px" />
                <span className={styles.votes}>{movie.vote_average}</span>
              </div>
              <p className={styles.runtime}>{movie.runtime}mins / <span>{movie.release_date}</span> <span>{movie.spoken_languages.length > 0 ? `/ ${movie.spoken_languages[0].name}` : null}</span></p>
            </div>
            <div className={styles.movieMiddle}>
              <div className={styles.genres}>
                <h5 className={styles.genreTitle}>Genres:</h5>
                <ul className={styles.genreList}>
                  {movie.genres.map((genre, i) => (
                    <Link className={styles.links} to="/" onClick={() => dispatch(selectGenre(genre.id, 1))} key={i}><Typography color="textPrimary" variant="caption">{genre.name} <RiSendPlaneLine /></Typography></Link>
                  ))}
                </ul>
              </div>
              <div className={styles.synopsisContainer}>
                <h5 className={styles.synopsis}>Information:</h5>
                <p className={styles.textSummary}>{movie.overview}</p>
              </div>

              <div className={styles.cast}>
                <h5 className={styles.castTitle}>Cast:</h5>
                <ul className={styles.castList}>
                  {movie.cast.map((character, i) => (
                    character.profile_path ? <img key={i} className={styles.castImage} src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.name} /> : <img alt={movie.title} className={styles.castImage} src="https://www.fillmurray.com/200/300" />

                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.left}>
                <a className={styles.button} target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${movie.imdb_id}`}> IMDB  <FaImdb className={styles.icon} /></a>
                {movie.videos.results.length > 0
                  ? (
                    <button type="button" className={styles.button} onClick={handleOpen}>
                      Trailer
                      <BsPlay className={styles.icon} />
                    </button>
                  )
                  : null}
                <a className={styles.button} target="_blank" rel="noopener noreferrer" href={`${movie.homepage}`}>Website <FiLink className={styles.icon} /> </a>
              </div>
              <Link style={{ textDecoration: 'none' }} to="/">
                <button type="button" className={styles.right}>Back</button>
              </Link>
            </div>
          </div>
        </div>
        <Modal
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 900,
          }}
          className={styles.modalVideo}
          open={open}
          onClose={handleClose}
        >
          {
            movie.videos.results.length > 0
              ? <iframe autoPlay className={styles.video} frameBorder="0" title="Video Player" src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`} allow="autoplay" />
              : null
          }

        </Modal>

      </div>
    ) : <Redirect to="/" />
  );
}

export default MovieInformation;
