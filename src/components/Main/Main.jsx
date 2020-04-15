import React from 'react';
import { fetchMovies } from '../../api/index';
import { Info, Search, Carrousel, Movie, Movies, Shows } from '../index';

import styles from './Main.module.scss';

class App extends React.Component {
    state = {
      movies: [],
    }

    async componentDidMount() {
      const fetchedMovies = await fetchMovies();
      this.setState({ movies: fetchedMovies });
    }

    render() {
      const { movies } = this.state;

      return (
        <div className={styles.container}>
          <Info />
          <div className={styles.subContainer}>
            <Search />
            <Carrousel />
            <div className={styles.moviesContainer}>
              <div className={styles.moviesSubContainer}>
                <Movies />
                <Movie />
              </div>
              <div className={styles.showsContainer}>
                <Shows />
              </div>
            </div>
          </div>
        </div>
      );
    }
}
export default App;
