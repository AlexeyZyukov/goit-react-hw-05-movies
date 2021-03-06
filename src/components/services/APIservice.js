const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f18f6a819e9c6881cbb8a279cacace51';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  // console.log(response);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Sorry, nothing was found'));
}

export function fetchMoviesInTrend() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  );
}

export function fetchMovieFullInfo(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchReview(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchOnSearch(movieSearch) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieSearch}`,
  );
}
