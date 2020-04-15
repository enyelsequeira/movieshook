import React from 'react';
import { PhotoPlaceholder } from 'react-placeholder-image';

import styles from './Movies.module.scss';

const Movies = () => (
  <div className={styles.container}>
    <button type="button">Left</button>
    <div className={styles.moviesContainer}>
      <PhotoPlaceholder className={styles.image} width={100} height={200} />
      <PhotoPlaceholder className={styles.image} width={100} height={200} />
      <PhotoPlaceholder className={styles.image} width={100} height={200} />
      <PhotoPlaceholder className={styles.image} width={100} height={200} />
      <PhotoPlaceholder className={styles.image} width={100} height={200} />
    </div>
    <button type="button">Right</button>
  </div>
);

export default Movies;

