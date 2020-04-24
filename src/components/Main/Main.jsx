import React from 'react';
import { Grid } from '@material-ui/core';
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
        <Grid container style={{ height: '100%' }}>
          <Grid item xs={2} style={{ height: '100%' }}>
            <Info />
          </Grid>
          <Grid item xs={10} style={{ padding: '0 3%' }}>
            <Search />
            <Carrousel movies={movies} />
            <Movies movies={movies} />
          </Grid>
        </Grid>
      );
    }
}
export default App;
