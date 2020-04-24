import React from 'react';
import { PhotoPlaceholder } from 'react-placeholder-image';
import styles from './Info.module.scss';

const genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Family', 'Fantasy', 'History', 'Horror', 'Musical', 'Mystery', 'Romance', 'Sic-fi', 'TV movie', 'Thriller', 'War', 'Western'];

const Info = () => (
  <div className={styles.container}>
    <div className={styles.userContainer}>
      <PhotoPlaceholder className={styles.image} width={50} height={50} />
      <div>
        <h4>Estelle Collins</h4>
        <h5>Montreal, QC</h5>
      </div>
    </div>
    <div className={styles.genreContainer}>
      <h5 className={styles.genreHeading}>Genres</h5>
      {genres.map((genre) => <a className={styles.genre} href="#">{genre}</a>)}
    </div>
    <button>Sign out</button>
  </div>
);

export default Info;
