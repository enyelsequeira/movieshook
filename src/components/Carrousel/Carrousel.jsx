import React from 'react';
import { PhotoPlaceholder } from 'react-placeholder-image';
import styles from './Carrousel.module.scss';

const Carrousel = () => (
  <div className={styles.container}>
    <PhotoPlaceholder className={styles.images} width={200} height={200} />
    <PhotoPlaceholder className={styles.images} width={200} height={200} />
    <PhotoPlaceholder className={styles.images} width={200} height={200} />
  </div>
);

export default Carrousel;
