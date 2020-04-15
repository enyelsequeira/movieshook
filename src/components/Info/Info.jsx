import React from 'react';
import { PhotoPlaceholder } from 'react-placeholder-image';
import styles from './Info.module.scss';

const Info = () => (
  <div className={styles.container}>
    <div> <PhotoPlaceholder className={styles.image} width={100} height={100} /></div>
    <div className={styles.genre}>
      <a href="#"> Action</a>
      <a href="#"> Adventure</a>
      <a href="#"> Animation</a>
      <a href="#"> Comedy</a>
      <a href="#"> Crime</a>
      <a href="#"> Documentary</a>
      <a href="#"> Family</a>
      <a href="#"> Fantasy</a>
      <a href="#"> History</a>
      <a href="#"> horror</a>
      <a href="#"> Musical</a>
      <a href="#"> Mistery</a>
      <a href="#"> Romance</a>
      <a href="#"> Sci-fi</a>
      <a href="#"> Tv movie</a>
      <a href="#"> Thriller</a>
      <a href="#"> War</a>
      <a href="#"> Western</a>
    </div>
  </div>
);

export default Info;
