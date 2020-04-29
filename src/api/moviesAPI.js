import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4e0d07555e20e0345f6bd12869b2604e',
  },
});

// PAGINATION
// &language=en-US&page=1
