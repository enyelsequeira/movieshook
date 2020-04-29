import React, { useState, useEffect } from 'react';

import { Movie } from './components';
import moviesAPI from './api/moviesAPI';

const useMovies = (type) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data: { results } } = await moviesAPI.get(`/movie/${type}`, {
        params: {
          api_key: 'a9795214b6d82f2187e0255125436e9c',
          language: 'en-US',
          sort_by: 'popularity.desc',
          include_adult: false,
          include_video: false,
          page: 1,
        },
      });

      const movieComponents = [];

      results.forEach((movie) => {
        movieComponents.push(<Movie key={movie.id} movie={movie} image={movie.poster_path} />);
      });

      setMovies(movieComponents);
    };

    fetchMovies();
  }, [type]);

  return movies;
};

export default useMovies;
