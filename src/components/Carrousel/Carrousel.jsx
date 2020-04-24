import React from 'react';
import { PhotoPlaceholder } from 'react-placeholder-image';
import styles from './Carrousel.module.scss';

const Carrousel = ({ movies }) => {
  const categories = ['Top Rated', 'Upcoming', 'Series'];

  return (
    <div className={styles.container}>
      {movies.filter((movie) => movie.backdrop_path).slice(2, 5).map((movie, i) => (
        <div className={styles.imageContainer}>
          <h1 className={styles.text}>{categories[i]}</h1>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
