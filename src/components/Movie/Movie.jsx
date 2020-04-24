import React from 'react';

import { PhotoPlaceholder } from 'react-placeholder-image';

import styles from './Movie.module.scss';

const Movie = () => (
  <div className={styles.container}>
    <div className={styles.movie}>
      <PhotoPlaceholder className={styles.images} width={300} height={300} />
    </div>

    <div className={styles.infoContainer}>
      <h2> Movie Name </h2>
      <h2> Rating </h2>
      <h5>Information</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti aliquam veritatis. Dolores molestiae est commodi? Laboriosam, accusamus saepe! Assumenda doloribus non laboriosam nostrum aliquid dolores tenetur possimus ut iure!</p>

    </div>
  </div>
);
export default Movie;
