import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';

import PageHeading from '../components/PageHeading/PageHeading';
import SearchBar from '../components/SearchBar/SearchBar';
import * as APIservice from '../components/services/APIservice';
import Preloader from '../components/Preloader/Preloader';
const MoviesList = lazy(() => import('../components/MoviesList/MoviesList'));

export default function MoviesPage() {
  const [movieSearch, setMovieSearch] = useState('');
  const history = useHistory();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    searchQuery &&
      APIservice.fetchOnSearch(searchQuery).then(res =>
        setMovieSearch(res.results),
      );
  }, [searchQuery, location, history]);

  return (
    <>
      <PageHeading text="Movies" />
      <SearchBar />
      <Suspense fallback={<Preloader />}>
        <MoviesList url={`movies`} movies={movieSearch} />
      </Suspense>
    </>
  );
}
