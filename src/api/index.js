import moviesAPI from './moviesAPI';

export const fetchMovies = async () => {
  try {
    const { data: { results } } = await moviesAPI.get('/movie/top_rated', {
      params: {
        api_key: '4e0d07555e20e0345f6bd12869b2604e',
        language: 'en-US',
        sort_by: 'popularity.desc',
        page: 1,
      },
    });

    return results;
  } catch (error) {
    console.log(error);
  }
};

