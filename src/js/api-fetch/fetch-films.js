import axios from 'axios';
import { headerError } from '../utils/references';
import { API_KEY, BASE_URL, MEDIA_TYPE, TIME_WINDOW } from '../utils/constants';

export default class MoviesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchMovies() {
    headerError.textContent = '';

    try {
      const response = await axios.get(`${BASE_URL}${this.request}`, {
        params: {
          api_key: API_KEY,
          page: this.page,
          query: this.query,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  tranding() {
    this.request = `/trending/${MEDIA_TYPE}/${TIME_WINDOW}`;
  }

  search() {
    this.request = '/search/movie';
  }

  setPage(page) {
    this.page = page;
  }

  resetPage() {
    this.page = 1;
  }
}
