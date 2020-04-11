import React from 'react';
import Movies from './components/Movies/Movies';
import { fetchMovies } from './api/index';

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
        <div>
          <Movies movies={movies} />
        </div>
      );
    }
}
export default App;
