import React from 'react';
import { useSelector } from 'react-redux';
import { Paper } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';

import StarRatings from 'react-star-ratings';
import { FaImdb } from 'react-icons/fa';
import { BsPlay } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
import styles from './MovieInformation.module.scss';

function MovieInformation() {
  const { movie, isLoading, error } = useSelector((state) => state.movie);
  const { data } = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.loading);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <RingLoader size={150} color="#123abc" loading />
      </div>
    );
  }

  return (
    movie ? (
      <div>
        <img className={styles.posterPath} alt={movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <div className={styles.overview}>
          <h2>{movie.title}</h2>
          <p className={styles.subtitle}>{movie.tagline}</p>
          <StarRatings rating={movie.vote_average / 2} numberOfStars={5} starDimension="20px" starSpacing="4px" />
          <p>Number of Votes: {movie.vote_count}</p>
          <div>
            <p>Release Date: {movie.release_date}</p>
            <p>Runtime: {movie.runtime} Mins</p>
            <ul>
              {movie.spoken_languages.map((lan, i) => (
                <li key={i}>Language: {lan.name}</li>
              ))}
            </ul>
          </div>
          <p>Information</p>
          <h6>{movie.overview}</h6>
          <div>
            <ul>
              {movie.genres.map((genre, i) => (
                <li key={i}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.castContainer}>
            <p className={styles.castName}>Cast</p>
            <ul className={styles.cast}>
              {movie.cast.map((character, i) => (
                <li className={styles.castImages} key={i}>
                  <img className={styles.castImage} src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.name} />
                </li>
              ))}
            </ul>
          </div>
          {console.log(movie.videos)}
          {/* const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`; */}

          <div className={styles.buttons}>
            <a className={styles.button} href={`https://www.imdb.com/title/${movie.imdb_id}`}> IMDB  <FaImdb className={styles.icon} /></a>
            {/* <a className={styles.button} href={`https://www.youtube.com/embed/${movie.videos.results[0].id}`}> Trailer <BsPlay className={styles.icon} /> </a> */}
            <a className={styles.button} href={`${movie.homepage}`}>Website <FiLink className={styles.icon} /> </a>
            { movie.videos.results ? (
              <iframe
                frameBorder="0"
                height="100%"
                width="100%"
                title="Video Player"
                src={`https://www.youtube.com/embed/${movie.videos.results[0].id}`}
              />
            ) : null }
            {/* {movie.homepage === '' ? alert('No Website Found') : <a className={styles.button} href={`${movie.homepage}`}>Website <FiLink className={styles.icon} /> </a> } */}
          </div>
        </div>
      </div>
    ) : <Redirect to="/" />
  );
}

export default MovieInformation;

