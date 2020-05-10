import React from 'react';
import { PhotoPlaceholder } from 'react-placeholder-image';
import styles from './Shows.module.scss';

const nums = [1, 2, 3, 4, 5];
const Shows = () => (
  <div className={styles.container}>
    <PhotoPlaceholder width={200} height={200} />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facere sed ad dolores ducimus dolore cupiditate! Voluptas quo facere enim deserunt reiciendis praesentium, modi atque similique expedita repellat ratione illo accusamus? Qui magnam perspiciatis autem similique temporibus quibusdam nam nisi.</p>

    <div className={styles.topShows}>
      <h2>Top Rated Shows</h2>
      {nums.map((n) => <a href="#lorem">{n}</a>)}
    </div>
  </div>

);

export default Shows;
