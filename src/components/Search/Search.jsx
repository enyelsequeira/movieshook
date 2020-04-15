import React from 'react';
import styles from './Search.module.scss';

const Search = () => (
  <div className={styles.searchContainer}>
    <input className={styles.input} type="text" placeholder="Search.." />
  </div>
);

export default Search;
