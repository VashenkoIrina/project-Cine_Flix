import MoviesApiService from '../api-fetch/fetch-films.js';
import { changeMoviesArray } from '../markup/movies-array-change';
import { clearGalleryContainer } from '../utils/clear-gallery-container';
import { galleryContainer } from '../utils/references';

const moviesApiService = new MoviesApiService();

export async function loadTrandingPage() {
  await clearGalleryContainer();

  moviesApiService.tranding();

  moviesApiService.tranding();
  const response = await moviesApiService.fetchMovies();

  const movies = response.results;

  await changeMoviesArray(movies);

  galleryContainer.setAttribute('data-set', 'tranding');
}

export async function loadSelectedTrandingPage(page) {
  moviesApiService.setPage(page);
  await loadTrandingPage();
}

export async function onClickHomePage(e) {
  e.preventDefault();

  moviesApiService.resetPage();

}
