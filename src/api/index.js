import axios from 'axios';

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=4e0d07555e20e0345f6bd12869b2604e&language=en-US&page=1';

export const fetchMovies = async () => {
  try {
    const { data: { results } } = await axios.get(url);

    return results;
  } catch (error) {
    console.log(error);
  }
};

